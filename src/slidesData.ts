import { SlideData } from './types';

export const ASSETS = {
  logos: {
    andreiaCakes: 'https://i.ibb.co/jvqg1bXC/patitour-2026-10-05-T091214-223.png',
    easyByz: '/assets/logo-ebc.png',
  },
  people: {
    andreia: 'https://i.ibb.co/gZZspxLK/patitour-2026-09-16-T142053-904.png',
    andreiaPhoto1: 'https://i.ibb.co/RkqBrZ6Z/Whats-App-Image-2026-09.jpg',
    andreiaPhoto2: 'https://i.ibb.co/JWLYh80z/Whats-App-Image-2026-09-30-at-2-23-20-PM.jpg',
    pati: 'https://i.ibb.co/2Y8d8ZTb/d7e9473f-94dd-4623-b092-cf60413d2aed.png',
    patiWithPhone: 'https://i.ibb.co/2Y8d8ZTb/d7e9473f-94dd-4623-b092-cf60413d2aed.png',
  },
  screens: {
    capaInscricao: '/assets/capa-inscricao.jpg',
    telaInicial: '/assets/app-mockup-new.jpg',
    cardapio1: '/assets/tela1.png',
    cardapio2: '/assets/tela-2.png',
    financeiro1: '/assets/tab1.png',
    financeiro2: '/assets/tab2.png',
  },
  illustrations: {
    painPoints: '/assets/pain-points.png',
    estrutura: '/assets/estrutura.png',
    semOrganizacao: '/assets/sem-organizacao.png',
    pilotoAutomatico: '/assets/piloto-automatico.png',
    menosTempo: '/assets/menos-tempo.png',
    naoESobreApp: '/assets/nao-e-sobre-app.png',
    cake: '/assets/cover-cake.png',
  },
  appLinks: {
    clientApp: 'https://appandreiacakessimulacao.vercel.app/',
    adminApp: 'https://appandreiacakessimulacao.vercel.app/#/admin',
    registrationApp: 'https://paginadevendas-andreiacakes.vercel.app/',
    mentoriaRegistrationApp: 'https://paginadevendas-andreiacakes.vercel.app/',
  },
  contacts: {
    phone: '+1 803 888 9018',
    phoneFormatted: '+1 (803) 888-9018',
    whatsappLink: 'https://wa.me/18038889018?text=Ol%C3%A1%20Pati!%20Participei%20da%20aula%20com%20a%20Andreia%20Cakes%20e%20quero%20garantir%20meu%20App%20de%20Confeitaria.',
    website: 'www.easybyzcreator.com',
    websiteUrl: 'https://www.easybyzcreator.com',
    instagram: 'apps.easybyzcreator',
    instagramUrl: 'https://www.instagram.com/apps.easybyzcreator/',
    authorName: 'Pati - Easy Byz Creator',
    partnerName: 'Andreia Cakes USA',
  }
};

export const COLOR_PALETTE = {
  primaryDark: '#342825',  // Chocolate Intenso / Base institucional
  terracotta: '#BD5944',   // Terracota Confeitaria / Destaque e Ação
  lightBg: '#FAF6F2',      // Fundo creme suave confeitaria
  sandGold: '#D4A373',     // Dourado Doce de Leite / Elegância
  warmCream: '#FFFDFB',    // Branco quente / Cards
};

export const SLIDES_DATA: SlideData[] = [
  {
    id: 1,
    slideNumber: 1,
    category: 'Capa da Aula',
    title: 'Como Profissionalizar Seus Pedidos e Parar de Perder Vendas no WhatsApp',
    subtitle: 'Um guia prático para organizar a rotina da sua confeitaria.',
    topics: [
      {
        title: 'Organizar encomendas sem erros',
        description: 'Chega de mensagens perdidas ou anotações em papéis e cadernos manchados de farinha.',
        icon: 'clipboard-check'
      },
      {
        title: 'Parar de perder vendas no WhatsApp',
        description: 'A cliente escolhe tamanhos, recheios e massas de forma rápida, visual e sem atrito.',
        icon: 'smartphone'
      },
      {
        title: 'Profissionalizar sua confeitaria',
        description: 'Transmita autoridade, credibilidade e valor nobre desde o primeiro contato.',
        icon: 'award'
      }
    ],
    notes: [
      'Dar as boas-vindas oficiais a todas as alunas da Andreia Cakes USA.',
      'Apresentar o tema: Como Profissionalizar Seus Pedidos e Parar de Perder Vendas no WhatsApp.',
      'Destacar que a aula é 100% prática e focada em organizar a rotina da confeitaria, eliminar erros e vender mais.'
    ]
  },
  {
    id: 2,
    slideNumber: 2,
    category: 'Diagnóstico & Rotina',
    title: 'Pergunta 1 – Organização das Encomendas',
    subtitle: 'Você já esqueceu de anotar um pedido do WhatsApp no seu caderno ou planilha? Ou pior: já passou pelo sufoco de esquecer a data de entrega de um bolo?',
    topics: [
      {
        title: 'Anotações espalhadas no caderno',
        description: 'Pedidos perdidos no meio de dezenas de mensagens do dia a dia.'
      },
      {
        title: 'O sufoco da data de entrega',
        description: 'Lembrar de última hora que tem um bolo para entregar em poucas horas.'
      }
    ],
    notes: [
      'Iniciar a sequência de reflexão com as 4 perguntas cruciais da rotina da confeiteira.',
      'Interagir com a plateia: pedir para levantarem a mão quem já passou por isso.',
      'Acolher a dor e mostrar que isso é consequência de um processo sobrecarregado.'
    ]
  },
  {
    id: 3,
    slideNumber: 3,
    category: 'Diagnóstico & Rotina',
    title: 'Pergunta 2 – Precisão e Detalhes do Pedido',
    subtitle: 'Você já entregou um pedido com o recheio, tema ou tamanho errado porque a anotação ficou confusa? (Pequenos erros geram estresse e prejuízo)',
    topics: [
      {
        title: 'Informações perdidas em áudios',
        description: 'Recheios trocados, nome do aniversariante escrito incorretamente ou tema errado.'
      },
      {
        title: 'Estresse e prejuízo',
        description: 'Ter que refazer o bolo correndo ou dar desconto para o cliente descontente.'
      }
    ],
    notes: [
      'Destacar que pequenos erros no WhatsApp viram grandes prejuízos e abalam a confiança do cliente.',
      'Fazer as alunas sentirem a urgência de evitar o retrabalho.'
    ]
  },
  {
    id: 4,
    slideNumber: 4,
    category: 'Diagnóstico & Rotina',
    title: 'Pergunta 3 – Gestão Financeira e Lucro',
    subtitle: 'No final do mês, você sabe dizer exatamente quanto teve de lucro real no seu negócio? Ou o dinheiro entra, paga os ingredientes e você não sabe para onde ele vai? (Dificuldade de precificar e controlar o caixa)',
    topics: [
      {
        title: 'Faturar não é lucrar',
        description: 'O dinheiro entra, paga farinha, leite condensado e embalagem, e sobra quase nada.'
      },
      {
        title: 'Controle de caixa real',
        description: 'Necessidade de saber exatamente quanto sobrou líquido de cada bolo produzido.'
      }
    ],
    notes: [
      'Abordar a dor financeira: trabalhar até tarde sem saber se sobrou dinheiro.',
      'Reforçar o diagnóstico: a ilusão de vender muito sem ter lucro no bolso.'
    ]
  },
  {
    id: 5,
    slideNumber: 5,
    category: 'Diagnóstico & Rotina',
    title: 'Pergunta 4 – Venda Ativa e Ticket Médio',
    subtitle: 'Quando o cliente te chama no WhatsApp, você realmente consegue oferecer todo o seu cardápio? Ou você acaba vendendo apenas o item que o cliente pediu, sem oferecer um docinho extra, uma vela ou uma bebida? (Diferença entre apenas atender/anotar e saber vender mais)',
    topics: [
      {
        title: 'Apenas anotar pedidos',
        description: 'O cliente pede 1 bolo e você não tem tempo de sugerir doces e adicionais.'
      },
      {
        title: 'Saber vender mais (Ticket Médio)',
        description: 'Apresentar brigadeiros, velas e complementos que a cliente também compraria.'
      }
    ],
    notes: [
      'Explicar o conceito de Ticket Médio de forma simples e direta para alunas de confeitaria.',
      'Mostrar que um cliente que comprou um bolo de $70 compraria facilmente mais $30 em docinhos se fosse oferecido.'
    ]
  },
  {
    id: 6,
    slideNumber: 6,
    category: 'Diagnóstico & Rotina',
    title: 'Tempo Perdido na Cozinha (Produção vs. Atendimento)',
    subtitle: 'Quantas vezes você teve que parar de confeitar ou lavar a mão no meio da produção só para responder mensagens no WhatsApp?',
    topics: [
      {
        title: 'Atenção interrompida na cozinha',
        description: 'E no final das contas... era só alguém "curioso" perguntando o preço e que nem acabou comprando?'
      },
      {
        title: 'Risco de prejuízo real',
        description: 'Tempo precioso que se perde na cozinha, o risco de queimar uma massa ou recheio, desandar a cobertura ou atrasar uma encomenda importante para dar atenção a quem só queria dar uma olhada.'
      }
    ],
    notes: [
      'Refletir sobre o tempo precioso perdido ao interromper a produção.',
      'Ressaltar o risco de desandar receitas e atrasar encomendas por causa de curiosos no WhatsApp.'
    ]
  },
  {
    id: 7,
    slideNumber: 7,
    category: 'Diagnóstico & Rotina',
    title: 'Atendimento 24h e Limites Profissionais',
    subtitle: 'Você sente que precisa ficar disponível 24 horas por dia para não perder vendas?',
    topics: [
      {
        title: 'Falta de limites claros',
        description: 'O cliente te chama 10pm da noite ou de madrugada e você se sente na obrigação de responder na hora — perdendo seu momento de descanso ou com a família.'
      },
      {
        title: 'A ilusão da disponibilidade constante',
        description: 'A sensação de que parar de responder significa perder clientes, gerando sobrecarga física e mental.'
      }
    ],
    notes: [
      'Abordar a exaustão de nunca conseguir se desconectar do trabalho.',
      'Destacar que disponibilidade total sem limites não gera valorização profissional.'
    ]
  },
  {
    id: 8,
    slideNumber: 8,
    category: 'Autonomia & Solução',
    title: 'E se você pudesse ter a sua própria estrutura?',
    subtitle: 'Uma solução prática, feita sob medida para a sua confeitaria e 100% no seu controle.',
    topics: [
      {
        title: 'Cardápio digital profissional',
        description: 'E se, em vez de depender de anotações soltas e conversas perdidas no WhatsApp, você pudesse ter o seu próprio cardápio digital profissional?'
      },
      {
        title: 'Encomenda com poucos cliques',
        description: 'Um lugar exclusivo onde o seu cliente encontra seus bolos decorados, doces finos, preços, fotos irresistíveis e faz a encomenda completa com poucos cliques.'
      },
      {
        title: 'Visão clara de entregas e finanças',
        description: 'E onde você consegue visualizar de forma clara as suas datas de entrega, detalhes de cada pedido e as finanças do seu negócio.'
      }
    ],
    notes: [
      'Apresentar a virada de chave: sair das anotações soltas e conversas perdidas no WhatsApp.',
      'Apresentar o cardápio digital profissional próprio, feito sob medida e 100% no controle da confeiteira.'
    ]
  },
  {
    id: 9,
    slideNumber: 9,
    category: 'Parceria Oficial',
    title: 'Da metodologia da escola para a palma da sua mão',
    subtitle: 'O aplicativo desenvolvido sob medida para as alunas da Andreia Cakes USA.',
    topics: [
      {
        title: 'Metodologia Andreia Cakes',
        description: 'Pensado para a rotina real de quem faz bolos decorados, fatias e doces finos'
      },
      {
        title: 'Tecnologia Easy Byz Creator',
        description: 'Desenvolvido por quem entende de automação e aplicativos práticos para negócios'
      },
      {
        title: '100% no celular',
        description: 'Funciona perfeitamente em qualquer smartphone, sem complicação técnica'
      }
    ],
    notes: [
      'Apresentar a parceria oficial entre Andreia Cakes USA e Easy Byz Creator.',
      'Destacar que foi construído especialmente para confeiteiras.'
    ]
  },
  {
    id: 10,
    slideNumber: 10,
    category: 'Visão de Negócio',
    title: 'Não é apenas sobre um aplicativo',
    subtitle: 'É sobre liberdade, tranquilidade e valorização do seu trabalho.',
    topics: [
      {
        title: 'É sobre sair do caderninho',
        description: 'Eliminar de vez a insegurança de esquecer prazos ou perder mensagens importantes'
      },
      {
        title: 'É sobre parar de ser interrompida',
        description: 'Confeitar com tranquilidade sem precisar parar a todo minuto para ver o celular'
      },
      {
        title: 'É sobre entender seu lucro real',
        description: 'Saber com precisão para onde vai cada dólar ou real do seu negócio'
      },
      {
        title: 'É sobre profissionalizar sua paixão',
        description: 'Transformar seu dom na confeitaria em uma empresa organizada e lucrativa'
      }
    ],
    notes: [
      'Slide emocional de fechamento: tocar no coração da confeiteira.',
      'Reforçar que o app é o meio para a vida com mais paz e liberdade financeira.'
    ]
  },
  {
    id: 11,
    slideNumber: 11,
    category: 'Lançamento Oficial',
    title: 'Lançamento Oficial: Aplicativo da Andreia Cakes USA',
    subtitle: 'Toda a metodologia da Andreia integrada a uma tecnologia feita sob medida para confeitarias.',
    topics: [
      {
        title: '100% Personalizado com a sua Marca',
        description: 'O aplicativo nasce com as suas cores, sua logo e o seu estilo visual.'
      },
      {
        title: 'Pronto em até 10 Dias Úteis',
        description: 'Uma estrutura completa, formatada para a rotina real de quem produz e vende, entregue prontinha para você usar.'
      },
      {
        title: 'Aulas Gravadas Passo a Passo',
        description: 'Tutoriais práticos ensinando detalhadamente como cadastrar produtos, alterar preços, organizar categorias e mexer em todas as funções.'
      },
      {
        title: 'Suporte Humanizado de Verdade',
        description: 'Acompanhamento de perto para tirar todas as suas dúvidas e te dar total segurança na gestão do seu aplicativo.'
      }
    ],
    notes: [
      'Apresentar com entusiasmo o lançamento oficial do aplicativo da Andreia Cakes USA.',
      'Destacar os 4 diferenciais práticos: personalização, entrega rápida em 10 dias, aulas gravadas e suporte humanizado de verdade.'
    ]
  },
  {
    id: 12,
    slideNumber: 12,
    category: 'Demonstração ao Vivo',
    title: 'Veja o aplicativo funcionando na prática',
    subtitle: 'Conheça o cardápio interativo e o painel de controle em tempo real.',
    topics: [
      {
        title: 'App da Confeitaria (Cliente)',
        description: 'https://appandreiacakessimulacao.vercel.app/ — Acesso rápido com fotos de bolos, detalhes de sabores e encomendas 24h.'
      },
      {
        title: 'Painel de Gestão (Confeiteira)',
        description: 'https://appandreiacakessimulacao.vercel.app/#/admin — Controle de encomendas, custos de receitas e fluxo de caixa.'
      }
    ],
    notes: [
      'Demonstração prática ao vivo: abrir o app no celular ou na tela.',
      'Mostrar a facilidade de navegação e como o cliente monta o pedido rapidamente.'
    ]
  },
  {
    id: 13,
    slideNumber: 13,
    category: 'Condição Especial',
    title: 'Condição Especial: Seu Aplicativo Próprio de Confeitaria',
    subtitle: 'Condição exclusiva para as alunas da aula especial Andreia Cakes USA.',
    topics: [
      {
        title: 'Preço Especial de Lançamento',
        description: 'Desconto exclusivo garantido para as 15 primeiras alunas'
      },
      {
        title: 'App Exclusivo e Personalizado',
        description: 'Desenvolvido sob medida com a sua logo, cores e identidade visual'
      },
      {
        title: 'Suporte Humanizado e Aulas',
        description: 'Acompanhamento de perto e tutoriais gravados passo a passo'
      }
    ],
    notes: [
      'Apresentar a oferta e a oportunidade imperdível.',
      'Acesso direto e inscrição: https://paginadevendas-andreiacakes.vercel.app/'
    ]
  },
  {
    id: 14,
    slideNumber: 14,
    category: 'Próximos Passos',
    title: 'Próximos Passos: Fale Conosco',
    subtitle: 'Garanta sua vaga e comece a profissionalizar sua confeitaria hoje mesmo.',
    topics: [
      {
        title: 'WhatsApp Oficial',
        description: '+1 (803) 888-9018 — Fale diretamente com a Pati para tirar dúvidas e garantir sua vaga.'
      },
      {
        title: 'Website Oficial',
        description: 'www.easybyzcreator.com — Conheça mais sobre as soluções de tecnologia para confeitaria.'
      },
      {
        title: 'Instagram',
        description: '@apps.easybyzcreator — Dicas práticas, novidades e histórias de sucesso.'
      }
    ],
    notes: [
      'Finalizar a apresentação convidando todas a chamarem no WhatsApp.',
      'Agradecer à Andreia Cakes USA e a todas as alunas presentes na aula.'
    ]
  }
];
