// src/app/data/saintDetails.ts

export type Slide = {
  title: string
  text: string
  image?: string
}



export const saintDetails: { [id: string]: Slide[] } = {
  'therese-of-lisieux': [
    {
      title: 'Infância e Família',
      text: 'Santa Teresinha nasceu em 2 de janeiro de 1873, em Alençon, na França. Seus pais, São Luís e Santa Zélia Martin, foram canonizados juntos — um feito raro na Igreja. Teresinha era a caçula de nove filhos, sendo que apenas cinco sobreviveram. Desde pequena, era profundamente sensível e espiritual, e chamava seus pais de “mais dignos do céu do que da terra”.'
    },
    {
      title: 'Vocação e Entrada no Carmelo',
      text: 'Após a morte precoce de sua mãe, Teresinha passou por um período de sofrimento psicológico e espiritual intenso. Aos 15 anos, movida por uma vocação ardente, foi até Roma pedir diretamente ao Papa Leão XIII autorização para ingressar no Carmelo de Lisieux. Conseguiu a permissão e, aos 15 anos e 3 meses, tornou-se carmelita. Ela desejava ser missionária, mártir, doutora... e entendeu que o amor a permitiria ser tudo dentro do Corpo Místico de Cristo.'
    },
    {
      title: 'A Pequena Via',
      text: 'Sua espiritualidade, chamada de "Pequena Via", consiste em fazer as pequenas coisas com grande amor e total confiança em Deus. Teresinha dizia que era como um “elevador” espiritual: entregar-se nos braços de Deus como uma criança nos braços do pai. Essa via tornou-se um caminho acessível de santidade para todos: simples, concreto e radicalmente evangélico.'
    },
    {
      title: 'A Sagrada Face e o Amor Misericordioso',
      text: 'Teresinha nutria profunda devoção pela Sagrada Face de Jesus — imagem que simbolizava a dor, o sofrimento e o abandono de Cristo. Ela também se ofereceu como "vítima do Amor Misericordioso", oferecendo sua vida como sacrifício de amor pela salvação das almas. Esse ato místico é considerado um dos momentos mais sublimes da espiritualidade carmelita do século XIX.'
    },
    {
      title: 'Legado e Devoção',
      text: 'Faleceu em 30 de setembro de 1897, vítima de tuberculose, aos 24 anos. Antes de morrer, prometeu: “Passarei meu céu fazendo o bem sobre a terra” e “farei cair uma chuva de rosas”. Foi canonizada em 1925, declarada padroeira das missões em 1927 e Doutora da Igreja em 1997 por São João Paulo II. Sua autobiografia, “História de uma Alma”, é um best-seller espiritual no mundo inteiro. Há relatos de milhares de graças recebidas por sua intercessão, especialmente ligadas a flores e conversões.'
    },
    {
      title: 'Frases marcantes de Santa Teresinha',
      text: '“No coração da Igreja, minha Mãe, eu serei o amor.” / “A santidade não consiste em fazer coisas extraordinárias, mas em aceitar e suportar com amor as pequenas coisas da vida.” / “Quero passar meu céu fazendo o bem sobre a terra.”'
    },
    {
      title: 'Legado e Devoção',
      text: '• Seu nome de batismo era Marie-Françoise-Thérèse Martin, chamada carinhosamente de “Teresinha”.\n\n• Foi canonizada apenas 28 anos após sua morte — um dos processos mais rápidos da história da Igreja.\n\n• Mesmo sem sair do Carmelo, foi proclamada padroeira das missões por sua intensa oração e amor pelos missionários.\n\n• É uma das três mulheres reconhecidas como Doutoras da Igreja, junto com Santa Teresa de Ávila e Santa Catarina de Sena.\n\n• O Papa Pio X a chamou de “a maior santa dos tempos modernos”.\n\n• Sua devoção às rosas tornou-se um símbolo marcante: fiéis relatam receber uma rosa física ou espiritual como sinal de sua intercessão.',
      image: '/teresinhagroup.png'
    }

  ], 'john-paul-ii': [
    {
      title: 'Infância e Juventude',
      text: 'Karol Wojtyła nasceu em 18 de maio de 1920, na Polônia. Desde cedo enfrentou perdas: sua mãe faleceu quando ele tinha 9 anos, e seu pai, quando tinha 21. Apesar das dores, desenvolveu uma profunda vida espiritual e intelectual, especialmente ligada à literatura e ao teatro.'
    },
    {
      title: 'Vocação e Sacerdócio',
      text: 'Durante a ocupação nazista, Karol ingressou clandestinamente no seminário. Foi ordenado sacerdote em 1946 e tornou-se bispo aos 38 anos. Já demonstrava uma espiritualidade centrada na dignidade humana, liberdade e responsabilidade cristã.'
    },
    {
      title: 'Pontificado',
      text: 'Eleito Papa em 1978, foi o primeiro papa não italiano em mais de quatro séculos. Viajou para 129 países, criou as Jornadas Mundiais da Juventude, defendeu a vida desde a concepção e teve papel fundamental na queda do comunismo no Leste Europeu.'
    },
    {
      title: 'Sofrimento e Santidade',
      text: 'Sofreu um atentado em 1981 e perdoou o agressor. Viveu os últimos anos de seu pontificado com Parkinson, oferecendo seu sofrimento a Deus. Sua perseverança inspirou milhões a viver a fé com coragem e entrega total.'
    },
    {
      title: 'Canonização e Legado',
      text: 'Faleceu em 2 de abril de 2005. Foi beatificado em 2011 e canonizado em 2014 por Papa Francisco. É lembrado como o Papa da juventude, da misericórdia e da esperança.'
    },
    {
      title: 'Frases marcantes',
      text: '“Não tenhais medo! Abri as portas a Cristo.” / “O futuro começa hoje, não amanhã.” / “A liberdade não é fazer o que se quer, mas ter o direito de fazer o que se deve.”'
    },
    {
      title: 'Curiosidades',
      text: '• Amava esquiar e praticar esportes.\n\n• Escreveu 14 encíclicas e diversos livros.\n\n• Foi o primeiro Papa a visitar uma sinagoga e uma mesquita.\n\n• Falava mais de 10 idiomas.\n\n• Aclamado pelas multidões como “João Paulo, nós te amamos!”, mesmo nos seus últimos dias de vida.',
      image: '/johnpaulgroup.png'
    }
  ],
  'sao-matias': [
    {
      title: 'Escolhido como Apóstolo',
      text: 'Após a traição e morte de Judas Iscariotes, os apóstolos se reuniram e, por sorteio, Matias foi escolhido para ocupar seu lugar entre os Doze. Era discípulo de Jesus desde o batismo no Jordão até a Ascensão.'
    },
    {
      title: 'Fidelidade desde o início',
      text: 'Matias caminhou com Jesus e os apóstolos durante toda a vida pública do Senhor, mas sempre com humildade e discrição. Sua fé constante o tornou digno do apostolado, mesmo sem ter sido escolhido inicialmente.'
    },
    {
      title: 'Pregação e Martírio',
      text: 'Após Pentecostes, São Matias evangelizou regiões da Judeia e, segundo a tradição, também a Etiópia. Foi perseguido por sua fé e morreu como mártir — apedrejado e depois decapitado, testemunhando até o fim sua fidelidade a Cristo.'
    },
    {
      title: 'Devoção e Legado',
      text: 'Embora pouco citado nos Evangelhos, São Matias é lembrado pela Igreja como modelo de perseverança e humildade. Sua festa litúrgica é celebrada em 14 de maio e sua história recorda que Deus vê o coração fiel, mesmo no escondimento.'
    }
  ],
  'sao-joao-bosco': [
    {
      title: 'Infância e vocação',
      text: 'Dom Bosco nasceu em 1815, na Itália. Desde pequeno sentia-se chamado a cuidar dos jovens. Aos 9 anos, teve um sonho profético em que viu sua missão: formar jovens com mansidão e fé, sob a orientação de Nossa Senhora.'
    },
    {
      title: 'Fundador dos Salesianos',
      text: 'Percebendo a necessidade de acolher e educar jovens pobres, fundou a Sociedade de São Francisco de Sales (Salesianos), que unia formação técnica, espiritual e moral. Seu sistema preventivo revolucionou a educação cristã.'
    },
    {
      title: 'Maria Auxiliadora',
      text: 'Dom Bosco tinha uma confiança absoluta na Virgem Maria, sob o título de Auxiliadora dos Cristãos. Disse: "Foi ela quem tudo fez". Construiu a Basílica de Maria Auxiliadora em Turim e propagou sua devoção pelo mundo.'
    },
    {
      title: 'Sonhos Proféticos e Proteção',
      text: 'Dom Bosco teve diversos sonhos considerados proféticos. Um deles revelou os ataques contra a Igreja e a salvação pela Eucaristia e Maria. Também é conhecido o episódio do cão Grigio, que apareceu para protegê-lo fisicamente.'
    },
    {
      title: 'Canonização e legado',
      text: 'Faleceu em 1888 e foi canonizado em 1934. É padroeiro da juventude, dos aprendizes e dos editores católicos. Sua pedagogia do amor, da presença e da fé continua viva nas obras salesianas espalhadas pelo mundo inteiro.'
    }
  ]
  , 'gemma-galgani': [
  {
    title: 'Infância marcada pela fé e sofrimento',
    text: 'Santa Gemma Galgani nasceu em 1878, na Toscana, Itália. Desde muito nova demonstrava grande sensibilidade espiritual, gosto pela oração e amor à Eucaristia. Sua infância foi marcada por perdas: ainda menina perdeu a mãe, irmãos e, mais tarde, o pai. Esse sofrimento precoce a levou a uma união intensa com Cristo sofredor.'
  },
  {
    title: 'Experiências místicas e visitações celestes',
    text: 'A partir da adolescência, Gemma começou a ter visões frequentes de seu anjo da guarda, de Jesus Crucificado, da Virgem Maria e de santos passionistas. Suas experiências místicas eram profundas: ela dialogava com Jesus com amor e confiança infantis, entregando-se inteiramente à vontade de Deus.'
  },
  {
    title: 'Recebe os estigmas de Cristo',
    text: 'Em 1899, Gemma recebeu os estigmas da Paixão: chagas nas mãos, pés e lado, sangrando toda quinta-feira à noite até sexta-feira, desaparecendo misteriosamente após intensos êxtases. Ela revivia os sofrimentos de Cristo em união redentora pelas almas e oferecia tudo em silêncio e humildade.'
  },
  {
    title: 'Tentativa de vida religiosa e oferta de si mesma',
    text: 'Gemma desejava ardentemente entrar no convento das Passionistas, mas sua saúde frágil e as experiências místicas geraram resistência. Não desanimou: fez votos privados e viveu como leiga consagrada, oferecendo-se como “vítima de amor” em expiação pelos pecados da humanidade. Disse: “Jesus me escolheu como vítima”.'
  },
  {
    title: 'Morte serena e gloriosa',
    text: 'Acometida por tuberculose, Gemma sofreu com paciência heróica e profunda paz. Morreu aos 25 anos, no Sábado Santo de 1903, em Lucca, enquanto fitava um crucifixo. Suas últimas palavras foram: “Jesus!”. Após sua morte, inúmeros milagres foram atribuídos à sua intercessão.'
  },
  {
    title: 'Legado e devoção',
    text: 'Canonizada em 1940 por Pio XII, é considerada uma das maiores místicas modernas. Seu diário espiritual revela um coração abrasado por Deus, apaixonado por almas e totalmente entregue à cruz. Santa Gemma é padroeira dos órfãos, estudantes, farmacêuticos e dos que sofrem de dores de cabeça e doenças espinhais.'
  },
  {
    title: 'Frases de Santa Gemma',
    text: '“Jesus, tira-me primeiro a vida, mas não o Teu amor.” / “Jesus é o dono do meu coração.” / “Quero amar a cruz e abraçá-la com alegria.” / “Mãe minha, quero ser toda tua, sem reservas!”'
  }
],'sandra-sabattini': [
  {
    title: 'Infância e vocação precoce',
    text: 'Sandra nasceu em 19 de agosto de 1961, em Riccione, Itália. Desde pequena, demonstrava profunda espiritualidade, escrevendo reflexões em seu diário desde os 10 anos. Cresceu em um ambiente cristão fervoroso, vivendo na casa paroquial do tio, padre Giuseppe Bonini.'
  },
  {
    title: 'Encontro com a Comunidade Papa João XXIII',
    text: 'Aos 12 anos, conheceu o padre Oreste Benzi e a Comunidade Papa João XXIII. Participou de acampamentos para jovens e de atividades com pessoas com deficiência, despertando nela um amor especial pelos marginalizados.'
  },
  {
    title: 'Vida de serviço e estudos',
    text: 'Sandra cursava Medicina na Universidade de Bolonha, com o sonho de ser missionária na África. Paralelamente, dedicava-se ao serviço dos pobres e dependentes químicos, oferecendo seu tempo e amor aos necessitados.'
  },
  {
    title: 'Noivado e castidade',
    text: 'Conheceu Guido Rossi em 1978, com quem iniciou um relacionamento baseado na fé e na castidade. Ambos compartilhavam o desejo de servir como missionários após o casamento.'
  },
  {
    title: 'Morte trágica e legado',
    text: 'Em 29 de abril de 1984, Sandra foi atropelada ao chegar a um encontro da Comunidade. Entrou em coma e faleceu em 2 de maio, aos 22 anos. Seu testemunho de fé e serviço continua a inspirar muitos.'
  },
  {
    title: 'Beatificação e reconhecimento',
    text: 'Em 24 de outubro de 2021, Sandra foi beatificada em Rimini, Itália. É reconhecida como a primeira noiva beatificada na história da Igreja, sendo exemplo de santidade no cotidiano.'
  },
  {
    title: 'Frases marcantes de Sandra',
    text: '“Não é minha esta vida que está evoluindo, ritmada por uma respiração que não é minha.” / “Não há nada neste mundo que seja teu.”'
  }
]




}


