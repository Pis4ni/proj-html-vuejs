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
})