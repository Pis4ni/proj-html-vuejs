import { reactive } from 'vue';
import { DateTime } from 'luxon';


export const store = reactive({
    header: {
        imgLogoName:'dark-logo.png',
        countdownTicket:{
            txtContent:'Starts TOMORROW Our biggest event of the year...',
            btnTitle:'Get ticket',
            countdownEnd:  DateTime.fromFormat('22/09/2023 00:00:00', 'dd/MM/yyyy HH:mm:ss'),

        },
        linkList: [
            {
              nome: 'home',
              sublistLink: [
                {
                  linkName: 'link 1',
                  linkPath: '#'
                },
                {
                  linkName: 'link 2',
                  linkPath: '#'
                },
              ]
            },
            {
              nome: 'pages',
              sublistLink: [
                {
                  linkName: 'link 1',
                  linkPath: '#'
                },
                {
                  linkName: 'link 2',
                  linkPath: '#'
                },
              ]
            },
            {
              nome: 'courses',
              sublistLink: [
                {
                  linkName: 'link 1',
                  linkPath: '#'
                },
                {
                  linkName: 'link 2',
                  linkPath: '#'
                },
              ]
            },
            {
              nome: 'features',
              sublistLink: [
                {
                  linkName: 'link 1',
                  linkPath: '#'
                },
                {
                  linkName: 'link 2',
                  linkPath: '#'
                },
              ]
            },
            {
              nome: 'blog',
              sublistLink: [
                {
                  linkName: 'link 1',
                  linkPath: '#'
                },
                {
                  linkName: 'link 2',
                  linkPath: '#'
                },
              ]
            },
            {
              nome: 'shop',
              sublistLink: [
                {
                  linkName: 'link 1',
                  linkPath: '#'
                },
                {
                  linkName: 'link 2',
                  linkPath: '#'
                },
              ]
            }
          ],
          
        iconPath:{
            twitter:'#',
            facebook:'#',
            instagram:'#',
            linkedin:'#',
        }

        
    },
    main: {
      sectionWelcome: {
        bgImg:[

        ],
        cardsImg:[
          'artist-hero-image-01.jpg',
          'artist-course-08-480x480.jpg',
          'artist-hero-image-04.jpg',
        ],
        txtContent:{
          title:'Hello, im Matin',
          content:'Artist Coaching And Mentoring Might Be for You.'
        },
        txtContentB:{
          title:'Artist coaching',
          content:'I understand what it takes to create. I can help you with'
        },
        btn:{
          txt:'Get started today',
          link:'#'
        },
        cardsImgTxt: [
          {
            img:'artist-box-image-01',
            heading:'Online Courses',
            content:'Online art coaching new offers you a very powerful way to redesign your artist mind.'
          },
          {
            img:'artist-box-image-02',
            heading:'One to One',
            content:'Getting the necessary clarity about the current state to help you improve your ability'
          },
          {
            img:'artist-box-image-03',
            heading:'Anywhere',
            content:'Access to valuable and portable program wich allow you to setup and live anywhere you want.'
          },
          {
            img:'artist-box-image-04',
            heading:'On Time',
            content:'Punctuality is our top priority because it`s an essetial criteria to assess a program quality'
          },
        ]
      }
    },
    footer: {
        
    },
})