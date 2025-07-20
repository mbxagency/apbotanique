'use client';

import { useState, useEffect } from 'react';
import { 
  Eye, 
  Users, 
  MessageCircle, 
  TrendingUp,
  BarChart3,
  Settings,
  LogOut,
  Plus,
  Edit,
  Trash2,
  Search,
  Filter,
  Download
} from 'lucide-react';
import { useAnalytics } from '@/hooks/useAnalytics';

interface VisitData {
  id: string;
  date: string;
  time: string;
  ip: string;
  userAgent: string;
  page: string;
  duration: number;
  source: string;
}

interface ContactData {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  source: string;
  status: 'new' | 'contacted' | 'interested' | 'not_interested';
  createdAt: string;
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [visitData, setVisitData] = useState<VisitData[]>([]);
  const [contactData, setContactData] = useState<ContactData[]>([]);
  const [stats, setStats] = useState({
    totalVisits: 0,
    uniqueVisitors: 0,
    totalContacts: 0,
    conversionRate: 0,
    avgDuration: 0,
    topPages: [] as string[]
  });

  const { getAnalyticsData, clearAnalyticsData } = useAnalytics();

  // Load real analytics data
  useEffect(() => {
    const loadAnalyticsData = () => {
      const data = getAnalyticsData();
      
      // Convert analytics data to the format expected by the admin interface
      const visits: VisitData[] = data.visits.map(visit => ({
        id: visit.id,
        date: visit.date,
        time: visit.time,
        ip: visit.ip,
        userAgent: visit.userAgent,
        page: visit.page,
        duration: visit.duration,
        source: visit.source
      }));

      const contacts: ContactData[] = data.contacts.map(contact => ({
        id: contact.id,
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        message: contact.message,
        source: contact.source,
        status: contact.status,
        createdAt: new Date(contact.timestamp).toISOString()
      }));

      setVisitData(visits);
      setContactData(contacts);
      setStats(data.stats);
    };

    loadAnalyticsData();

    // Refresh data every 30 seconds
    const interval = setInterval(loadAnalyticsData, 30000);
    return () => clearInterval(interval);
  }, [getAnalyticsData]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'interested': return 'bg-green-100 text-green-800';
      case 'not_interested': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'new': return 'Novo';
      case 'contacted': return 'Contactado';
      case 'interested': return 'Interessado';
      case 'not_interested': return 'Não Interessado';
      default: return 'Desconhecido';
    }
  };

  const handleClearData = () => {
    if (confirm('Tem certeza que deseja limpar todos os dados de analytics? Esta ação não pode ser desfeita.')) {
      clearAnalyticsData();
      setVisitData([]);
      setContactData([]);
      setStats({
        totalVisits: 0,
        uniqueVisitors: 0,
        totalContacts: 0,
        conversionRate: 0,
        avgDuration: 0,
        topPages: []
      });
    }
  };

  const handleExportData = () => {
    const data = {
      visits: visitData,
      contacts: contactData,
      stats: stats,
      exportDate: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `botanique-analytics-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-800 to-green-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="bg-green-400 p-2 rounded-lg">
                <BarChart3 className="w-6 h-6 text-green-800" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Botanique Admin</h1>
                <p className="text-green-200 text-sm">Painel de Administração</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleClearData}
                className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Limpar Dados
              </button>
              <button className="bg-green-700 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors">
                <Settings className="w-4 h-4 mr-2" />
                Configurações
              </button>
              <button className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg transition-colors">
                <LogOut className="w-4 h-4 mr-2" />
                Sair
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
                { id: 'visits', label: 'Visitas', icon: Eye },
                { id: 'contacts', label: 'Contatos', icon: Users },
                { id: 'analytics', label: 'Analytics', icon: TrendingUp }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Eye className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total de Visitas</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalVisits}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Visitantes Únicos</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.uniqueVisitors}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
                <div className="flex items-center">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total de Contatos</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalContacts}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Taxa de Conversão</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.conversionRate.toFixed(1)}%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Charts and Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Visitas por Dia</h3>
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Gráfico de Visitas</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Páginas Mais Visitadas</h3>
                <div className="space-y-3">
                  {stats.topPages.map((page, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-600">{page}</span>
                      <div className="flex items-center">
                        <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                          <div 
                            className="bg-green-500 h-2 rounded-full" 
                            style={{ width: `${80 - index * 20}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-500">{80 - index * 20}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Visits Tab */}
        {activeTab === 'visits' && (
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Histórico de Visitas</h3>
                <div className="flex space-x-2">
                  <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-colors">
                    <Search className="w-4 h-4" />
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-colors">
                    <Filter className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={handleExportData}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Exportar
                  </button>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data/Hora</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IP</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Página</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duração</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Origem</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {visitData.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                        Nenhuma visita registrada ainda
                      </td>
                    </tr>
                  ) : (
                    visitData.map((visit) => (
                      <tr key={visit.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {formatDate(visit.date)} {visit.time}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{visit.ip}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{visit.page}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{visit.duration}s</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{visit.source}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Contacts Tab */}
        {activeTab === 'contacts' && (
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Contatos Recebidos</h3>
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                  <Plus className="w-4 h-4 mr-2" />
                  Novo Contato
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Origem</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {contactData.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-6 py-4 text-center text-gray-500">
                        Nenhum contato recebido ainda
                      </td>
                    </tr>
                  ) : (
                    contactData.map((contact) => (
                      <tr key={contact.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{contact.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contact.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contact.phone}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contact.source}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(contact.status)}`}>
                            {getStatusText(contact.status)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(contact.createdAt)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tempo Médio de Sessão</h3>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">{Math.round(stats.avgDuration)}s</p>
                  <p className="text-sm text-gray-500 mt-2">Tempo médio por visita</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Taxa de Rejeição</h3>
                <div className="text-center">
                  <p className="text-3xl font-bold text-red-600">23%</p>
                  <p className="text-sm text-gray-500 mt-2">Visitas com uma página</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Páginas por Sessão</h3>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">3.2</p>
                  <p className="text-sm text-gray-500 mt-2">Média de páginas visitadas</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Origem do Tráfego</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">45%</p>
                  <p className="text-sm text-gray-600">Google</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">30%</p>
                  <p className="text-sm text-gray-600">WhatsApp</p>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <p className="text-2xl font-bold text-yellow-600">15%</p>
                  <p className="text-sm text-gray-600">Direto</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <p className="text-2xl font-bold text-purple-600">10%</p>
                  <p className="text-sm text-gray-600">Outros</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 