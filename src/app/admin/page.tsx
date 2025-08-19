'use client';

import { useState, useEffect } from 'react';
import { useRealTimeAnalytics } from '@/hooks/useRealTimeAnalytics';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  activeSessions: number;
  clicks: {
    whatsapp: number;
    phone: number;
    photos: number;
    contact: number;
    visit: number;
    admin: number;
  };
  locations: { [key: string]: number };
  devices: { [key: string]: number };
  referrers: { [key: string]: number };
  recentActivity: Array<{
  id: string;
    action: string;
  ip: string;
    location: string;
    device: string;
    timestamp: string;
  userAgent: string;
    element?: string;
    coordinates?: { x: number; y: number };
  }>;
  performance: {
    averageSessionDuration: number;
    bounceRate: number;
    conversionRate: number;
    pagesPerSession: number;
    newVsReturning: { new: number; returning: number };
  };
  timeStats: {
    hourlyStats: { [hour: string]: number };
    dailyStats: { [day: string]: number };
    pageviews24h: number[];
    conversions24h: number[];
  };
  userBehavior: {
    mostViewedPages: { [page: string]: number };
    averageTimeOnPage: { [page: string]: number };
    exitPages: { [page: string]: number };
    entryPages: { [page: string]: number };
  };
}




export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const { 
    data: realTimeData, 
    trackAdmin, 
    clearData 
  } = useRealTimeAnalytics();



  useEffect(() => {
    if (isAuthenticated) {
      trackAdmin();
    }
  }, [isAuthenticated, trackAdmin]);

  // Processar dados reais para o formato do dashboard completo
  const processedData: AnalyticsData | null = realTimeData ? {
    pageViews: realTimeData.stats.totalPageViews,
    uniqueVisitors: realTimeData.stats.uniqueVisitors,
    activeSessions: realTimeData.sessions.filter(s => 
      Date.now() - s.lastActivity < 30 * 60 * 1000
    ).length,
    clicks: (() => {
      const clickCounts = {
        whatsapp: 0,
        phone: 0,
        photos: 0,
        contact: 0,
        visit: 0,
        admin: 0
      };
      
      realTimeData.actions.forEach(action => {
        switch (action.type) {
          case 'whatsapp_click': clickCounts.whatsapp++; break;
          case 'phone_click': clickCounts.phone++; break;
          case 'photo_view': clickCounts.photos++; break;
          case 'contact_scroll': clickCounts.contact++; break;
          case 'visit_schedule': clickCounts.visit++; break;
          case 'admin_access': clickCounts.admin++; break;
        }
      });
      
      return clickCounts;
    })(),
    locations: realTimeData.stats.topLocations,
    devices: realTimeData.stats.topDevices,
    referrers: realTimeData.stats.topReferrers,
    recentActivity: realTimeData.actions
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, 15)
      .map(action => {
        const session = realTimeData.sessions.find(s => s.id === action.sessionId);
        return {
          id: action.id,
          action: getActionLabel(action.type),
          ip: session?.ip || 'Unknown',
          location: session?.location || 'Unknown',
          device: session?.device || 'Unknown',
          timestamp: new Date(action.timestamp).toLocaleString('pt-BR'),
          userAgent: session?.userAgent || 'Unknown',
          ...(action.element && { element: action.element }),
          ...(action.coordinates && { coordinates: action.coordinates })
        };
      }),
    performance: {
      averageSessionDuration: realTimeData.stats.averageSessionDuration,
      bounceRate: realTimeData.stats.bounceRate,
      conversionRate: realTimeData.stats.conversionRate,
      pagesPerSession: realTimeData.sessions.length > 0 ? 
        realTimeData.sessions.reduce((sum, s) => sum + s.pageViews, 0) / realTimeData.sessions.length : 0,
      newVsReturning: {
        new: realTimeData.sessions.filter(s => s.pageViews === 1).length,
        returning: realTimeData.sessions.filter(s => s.pageViews > 1).length
      }
    },
    timeStats: {
      hourlyStats: getHourlyStats(realTimeData.actions),
      dailyStats: getDailyStats(realTimeData.actions),
      pageviews24h: getPageviews24h(realTimeData.actions),
      conversions24h: getConversions24h(realTimeData.actions)
    },
    userBehavior: {
      mostViewedPages: getMostViewedPages(realTimeData.actions),
      averageTimeOnPage: getAverageTimeOnPage(realTimeData.sessions),
      exitPages: getExitPages(realTimeData.sessions),
      entryPages: getEntryPages(realTimeData.sessions)
    }
  } : null;

  // Funções auxiliares para análise de dados
  function getHourlyStats(actions: any[]): { [hour: string]: number } {
    const stats: { [hour: string]: number } = {};
    const now = new Date();
    
    for (let i = 0; i < 24; i++) {
      const hour = (now.getHours() - i + 24) % 24;
      const hourKey = hour.toString().padStart(2, '0') + ':00';
      const hourStart = new Date(now);
      hourStart.setHours(hour, 0, 0, 0);
      const hourEnd = new Date(hourStart);
      hourEnd.setHours(hour + 1);
      
      stats[hourKey] = actions.filter(a => 
        a.timestamp >= hourStart.getTime() && a.timestamp < hourEnd.getTime()
      ).length;
    }
    
    return stats;
  }

  function getDailyStats(actions: any[]): { [day: string]: number } {
    const stats: { [day: string]: number } = {};
    const now = new Date();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      const dayKey = date.toLocaleDateString('pt-BR');
      const dayStart = new Date(date);
      dayStart.setHours(0, 0, 0, 0);
      const dayEnd = new Date(date);
      dayEnd.setHours(23, 59, 59, 999);
      
      stats[dayKey] = actions.filter(a => 
        a.timestamp >= dayStart.getTime() && a.timestamp <= dayEnd.getTime()
      ).length;
    }
    
    return stats;
  }

  function getPageviews24h(actions: any[]): number[] {
    const hours = Array(24).fill(0);
    const now = new Date();
    
    actions.filter(a => a.type === 'page_view').forEach(action => {
      const actionTime = new Date(action.timestamp);
      const hoursDiff = Math.floor((now.getTime() - actionTime.getTime()) / (1000 * 60 * 60));
      if (hoursDiff < 24) {
        hours[23 - hoursDiff]++;
      }
    });
    
    return hours;
  }

  function getConversions24h(actions: any[]): number[] {
    const hours = Array(24).fill(0);
    const now = new Date();
    const conversionTypes = ['whatsapp_click', 'phone_click', 'visit_schedule'];
    
    actions.filter(a => conversionTypes.includes(a.type)).forEach(action => {
      const actionTime = new Date(action.timestamp);
      const hoursDiff = Math.floor((now.getTime() - actionTime.getTime()) / (1000 * 60 * 60));
      if (hoursDiff < 24) {
        hours[23 - hoursDiff]++;
      }
    });
    
    return hours;
  }

  function getMostViewedPages(actions: any[]): { [page: string]: number } {
    const pages: { [page: string]: number } = {};
    
    actions.filter(a => a.type === 'page_view').forEach(action => {
      const page = action.data?.page || '/';
      pages[page] = (pages[page] || 0) + 1;
    });
    
    return pages;
  }

  function getAverageTimeOnPage(sessions: any[]): { [page: string]: number } {
    const pageTimes: { [page: string]: number[] } = {};
    
    sessions.forEach(session => {
      const sessionDuration = session.lastActivity - session.startTime;
      const avgTimePerPage = sessionDuration / Math.max(session.pageViews, 1);
      pageTimes['/'] = pageTimes['/'] || [];
      pageTimes['/'].push(avgTimePerPage);
    });
    
    const avgTimes: { [page: string]: number } = {};
    Object.entries(pageTimes).forEach(([page, times]) => {
      avgTimes[page] = times.reduce((sum, time) => sum + time, 0) / times.length;
    });
    
    return avgTimes;
  }

  function getExitPages(sessions: any[]): { [page: string]: number } {
    const exitPages: { [page: string]: number } = {};
    
    sessions.forEach(() => {
      // Simplificado - considerar última página como página de saída
      exitPages['/'] = (exitPages['/'] || 0) + 1;
    });
    
    return exitPages;
  }

  function getEntryPages(sessions: any[]): { [page: string]: number } {
    const entryPages: { [page: string]: number } = {};
    
    sessions.forEach(() => {
      // Simplificado - considerar primeira página como página de entrada
      entryPages['/'] = (entryPages['/'] || 0) + 1;
    });
    
    return entryPages;
  }

  function getActionLabel(type: string): string {
    const labels: { [key: string]: string } = {
      'page_view': 'Visualização de Página',
      'whatsapp_click': 'Clique WhatsApp',
      'phone_click': 'Clique Telefone',
      'photo_view': 'Visualização de Fotos',
      'contact_scroll': 'Scroll Contato',
      'visit_schedule': 'Agendamento de Visita',
      'admin_access': 'Acesso Admin'
    };
    return labels[type] || type;
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'murilo@1987') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Credenciais inválidas!');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Panel</h1>
            <p className="text-gray-600">Portal de Analytics - Botanique</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Usuário
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                placeholder="Digite seu usuário"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Senha
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                placeholder="Digite sua senha"
                required
              />
            </div>
            
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}
            
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-gray-900">Portal de Analytics</h1>
                <div className="flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-700 font-medium">ATIVO</span>
              </div>
              </div>
              <p className="text-gray-600">Residencial Botanique - Dashboard em Tempo Real</p>
              <p className="text-xs text-gray-500 mt-1">Iniciado hoje • Dados atualizados em tempo real</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Sistema Novo</p>
                <p className="text-xs text-gray-500">Contando do zero</p>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border">
                <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                  </div>
                  <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Visualizações</p>
                <p className="text-2xl font-bold text-gray-900">{processedData?.pageViews.toLocaleString() || '0'}</p>
                  </div>
                </div>
              </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border">
                <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Visitantes Únicos</p>
                <p className="text-2xl font-bold text-gray-900">{processedData?.uniqueVisitors.toLocaleString() || '0'}</p>
                  </div>
                </div>
              </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border">
                <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                  </div>
                  <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Cliques WhatsApp</p>
                <p className="text-2xl font-bold text-gray-900">{processedData?.clicks.whatsapp || 0}</p>
                  </div>
                </div>
              </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border">
                <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                  </div>
                  <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Ligações</p>
                <p className="text-2xl font-bold text-gray-900">{processedData?.clicks.phone || 0}</p>
                  </div>
                </div>
              </div>
            </div>

                {/* Charts and Data */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Location Chart */}
          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Localização dos Visitantes</h3>
            {!processedData || Object.keys(processedData.locations).length === 0 ? (
              <div className="text-center py-8">
                <div className="text-gray-400 mb-2">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm">Nenhuma localização registrada ainda</p>
                <p className="text-gray-400 text-xs mt-1">Os dados aparecerão conforme as visitas chegarem</p>
              </div>
            ) : (
                <div className="space-y-3">
                {Object.entries(processedData.locations).map(([location, count]) => (
                  <div key={location} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{location}</span>
                      <div className="flex items-center">
                        <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                          <div
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(count / Math.max(...Object.values(processedData.locations))) * 100}%` }}
                          ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{count}</span>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>

          {/* Device Chart */}
          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Dispositivos Utilizados</h3>
            {!processedData || Object.keys(processedData.devices).length === 0 ? (
              <div className="text-center py-8">
                <div className="text-gray-400 mb-2">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm">Nenhum dispositivo registrado ainda</p>
                <p className="text-gray-400 text-xs mt-1">Os dados aparecerão conforme as visitas chegarem</p>
              </div>
            ) : (
              <div className="space-y-3">
                {Object.entries(processedData.devices).map(([device, count]) => (
                  <div key={device} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{device}</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                        <div 
                          className="bg-green-600 h-2 rounded-full" 
                          style={{ width: `${(count / Math.max(...Object.values(processedData.devices))) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{count}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
              </div>
            </div>

                {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border">
          <div className="px-6 py-4 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Atividade Recente</h3>
          </div>
          {!processedData || processedData.recentActivity.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">Nenhuma atividade ainda</h4>
              <p className="text-gray-500 text-sm mb-2">As ações dos visitantes aparecerão aqui em tempo real</p>
              <p className="text-gray-400 text-xs">Aguardando as primeiras interações...</p>
              
              {/* Live indicator */}
              <div className="flex items-center justify-center mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-500">Sistema ativo - monitorando visitas</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ação
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      IP
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Localização
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Dispositivo
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Data/Hora
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {processedData.recentActivity.map((activity) => (
                    <tr key={activity.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                          {activity.action}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {activity.ip}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {activity.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {activity.device}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {activity.timestamp}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Advanced Analytics */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Click Analytics */}
          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Análise de Cliques</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">WhatsApp</span>
                <span className="text-lg font-bold text-green-600">{processedData?.clicks.whatsapp || 0}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Visualizações de Fotos</span>
                <span className="text-lg font-bold text-blue-600">{processedData?.clicks.photos || 0}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Telefone</span>
                <span className="text-lg font-bold text-purple-600">{processedData?.clicks.phone || 0}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Scroll Contato</span>
                <span className="text-lg font-bold text-orange-600">{processedData?.clicks.contact || 0}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Agendamento Visita</span>
                <span className="text-lg font-bold text-red-600">{processedData?.clicks.visit || 0}</span>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Métricas de Performance</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Duração Média da Sessão</span>
                <span className="text-lg font-bold text-blue-600">
                  {processedData?.performance.averageSessionDuration ? 
                    `${Math.round(processedData.performance.averageSessionDuration / 1000 / 60)}min` : 
                    '0min'
                  }
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Taxa de Rejeição</span>
                <span className="text-lg font-bold text-yellow-600">
                  {processedData?.performance.bounceRate ? `${processedData.performance.bounceRate.toFixed(1)}%` : '0%'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Taxa de Conversão</span>
                <span className="text-lg font-bold text-green-600">
                  {processedData?.performance.conversionRate ? `${processedData.performance.conversionRate.toFixed(1)}%` : '0%'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Páginas por Sessão</span>
                <span className="text-lg font-bold text-orange-600">
                  {processedData?.performance.pagesPerSession ? `${processedData.performance.pagesPerSession.toFixed(1)}` : '0'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Sessões Ativas</span>
                <span className="text-lg font-bold text-purple-600">
                  {processedData?.activeSessions || 0}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Referrers */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6 border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Fontes de Tráfego</h3>
          {!processedData || Object.keys(processedData.referrers).length === 0 ? (
            <div className="text-center py-8">
              <div className="text-gray-400 mb-2">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <p className="text-gray-500 text-sm">Nenhuma fonte de tráfego registrada</p>
              <p className="text-gray-400 text-xs mt-1">Os dados aparecerão conforme as visitas chegarem</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(processedData.referrers).map(([referrer, count]) => (
                <div key={referrer} className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-lg font-bold text-gray-900">{count}</div>
                  <div className="text-sm text-gray-600">{referrer}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* User Behavior Analysis */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* New vs Returning Users */}
          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Usuários Novos vs Retornando</h3>
            {processedData ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Novos Usuários</span>
                  <div className="flex items-center gap-3">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{ 
                          width: `${((processedData.performance.newVsReturning.new) / 
                            Math.max(processedData.performance.newVsReturning.new + processedData.performance.newVsReturning.returning, 1)) * 100}%` 
                        }}
                      ></div>
                    </div>
                    <span className="text-lg font-bold text-green-600">{processedData.performance.newVsReturning.new}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Usuários Retornando</span>
                  <div className="flex items-center gap-3">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ 
                          width: `${((processedData.performance.newVsReturning.returning) / 
                            Math.max(processedData.performance.newVsReturning.new + processedData.performance.newVsReturning.returning, 1)) * 100}%` 
                        }}
                      ></div>
                    </div>
                    <span className="text-lg font-bold text-blue-600">{processedData.performance.newVsReturning.returning}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 text-sm">Dados serão exibidos quando houver visitantes</p>
              </div>
            )}
          </div>

          {/* Most Viewed Pages */}
          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Páginas Mais Visitadas</h3>
            {processedData && Object.keys(processedData.userBehavior.mostViewedPages).length > 0 ? (
              <div className="space-y-3">
                {Object.entries(processedData.userBehavior.mostViewedPages)
                  .sort(([,a], [,b]) => b - a)
                  .slice(0, 5)
                  .map(([page, views]) => (
                    <div key={page} className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 truncate">{page === '/' ? 'Página Inicial' : page}</span>
                      <span className="text-lg font-bold text-indigo-600">{views}</span>
                    </div>
                  ))
                }
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 text-sm">Nenhuma página visitada ainda</p>
              </div>
            )}
          </div>
        </div>

        {/* Time-based Analytics */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6 border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Analytics por Tempo</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Hourly Stats */}
            <div>
              <h4 className="font-medium text-gray-700 mb-3">Atividade por Hora (Últimas 24h)</h4>
              {processedData && Object.keys(processedData.timeStats.hourlyStats).length > 0 ? (
                <div className="space-y-2">
                  {Object.entries(processedData.timeStats.hourlyStats)
                    .sort(([a], [b]) => a.localeCompare(b))
                    .map(([hour, count]) => (
                      <div key={hour} className="flex justify-between items-center">
                        <span className="text-xs text-gray-600">{hour}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-gray-200 rounded-full h-1">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-purple-500 h-1 rounded-full" 
                              style={{ width: `${(count / Math.max(...Object.values(processedData.timeStats.hourlyStats))) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-xs font-medium text-gray-900 w-6">{count}</span>
                        </div>
                      </div>
                    ))
                  }
                </div>
              ) : (
                <p className="text-gray-500 text-sm">Nenhuma atividade registrada ainda</p>
              )}
            </div>

            {/* Daily Stats */}
            <div>
              <h4 className="font-medium text-gray-700 mb-3">Atividade Diária (Última Semana)</h4>
              {processedData && Object.keys(processedData.timeStats.dailyStats).length > 0 ? (
                <div className="space-y-2">
                  {Object.entries(processedData.timeStats.dailyStats)
                    .sort(([a], [b]) => new Date(a).getTime() - new Date(b).getTime())
                    .map(([day, count]) => (
                      <div key={day} className="flex justify-between items-center">
                        <span className="text-xs text-gray-600">{day}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full" 
                              style={{ width: `${(count / Math.max(...Object.values(processedData.timeStats.dailyStats))) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-900 w-8">{count}</span>
                        </div>
                      </div>
                    ))
                  }
                </div>
              ) : (
                <p className="text-gray-500 text-sm">Nenhuma atividade registrada ainda</p>
                  )}
            </div>
          </div>
        </div>

        {/* Conversion Funnel */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6 border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Funil de Conversão</h3>
          {processedData ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-blue-50 p-4 rounded-lg">
                <div>
                  <div className="text-lg font-bold text-blue-700">{processedData.pageViews}</div>
                  <div className="text-sm text-blue-600">Visualizações de Página</div>
                </div>
                <div className="text-blue-500">100%</div>
              </div>

              <div className="flex items-center justify-between bg-purple-50 p-4 rounded-lg">
                <div>
                  <div className="text-lg font-bold text-purple-700">{processedData.clicks.photos}</div>
                  <div className="text-sm text-purple-600">Visualizaram Fotos</div>
                </div>
                <div className="text-purple-500">
                  {processedData.pageViews > 0 ? `${((processedData.clicks.photos / processedData.pageViews) * 100).toFixed(1)}%` : '0%'}
              </div>
            </div>

              <div className="flex items-center justify-between bg-green-50 p-4 rounded-lg">
                <div>
                  <div className="text-lg font-bold text-green-700">
                    {processedData.clicks.whatsapp + processedData.clicks.phone + processedData.clicks.visit}
                </div>
                  <div className="text-sm text-green-600">Ações de Conversão</div>
                </div>
                <div className="text-green-500">
                  {processedData.pageViews > 0 ? 
                    `${(((processedData.clicks.whatsapp + processedData.clicks.phone + processedData.clicks.visit) / processedData.pageViews) * 100).toFixed(1)}%` 
                    : '0%'}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 text-sm">Funil será exibido quando houver dados</p>
          </div>
        )}
      </div>

        {/* Clear Data Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => {
              if (confirm('Tem certeza que deseja limpar todos os dados de analytics? Esta ação não pode ser desfeita.')) {
                clearData();
              }
            }}
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            Limpar Todos os Dados
          </button>
        </div>
      </main>
    </div>
  );
}
