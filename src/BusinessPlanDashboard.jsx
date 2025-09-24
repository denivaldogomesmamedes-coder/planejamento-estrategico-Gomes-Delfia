// Cole todo este código dentro de BusinessPlanDashboard.jsx

import React, { useState, useMemo } from 'react';
import { Search, Building2, Users, Target, TrendingUp, Calendar, Globe, ChevronRight, ChevronDown, Eye, MapPin, Phone, Mail, Linkedin, DollarSign, Zap, Clock, Award, Filter, BarChart3, PieChart, AlertCircle, CheckCircle, ArrowUp, ArrowRight } from 'lucide-react';

const BusinessPlanDashboard = () => {
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState({});
  const [filterSegment, setFilterSegment] = useState('all');
  const accounts = [
    {
      id: 1,
      name: 'Bayer',
      logo: '🧬',
      segment: 'Ciências da Vida',
      status: 'Cliente',
      priority: 'Alta',
      revenue: 'R$ 7.14 Bi',
      growth: '+41%',
      lastUpdate: '2024-10-29',
      headquarters: 'São Paulo, SP',
      employees: '8.500+',
      founded: '1896',
      website: 'bayer.com.br',
      description: 'Líder mundial em ciências da vida, focada em saúde e agricultura com estratégia "Health for all, Hunger for none".',
      businessUnits: [
        {
          name: 'Crop Science',
          focus: 'Agricultura e Agronegócio',
          revenue: 'R$ 4.2 Bi',
          priority: 'Muito Alta',
          keyInitiatives: [
            'Digitalização da agricultura (AgTech)',
            'Rastreabilidade da cadeia de suprimentos',
            'Agricultura de precisão',
            'Sustentabilidade na produção'
          ],
          technologies: ['IoT', 'Big Data', 'Machine Learning', 'Blockchain'],
          challenges: [
            'Otimização da logística de sementes',
            'Previsão de demanda por região',
            'Rastreamento de lotes de produtos',
            'Análise de solo e clima em tempo real'
          ],
          delfiaOpportunity: 'Muito Alta'
        },
        {
          name: 'Pharmaceuticals',
          focus: 'Medicamentos e Terapias',
          revenue: 'R$ 2.1 Bi',
          priority: 'Alta',
          keyInitiatives: [
            'P&D em medicamentos oncológicos',
            'Automação de processos regulatórios',
            'Cadeia de frios para biológicos',
            'Análise de dados clínicos'
          ],
          technologies: ['ERP', 'CRM', 'Data Analytics', 'Cloud'],
          challenges: [
            'Compliance com Anvisa',
            'Otimização da produção farmacêutica',
            'Gestão de supply chain crítica',
            'Análise de eficácia de tratamentos'
          ],
          delfiaOpportunity: 'Alta'
        },
        {
          name: 'Consumer Health',
          focus: 'Saúde do Consumidor',
          revenue: 'R$ 840 Mi',
          priority: 'Média',
          keyInitiatives: [
            'E-commerce e digital marketing',
            'Análise de PDV (Ponto de Venda)',
            'Programas de fidelidade',
            'Experiência omnichannel'
          ],
          technologies: ['CRM', 'Analytics', 'E-commerce', 'Marketing Tech'],
          challenges: [
            'Análise de sell-out em farmácias',
            'Otimização de campanhas digitais',
            'Gestão de inventário no varejo',
            'Personalização de ofertas'
          ],
          delfiaOpportunity: 'Média'
        }
      ],
      stakeholders: [
        {
          name: 'Adib Jacob',
          position: 'Presidente Regional LATAM',
          area: 'Pharmaceuticals',
          influence: 'Decisor Econômico',
          archetype: 'Campeão',
          linkedin: 'linkedin.com/in/adibjacob',
          email: 'adib.jacob@bayer.com',
          phone: '+55 11 3741-xxxx',
          notes: 'Liderando expansão regional da divisão farmacêutica'
        },
        {
          name: 'Rodrigo Santos',
          position: 'Diretor Crop Science Brasil',
          area: 'Crop Science',
          influence: 'Decisor Técnico',
          archetype: 'Influenciador',
          linkedin: 'linkedin.com/in/rodrigosantos-bayer',
          email: 'rodrigo.santos@bayer.com',
          phone: '+55 11 3741-xxxx',
          notes: 'Focado em inovação e digitalização do agro'
        },
        {
          name: 'Mariana Costa',
          position: 'Head de Transformação Digital',
          area: 'Corporate',
          influence: 'Influenciador Técnico',
          archetype: 'Campeão',
          linkedin: 'linkedin.com/in/marianacosta-tech',
          email: 'mariana.costa@bayer.com',
          phone: '+55 11 3741-xxxx',
          notes: 'Responsável pela estratégia de digitalização corporativa'
        }
      ],
      strategicPlan: {
        shortTerm: [
          {
            project: 'Visibilidade da Safra',
            description: 'Projeto piloto para rastrear lotes de sementes utilizando IoT e análise de dados',
            timeline: '3-6 meses',
            investment: 'R$ 150-300K',
            roi: '15% redução em perdas',
            solution: 'Plataforma de Rastreabilidade IoT Delfia.tech',
            stakeholder: 'Rodrigo Santos'
          }
        ],
        mediumTerm: [
          {
            project: 'Fábrica Inteligente',
            description: 'Implementação de IIoT para monitorar eficiência produtiva (OEE)',
            timeline: '6-18 meses',
            investment: 'R$ 500K-1Mi',
            roi: '12% aumento OEE',
            solution: 'Plataforma de Análise de Dados e IA Delfia.tech',
            stakeholder: 'Mariana Costa'
          }
        ],
        longTerm: [
          {
            project: 'Plataforma de Dados Unificada',
            description: 'Integração de dados das três BUs para visão 360° do negócio',
            timeline: '18+ meses',
            investment: 'R$ 2-5Mi',
            roi: 'Posicionamento como parceiro estratégico',
            solution: 'Plataforma Enterprise de Business Intelligence',
            stakeholder: 'Adib Jacob'
          }
        ]
      },
      competitiveAnalysis: {
        mainCompetitors: ['Syngenta', 'Corteva', 'FMC', 'UPL'],
        marketPosition: 'Líder em alguns segmentos, challenger em outros',
        differentiators: ['Inovação em biotecnologia', 'Presença global', 'P&D robusto'],
        threats: ['Pressão regulatória', 'Commoditização', 'Novos entrantes AgTech']
      },
      financialInsights: {
        revenue2023: 'R$ 7.14 Bi',
        growth: '+41%',
        profitMargin: '18%',
        rdInvestment: 'R$ 428 Mi (6% da receita)',
        marketCap: '€ 45.2 Bi (Global)'
      }
    },
    // Cole aqui o restante dos dados das outras empresas se houver
  ];
  const segments = ['all', 'Ciências da Vida', 'Química', 'Farmacêutico', 'Tecnologia', 'Agronegócio', 'Varejo', 'Energia e Combustíveis', 'Bens de Consumo', 'Ferramentas e Soluções Industriais', 'Distribuição Química', 'Alimentos Premium', 'Embalagens'];
  const filteredAccounts = useMemo(() => {
    return accounts.filter(account => {
      const matchesSearch = account.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        account.segment.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSegment = filterSegment === 'all' || account.segment === filterSegment;
      return matchesSearch && matchesSegment;
    });
  }, [searchTerm, filterSegment]);
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Muito Alta': return 'bg-red-100 text-red-800 border-red-200';
      case 'Alta': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Média': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Baixa': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };
  const getStatusColor = (status) => {
    switch (status) {
      case 'Cliente': return 'bg-green-100 text-green-800 border-green-200';
      case 'Lead': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Prospect': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (selectedAccount) {
    const account = accounts.find(acc => acc.id === selectedAccount);
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setSelectedAccount(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ← Voltar
                </button>
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{account.logo}</span>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{account.name}</h1>
                    <p className="text-gray-600">{account.segment}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(account.status)}`}>
                  {account.status}
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getPriorityColor(account.priority)}`}>
                  {account.priority}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Adicione o restante do JSX para a visão detalhada aqui */}
      </div>
    );
  }

  // Main Dashboard View
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Sistema de Gestão de Contas Estratégicas</h1>
              <p className="text-gray-600">Delfia.tech - Business Intelligence Dashboard</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">
                {filteredAccounts.length} de {accounts.length} contas
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border-b px-6 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar contas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Filter className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
              <select
                value={filterSegment}
                onChange={(e) => setFilterSegment(e.target.value)}
                className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                {segments.map(segment => (
                  <option key={segment} value={segment}>
                    {segment === 'all' ? 'Todos os Segmentos' : segment}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAccounts.map((account) => (
            <div
              key={account.id}
              onClick={() => setSelectedAccount(account.id)}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-200 hover:border-blue-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{account.logo}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{account.name}</h3>
                      <p className="text-sm text-gray-600">{account.segment}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Status:</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(account.status)}`}>
                      {account.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Prioridade:</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(account.priority)}`}>
                      {account.priority}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Receita:</span>
                    <span className="text-sm font-medium text-gray-900">{account.revenue}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Crescimento:</span>
                    <span className="text-sm font-medium text-green-600">{account.growth}</span>
                  </div>
                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      Atualizado em {account.lastUpdate}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredAccounts.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhuma conta encontrada</h3>
            <p className="text-gray-600">Tente ajustar os filtros de busca.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessPlanDashboard;