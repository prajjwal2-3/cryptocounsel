export const equity = [{
    number:1,
    title:'Key Terms',
    description:'Enter the key deal terms for your funding round. The Term Sheet, Shareholders Agreement and Articles will he built to reflect these terms',
    share:false,
    green:true,
    button:false,
    button_text:'',
    to:''
},
{
    number:2,
    title:'Term Sheet',
    description:`Share the Term Sheet with your investors to review and sign, or download and send them as a PDF.
    In Key Deal Terms Display Options you can choose to show or hide the investor names.
     That's useful when sharing initial drafts, but be sure to show investor names before inviting them to sign.`,
    share:true,
    green:false,
    button:true,
    button_text:'View',
    to:'/raise/equity/dashboard'
},
{
    number:3,
    title:'Deal terms',
    description:`If you've previously done a funding round with investor consent provisions then those 
    investors will need to sign this consent notice.
    If this is your first funding round or there were no investor consent provisions in your last round then you can ignore this.`,
    share:true,
    green:false,
    button:true,
    button_text:'Complete',
    to:'/raise/equity/dashboard'
},
{
    number:4,
    title:'Transaction Documents',
    description:`If you've previously done a funding round with investor consent
     provisions then those investors will need to sign this consent notice.
    If this is your first funding round or there were no investor consent provisions in your last round then you can ignore this.`,
    share:true,
    green:false,
    button:true,
    button_text:'Complete',
    to:'/raise/equity/dashboard'
},
{
    number:5,
    title:'Previous Investor consent',
    description:`If you've previously done a funding round with investor consent 
    provisions then those investors will need to sign this consent notice.
    If this is your first funding round or there were no investor consent provisions in your last round then you can ignore this.`,
    share:true,
    green:false,
    button:true,
    button_text:'Complete',
    to:'/raise/equity/dashboard'
},
{
    number:6,
    title:'Preemption notice',
    description:`If your existing shareholders have preemption rights, you may need to send a preemption offer or disapply preemption. 
    Most startups can disapply preemption with a shareholders' resolution. If you need guidance, click 'Chat'.`,
    share:true,
    green:false,
    button:true,
    button_text:'Complete',
    to:'/raise/equity/dashboard'
},
{
    number:7,
    title:'Track Your Investment',
    description:`Time to contact your investors to send the money! Use our funds tracker to track the investments so you know who to chase.
    As you receive each investment enter it here, and then we'll also know how to date your share certificates and when to close the round.
    All funds received!`,
    share:true,
    green:false,
    button:true,
    button_text:'Track Investment',
    to:'/raise/equity/dashboard'
},
{
    number:8,
    title:'Shareholder resolution',
    description:`The Shareholders Resolution needs to be circulated to your existing shareholders to approve the funding round. 
    It generally needs to be signed by at least 75% (by number of shares held) of voting shareholders.
    Unlock and complete this document once the Shareholders Agreement has been 
    finalised and before you've received the first funds. This article explains what all the numbers in the Shareholders Resolution mean.`,
    share:true,
    green:false,
    button:true,
    button_text:'Complete',
    to:'/raise/equity/dashboard'
},
{
    number:9,
    title:'Board Resolution',
    description:`These board minutes will document the meeting where the board approves this funding round.
    Unlock this document and hold your board meeting once the Shareholders Agreement has been finalised and before you've received the first funds.`,
    share:true,
    green:false,
    button:true,
    button_text:'View',
    to:'/raise/equity/dashboard'
},
]
export const Questions = [{
    number:1,
    contenType:'accor',
    headerType:'toggle',
    page:'Term sheet',
    nextPage:'Deal Terms',
    documents:[
       {
        title:'SSA',
        description:'Gorem ipsum dolor sit amet, consectetur adipiscing elit.',
        button:true,
        button_text:'View'
       },
       {
        title:'SHA',
        description:'Gorem ipsum dolor sit amet, consectetur adipiscing elit.',
        button:true,
        button_text:'View'
       },
       {
        title:'DI',
        description:'Gorem ipsum dolor sit amet, consectetur adipiscing elit.',
        button:true,
        button_text:'View'
       }
    ],
    question:[
        {   
            number:'1',
            title:'Describe your Business',
            ques:[
                'Business means...',
                'The investment will be used for...'
            ]
        },
        {
            number:'2',
            title:'Instant Investment',
            ques:[
                'Enable Instant Investment top up after the round has closed?',
                'What is the maximum allowable additional investment',
                'Until what date do you want to be able to add additional Investment?',
                'Will existing shareholders have a preemption right on the additional investments?',
                'What share class will the additional investors get?'
            ]
        },
        {
            number:'3',
            title:'Preemption',
            ques:[
                'If you were to offer the right to participate in future funding rounds, who would you offer this right to?',
                'If you were to offer the right to purchase shares from another shareholder before they were offered to the outside market, who would you offer this right to?',

            ]
        },
        {
            number:'4',
            title:'Drag, Tag and Co-Sale Rights',
            ques:[
                'Do you want to offer standard Drag Along provisions?',
                'What percent shareholder majority is needed to trigger. drag-along provisions? (eg. 75)',
                'Do you want to offer standard Tag Along provisions?',
                'Do you want to offer standard Co-Sale provisions?',
                'Do these Co-Sale provisions apply only to founders or to shareholders too?',

            ]
        },
        {
            number:'5',
            title:'Investor Consent',
            ques:[
                'Investor Majority includes which investors?',
                'Investor Consent means what of those investors, by number of shares held?',
                'Board/Investor Approvals',
            ]
        },
        {
            number:'6',
            title:'Board Meetings and Approvals',
            ques:[
               'How many board meetings per year are you committing to?',
               'Who is eligible to be appointed chair of the board?',
               'Who chooses the chairperson?',
               'Whats the name of the first appointed chairperson?',
               'In the event of a board deadlock, who has the final casting vote?',
               'Board approval will be needed for the hiring and removal of key personnel with a salary above how much per year?',
               'Board approval will be needed for hiring anyone with a termination period of more than',
               'Board approval will be needed for debt or capital expenditure not in the business plan above how much?',
               'Board approval will be needed for company borrowing above how much?',
               'Board approval will be needed for the disposal of company assets above how much?'
            ]
        },
        {
            number:'7',
            title:'Directors & Observers',
            ques:[
               'What is the maximum number of directors?',
               'How many of those directors are the founders entitled to appoint?',
               'How many independent directors would you like?',
               'Who can appoint the independent directors?',
               'Are they being appointed as part of this funding round?',
               'How many Investor Directors would you like?',
               'Who can appoint the Investor Directors?',
               'What % of the total shares in the company do they need to maintain their board seat?',
               'Whats the name of the first named Investor Director?',
               'Are they being appointed as part of this funding round?',
               'How many Observers would you like?',
               'Who can appoint the observers?',
               'What % of the total shares in the company does that investor or group need to maintain their observer position(s)?',
            ]
        },
        {
            number:'8',
            title:'Management Reports',
            ques:[
               'Who will you provide management reports to?',
               'How often will you provide management reports?',
            ]
        },
        {
            number:'9',
            title:'Founder Share Vesting',
            ques:[
               'Will the founders shares be subject to vesting?',
               'When did the vesting period start?',
               'What is the overall vesting period?',
               'What percent of the founders shares have already vested at the vesting start date?',
               'What is the Cliff period, in months?',
               'At the end of the cliff, what of the shares will veist?',
               'At what frequency will their shares vest?',
               'Will the founders shares have accelerated vesting on a sale of the company?',
               'What of the founders unvested shares will vest immediately on a sale of the company?',
               'Is accelerated vesting conditional on the founders working for an agreed period on unchanged compensation?',
            ]
        },
        {
            number:'10',
            title:'Leaver Provisions',
            ques:[
               'Bad Leavers...',
               'At what price will a Bad Leaver have to sell their vested shares?',
               'Bad Leaver provisions apply.',
               'Good Leavers...',
               'Forced Leavers',
               'Voluntary Leavers',
               'If a founder leaves, what happens to their unvested shares?',
               'If a founder leaves, will their shares continue to have voting rights?',
            ]
        },
        {
            number:'11',
            title:'Founder Share Transfers',
            ques:[
               'What percent of their shares can a founder transfer without needing investor consent?',
               'What approvals will be needed for a founder to sell those shares?',
            ]
        },
        {
            number:'12',
            title:'Founder Salary',
            ques:[
               'Will the founders be paid a salary?',
            ]
        },
        {
            number:'13',
            title:'Warranties',
            ques:[
               'Warranties liability cap, per founder',
               'What is the liability cap, per founder?',
               'What is the Warranties liability floor?',
               'To which group of investors do the Warranties apply?',
               'For how long do the Warranties apply?',
               'How long will the investors have to follow up a warranty claim?'
            ]
        },
        {
            number:'14',
            title:'Completion Conditions',
            ques:[
               'What is the minimum investment needed for the round to go ahead?',
               'How much has the Lead Investor committed to invest?',
               'What due diligence is required as a condition to completion?',
               'Directors and Officers Insurance',
               'Keyman Insurance',
               
            ]
        },
        {
            number:'15',
            title:'Fees Exclusivity & Legals',
            ques:[
               'Will you agree to pay the investors legal fees?',
               'How many days exclusivity are you offering to your investors?',
               
            ]
        },
        {
            number:'16',
            title:'Social Impact & Founder Giving',
            ques:[
               'Company social impact',
               'Founder Giving',
               'Percent equity to pledge',
               
            ]
        },
        {
            number:'17',
            title:'Display Options',
            ques:[
               'Term Sheet format',
               'Display the Cap Table?',
               
            ]
        },
    ]
},{
    number:2,
    contenType:'accor',
    headerType:'toggle',
    page:'Deal Terms',
    nextPage:'Transaction documents',
    documents:[
        {
         title:'page2',
         description:'Gorem ipsum dolor sit amet, consectetur adipiscing elit.',
         button:true,
         button_text:'View'
        },
        {
         title:'SHA',
         description:'Gorem ipsum dolor sit amet, consectetur adipiscing elit.',
         button:true,
         button_text:'View'
        },
        {
         title:'DI',
         description:'Gorem ipsum dolor sit amet, consectetur adipiscing elit.',
         button:true,
         button_text:'View'
        }
     ],
    question:[
        {
            number:'1',
            title:'Do you need the consent of previous investors?',
            ques:[
               'Do you need the consent of previous investors to issue new shares?',
               'Target closing date',
               'Target raise',
               'Company valuation',
               'Options already allocated',
               'Extend option pool?',
               'Option pool'
            ]
        },
        {
            number:'2',
            title:'Preemption terms',
            ques:[
               'Do any existing shareholders have a preemption right in this new round?',
            ]
        },
        {
            number:'3',
            title:'Share capital',
            ques:[
               'The Founders are the legal and beneficial owners of the Shares listed against their names in the capitalisation table on the SeedLegals platform ("Cap Table").',
               'The Cap Table is correct and shows the entire issued Share capital of the Company.',
               'The Shares in the Cap Table are fully registered and paid up.',
               'The Company has not allotted or issued any Share capital other than the Shares shown in the Cap Table.',
               'None of the Shares in the Company are under any restriction notice because of a failure to identify a Persons of Significant Controll as defined in the Act.',
               'No contract has been entered into which requires the Company to allot. any Shares or loan capital and the Company has not allotted or issued any securities which are convertible into Shares or loan capital.',
               'The Shares in the Company are not subject to any transfer restrictions or other agreements of any kind.',
               'No dividends or other rights or benefits attaching to Shares have been declared, made or paid or agreed to be declared, made or pald.',
               'Additional share capital disclosures'
            ]
        },
        {
            number:'4',
            title:'Company Information',
            ques:[
               'The Company does not have and has never had any subsidiaries',
               'The Company is not and has never been a member of a Group.',
               'The Company has registered all Persons with Significant Control to the Registrar of Companies.',
               'The Company is not and has not been required to be registered on the Persons of Significant Control register of any other company',
            ]
        },
        {
            number:'5',
            title:'Pitch Deck and Business Plan',
            ques:[
               'The Business Plan (which might mean either a traditional business plan or the final pitch deck which you sent to your investors) has been diligently prepared and, as at the date of this agreement, each of the Founders believes that it represents a realistic plan in relation to the future progress, expansion and development of the Business.',
               'Each of the Founders believes that all statements of opinion in the business plan and/or pitch deck are fair and reasonable and are not misleading.',
               'The financial forecasts & estimates in the business plan and/or pitch deck have been diligently prepared, are fair, valid and reasonable.',
               'Additional pitch deck and business plan disclosures',
            ]
        },
        {
            number:'6',
            title:'Management Accounts',
            ques:[
               'Are you providing Management Accounts as part of your investor disclosures?',
               'Briefly explain why management accounts arent being provided, and what information youll provide instead',
               'Additional management accounts disclosures',
            ]
        },
    ]
},
{
    number:3,
    contenType:'accor',
    headerType:'section_button',
    page:'Transaction documents',
    nextPage:'Previous investor consent',
    section_data:['SHA','SSA','DL'],
    question:[
        {
            number:'1',
            title:'Agreements & Commitments',
            ques:[
                'The Company has no material capital commitments and has no outstanding liabilities whether due or payable.',
                'The Company is not a party to any contract, arrangement or commitment (whether in respect of capital expenditure or otherwise) which is of an unusual, onerous or long-term nature or which involves or could involve a material obligation or liability',
                'The Company is not a party to any agreement which is (or may become) terminable as a result of the entry into or completion of this agreement.',
                'The Company has not been, and is not a party to, any contract or arrangements binding on it for the purchase or sale of property or the supply of goods or services at a price different to that reasonably obtainable on an arms length basis.',
                'The Company is not insolvent or unable to pay its debts as they fall and no petition has, so far as the Warrantors are aware, been issued or order made for the winding up of the Company and no meeting has been convened for the purpose of considering a resolution for the winding up of the Company nor has any such resolution been passed.',
                'No application has, so far as the Warrantors are aware, been made to the court or order made for the administration of the Company and no notice has been given of intention to appoint an administrator of the Company.',
                'No liquidator, receiver, administrator, trustee or other similar officer has taken possession of or been appointed over, and no encumbrancer has taken possession of, any part of the property of the Company and, so far as the Warrantors are aware, no circumstances exist which would justify or entitle the appointment of any of the same.',
                'Additional agreements and commitments disclosures'

            ]
        },
        {
            number:'2',
            title:'Taxation',
            ques:[
                'The Company has properly paid or fully provided for all Taxation for which it is liable.',
                'There are no circumstances in which interest or penalties in respect of Taxation not properly paid could arise.',
                'All directors, officers and employees of the company who have received shares have, where applicable, signed an S431 document to confirm that they will be liable for their taxes and not the company.',
                'The Company has not entered into or been a party to any schemes or arrangements designed partly or wholly for the purpose of it or (so far as each of the Founders are aware) any other person avoiding taxation.',
                'Additional taxation disclosures',
            ]
        },
        {
            number:'3',
            title:'Intellectual Property',
            ques:[
                'All Business IP is (a) legally and beneficially owned by the Company, (b) not, so far as the Warrantors are aware, being infringed or attacked or opposed by any person; and (c) is not subject to any Encumbrance.',
                'Any Third Party IP used by the Company is licensed either expressly or impliedly to the Company.',
                'No written claims of infringement by the Company of any Third Party IP or other third party Intellectual Property Rights have been received by the Company and, so far as the Warrantors are aware, the Business IP does not constitute by its existence, transfer or use an infringement of any third party Intellectual Property or other rights or misuse of confidential information of any third party.',
                'The Company has not made any allegation against any third party that such third party is infringing the Business IP and, so far as the Warrantors are aware, there exists no actual or threatened infringement (including misuse of confidential information) or any event likely to constitute an infringement or breach by any third party of any of the Business IP',
                'All application, renewal and other official statutory and regulatory fees and all professional advisers fees rendered to and received by the Company relating to the Business IP or for the protection or enforcement thereof have been duly paid in accordance with the payment terms and all steps have been taken for their maintenance and protection.',
                'All application, renewal and other official statutory and regulatory fees and all professional advisers fees rendered to and received by the Company relating to the Business IP or for the protection or enforcement thereof have been duly paid in accordance with the payment terms and all steps have been taken for their maintenance and protection.',
                'No part of the business as currently carried on by the Company gives rise to any obligation to pay any royalty, remuneration or other sum relating to the use of the Business IP',
                'In respect of any licences of Third Party IP which are used by the Company as at the date of this Agreement, such licences are, so far as the Warrantors are aware, in force and no notice has been received by the Company from the relevant third party owner of termination of the licences and so far as the Warrantors are aware (having made no enquiry), the obligations of all parties to such licences have been complied with in all material respects.',
                'The Company has not disclosed any of its know-how or trade secrets to any person other than to the Investors except subject to written undertakings as to confidentiality from such persons to whom disclosure has been made.',
                'The Company has not disclosed any of its know-how or trade secrets to any person other than to the Investors except subject to written undertakings as to confidentiality from such persons to whom disclosure has been made.',
                'So far as the Warrantors are aware, no third party to any confidentiality agreement to which the Company is party is in breach of such agreement.',
                'So far as the Warrantors are aware, there is no Intellectual Property relating to the Business which is required by the Company to operate the Business and which has not been assigned or licensed to the Company either at or before Completion.',
                'Additional IP disclosures',
            ]
        },
        {
            number:'4',
            title:'Data Protection',
            ques:[
                'In respect of any special category personal data processed by the Company, the Company has made all necessary registrations and notifications required under GDPR',
                'In respect of any special category personal data processed by the Company, the Company has not received any notice or complaint under GDPR alleging non-compliance, and has not received any claim for compensation for loss or unauthorised disclosure of sensitive personal data and is not aware of any circumstances which may give rise to either of these..',
                'Additional data protection disclosures',
            ]
        },
        {
            number:'5',
            title:'Assets and Debts',
            ques:[
                'All assets used by and debts due to the Company are the absolute property of the Company and none is subject to any encumbrance other than in the ordinary course of trading or subject to any factoring arrangement, hire purchase, retention of title, conditional sale or credit agreement.',
                'Additional assets and debts disclosures',
            ]
        },
        {
            number:'6',
            title:'Contracts with Connected Persons',
            ques:[
                'There are no loans made by the Company to any of its Directors of Shareholders and/or any person connected with any of them and no debts or liabilities owing by the Company to any of its Directors or Shareholders and/or any person connected with them',
                'There are no existing contracts or arrangements to which the Company is a party and in which any of its Directors or Shareholders and/or any person connected with any of them is interested.',
                'Additional contracts with connected persons disclosures',

            ]
        },
        {
            number:'7',
            title:'Employment Arrangements',
            ques:[
                'A full list of directons, employees and consultants has been provided.',
                'The Company has entered into contracts of service or for services with all directors, employees and consultants and such contracts have been entered into in the ordinary course of business on customary terma, are in full force and effect, are not in breach and no notice has been given on either side to terminate',
                'No gratuitous payment has been made or promised in connection with the actual or proposed termination or suspension of employment or variation of any contract of employment of any present or former director or employee of the Company.',
                'There are no agreements or arrangements for the payment of any pensions, allowances, lump sums or other similar benefits on redundancy, retirement or on death or during periods of sickness of disablement for the benefit of any director or former director or employee or former employee of the Company or for the benefit of the dependants of any such person.',
                'All agreements between any of the Founders or between any of the Founders and the Company other than this Agreement have been provided',
                'Additional employment arrangements disclosures',

            ]
        },
    ]
},
{
    number:4,
    contenType:'mcq',
    headerType:'alert',
    page:'Previous investor consent',
    nextPage:'Preemption notice',
    alert_message:{
        message:'Making changes will affect the partially signed document.',
        link:'How to Resolve?',
        linkto:''
    },
    questions:[
        {
         number:'1',
         title:'Do you need the consent of previous investors to issue new shares? ',
         desciption:'If you had a previous funding round with a Shareholders Agreement that requires Investor Consent for the issue of additional shares then youll need to get the consent of those investors before this funding round can complete.',
         radio:true,
         radio_text:['No','Yes']
        },
        
    ]
},

{
    number:5,
    contenType:'mcq',
    headerType:'alert',
    page:'Preemption notice',
    nextPage:'Track Your Investment',
    alert_message:{
        message:'Making changes will affect the partially signed document.',
        link:'How to Resolve?',
        linkto:''
    },
    questions:[
        {
         number:'1',
         title:'Do any existing shareholders have a preemption right in this new round?',
         desciption:'If you had a previous funding round where you gave some investors a right of preemption on a new funding round, then as part of this round youll need to give them notice (the preemption notice period is specified in your current Articles, or, if youre still on the Model Articles, its 14 days), to allow them to buy additional shares in this round to top up to their original percent ownership.',
         radio:true,
         radio_text:['No','Yes']
        },
        {
            number:'2',
            title:'What date should the Preemption Notice be dated?',
            desciption:'The preemption clock will start ticking on this date, so you should choose the date your existing shareholders will receive their preemption notice.',
            radio:false,
            input:true,
            radio_text:['No','Yes'],
            input_placeholder:'Date'
           },
           {
            number:'3',
            title:'How many days will a shareholder have to take up their preemption right?',
            desciption:'Set this to the preemption notice period specified in your current Articles (if youre still on the Model Articles, its 14 days).',
            radio:false,
            input:true,
            radio_text:['No','Yes'],
            input_placeholder:'Days'
           },
           {
            number:'4',
            title:'What email address should the preemption replies be emailed back to?',
            desciption:'Well list this address at the end of the Preemption Notice, asking shareholders to email their intention to exercise their right of preemption back to this address.',
            radio:false,
            input:true,
            radio_text:['No','Yes'],
            input_placeholder:'Email Address'
           },
    ]
},

{
    number:6,
    contenType:'table',
    headerType:'none',
    page:'Track your Investment',
    nextPage:'Shareholder resolution',
   Companies:[
    {
        shareholder:'Google',
        scheme:'',
        investment:'$402,000',
        recieved:true,
        recieved_on: '24/12/2004'
    },
    {
        shareholder:'Azure',
        scheme:'',
        investment:'$2302,000',
        recieved:false,
        recieved_on: '24/12/2004'
    },
    {
        shareholder:'Microsoft',
        scheme:'',
        investment:'$23,000',
        recieved:true,
        recieved_on: '24/12/2004'
    },
    {
        shareholder:'Azure',
        scheme:'',
        investment:'$402,000',
        recieved:true,
        recieved_on: '24/12/2004'
    },
    {
        shareholder:'Google',
        scheme:'',
        investment:'$402,000',
        recieved:true,
        recieved_on: '24/12/2004'
    },
   ]
},
{
    number:7,
    contenType:'none',
    headerType:'none',
    page:'Shareholder resolution',
    nextPage:'Board Resolution',
},

{
    number:8,
    contenType:'mcq',
    headerType:'none',
    page:'Board Resolution',
    nextPage:'Finish',
    questions:[
        {
         number:'1',
         title:'Who chaired the meeting',
         desciption:'If you dont already have a chairperson nows the time to name one, and the minutes of the meeting will show that they were elected as Chairperson.',
         radio:false,
         input:true,
         radio_text:['No','Yes'],
         input_placeholder:'Type here'
        },
        {
            number:'2',
            title:'Any directors absent',
            desciption:'Enter the names of any directors who couldnt make it to the meeting, theyll be listed as sending their apologies.',
            radio:false,
            input:true,
            radio_text:['No','Yes'],
            input_placeholder:'Type here'
           },
    ]
},]