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

    ],'john-paul-ii': [
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
  ]
}


