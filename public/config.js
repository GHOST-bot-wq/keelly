/**
 * =====================================================================
 * KELLY REZENDE | DIVINA DERMA — CONFIGURAÇÃO CENTRALIZADA
 * =====================================================================
 * Este arquivo centraliza todas as informações editáveis da clínica.
 * Para atualizar telefones, links, textos ou endereços, altere apenas
 * os valores abaixo sem precisar mexer na estrutura do código HTML/CSS.
 */

const CLINIC_CONFIG = {
  // Identidade da Marca
  brand: {
    professionalName: "Kelly Rezende",
    brandName: "Divina Derma",
    specialty: "Estética Facial Avançada",
    tagline: "Uma pele bem cuidada. Uma beleza que continua sendo sua.",
    subtagline: "Cuidado estético personalizado, tecnologia e atenção aos detalhes para valorizar a naturalidade da sua pele.",
    experienceYears: "9 anos",
    headlineBadge: "9 Anos Transformando Peles",
    biomedicineStatus: "Graduanda em Biomedicina (7/8)",
    credentials: [
      "9 anos de prática dedicada à transformação e saúde da pele",
      "Graduanda em Biomedicina (período 7/8)",
      "Master Laser Habilitada em tecnologias avançadas",
      "Especialista em protocolos personalizados para Melasma e Rejuvenescimento"
    ]
  },

  // Contato & WhatsApp Oficial
  contact: {
    // Insira aqui o número oficial com DDD (Ex: "5511999999999")
    whatsappNumber: "5500000000000",
    whatsappDisplay: "(00) 00000-0000 [A Confirmar]",
    defaultMessage: "Olá! Conheci o site da Kelly Rezende e gostaria de saber mais sobre os tratamentos e agendar uma avaliação.",
    instagramUser: "@divinaderma.kellyrezende",
    instagramUrl: "https://instagram.com",
    email: "contato@divinaderma.com.br",
    
    pendingConfirmation: {
      phone: true,
      address: true,
      hours: true
    }
  },

  // Localização & Horários
  location: {
    cityState: "Atendimento com Horário Marcado",
    addressLine1: "Consultório de Estética Facial Avançada",
    addressLine2: "Endereço completo disponível após confirmação de agendamento",
    googleMapsUrl: "#",
    hoursWeekday: "Segunda a Sexta: 09h às 19h (Com agendamento prévio)",
    hoursSaturday: "Sábados: 09h às 14h (Horários especiais sob consulta)",
    hoursSunday: "Domingos e Feriados: Fechado"
  },

  // Caminhos relativos padrão para as 4 imagens originais
  images: {
    professional: {
      primary: "public/images/kelly-rezende-profissional.png",
      fallback: "images/kelly-rezende-profissional.png",
      alt: "Kelly Rezende — Especialista em Estética Facial Avançada e fundadora da Divina Derma",
      title: "Kelly Rezende | Estética Facial Avançada"
    },
    procedureMassage: {
      primary: "public/images/procedimento-limpeza-massagem.png",
      fallback: "images/procedimento-limpeza-massagem.png",
      alt: "Procedimento facial em andamento: higienização, massagem descompressiva e cuidado técnico",
      title: "Cuidado Clínico e Higienização Profunda"
    },
    procedureMask: {
      primary: "public/images/protocolo-mascara-facial.png",
      fallback: "images/protocolo-mascara-facial.png",
      alt: "Protocolo de máscara facial regeneradora com proteção ocular e conforto térmico",
      title: "Protocolo Calmante & Nutrição Cutânea"
    },
    technologyProducts: {
      primary: "public/images/tecnologia-cosmobeauty-led.png",
      fallback: "images/tecnologia-cosmobeauty-led.png",
      alt: "Equipamentos de alta tecnologia estética: Máscara de Fototerapia LED, Peeling de Peptídeos NAD+ e Dermocosméticos Cosmobeauty",
      title: "Tecnologia LED & Nanotecnologia Dermocosmética"
    }
  },

  // Catálogo Editorial de Tratamentos Faciais
  treatments: [
    {
      id: "melasma-manchas",
      category: "melasma",
      title: "Protocolo de Clareamento & Controle de Melasma",
      tag: "Mais Procurado",
      shortDesc: "Tratamento seguro e inteligente para uniformização do tom cutâneo, reduzindo a hipercromia sem efeito rebote inflamatório.",
      objective: "Clarear manchas pigmentares, inibir a tirosinase e restaurar a barreira protetora da derme.",
      indication: "Peles com melasma dérmico ou epidérmico, manchas solares e hiperpigmentação pós-inflamatória.",
      observation: "Requer avaliação individualizada prévia para definição da fase do melasma e orientação de home care.",
      waMessage: "Olá Kelly! Gostaria de entender mais sobre o Protocolo de Controle de Melasma e agendar uma avaliação."
    },
    {
      id: "limpeza-profunda",
      category: "cuidados",
      title: "Limpeza de Pele Profunda & Detox Facial",
      tag: "Essencial",
      shortDesc: "Remoção meticulosa de impurezas, miliuns e comedões associada à emoliência suave, fototerapia e nutrição tecidual.",
      objective: "Desobstruir poros, oxigenar o tecido cutâneo, equilibrar a oleosidade e preparar a pele para absorção de ativos.",
      indication: "Todos os tipos de pele, com frequência recomendada conforme o grau sebáceo individual.",
      observation: "Procedimento adaptado para peles sensíveis ou reativas, com etapas calmantes e anti-inflamatórias.",
      waMessage: "Olá Kelly! Gostaria de agendar uma sessão de Limpeza de Pele Profunda na Divina Derma."
    },
    {
      id: "rejuvenescimento-peptideos",
      category: "rejuvenescimento",
      title: "Protocolo de Rejuvenescimento com Peptídeos & Ouro",
      tag: "Alta Performance",
      shortDesc: "Bioestimulação dérmica com peeling de peptídeos NAD+ e concentrado de ouro líquido para renovação e viço imediato.",
      objective: "Estimular a síntese de colágeno, melhorar a densidade epidérmica e suavizar linhas finas de expressão.",
      indication: "Peles desvitalizadas, com primeiros sinais de envelhecimento ou perda de firmeza.",
      observation: "Utiliza cosmecêuticos avançados de padrão médico-estético de alta biocompatibilidade.",
      waMessage: "Olá Kelly! Tenho interesse no Protocolo de Rejuvenescimento com Peptídeos e gostaria de agendar uma consulta."
    },
    {
      id: "laser-tecnologias",
      category: "laser",
      title: "Terapias com Tecnologia Master Laser & Fotobiomodulação",
      tag: "Tecnologia Avançada",
      shortDesc: "Protocolos guiados por comprimentos de onda específicos para estímulo celular, clareamento, ação antiacne e cicatrização.",
      objective: "Modular a atividade celular profunda, regenerar tecidos e combater processos inflamatórios cutâneos.",
      indication: "Pessoas que buscam resultados tecnológicos avançados com segurança e embasamento científico.",
      observation: "A indicação depende de fototipo, histórico médico e análise criteriosa em cabine.",
      waMessage: "Olá Kelly! Gostaria de saber mais sobre as tecnologias a Laser e agendar uma avaliação profissional."
    },
    {
      id: "fototerapia-led",
      category: "tecnologia",
      title: "Fototerapia LED & Reparação Celular",
      tag: "Ciência & Conforto",
      shortDesc: "Aplicação de luzes monocromáticas (LED âmbar, vermelho e azul) que potencializam a cicatrização e acalmam a derme.",
      objective: "Potencializar tratamentos associados, reduzir eritemas e aumentar a circulação microvascular facial.",
      indication: "Excelente como tratamento complementar pós-peeling, pós-limpeza ou em protocolos clareadores.",
      observation: "Procedimento totalmente indolor, sem tempo de inatividade social (down-time).",
      waMessage: "Olá Kelly! Gostaria de conhecer o tratamento de Fototerapia LED e agendar minha avaliação."
    },
    {
      id: "microagulhamento-biovitalidade",
      category: "regeneracao",
      title: "Microagulhamento Especializado & Drug Delivery",
      tag: "Bioestímulo",
      shortDesc: "Indução percutânea de colágeno com introdução direta de fatores de crescimento e ácido hialurônico de baixo peso molecular.",
      objective: "Melhorar cicatrizes de acne, textura dérmica irregular, poros dilatados e firmeza estrutural.",
      indication: "Avaliado rigorosamente para cada tipo de queixa e fototipo da paciente.",
      observation: "Exige repouso relativo de exposição solar e protocolo estrito de biossegurança.",
      waMessage: "Olá Kelly! Gostaria de conversar sobre Microagulhamento e verificar se é indicado para o meu caso."
    }
  ],

  // 5 Pilares do Método Divina Derma
  differentials: [
    {
      number: "01",
      title: "Anamnese & Avaliação Criteriosa",
      desc: "Nenhuma pele é tratada com fórmulas prontas. Cada consulta inicia com um diagnóstico minucioso da barreira cutânea, histórico de saúde e hábitos diários."
    },
    {
      number: "02",
      title: "Soluções sem Exageros ou Promessas Artificiais",
      desc: "Nosso propósito é valorizar a beleza autêntica da sua pele, respeitando sua anatomia e seus traços naturais com condutas respaldadas pela biomedicina."
    },
    {
      number: "03",
      title: "Tecnologia Científica & Cosmocêuticos Nobres",
      desc: "Uso criterioso de fototerapia LED, peeling de peptídeos dourados, nanotecnologia antioxidante e dermocosméticos certificados de padrão ouro."
    },
    {
      number: "04",
      title: "Higiene Cirúrgica & Rigor de Biossegurança",
      desc: "Materiais 100% descartáveis, instrumentos esterilizados e protocolos sanitários impecáveis para assegurar tranquilidade total em cada procedimento."
    },
    {
      number: "05",
      title: "Acompanhamento Continuado & Home Care Consciente",
      desc: "O cuidado não termina quando a sessão acaba. Orientamos a rotina domiciliar adequada para sustentar e potencializar os resultados com economia e eficácia."
    }
  ],

  // Perguntas Frequentes (FAQ)
  faq: [
    {
      q: "Como funciona a primeira avaliação com a Kelly Rezende?",
      a: "A avaliação é o momento mais importante do seu tratamento. Nela, Kelly examina pessoalmente a textura, hidratação, oleosidade e pigmentação da sua pele, investiga seu histórico e formula um plano de cuidados personalizado e transparente, explicando exatamente o que sua pele precisa."
    },
    {
      q: "O tratamento para melasma garante a cura definitiva?",
      a: "O melasma é uma condição crônica sem cura definitiva na literatura científica mundial, mas com excelente controle possível através de protocolos modernos e cuidados consistentes. Na Divina Derma, nosso foco é clarear as manchas com segurança, restaurar a integridade da pele e orientar sua manutenção preventiva sem efeito rebote."
    },
    {
      q: "A limpeza de pele dói ou deixa marcas no rosto?",
      a: "Nosso protocolo prioriza a emoliência química e térmica prévia suave, reduzindo drasticamente o desconforto na extração manual. Finalizamos sempre com fototerapia LED calmante e máscara descongestionante para que você saia com a pele iluminada, limpa e sem vermelhidão agressiva."
    },
    {
      q: "Como faço para agendar meu horário?",
      a: "Os agendamentos são realizados exclusivamente pelo WhatsApp oficial. Ao clicar nos botões do site, você será direcionada diretamente para a conversa para escolher o melhor dia e horário disponível na agenda."
    },
    {
      q: "Qual a formação e capacitação da profissional?",
      a: "Kelly Rezende conta com 9 anos de experiência em estética facial, é graduanda em Biomedicina (7/8 período) e possui habilitação como Master Laser, unindo prática clínica consolidada à constante atualização científica."
    }
  ]
};

// Helper universal para gerar links de WhatsApp
function getWhatsAppUrl(customMessage) {
  const number = CLINIC_CONFIG.contact.whatsappNumber.replace(/\D/g, "");
  const message = encodeURIComponent(customMessage || CLINIC_CONFIG.contact.defaultMessage);
  return `https://wa.me/${number}?text=${message}`;
}
