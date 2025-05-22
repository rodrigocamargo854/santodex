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
],
'vitaliy-humeniuk': [
    {
      title: 'Origem e Vocação',
      text: 'Nascido na Ucrânia em 1900, Vitaliy Humenyuk ingressou na vida monástica na tradição greco-católica, unida a Roma, tornando-se exemplo de humildade, serviço e oração constante.'
    },
    {
      title: 'Perseguição e Fidelidade',
      text: 'Durante o regime comunista soviético, Vitaliy se recusou a abandonar sua fé e sua comunhão com a Igreja Católica. Recusou-se a aderir à Igreja Ortodoxa controlada pelo Estado, sendo por isso perseguido e preso.'
    },
    {
      title: 'Testemunho de Martírio',
      text: 'Mesmo na prisão, manteve-se fiel à oração e encorajava outros cristãos a não abandonarem sua fé. Morreu no cárcere em 1946, vítima de tortura e privações, entregando sua vida como testemunha do Evangelho.'
    },
    {
      title: 'Beatificação e Legado',
      text: 'Foi beatificado pelo Papa São João Paulo II no ano de 2001, junto com outros mártires da Igreja Greco-Católica Ucraniana. É lembrado como símbolo da fidelidade silenciosa e da resistência espiritual diante da opressão comunista.'
    },
    {
      title: 'Curiosidades',
      text: '• Seu nome também é transliterado como "Vitalij" ou "Witalij".\n\n• Ele pertence ao grupo de mártires da "Igreja do Silêncio", referência aos católicos perseguidos no Leste Europeu.\n\n• Seu martírio foi reconhecido como um testemunho puro de fidelidade à comunhão com o Papa e à tradição católica oriental.\n\n• Sua história fortalece a identidade da Igreja Greco-Católica Ucraniana, que mesmo na clandestinidade nunca deixou de celebrar a Eucaristia.'
    }
  ],'tarcisio': [
  {
    title: 'Infância e Vocação',
    text: 'São Tarcísio nasceu por volta do ano 245 em Roma. Desde jovem, demonstrava profunda fé e dedicação à Igreja, servindo como acólito nas celebrações eucarísticas.'
  },
  {
    title: 'Perseguição e Coragem',
    text: 'Durante as perseguições do imperador Valeriano, os cristãos eram impedidos de receber os sacramentos. Tarcísio ofereceu-se para levar a Eucaristia aos presos, demonstrando coragem e fé inabaláveis.'
  },
  {
    title: 'Martírio',
    text: 'No caminho para a prisão, Tarcísio foi abordado por pagãos que exigiram que entregasse o que carregava. Ao recusar-se, foi espancado até a morte, protegendo as hóstias com seu próprio corpo.'
  },
  {
    title: 'Legado e Veneração',
    text: 'Após sua morte, Tarcísio foi enterrado nas catacumbas de São Calisto. Seu exemplo de amor à Eucaristia inspirou gerações, sendo declarado padroeiro dos coroinhas e acólitos.'
  },
  {
    title: 'Frases e Reflexões',
    text: '“Ó meu Jesus, ninguém Vos tirará do meu coração!” — São Tarcísio.\n\nSeu sacrifício nos lembra da importância de valorizar e proteger os sacramentos da Igreja.'
  }
],'chiara-corbella-petrillo': [
  {
    title: 'Juventude e Encontro com Enrico',
    text: 'Chiara nasceu em Roma, em 1984. Desde jovem, buscava viver uma fé autêntica. Conheceu Enrico Petrillo em uma peregrinação e juntos discerniram o matrimônio como vocação. O namoro teve momentos difíceis, mas se fortaleceram na oração e nos sacramentos.'
  },
  {
    title: 'Casamento e Maternidade',
    text: 'Casaram-se em 2008 e logo vieram os filhos. O primeiro, Maria Grazia Letizia, nasceu com anencefalia e viveu apenas 30 minutos. O segundo, Davide Giovanni, teve uma malformação grave e viveu por pouco tempo. Ambos foram batizados e acolhidos com alegria e entrega.'
  },
  {
    title: 'Gravidez de Francesco e o Câncer',
    text: 'Durante a terceira gestação, Chiara foi diagnosticada com um câncer agressivo na língua. Escolheu postergar o tratamento para salvar a vida do bebê. Francesco nasceu saudável em 2011. Após o parto, Chiara iniciou o tratamento, mas a doença já estava avançada.'
  },
  {
    title: 'Oferecimento e Santidade no Sofrimento',
    text: 'Chiara viveu o sofrimento com serenidade, oferecendo sua dor com amor e fé. Dizia: "Quando Deus tira algo, é para dar algo maior". Mesmo diante da morte, irradiava paz, esperança e beleza. Partiu para o céu em 13 de junho de 2012, aos 28 anos.'
  },
  {
    title: 'Testemunho e Causa de Beatificação',
    text: 'Seu velório foi como um casamento: muitos testemunharam a paz e a luz que emanava de sua vida. Em 2018, iniciou-se oficialmente sua causa de beatificação. Chiara é exemplo de amor conjugal, maternidade heroica e fé vivida com radicalidade no ordinário.'
  },
  {
    title: 'Frases de Chiara',
    text: '“A santidade não é uma exceção, é a normalidade do cristão.”\n“Deus não quer tirar o sofrimento, mas estar contigo nele.”\n“Francesco é o presente mais bonito que recebi.”'
  }
]
,'chiara-luce-badano': [
  {
    title: 'Infância e Fé',
    text: 'Chiara nasceu em Sassello, na Itália, em 1971. Desde pequena demonstrava uma fé viva, alegria contagiante e generosidade com os pobres. Era ativa na paróquia e tinha muitos amigos.'
  },
  {
    title: 'Movimento dos Focolares',
    text: 'Aos 9 anos, conheceu o Movimento dos Focolares e se encantou com o ideal de viver o Evangelho em cada momento. Assumiu com seriedade o lema “Deus Amor” e procurava viver a unidade em tudo.'
  },
  {
    title: 'Doença e Entrega',
    text: 'Aos 17 anos, foi diagnosticada com um câncer ósseo muito agressivo. Chiara enfrentou a dor com coragem e fé, recusando analgésicos fortes para permanecer consciente e oferecer tudo a Deus. Dizia: “Eu tenho tudo” e “Jesus, se Tu queres, eu também quero”.'
  },
  {
    title: 'Últimos Dias',
    text: 'Mesmo entre dores intensas, consolava os outros com um sorriso luminoso. Preparou seu funeral como se fosse uma festa de casamento: pediu roupas brancas e músicas alegres. Faleceu em 7 de outubro de 1990, com 18 anos.'
  },
  {
    title: 'Beatificação e Legado',
    text: 'Foi beatificada em 25 de setembro de 2010, em Roma. É considerada modelo de santidade jovem e esperança em meio ao sofrimento. Sua vida continua inspirando milhares de jovens pelo mundo.'
  },
  {
    title: 'Frases de Chiara Luce',
    text: '“Não tenho mais nada, mas tenho o coração, e com ele posso sempre amar.”\n“Jesus, se tu queres, eu também quero.”\n“Foi Ele quem me deu essa dor e me dá a força para suportá-la.”'
  }
],'joao-nepomuceno': [
  {
    title: 'Juventude e Formação',
    text: 'São João nasceu em Nepomuk, na atual República Tcheca, por volta de 1345. Foi ordenado sacerdote após estudos em Praga e Pádua, com destaque em Direito Canônico.'
  },
  {
    title: 'Fidelidade ao Sacramento da Confissão',
    text: 'Como confessor da rainha Joana da Baviera, esposa do rei Venceslau IV, João recusou-se a revelar as confissões da rainha, mesmo sob ameaça de morte.'
  },
  {
    title: 'Martírio',
    text: 'Por sua firmeza, o rei ordenou que ele fosse torturado e lançado da Ponte Carlos, no rio Moldava. Isso ocorreu em 1393. Diz-se que cinco estrelas brilharam no local de sua morte.'
  },
  {
    title: 'Culto e Canonização',
    text: 'Foi canonizado em 1729 por Bento XIII. É considerado o padroeiro dos confessores e defensores do sigilo sacramental. Sua imagem é frequentemente representada com um dedo nos lábios e cinco estrelas ao redor da cabeça.'
  },
  {
    title: 'Frases e Legado',
    text: '“É melhor morrer do que pecar.”\n\nSeu testemunho fortalece todos os sacerdotes a serem fiéis à confissão, mesmo sob perseguição. Sua festa é celebrada com grande solenidade na Europa Central.'
  }
],
'felix-genadio': [
    {
      title: 'Mártires de Uzális',
      text: 'Santos Félix e Genádio foram martirizados em Uzális, na África Proconsular (atual Tunísia). Sua memória é celebrada pela Igreja como exemplo de fé inabalável.'
    }
  ],
  'florencio-diocleciano': [
    {
      title: 'Mártires de Ósimo',
      text: 'Santos Florêncio e Diocleciano foram martirizados em Ósimo, no Piceno (atualmente nas Marcas, Itália). São lembrados por sua coragem e testemunho cristão.'
    }
  ],
  'abdas-edésio': [
    {
      title: 'Bispos Mártires na Pérsia',
      text: 'Santos Abdas e Edésio foram bispos na antiga Pérsia, mortos por ordem do rei Sapor II, juntamente com trinta e oito companheiros, por volta de 375/376, por se recusarem a renunciar à fé cristã.'
    }
  ],
  'peregrino-de-auxerre': [
    {
      title: 'Primeiro Bispo de Auxerre',
      text: 'São Peregrino foi o primeiro bispo de Auxerre, na França, e é venerado como mártir. Foi responsável pela construção da catedral da cidade e pela evangelização da região.'
    }
  ],
  'possidio-de-guelma': [
    {
      title: 'Discípulo de Santo Agostinho',
      text: 'São Possídio foi bispo de Guelma, na Numídia (atual Argélia), e discípulo de Santo Agostinho. Assistiu à sua morte e escreveu sua biografia, contribuindo para a preservação de seu legado.'
    }
  ],
  'fidolo-de-dax': [
    {
      title: 'Presbítero e Prisioneiro de Guerra',
      text: 'São Fídolo foi um presbítero na França que, segundo a tradição, foi feito prisioneiro de guerra pelo rei Teodorico, falecendo por volta de 540.'
    }
  ],
  'brandao-de-clonfert': [
    {
      title: 'O Navegador',
      text: 'São Brandão, abade de Clonfert, na Irlanda, é conhecido por suas viagens missionárias e pela célebre "navegação de São Brandão", uma jornada lendária em busca do Paraíso.'
    }
  ],
  'alexandre-de-jerusalem': [
    {
      title: 'Bispo e Fundador',
      text: 'São Alexandre de Jerusalém, natural da Capadócia, foi bispo e mártir do século III. Fundou uma biblioteca e escola em Jerusalém, inspirando-se no modelo de Alexandria.'
    }
  ],
  'vital-vladimiro-bajrak': [
    {
      title: 'Mártir Ucraniano',
      text: 'Beato Vital Vladimiro Bajrak foi um monge e mártir ucraniano, vítima da perseguição soviética. Beatificado em 27 de junho de 2001, é lembrado por sua fidelidade à fé cristã.'
    }
  ],
  'sao-jorge': [
  {
    title: 'Origens e Juventude',
    text: 'São Jorge nasceu por volta do ano 275 na Capadócia, região que hoje faz parte da Turquia. Era filho de pais cristãos e, após a morte do pai, mudou-se com a mãe para a Palestina, onde ingressou no exército romano, destacando-se por sua bravura e disciplina.'
  },
  {
    title: 'Soldado de Cristo',
    text: 'Apesar de pertencer ao exército imperial, Jorge nunca abandonou sua fé cristã. Durante a perseguição de Diocleciano, recusou-se a renunciar à sua crença e acabou sendo preso, torturado e finalmente decapitado em 23 de abril de 303.'
  },
  {
    title: 'O Dragão e o Martírio',
    text: 'A famosa lenda do dragão surgiu como símbolo da luta espiritual: o dragão representa o mal, e Jorge, montado em um cavalo branco, o vence com sua lança, representando a vitória da fé sobre o mal. Embora lendária, a imagem tornou-se um poderoso ícone cristão.'
  },
  {
    title: 'Devoção Mundial',
    text: 'São Jorge é padroeiro de vários países, como Inglaterra, Geórgia, Etiópia e Portugal, além de ser amplamente venerado no Brasil. A sua imagem é símbolo de proteção, especialmente entre os militares e devotos que enfrentam grandes batalhas pessoais.'
  },
  {
    title: 'Frases e Legado',
    text: '• Padroeiro dos escoteiros, militares e cavaleiros.\n\n• “Adotei a armadura da fé e a espada do Espírito para combater o mal.”\n\n• Seu nome é invocado por milhões em orações contra perigos e injustiças, sendo um símbolo de coragem, lealdade e proteção cristã.'
  }
],'padre-pio': [
  {
    title: 'Infância e Vocação',
    text: 'Padre Pio nasceu em Pietrelcina, Itália, em 1887, em uma família humilde. Desde pequeno, demonstrava profunda sensibilidade espiritual e desejo de ser sacerdote. Aos 15 anos, ingressou na Ordem dos Capuchinhos, sendo ordenado sacerdote em 1910.'
  },
  {
    title: 'Estigmas e Sofrimento',
    text: 'Em 1918, recebeu os estigmas visíveis de Cristo crucificado, tornando-se o primeiro sacerdote estigmatizado da história. Esses sinais permaneceram até sua morte e foram acompanhados de dores intensas, perseguições e incompreensões, mesmo dentro da Igreja.'
  },
  {
    title: 'Confissão e Direção Espiritual',
    text: 'Padre Pio dedicava horas por dia ao confessionário, onde atraía milhares de fiéis buscando orientação e perdão. Possuía dons místicos como bilocação, leitura das almas e profecia. Sua vida era marcada por oração constante, penitência e caridade.'
  },
  {
    title: 'Obras e Missão',
    text: 'Fundou o hospital "Casa Sollievo della Sofferenza" e grupos de oração em todo o mundo. Ensinava que o sofrimento unido a Cristo tem valor redentor e incentivava a frequência aos sacramentos e o amor profundo à Virgem Maria.'
  },
  {
    title: 'Legado e Canonização',
    text: 'Faleceu no dia 23 de setembro de 1968, com as palavras “Jesus, Maria” nos lábios. Foi beatificado por São João Paulo II em 1999 e canonizado em 2002. Seu túmulo em San Giovanni Rotondo é destino de milhões de peregrinos.'
  },
  {
    title: 'Frases marcantes',
    text: '• “Reza, espera e não te preocupes.”\n\n• “A oração é a melhor arma que temos.”\n\n• “O sofrimento é uma graça, é a chave do céu.”'
  }
]

,
'domingos-savio': [
  {
    title: 'Infância e Chamado precoce',
    text: 'Domingos Sávio nasceu em 2 de abril de 1842, em San Giovanni di Riva, na Itália. Desde pequeno demonstrava profunda sensibilidade espiritual. Aos cinco anos já servia à missa e aos sete recebeu a primeira comunhão, ocasião em que fez sua célebre resolução: “Antes morrer do que pecar”.'
  },
  {
    title: 'Encontro com Dom Bosco',
    text: 'Aos 12 anos, foi admitido no Oratório de São Francisco de Sales, em Turim, onde conheceu Dom Bosco. Logo se destacou pela bondade, alegria e vida interior intensa. Dom Bosco via nele uma alma extraordinária e escreveu sua biografia, intitulada “A Vida de Domingos Sávio”.'
  },
  {
    title: 'Espiritualidade e Maturidade',
    text: 'Domingos unia uma vida de oração profunda com uma alegria contagiante. Fundou o grupo “Companhia da Imaculada” com alguns colegas, que buscavam influenciar positivamente o ambiente escolar e ajudar os mais necessitados. Seu lema era: “Quero me tornar santo e rápido!”.'
  },
  {
    title: 'Doença e Morte Santa',
    text: 'Aos 14 anos, começou a apresentar sinais de doença respiratória. Retornou para casa e ofereceu sua enfermidade com grande fé. Morreu no dia 9 de março de 1857 com apenas 15 anos, após dizer: “Que coisa tão bela eu estou vendo!”. Sua morte serena e santa impressionou a todos.'
  },
  {
    title: 'Canonização e Legado',
    text: 'Foi beatificado em 1950 e canonizado por Pio XII em 1954, tornando-se o padroeiro dos adolescentes e estudantes. Sua vida é um exemplo de que a santidade é possível mesmo na juventude, por meio da amizade com Jesus, do amor à Eucaristia e da devoção à Virgem Maria.'
  },
  {
    title: 'Frases marcantes de Domingos Sávio',
    text: '• “Antes morrer do que pecar.”\n• “A santidade consiste em estar sempre alegre.”\n• “Jesus e Maria, sede sempre meus amigos.”'
  }
],'santo-antao-do-deserto': [
  {
    title: 'Juventude e Conversão',
    text: 'Antão nasceu por volta do ano 251 no Egito. Após a morte dos pais, decidiu seguir literalmente o Evangelho: vendeu seus bens, distribuiu aos pobres e retirou-se para o deserto, buscando a Deus na solidão e oração contínua.'
  },
  {
    title: 'Vida no Deserto',
    text: 'No deserto, Santo Antão viveu em rigoroso ascetismo, jejum e silêncio. Construiu uma fama de santidade e sabedoria, sendo procurado por discípulos e curiosos. Sua luta contra tentações demoníacas é um dos traços mais conhecidos de sua vida espiritual intensa.'
  },
  {
    title: 'Batalhas contra os demônios',
    text: 'Antão relatava combates espirituais reais, nas quais o demônio aparecia de diversas formas para tentar afastá-lo de Deus. Essas experiências foram entendidas como batalhas internas contra paixões, orgulho e tentações carnais, simbolizando o combate espiritual do cristão.'
  },
  {
    title: 'Legado e influência',
    text: 'Sua biografia escrita por Santo Atanásio tornou-se um best-seller espiritual, influenciando gerações de monges e a tradição monástica no Oriente e no Ocidente. É venerado como o “Pai dos Monges” e inspirador dos mosteiros cristãos.'
  },
  {
    title: 'Curiosidades',
    text: '🔸 Sua fama era tão grande que o imperador Constantino lhe escreveu pedindo conselhos.\n🔸 Vivia em uma caverna e comia apenas uma vez por dia, pão e água.\n🔸 Fundou uma comunidade informal de eremitas no deserto da Tebaida.\n🔸 Mesmo isolado, era procurado por pessoas de toda a parte para conselhos espirituais.'
  }
],
'carlo-acutis': [
  {
    title: 'Infância e Fé precoce',
    text: 'Carlo nasceu em Londres, mas foi criado em Milão. Desde muito pequeno demonstrava um amor especial pela Eucaristia e pela Virgem Maria. Pediu para receber a Primeira Comunhão aos 7 anos e desde então nunca deixou de participar da Missa diária e rezar o Rosário.'
  },
  {
    title: 'Apostolado Digital',
    text: 'Apaixonado por tecnologia, Carlo usava seus conhecimentos em informática para evangelizar. Criou um site com mais de 160 milagres eucarísticos documentados ao redor do mundo, com o objetivo de levar as pessoas a valorizarem mais a Eucaristia, que ele chamava de “minha estrada para o céu”.'
  },
  {
    title: 'Vida de Santidade',
    text: 'Carlo era alegre, caridoso, simples. Ajudava colegas de escola, os pobres da rua, e dizia: “Todos nascem como originais, mas muitos morrem como cópias.” Vivia a santidade no ordinário e foi um exemplo de pureza, humildade e vida centrada em Cristo.'
  },
  {
    title: 'Doença e morte',
    text: 'Em 2006, Carlo foi diagnosticado com uma leucemia fulminante. Ofereceu todo seu sofrimento “pelo Papa e pela Igreja”. Faleceu aos 15 anos em 12 de outubro de 2006. Seu corpo permanece incorrupto em Assis, onde está sepultado com roupas de tênis e jeans, como um jovem moderno.'
  },
  {
    title: 'Legado e Beatificação',
    text: 'Em 10 de outubro de 2020, Carlo foi beatificado pelo Papa Francisco em Assis. É considerado um exemplo de santidade jovem para a era digital e já é invocado como intercessor por muitos adolescentes, programadores, catequistas e evangelizadores online.'
  },
  {
    title: 'Frases marcantes',
    text: '“A Eucaristia é a minha rodovia para o céu.” / “Estar sempre unido a Jesus, esse é o meu plano de vida.” / “A tristeza é o olhar voltado para si mesmo, a felicidade é o olhar voltado para Deus.”'
  }
]
,'joana-darc': [
  {
    title: 'Chamado Divino e Missão',
    text: 'Desde os 13 anos, Joana d’Arc afirmou ouvir vozes celestiais de São Miguel, Santa Catarina e Santa Margarida, que a instruíram a libertar a França da ocupação inglesa. Obediente a esse chamado, enfrentou a incredulidade dos líderes e partiu com coragem para comandar tropas em nome de Deus.'
  },
  {
    title: 'Conquista e Vitória',
    text: 'Sem treinamento militar, Joana liderou o exército francês à vitória na cidade de Orléans em 1429. Sua fé e bravura inspiraram os soldados, restaurando a moral nacional. Foi determinante para a coroação de Carlos VII em Reims.'
  },
  {
    title: 'Martírio',
    text: 'Em 1430, foi capturada pelos borguinhões e entregue aos ingleses. Submetida a um julgamento político e religioso, foi acusada de heresia e queimada viva em 1431. Suas últimas palavras foram: “Jesus, Jesus”.'
  },
  {
    title: 'Reabilitação e Canonização',
    text: 'Em 1456, a Igreja anulou o julgamento, declarando sua inocência. Foi beatificada em 1909 por Pio X e canonizada em 1920 por Bento XV. Hoje, é considerada símbolo de fidelidade à vontade de Deus mesmo diante da perseguição e da morte.'
  },
  {
    title: 'Curiosidades e Legado',
    text: '• É padroeira da França e das mulheres que servem nas Forças Armadas.\n• Foi canonizada quase 500 anos após sua morte.\n• Seu estandarte trazia a imagem de Cristo e os nomes de Jesus e Maria.\n• É uma das poucas mulheres reconhecidas como comandante militar na história da Igreja.'
  }
],
'santa-teresa-davila': [
    {
      title: 'Infância e Conversão',
      text: 'Santa Teresa de Ávila nasceu em 28 de março de 1515, na Espanha. Desde pequena demonstrava interesse por Deus, mas foi na vida adulta que passou por uma profunda conversão interior, abandonando a vida mundana e buscando a santidade através da oração e da reforma do Carmelo.'
    },
    {
      title: 'Reforma do Carmelo',
      text: 'Inconformada com a vida relaxada em alguns conventos, fundou o ramo dos Carmelitas Descalços. Junto a São João da Cruz, promoveu uma vida monástica mais austera, centrada na oração interior e na pobreza radical.'
    },
    {
      title: 'Experiências Místicas',
      text: 'Santa Teresa teve visões e êxtases místicos profundos, entre eles o famoso “transverberação do coração”. Suas experiências foram reconhecidas como autênticas pela Igreja e se tornaram base de sua espiritualidade.'
    },
    {
      title: 'Obras e Escritos',
      text: 'Autora de clássicos espirituais como “O Castelo Interior” e “Caminho de Perfeição”, ela escreveu com profundidade e simplicidade sobre o progresso da alma na oração. Sua obra é referência da mística cristã.'
    },
    {
      title: 'Doutora da Igreja',
      text: 'Foi proclamada Doutora da Igreja por Paulo VI em 1970 — a primeira mulher a receber esse título. É padroeira dos escritores e modelo de mulher forte e contemplativa.'
    }
  ],
  'sao-joao-da-cruz': [
    {
      title: 'Infância e Vocação',
      text: 'São João da Cruz nasceu em 1542, na Espanha. Desde cedo sentiu o chamado à vida religiosa e entrou para a ordem carmelita. Ali conheceu Santa Teresa de Ávila, com quem iniciou a reforma dos Carmelitas Descalços.'
    },
    {
      title: 'Reforma e Perseguição',
      text: 'Por defender uma vida mais austera e recolhida, enfrentou grandes perseguições, inclusive sendo preso por seus próprios irmãos de ordem. Mesmo no cárcere, compôs alguns de seus poemas espirituais mais profundos.'
    },
    {
      title: 'Obras Místicas',
      text: 'Escreveu tratados espirituais como “A Noite Escura da Alma” e “Cântico Espiritual”, nos quais descreve a purificação da alma e a união mística com Deus. Seus escritos são considerados o ápice da mística cristã.'
    },
    {
      title: 'Doutor da Igreja',
      text: 'Foi declarado Doutor da Igreja por Bento XIII em 1726. Sua vida é testemunho de contemplação, silêncio e abandono total nas mãos de Deus.'
    }
  ],
  'santa-isabel-da-trindade': [
    {
      title: 'Infância e Vocação',
      text: 'Santa Isabel da Trindade nasceu em 18 de julho de 1880, na França. Desde pequena tinha grande sensibilidade espiritual. Após a Primeira Comunhão, sentiu-se chamada à vida de oração e silêncio.'
    },
    {
      title: 'Vida no Carmelo',
      text: 'Ingressou no Carmelo de Dijon aos 21 anos. Viveu ali apenas cinco anos, mas com intensa profundidade espiritual. Desejava ser “louveur da glória de Deus” e viver a Santíssima Trindade no mais íntimo do coração.'
    },
    {
      title: 'Escritos e Legado',
      text: 'Mesmo em meio à doença (Doença de Addison), escreveu cartas e meditações que revelam sua união com Deus. Suas obras são joias da espiritualidade carmelita, e influenciaram teólogos e místicos posteriores.'
    },
    {
      title: 'Frases marcantes',
      text: '“Creio que no céu serei a louvor de glória diante da Santíssima Trindade.” / “Tudo passa, só Deus permanece.”'
    },
    {
      title: 'Canonização',
      text: 'Foi canonizada em 2016 pelo Papa Francisco e é modelo de contemplação, silêncio e união com o Deus Uno e Trino.'
    }
  ],
  'santo-ivo': [
    {
      title: 'Infância e Vocação',
      text: 'Santo Ivo nasceu em 1253, na Bretanha, França. Desde jovem, destacou-se por seu amor à justiça e zelo pelos pobres. Estudou Direito e Teologia nas universidades de Paris e Orleães.'
    },
    {
      title: 'Ministério e Advocacia',
      text: 'Tornou-se juiz e sacerdote. Como advogado, recusava-se a defender causas injustas. Era conhecido como “advogado dos pobres” por sua dedicação à defesa dos mais necessitados.'
    },
    {
      title: 'Caridade e Vida Simples',
      text: 'Transformou seu solar em abrigo para pobres e doentes. Era austero e profundamente piedoso, servindo como modelo de integridade cristã na vida pública.'
    },
    {
      title: 'Morte e Canonização',
      text: 'Faleceu em 1303. Foi canonizado pelo Papa Clemente VI em 1347. É padroeiro dos advogados, defensores públicos e juristas.'
    },
    {
      title: 'Legado e Devoção',
      text: 'Sua festa é celebrada em 19 de maio. É invocado como intercessor nas causas jurídicas e símbolo da justiça unida à misericórdia.'
    }
  ],
  'sao-pedro-celestino-v': [
    {
      title: 'Vida Eremítica e Santidade',
      text: 'Pedro nasceu em 1215, na Itália. Viveu como eremita durante muitos anos, atraindo discípulos e fundando a ordem dos Celestinos. Era conhecido por sua austeridade e dons místicos.'
    },
    {
      title: 'Eleição como Papa',
      text: 'Foi eleito Papa em 1294 aos 79 anos, após longa sede vacante. Apesar de relutante, aceitou por obediência à Igreja, tornando-se Celestino V.'
    },
    {
      title: 'Renúncia Histórica',
      text: 'Sentindo-se inadequado para o cargo, renunciou poucos meses depois — sendo o primeiro Papa a fazê-lo voluntariamente. Sua renúncia foi aceita pelo sucessor Bonifácio VIII.'
    },
    {
      title: 'Jubileu do Perdão',
      text: 'Antes de renunciar, instituiu o “Jubileu do Perdão”, concedendo indulgência plenária aos fiéis que visitassem a Basílica de Collemaggio em L’Aquila.'
    },
    {
      title: 'Canonização e Devoção',
      text: 'Foi canonizado em 1313. Sua vida inspira renúncia ao poder por amor à vontade de Deus. Sua memória é celebrada em 19 de maio.'
    }
  ],
  'santo-urbano-i': [
    {
      title: 'Papa e Mártir',
      text: 'Santo Urbano I foi Papa entre 222 e 230, durante um período de relativa paz para os cristãos. Trabalhou para fortalecer a comunidade cristã e a unidade da Igreja.'
    },
    {
      title: 'Defensor da Igreja',
      text: 'Defendia os direitos da Igreja e incentivava a caridade entre os cristãos. Converteu muitos pagãos e organizou o clero em tempos difíceis.'
    },
    {
      title: 'Tradições e Devoção',
      text: 'Embora haja poucos dados históricos, é venerado como mártir e santo. Sua festa é celebrada em 19 de maio em alguns calendários litúrgicos.'
    }
  ],
  'sao-crispim-de-viterbo': [
    {
      title: 'Infância e Vocação',
      text: 'Nascido em 1668 na Itália, Pedro Fioretti entrou para os Capuchinhos com o nome de Frei Crispim. Foi irmão leigo, dedicado aos trabalhos humildes e ao cuidado dos doentes.'
    },
    {
      title: 'Vida de Serviço e Oração',
      text: 'Exerceu o ofício de esmoleiro por 40 anos. Era alegre, caridoso e profundamente unido a Deus. Chamado de “santo da alegria”, acolhia todos com um sorriso.'
    },
    {
      title: 'Canonização',
      text: 'Foi o primeiro santo canonizado por São João Paulo II, em 1983. É exemplo de humildade ativa e espiritualidade capuchinha vivida no cotidiano.'
    }
  ],
  'bernardino-de-sena': [
    {
      title: 'Infância e Vocação Franciscana',
      text: 'São Bernardino nasceu em Massa Marittima, Itália, em 1380. Órfão ainda jovem, foi criado por tias piedosas. Aos 22 anos, entrou para a Ordem dos Frades Menores, vivendo com extremo rigor, humildade e oração.'
    },
    {
      title: 'Pregador Popular e Devoto do Nome de Jesus',
      text: 'Era conhecido por seu dom extraordinário de pregação, atraindo multidões por onde passava. Propagou a devoção ao Santíssimo Nome de Jesus, simbolizado pelas letras “IHS”, promovendo seu uso em altares e igrejas.'
    },
    {
      title: 'Reformador Franciscano',
      text: 'São Bernardino trabalhou intensamente na reforma da ordem franciscana, promovendo o retorno à vida austera e ao espírito original de São Francisco. Fundou diversos conventos da chamada “Observância Franciscana”.'
    },
    {
      title: 'Últimos Anos e Canonização',
      text: 'Mesmo debilitado pela saúde frágil, percorreu a Itália a pé até o fim de seus dias, pregando com vigor. Morreu em 20 de maio de 1444. Foi canonizado apenas seis anos depois, em 1450, por Nicolau V.'
    },
    {
      title: 'Legado e Devoção',
      text: '• É padroeiro dos publicitários, comunicadores e das gráficas.\n• Seu símbolo, o monograma “IHS”, se espalhou por toda a cristandade.\n• É invocado também contra discórdias e disputas civis.'
    }
  ],
  'beata-maria-crescencia-perez': [
    {
      title: 'Vida e Vocação',
      text: 'Beata Maria Crescência Pérez nasceu no Chile e entrou para a Congregação das Filhas de Maria do Santíssimo do Horto. Viveu com humildade e dedicação aos pobres, doentes e crianças. Faleceu em 1932 e foi beatificada por sua santidade cotidiana e serviço fiel.'
    }
  ],
  'santa-lidia-de-tiatira': [
    {
      title: 'Conversão e Hospitalidade',
      text: 'Santa Lídia foi comerciante de púrpura em Tiatira e a primeira pessoa a se converter ao cristianismo em solo europeu após ouvir a pregação de São Paulo em Filipos. Convidou Paulo e seus companheiros para se hospedarem em sua casa, tornando-se símbolo de hospitalidade cristã.'
    }
  ],
  'santa-aurea-de-ostia': [
    {
      title: 'Testemunho de Fé',
      text: 'Santa Áurea foi martirizada em Óstia, na Itália, durante as perseguições aos cristãos. Pouco se sabe sobre sua vida, mas seu testemunho inspirou devoção e veneração nas gerações posteriores.'
    }
  ],
  'sao-baudelio-de-nimes': [
    {
      title: 'Mártir da Fé',
      text: 'São Baudélio foi martirizado em Nimes, na Gália, por sua fidelidade ao cristianismo. Sua coragem diante da perseguição permanece como exemplo de constância e entrega.'
    }
  ],
  'sao-talaleu': [
    {
      title: 'Martírio na Cilícia',
      text: 'São Talaleu foi martirizado no século III em Egea, na Cilícia (atual Turquia). Sofreu cruéis torturas e permaneceu fiel à fé cristã até o fim.'
    }
  ],
  'sao-lucifero-de-cagliari': [
    {
      title: 'Defensor da Fé Nicena',
      text: 'Bispo de Cágliari, São Lucífero foi exilado por se opor aos arianos e defender o Credo Niceno. Após o exílio, retornou à sua diocese e morreu como confessor da fé em 370.'
    }
  ],
  'santo-hilario-de-toulouse': [
    {
      title: 'Bispo e Construtor',
      text: 'Santo Hilário, bispo de Toulouse, construiu uma basílica sobre o túmulo de São Saturnino. Viveu no século V e é lembrado como zeloso pastor do povo.'
    }
  ],
  'santo-austregisilio': [
    {
      title: 'Bispo Caridoso',
      text: 'Bispo de Bourges, Austregisílio dedicou-se aos pobres, órfãos e doentes. É lembrado por seu ministério compassivo e dedicação aos mais necessitados.'
    }
  ],
  'santo-anastasio-de-brescia': [
    {
      title: 'Pastor Fiel',
      text: 'Bispo de Bréscia no século VII, Santo Anastásio é lembrado como homem de fé e zelo pastoral, mesmo em tempos turbulentos.'
    }
  ],
  'sao-teodoro-de-pavia': [
    {
      title: 'Firmeza no Exílio',
      text: 'Bispo de Pavia durante conflitos entre Francos e Lombardos, São Teodoro foi exilado por sua fidelidade à Igreja e ao povo de Deus.'
    }
  ],
  'beato-guido-de-gheraldesca': [
    {
      title: 'Eremita na Toscana',
      text: 'Beato Guido viveu como eremita em Castagneto, Itália. Conhecido por sua vida de oração, penitência e silêncio, faleceu por volta de 1134.'
    }
  ],
  'beata-colomba-de-rieti': [
    {
      title: 'Pacificadora de Perúgia',
      text: 'Beata Colomba (Ângela) de Rieti foi dominicana e mística. Promoveu a paz entre grupos em conflito na cidade e viveu em profunda união com Cristo.'
    }
  ],
  'sao-protasio-chomg': [
    {
      title: 'Mártir Coreano',
      text: 'Após ter abandonado a fé, São Protásio voltou ao cristianismo e confessou publicamente sua fé mesmo diante de terríveis torturas. Morreu mártir em 1839.'
    }
  ],
  'beata-josefa-stenmanns': [
    {
      title: 'Missionária na Holanda',
      text: 'Beata Josefa cofundou a Congregação das Irmãs Missionárias Servas do Espírito Santo. Viveu com dedicação à evangelização e ao serviço. Faleceu em 1903.'
    }
  ],
  'santo-arcangelo-tadini': [
    {
      title: 'Padroeiro dos Operários',
      text: 'Fundador das Irmãs Operárias da Santa Casa de Nazaré, dedicou sua vida à justiça social e à dignidade dos trabalhadores. Canonizado por seu compromisso cristão com os pobres.'
    }
  ],
  'beato-luis-talamoni': [
    {
      title: 'Educador e Fundador',
      text: 'Presbítero italiano e fundador das Irmãs Misericordinas de São Gerardo. Foi um grande educador e agente de transformação social, falecido em 1926.'
    }
  ]      ,'santa-rita-de-cassia': [
  {
    title: 'Infância e Vocação',
    text: 'Santa Rita nasceu em 1381, em Roccaporena, uma aldeia próxima de Cássia, na Itália. Desde a infância, demonstrava grande inclinação à vida de oração, caridade e desejo de consagração a Deus, embora tenha seguido o caminho do matrimônio devido à vontade dos pais.'
  },
  {
    title: 'Vida de Casada e Maternidade',
    text: 'Rita se casou com Paolo Mancini, um homem de temperamento difícil, com quem teve dois filhos. Suportou durante anos agressões verbais e comportamentos violentos, sempre oferecendo sua vida a Deus em espírito de paciência, oração e caridade.'
  },
  {
    title: 'Perdão e Viúva',
    text: 'Após a morte violenta de seu marido, vítima de uma emboscada, Rita enfrentou ainda a dor da morte precoce de seus dois filhos. Demonstrou então um perdão radical, intercedendo pela conversão dos assassinos e abandonando-se totalmente à vontade de Deus.'
  },
  {
    title: 'Vida Religiosa e Estigma',
    text: 'Com a entrada no Mosteiro Agostiniano de Cássia, entregou-se à vida de oração, penitência e contemplação. Recebeu um estigma na testa, semelhante a um espinho da coroa de Cristo, que permaneceu até sua morte, sinal de sua profunda união com a Paixão de Jesus.'
  },
  {
    title: 'Morte, Legado e Devoção',
    text: '• Faleceu em 22 de maio de 1457.\n• É conhecida como a “Santa das Causas Impossíveis”.\n• Seus devotos recorrem a ela especialmente em situações desesperadoras.\n• Seu corpo permanece incorrupto no Santuário de Cássia, atraindo milhares de peregrinos todos os anos.'
  }
]
 ,'santo-inacio-de-loyola': [
  {
    title: 'Infância, Juventude e Carreira Militar',
    text: 'Nascido em 24 de outubro de 1491, na Espanha, Inácio (Iñigo López de Loyola) pertencia a uma família nobre e sonhava com glórias militares. Viveu uma juventude marcada por busca de prestígio, honra e combates.'
  },
  {
    title: 'Conversão e Experiência Mística',
    text: 'Durante a defesa da cidade de Pamplona, foi gravemente ferido por uma bala de canhão que quebrou sua perna. Durante a longa recuperação, leu a vida de Cristo e dos santos, o que provocou uma profunda conversão espiritual.'
  },
  {
    title: 'Caminho Espiritual e Exercícios',
    text: 'Inácio se retirou para Manresa, onde viveu um intenso período de oração, penitência e discernimento espiritual. Foi nesse tempo que começou a sistematizar os Exercícios Espirituais, método de oração, meditação e exame interior.'
  },
  {
    title: 'Fundação da Companhia de Jesus',
    text: 'Após estudar filosofia e teologia em Paris, formou um grupo de companheiros comprometidos com a missão de evangelização, fundando a Companhia de Jesus (Jesuítas) em 1540. A ordem tornou-se uma das maiores forças missionárias, educacionais e de reforma da Igreja Católica.'
  },
  {
    title: 'Legado e Espiritualidade',
    text: '• Faleceu em 31 de julho de 1556, em Roma.\n• Foi canonizado em 1622 por Gregório XV.\n• É patrono dos exercícios espirituais, do discernimento e dos retiros espirituais.\n• Seu legado permanece vivo nas instituições de ensino, missões e na espiritualidade inaciana, praticada mundialmente.'
  }
],'santo-agostinho': [
  {
    title: 'Infância, Juventude e Conversão',
    text: 'Agostinho nasceu em 354, em Tagaste (atual Argélia). Teve uma juventude marcada pela busca desenfreada de prazeres, reconhecimento e respostas filosóficas. Por influência de sua mãe, Santa Mônica, e após um longo caminho de inquietações, converteu-se ao cristianismo em 387, batizado por Santo Ambrósio.'
  },
  {
    title: 'Ministério e Atuação como Bispo',
    text: 'Após sua conversão, Agostinho retornou à África, foi ordenado sacerdote e, posteriormente, bispo de Hipona. Atuou fortemente contra heresias como o maniqueísmo, donatismo e pelagianismo, sempre buscando defender a verdade da fé.'
  },
  {
    title: 'Obras e Legado Intelectual',
    text: 'Santo Agostinho é autor de obras fundamentais para a teologia cristã e filosofia ocidental. Suas reflexões sobre graça, livre-arbítrio, tempo e a busca de Deus moldaram séculos de pensamento.'
  },
  {
    title: 'Livros Principais',
    text: '• Confissões\n• A Cidade de Deus\n• De Trinitate (Sobre a Trindade)\n• Sobre o Livre Arbítrio\n• Sobre o Catecumenato dos Simples\n• Sermões, cartas e tratados diversos'
  },
  {
    title: 'Frases Marcantes',
    text: '• “Fizeste-nos para Ti, Senhor, e inquieto está o nosso coração enquanto não repousa em Ti.”\n• “Tarde te amei, ó Beleza tão antiga e tão nova, tarde te amei.”\n• “Ama e faze o que quiseres.”'
  },
  {
    title: 'Morte e Devoção',
    text: 'Faleceu em 28 de agosto de 430, durante o cerco de Hipona pelos vândalos. É venerado como um dos maiores Doutores da Igreja e padroeiro dos teólogos e filósofos.'
  }
],'sao-tomas-de-aquino': [
  {
    title: 'Infância e Formação',
    text: 'Tomás nasceu em 1225, no castelo de Roccasecca, Itália, em uma família nobre. Desde jovem demonstrou enorme inteligência e desejo pela vida religiosa. Estudou no Mosteiro de Montecassino e depois na Universidade de Nápoles, onde entrou na Ordem dos Dominicanos.'
  },
  {
    title: 'Vida Acadêmica e Ministério',
    text: 'Teve como mestres Alberto Magno e se destacou em Paris e Roma como professor e pensador. Sua missão foi demonstrar que a fé e a razão caminham juntas, respondendo aos desafios do pensamento de sua época.'
  },
  {
    title: 'Obras e Contribuição Intelectual',
    text: 'São Tomás é autor de uma obra monumental que busca explicar e sistematizar a fé cristã de forma lógica e filosófica, utilizando especialmente a filosofia de Aristóteles.'
  },
  {
    title: 'Livros Principais',
    text: '• Suma Teológica\n• Suma Contra os Gentios\n• Comentários à obra de Aristóteles (Ética, Metafísica, Física, Política)\n• Sobre o Ser e a Essência\n• Diversas questões disputadas e opúsculos teológicos'
  },
  {
    title: 'Frases Marcantes',
    text: '• “A fé e a razão são como duas asas pelas quais o espírito humano se eleva à contemplação da verdade.”\n• “Quem não vive para servir, não serve para viver.”\n• “Nada há no intelecto que não tenha passado pelos sentidos.”\n• “A contemplação das coisas divinas é a finalidade última do homem.”'
  },
  {
    title: 'Morte e Devoção',
    text: 'Faleceu em 7 de março de 1274, a caminho do Concílio de Lyon. Foi canonizado em 1323 e proclamado Doutor da Igreja. É padroeiro das universidades, faculdades, estudantes e teólogos.'
  }
]



}













