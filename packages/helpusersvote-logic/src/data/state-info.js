const statesInfo = {
  AL: {
    fbid: '104037882965264',
    wording: {
      a: 'an',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'https://myinfo.alabamavotes.gov/VoterView/RegistrantSearch.do'
    },
    min_age_to_reg: 17.7534,
    online: {
      url: 'https://www.alabamavotes.gov/olvr/default.aspx'
    },
    mail: {
      form_url: 'https://www.alabamavotes.gov/downloads/election/vr/nvra-2.pdf',
      type: 'postmarked'
    },
    in_person: {},
    felon_policy: {
      condition: 'RESTRICTED',
      url: 'http://www.aclualabama.org/WhatWeDo/VotingRights.htm',
      more_details: true,
      application:
        'http://felonvoting.procon.org/sourcefiles/alabama-pardons-voter-restoration-2012.pdf'
    },
    absentee: {
      no_excuse: false,
      requirements: [
        'You’re registered in Alabama but live outside your county because you’re a member of the armed forces or a college student',
        'You’ll be absent from the county where you live on Election Day, Nov 8',
        'You have a sickness or physical disability that prevents you from going to the polls',
        'You work a required shift of 10 hours or more that coincides with polling place hours on Election Day (7 AM–7 PM)'
      ]
    }
  },
  AK: {
    fbid: '108083605879747',
    wording: {
      a: 'an',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'https://myvoterinformation.alaska.gov/'
    },
    online: {
      url: 'https://voterregistration.alaska.gov'
    },
    mail: {
      form_url: 'https://www.elections.alaska.gov/doc/forms/C03.pdf',
      type: 'received'
    },
    in_person: {},
    felon_policy: {
      condition: 'PROBATION',
      url: 'https://www.elections.alaska.gov/vi_restore_info.php'
    },
    absentee: {
      no_excuse: true
    }
  },
  AZ: {
    fbid: '108296539194138',
    swing: true,
    wording: {
      a: 'an',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'https://voter.azsos.gov/VoterView/RegistrantSearch.do'
    },
    online: {
      url: 'http://servicearizona.com/voterRegistration'
    },
    mail: {
      form_url:
        'http://www.azsos.gov/sites/azsos.gov/files/voter_registration_form.pdf',
      type: 'received'
    },
    in_person: {},
    felon_policy: {
      condition: 'RESTRICTED',
      url:
        'http://felonvoting.procon.org/sourcefiles/restoration-of-civil-rights-arizona-faq.pdf',
      more_details: true,
      application:
        'http://felonvoting.procon.org/sourcefiles/arizona-restoration-of-civil-rights-2012.pdf'
    },
    absentee: {
      no_excuse: true,
      permanent: true
    }
  },
  AR: {
    fbid: '111689148842696',
    wording: {
      a: 'an',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'https://www.voterview.ar-nova.org/VoterView/RegistrantSearch.do'
    },
    mail: {
      form_url:
        'http://www.sos.arkansas.gov/elections/Documents/ArkansasVoterRegistrationApplication.pdf',
      type: 'postmarked'
    },
    in_person: {},
    felon_policy: {
      condition: 'PROBATION',
      url: 'http://www.acluarkansas.org/contentitemdocuments/250.pdf'
    },
    absentee: {
      no_excuse: false,
      requirements: [
        'You’ll be unavoidably absent from your voting location on Election Day, November 8',
        'You have an illness or physical disability',
        'You live in a long-term care or residential facility licensed by the state'
      ],
      special_instructions:
        'You need to include a copy of your Arkansas ID with your absentee ballot application.'
    }
  },
  CA: {
    fbid: '108131585873862',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'http://www.sos.ca.gov/elections/registration-status/',
      prefer_vote_dot_org: true
    },
    min_age_to_reg: 16,
    online: {
      url: 'http://registertovote.ca.gov'
    },
    mail: {
      form_url: '',
      type: 'postmarked'
    },
    in_person: {},
    felon_policy: {
      condition: 'PAROLE',
      url:
        'http://www.sos.ca.gov/elections/voting-resources/voting-california/who-can-vote-california/voting-rights-californians/'
    },
    absentee: {
      no_excuse: true,
      permanent: true
    }
  },
  CO: {
    swing: true,
    fbid: '106153826081984',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url:
        'https://www.sos.state.co.us/voter-classic/pages/pub/olvr/findVoterReg.xhtml'
    },
    min_age_to_reg: 16,
    online: {
      url: 'https://www.sos.state.co.us/voter-classic/secuRegVoterIntro.do'
    },
    mail: {
      form_url:
        'https://www.sos.state.co.us/pubs/elections/vote/VoterRegFormEnglish.pdf',
      type: 'postmarked'
    },
    in_person: {
      same_day: true
    },
    felon_policy: {
      condition: 'PAROLE',
      url:
        'https://www.sos.state.co.us/pubs/elections/FAQs/VotingAndConviction.html'
    },
    absentee: {
      no_excuse: true,
      automatic: true
    }
  },
  CT: {
    fbid: '112750485405808',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'http://www.dir.ct.gov/sots/LookUp.aspx'
    },
    online: {
      url: 'https://voterregistration.ct.gov/OLVR/'
    },
    mail: {
      form_url:
        'http://www.sots.ct.gov/sots/lib/sots/electionservices/electforms/electforms/voter_reg_card_english_2015.pdf',
      type: 'postmarked'
    },
    in_person: {
      same_day: true
    },
    felon_policy: {
      condition: 'PAROLE',
      url: 'http://www.ct.gov/doc/lib/doc/PDF/VotingRightsEnglish.pdf'
    },
    absentee: {
      no_excuse: false,
      requirements: [
        'Your active service in the US armed forces',
        'Your absence from town during all hours of voting on Election Day, November 8',
        'Your illness',
        'Your physical disability',
        'Your religion forbids non-religious activity on Election Day, November 8',
        'Your required performance of duties as an election official at a polling place other than your own during all the hours on Election Day, November 8'
      ]
    }
  },
  DE: {
    fbid: '105643859470062',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'https://ivote.de.gov/voterlogin.aspx'
    },
    online: {
      url: 'https://ivote.de.gov/voterlogin.aspx'
    },
    mail: {
      form_url: 'http://electionsncc.delaware.gov/vr/stateform.pdf',
      type: 'received'
    },
    in_person: {},
    felon_policy: {
      condition: 'RESTRICTED',
      more_details: true,
      url:
        'http://felonvoting.procon.org/sourcefiles/hazel-d-plant-voter-restoration-act.pdf'
    },
    absentee: {
      no_excuse: false,
      requirements: [
        'You are a student who is away at college or university',
        'You are on vacation',
        'Your business or occupation prevents you from coming to the polls',
        'The tenets or teachings of your religion prevent you from coming to the polls',
        'You are experiencing a temporary or permanent physical disability',
        'You are in the public service of the United States or the State of Delaware and are unable to come to the polls'
      ],
      special_instructions:
        'You must have your absentee ballot application notarized if you are a student, away on business, away on vacation, incarcerated, or unable to go to the polls for religious reasons.'
    }
  },
  DC: {
    fbid: '110184922344060',
    wording: {
      a: 'a',
      in: 'in the'
    },
    check_reg: {
      online: true,
      url: 'https://www.dcboee.org/voter_info/reg_status/'
    },
    min_age_to_reg: 16,
    online: {
      url: 'https://www.vote4dc.com/ApplyInstructions/Register'
    },
    mail: {
      form_url: 'https://www.dcboee.org/pdf_files/Mail_VRForm_HAVA2003.pdf',
      type: 'postmarked'
    },
    in_person: {},
    felon_policy: {
      condition: 'INCARCERATION',
      url: 'https://www.vote4dc.com/ApplyInstructions/Register'
    },
    absentee: {
      no_excuse: true,
      permanent: true
    }
  },
  FL: {
    fbid: '109714185714936',
    swing: true,
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'http://registration.elections.myflorida.com/CheckVoterStatus'
    },
    min_age_to_reg: 16,
    mail: {
      form_url: 'http://dos.myflorida.com/media/693757/dsde39.pdf',
      type: 'postmarked'
    },
    in_person: {},
    felon_policy: {
      condition: 'RESTRICTED',
      url:
        'http://felonvoting.procon.org/sourcefiles/florida_clemency_press_release.pdf',
      more_details: true,
      application:
        'http://felonvoting.procon.org/sourcefiles/florida_clemency_application.pdf'
    },
    absentee: {
      no_excuse: true
    }
  },
  GA: {
    fbid: '103994709636969',
    swing: true,
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'https://www.mvp.sos.ga.gov/MVP/mvp.do'
    },
    min_age_to_reg: 17.5,
    online: {
      url: 'https://registertovote.sos.ga.gov/GAOLVR/#no-back-button'
    },
    mail: {
      form_url:
        'http://sos.ga.gov/admin/files/Voter_Registration_Application_8-10.pdf',
      type: 'received'
    },
    in_person: {},
    felon_policy: {
      condition: 'PROBATION',
      url: 'https://pap.georgia.gov/pardons-restoration-rights'
    },
    absentee: {
      no_excuse: true
    }
  },
  HI: {
    fbid: '113667228643818',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: false,
      instructions: 'Call (808) 453-VOTE (8683)',
      url: 'http://elections.hawaii.gov/resources/county-election-divisions/',
      prefer_vote_dot_org: true
    },
    min_age_to_reg: 16,
    online: {
      url: 'https://olvr.hawaii.gov/register.aspx'
    },
    mail: {
      form_url:
        'http://elections.hawaii.gov/wp-content/uploads/2016/03/VR-PAB-English.pdf',
      type: 'postmarked'
    },
    in_person: {},
    felon_policy: {
      condition: 'INCARCERATION',
      url:
        'https://acluhi.org/2012/09/27/voting-in-hawaii-with-a-criminal-conviction/'
    },
    absentee: {
      no_excuse: true,
      permanent: true
    }
  },
  ID: {
    fbid: '108037302558105',
    wording: {
      a: 'an',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'http://www.idahovotes.gov/ypp_new/amiregistered.aspx'
    },
    mail: {
      form_url: 'http://www.idahovotes.gov/VoterReg/voter_registration.pdf',
      type: 'postmarked'
    },
    in_person: {},
    felon_policy: {
      condition: 'PROBATION',
      url:
        'https://www.legislature.idaho.gov/idstat/Title18/T18CH3SECT18-310PrinterFriendly.htm'
    },
    absentee: {
      no_excuse: true
    }
  },
  IL: {
    fbid: '112386318775352',
    wording: {
      a: 'an',
      in: 'in'
    },
    check_reg: {
      online: true,
      url:
        'https://www.elections.il.gov/votinginformation/RegistrationLookup.aspx'
    },
    online: {
      url: 'https://ova.elections.il.gov'
    },
    mail: {
      form_url:
        'https://www.elections.il.gov/downloads/votinginformation/pdf/r-19.pdf',
      type: 'received'
    },
    in_person: {
      same_day: true
    },
    felon_policy: {
      condition: 'INCARCERATION',
      url: 'http://www.ilga.gov/commission/lrb/con3.htm'
    },
    absentee: {
      no_excuse: true,
      first_time_vote_restriction: true,
      first_time_vote_exceptions: [
        "You submitted one of the following forms of ID with your mail-in voter registration application: driver’s license number, state ID number, last 4 digits of your Social Security number, copy of a current and valid photo ID, copy of a utility bill, copy of a bank statement, copy of a government check, copy of a paycheck, copy of a lease or contract for residence, copy of a student ID & mail addressed to your residence, or copy of a government document with the voter's name and address"
      ]
    }
  },
  IN: {
    fbid: '111957282154793',
    wording: {
      a: 'an',
      in: 'in'
    },
    check_reg: {
      online: true,
      url:
        'https://indianavoters.in.gov/PublicSite/Public/FT1/PublicLookupMain.aspx?Link=Registrationf'
    },
    online: {
      url:
        'https://indianavoters.in.gov/PublicSite/OVR/Introduction.aspx?AspxAutoDetectCookieSupport=1'
    },
    mail: {
      form_url: 'https://forms.in.gov/Download.aspx?id=9341',
      type: 'postmarked'
    },
    in_person: {},
    felon_policy: {
      condition: 'INCARCERATION',
      url: 'http://iga.in.gov/legislative/laws/2016/ic/titles/003/'
    },
    absentee: {
      no_excuse: false,
      requirements: [
        'You have a specific reason that you won’t be in your county on Election Day, Nov 8 during the entire time the polls are open (6 AM–6PM)',
        'You’re a member of the military or a public safety officer',
        'You’ll have official election duties outside of your voting precinct on Election Day',
        'You’re scheduled to work during the entire time, 6 AM–6 PM on Election Day',
        "You'll be confined due to illness or injury or you'll be caring for an individual confined due to illness or injury during the entire time, 6 AM–6 PM on Election Day",
        'You’re prevented from voting because of religious obligations from 6 AM–6 PM on Election Day',
        "You’re a participant in the state's address confidentiality program",
        "You’re a convicted 'serious sex offender' who is eligible to vote",
        'You don’t have a ride to the polls',
        'You have a disability',
        'You’re at least 65 years old'
      ]
    }
  },
  IA: {
    fbid: '104004246303834',
    swing: true,
    wording: {
      a: 'an',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'https://sos.iowa.gov/elections/voterreg/regtovote/search.aspx'
    },
    min_age_to_reg: 17.5,
    online: {
      url:
        'https://mymvd.iowadot.gov/Account/Login?ReturnUrl=%2fVoterRegistration'
    },
    mail: {
      form_url: 'https://sos.iowa.gov/elections/pdf/voteapp.pdf',
      type: 'postmarked'
    },
    in_person: {},
    felon_policy: {
      condition: 'RESTRICTED',
      url:
        'http://felonvoting.procon.org/sourcefiles/Exec_Order_70_Iowa_voting.pdf',
      more_details: true,
      application:
        'http://felonvoting.procon.org/sourcefiles/Iowa_appication-for-restoration-of-citizenship-rights.pdf'
    },
    absentee: {
      no_excuse: true
    }
  },
  KS: {
    fbid: '105493439483468',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'https://myvoteinfo.voteks.org/VoterView/RegistrantSearch.do'
    },
    online: {
      url: 'https://www.kdor.ks.gov/Apps/VoterReg/Default.aspx'
    },
    mail: {
      form_url: 'http://www.kssos.org/forms/elections/voterregistration.pdf',
      type: 'received'
    },
    in_person: {},
    felon_policy: {
      condition: 'PROBATION',
      url: 'http://www.voteks.org/before-you-vote/am-i-eligible.html'
    },
    absentee: {
      no_excuse: true,
      special_instructions:
        "You must provide your current Kansas drivers license number on your absentee ballot application. If you can't provide your driver's license number, then you need to include a copy of your photo ID with your application. You can find a list of acceptable forms of ID [http://www.ncsl.org/research/elections-and-campaigns/voter-id.aspx](here)."
    }
  },
  KY: {
    fbid: '109438335740656',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'https://vrsws.sos.ky.gov/vic/'
    },
    online: {
      url: 'https://vrsws.sos.ky.gov/ovrweb/'
    },
    mail: {
      form_url:
        'http://elect.ky.gov/SiteCollectionDocuments/Register%20to%20Vote/Kentucky%20Voter%20Registration%20Card.pdf',
      type: 'postmarked'
    },
    in_person: {},
    felon_policy: {
      condition: 'RESTRICTED',
      url: 'http://www.lrc.state.ky.us/legresou/constitu/145.htm',
      more_details: true,
      application:
        'http://felonvoting.procon.org/sourcefiles/kentucky-rights-restoration-application.pdf'
    },
    absentee: {
      no_excuse: false,
      requirements: [
        'You’re a student living outside of your county',
        'You’re military personnel, their dependents, or a citizen who is living overseas',
        'You’re advanced in age, disabled, or ill and unable to vote at the polls on Election Day, November 8',
        'You’re temporarily outside of Kentucky but still eligible to vote in Kentucky',
        'You’re incarcerated, but not yet convicted of a crime',
        'You’re employed outside of your county during all hours from 6 AM–6 PM on Election Day, November 8'
      ]
    }
  },
  LA: {
    fbid: '112822538733611',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'https://voterportal.sos.la.gov/Home/VoterLogin'
    },
    min_age_to_reg: 16,
    online: {
      url:
        'http://www.sos.la.gov/ElectionsAndVoting/Pages/OnlineVoterRegistration.aspx'
    },
    mail: {
      form_url:
        'http://www.sos.la.gov/ElectionsAndVoting/PublishedDocuments/ApplicationToRegisterToVote.pdf',
      type: 'postmarked'
    },
    in_person: {},
    felon_policy: {
      condition: 'PROBATION',
      url: 'http://www.legis.la.gov/Legis/Law.aspx?d=81243'
    },
    absentee: {
      no_excuse: false,
      requirements: [
        'You’re a student, instructor, or professor in an institution of higher learning located and living outside of the parish in which you’re qualified to vote (or the spouse or dependent of such person)   ',
        'You live outside the US',
        'You’re a member of the military, or the spouse or dependent of a service member',
        'You’re disabled',
        'You’re a member of the clergy assigned to a religious post outside the parish in which you’re registered or you’re the spouse or dependent accompanying and residing with him or her',
        "You'll be or expect to be temporarily outside of Louisiana or absent from the parish in which you’re qualified to vote from Oct 25–Nov 1, and on Nov 8.  ",
        'You moved your residence to another parish after Oct 11 and the new parish is more than 100 miles from the parish seat of the parish where you used to live, in which case you can vote absentee by mail in the parish where you used to live ',
        'You’re involuntarily confined in an institution of mental treatment outside the parish in which you’re qualified to vote and you’re not interdicted and judicially declared incompetent',
        "You'll be sequestered on a jury on the day of the election",
        'You expect to be hospitalized on Nov. 8 and were hospitalized from Oct. 25 to Nov. 1',
        'By virtue of your employment or occupation, you expect to be out of your precinct of registration and upon the waters of Louisiana during Oct 25–Nov 1 and on Nov. 8 ',
        'You live at home and prior to Jan 1, 2010, you were approved by a parish Board of Election Supervisors as being eligible to participate in a Special Program for Handicapped Voters as such program existed prior to that time',
        'You’re incarcerated in an institution inside or outside the parish in which you’re qualified to vote, you’re not under an order of imprisonment for a felony conviction.  You must include a certification by the sheriff with your application.',
        'You’re a participant in the Department of State Address Confidentiality Program',
        'You’re at least 65 years old'
      ],
      first_time_vote_restriction: true,
      first_time_vote_exceptions: [
        'students who submit a copy of student ID or fee bill with the request',
        'citizens who appear in the registrar of voters office before Election Day to verify their identity',
        'military or overseas citizens',
        'persons in the Senior Citizen or Disability Program',
        "participants in the state's address confidentiality program"
      ]
    }
  },
  ME: {
    swing: true,
    fbid: '108603925831326',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'http://www.maine.gov/portal/government/edemocracy/voter_lookup.php'
    },
    min_age_to_reg: 17,
    mail: {
      form_url: 'http://www.maine.gov/sos/cec/elec/data/voterregcard2016.pdf',
      type: 'received'
    },
    in_person: {
      same_day: true
    },
    felon_policy: {
      condition: 'UNRESTRICTED',
      url:
        'http://www.mainelegislature.org/legis/statutes/21-A/title21-Asec112.html'
    },
    absentee: {
      no_excuse: true
    }
  },
  MD: {
    fbid: '108178019209812',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'https://voterservices.elections.maryland.gov/VoterSearch'
    },
    min_age_to_reg: 16,
    online: {
      url:
        'https://voterservices.elections.state.md.us/OnlineVoterRegistration/VoterType'
    },
    mail: {
      form_url:
        'http://www.elections.state.md.us/voter_registration/documents/English_Internet_VRA.pdf',
      type: 'received'
    },
    in_person: {},
    felon_policy: {
      condition: 'INCARCERATION',
      more_details: true,
      url:
        'http://felonvoting.procon.org/sourcefiles/maryland-senate-bill-340.pdf'
    },
    absentee: {
      no_excuse: true
    }
  },
  MA: {
    fbid: '112439102104396',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url:
        'https://www.sec.state.ma.us/VoterRegistrationSearch/MyVoterRegStatus.aspx'
    },
    min_age_to_reg: 16,
    online: {
      url:
        'https://www.sec.state.ma.us/OVR/Pages/MinRequirements.aspx?RMVId=True'
    },
    mail: {
      form_url:
        'http://www.elections.state.md.us/voter_registration/documents/English_Internet_VRA.pdf',
      type: 'postmarked'
    },
    in_person: {},
    felon_policy: {
      condition: 'INCARCERATION',
      url:
        'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleVIII/Chapter51/Section1'
    },
    absentee: {
      no_excuse: false,
      requirements: [
        'Absent from your polling place during regular polling hours',
        'Physically disabled and cannot travel to your polling place',
        'Unable to vote in person because of a religious belief',
        'Unable to vote in person because you are in a correctional facility for a non-felony conviction',
        'An active member of the armed forces or merchant marines',
        'The spouse or dependent (for example, child) of an active member of the armed forces or merchant marines'
      ]
    }
  },
  MI: {
    fbid: '109706309047793',
    swing: true,
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'https://vote.michigan.gov/MVIC/'
    },
    mail: {
      form_url:
        'http://www.michigan.gov/documents/MIVoterRegistration_97046_7.pdf',
      type: 'postmarked'
    },
    in_person: {},
    felon_policy: {
      condition: 'INCARCERATION',
      url:
        'http://www.legislature.mi.gov/(S(ogdolxouaciuesxl3mubpmd4))/mileg.aspx?page=getObject&objectName=mcl-168-758b'
    },
    absentee: {
      no_excuse: false,
      requirements: [
        'You’re 60 years of age or older',
        'You’re physically disabled and as a result, you cannot vote on Election Day without another person’s assistance ',
        'You can’t vote on Election Day because of the tenets of your religion',
        'You can’t vote on Election Day in the precinct where you reside because you are an election precinct inspector in another precinct',
        'You’re absent or expect to be absent from the township or city in which you reside during the entire time the polls are open for voting on Election Day',
        'You’re confined in jail awaiting arraignment or trial'
      ],
      first_time_vote_restriction: true,
      first_time_vote_exceptions: [
        'overseas voters',
        'voters who are disabled',
        'voters who are 60 years of age or older'
      ]
    }
  },
  MN: {
    swing: true,
    fbid: '112577505420980',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'https://mnvotes.sos.state.mn.us/VoterStatus.aspx'
    },
    online: {
      url:
        'https://mnvotes.sos.state.mn.us/VoterRegistration/VoterRegistrationStep1.aspx'
    },
    mail: {
      form_url:
        'http://www.sos.state.mn.us/elections-voting/register-to-vote/register-on-paper/',
      type: 'received'
    },
    in_person: {},
    felon_policy: {
      condition: 'PROBATION',
      url: 'https://www.revisor.leg.state.mn.us/statutes/?id=201.014'
    },
    absentee: {
      no_excuse: true
    }
  },
  MS: {
    fbid: '113067432040067',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: false,
      instructions: "Call County Clerk's office",
      url: 'http://www.sos.state.ms.us/elections/VoterRegistrars.asp',
      prefer_vote_dot_org: true
    },
    mail: {
      form_url:
        'http://www.sos.ms.gov/Elections-Voting/Documents/Voter_Registration.pdf',
      type: 'postmarked'
    },
    in_person: {
      time: '12pm at your county clerk',
      url:
        'http://www.sos.ms.gov/Elections-Voting/Pages/County-Election-Info.aspx'
    },
    felon_policy: {
      condition: 'RESTRICTED',
      url: 'http://felonvoting.procon.org/sourcefiles/MissArticle12.pdf',
      more_details: true,
      application:
        'http://felonvoting.procon.org/sourcefiles/mississippi-voter-registration-form-2012.pdf'
    },
    absentee: {
      no_excuse: false,
      requirements: [
        "You’re a student, teacher or administrator at a college, university, junior college, high, junior high, or elementary grade school, and will be away from the county on Election Day (or you're the spouse or dependent who lives with a student, teacher or administrator)",
        'You’ll be away from your county on Election Day, November 8',
        "You’ll be unable to vote in person because you're required to be at work on Election Day, Nov 8 from 7 AM to 7 PM",
        'You have a temporary or permanent physical disability, and are unable to vote in person without substantial hardship, or voting in person could cause danger to yourself or others',
        'You’re the parent, spouse or dependent of a person with a temporary or permanent physical disability who is hospitalized outside his county or more than 50 miles away from his home, and you’ll be with that person on Election Day',
        'You’re a member of the congressional delegation, or spouse or dependent of a member of the congressional delegation',
        'You’re required to be away from your home on Election Day due to your job as an employee of a member of the Mississippi congressional delegation (or the spouse or dependents of such person living with such person)',
        'You’re 65 years old or older'
      ]
    }
  },
  MO: {
    fbid: '103118929728297',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'http://s1.sos.mo.gov/elections/voterlookup/'
    },
    min_age_to_reg: 17.5,
    online: {
      url: 'http://www.sos.mo.gov/elections/goVoteMissouri/register.aspx'
    },
    mail: {
      form_url:
        'http://www.sos.mo.gov/cmsimages/forms/elections/MVRA_PC_231-0169_042007.pdf',
      type: 'postmarked'
    },
    in_person: {},
    felon_policy: {
      condition: 'PROBATION',
      more_details: true,
      url:
        'http://felonvoting.procon.org/sourcefiles/missouri-code-felon-voting-2012.pdf'
    },
    absentee: {
      no_excuse: false,
      requirements: [
        'Not in your county on Election Day, November 8',
        'Ill or have a physical disability that prevents a trip to your voting location',
        'Responsible for the care of someone ill or physically disabled',
        'An election officer or poll watcher at a different voting location than your own',
        'Unable to vote in person due to a religious belief or practice',
        'Incarcerated but otherwise eligible to vote',
        'Participating in the address confidentiality program because of safety concerns'
      ]
    }
  },
  MT: {
    fbid: '109983559020167',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'https://app.mt.gov/voterinfo/'
    },
    mail: {
      form_url:
        'http://sos.mt.gov/elections/Officials/Forms/documents/Voter-Registration-Application.pdf',
      type: 'postmarked'
    },
    in_person: {
      same_day: true
    },
    felon_policy: {
      condition: 'INCARCERATION',
      url:
        'https://web.archive.org/web/20121007094216/http://data.opi.mt.gov/bills/mca/13/2/13-2-402.htm'
    },
    absentee: {
      no_excuse: true,
      permanent: true
    }
  },
  NE: {
    fbid: '109306932420886',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'https://www.votercheck.necvr.ne.gov/VoterView/RegistrantSearch.do'
    },
    min_age_to_reg: 17,
    online: {
      url:
        'https://www.nebraska.gov/apps-sos-voter-registration/eligibility/citizen'
    },
    mail: {
      form_url: '',
      type: 'postmarked'
    },
    in_person: {},
    felon_policy: {
      condition: 'PROBATION',
      more_details: true,
      url:
        'http://felonvoting.procon.org/sourcefiles/nebraska-code-felon-voting-2012.pdf'
    },
    absentee: {
      no_excuse: true
    }
  },
  NV: {
    swing: true,
    fbid: '109176885767113',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'https://nvsos.gov/VoterSearch/'
    },
    online: {
      url: 'http://www.registertovotenv.gov'
    },
    mail: {
      form_url: '',
      type: 'postmarked'
    },
    in_person: {},
    felon_policy: {
      condition: 'RESTRICTED',
      more_details: true,
      url: 'http://felonvoting.procon.org/sourcefiles/NevadaCode.pdf'
    },
    absentee: {
      no_excuse: true
    }
  },
  NH: {
    fbid: '105486989486087',
    swing: true,
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'http://app.sos.nh.gov/Public/AbsenteeBallot.aspx'
    },
    mail: {
      form_url: '',
      type: 'received'
    },
    in_person: {
      same_day: true
    },
    felon_policy: {
      condition: 'INCARCERATION',
      url: 'http://www.gencourt.state.nh.us/rsa/html/LXIII/654/654-2-a.htm'
    },
    absentee: {
      no_excuse: false,
      requirements: [
        'You’ll be away from home on Election Day, November 8',
        'You can’t go to a voting location on Election Day, November 8, because of a religious commitment',
        'You have a physical disability',
        'Your job requires you to be at work or on the way to or from work during all hours from 7 AM–7 PM on Election Day, November 8'
      ]
    }
  },
  NJ: {
    fbid: '108325505857259',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'https://voter.njsvrs.com/PublicAccess/servlet/'
    },
    min_age_to_reg: 17,
    mail: {
      form_url:
        'http://www.state.nj.us/state/elections/voting-information.html',
      type: 'received'
    },
    in_person: {},
    felon_policy: {
      condition: 'PROBATION',
      url: 'http://www.njleg.state.nj.us/2012/Bills/A1000/596_I1.HTM'
    },
    absentee: {
      no_excuse: true,
      permanent: true
    }
  },
  NM: {
    fbid: '108301835856691',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'https://voterview.state.nm.us/VoterView/RegistrantSearch.do'
    },
    online: {
      url:
        'https://portal.sos.state.nm.us/OVR/(S(od4445h5uj2f5tyucvvhszdf))/WebPages/InstructionsStep1.aspx'
    },
    mail: {
      form_url:
        'https://portal.sos.state.nm.us/OVR/VRForms/VRFormEnglishFinal.pdf',
      type: 'postmarked'
    },
    in_person: {},
    felon_policy: {
      condition: 'PROBATION',
      url: 'http://felonvoting.procon.org/sourcefiles/NewMexico_Voting_Code.pdf'
    },
    absentee: {
      no_excuse: true
    }
  },
  NY: {
    fbid: '112825018731802',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'https://voterlookup.elections.state.ny.us/'
    },
    online: {
      url: 'https://voterreg.dmv.ny.gov/MotorVoter/'
    },
    mail: {
      form_url:
        'http://www.elections.ny.gov/NYSBOE/download/voting/voteform.pdf',
      type: 'postmarked'
    },
    in_person: {},
    felon_policy: {
      condition: 'PAROLE',
      url: 'http://www.nyclu.org/issues/voting-rights/felon-voting-rights'
    },
    absentee: {
      no_excuse: false,
      requirements: [
        'Be absent from your county or the city of New York on Election Day, November 8',
        'Be unable to vote in person because you have a temporary or permanent illness or disability or because you’re the primary caregiver of one or more individuals who are ill or physically disabled',
        'Be a patient or inmate in a Veterans Administration Hospital',
        'Be detained in jail awaiting Grand Jury action or in prison conviction for an offense that isn’t a felony'
      ]
    }
  },
  NC: {
    fbid: '104083326294266',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'https://enr.ncsbe.gov/voter_search_public/'
    },
    mail: {
      form_url: 'http://www.ncsbe.gov/Voter-Information/VR-Form',
      type: 'postmarked'
    },
    in_person: {},
    felon_policy: {
      condition: 'PROBATION',
      url:
        'http://www.ncleg.net/EnactedLegislation/Statutes/HTML/BySection/Chapter_163/GS_163-55.html'
    },
    absentee: {
      no_excuse: true,
      special_instructions:
        "Your signature on the application should be hand-written; North Carolina won't accept a digital signature. If you can't put a drivers license number or SSN on your application, you'll need to include a copy of ID with your application. When you get your absentee ballot, you'll need to fill it out in the presence of a notary or two witnesses, who will have to sign the ballot."
    }
  },
  ND: {
    fbid: '104131666289619',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: false,
      instructions: 'Voter Registration not required in North Dakota',
      url: 'https://vip.sos.nd.gov/PortalListDetails.aspx?ptlhPKID=51&ptlPKID=7'
    },
    need_to_register: false,
    felon_policy: {
      condition: 'INCARCERATION',
      url: 'http://www.legis.nd.gov/cencode/t12-1c33.pdf?20130408202526'
    },
    absentee: {
      no_excuse: true,
      special_instructions:
        'You need to include a copy of your ID with your absentee ballot application.'
    }
  },
  OH: {
    fbid: '104024609634842',
    swing: true,
    wording: {
      a: 'an',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'http://voterlookup.sos.state.oh.us/voterlookup.aspx'
    },
    mail: {
      form_url:
        'http://www.sos.state.oh.us/sos/upload/elections/forms/4010.pdf',
      type: 'postmarked'
    },
    in_person: {},
    felon_policy: {
      condition: 'INCARCERATION',
      url: 'http://codes.ohio.gov/orc/2961'
    },
    absentee: {
      no_excuse: true,
      special_instructions:
        "You must provide your Ohio drivers license number or the last four digits of your Social Security number on your absentee ballot application. If you cannot provide either number, you'll need to include a copy of an acceptable form of ID with your application. You can find a list of acceptable IDs [http://www.ncsl.org/research/elections-and-campaigns/voter-id.aspx](here)."
    }
  },
  OK: {
    fbid: '105818976117390',
    wording: {
      a: 'an',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'https://www.ok.gov/elections/Voter_Info/Online_Voter_Tool/'
    },
    mail: {
      form_url:
        'https://www.ok.gov/elections/documents/Oklahoma%20Voter%20Registration%20Application%20form%20v4-20%20SEB%20web.pdf',
      type: 'postmarked'
    },
    in_person: {},
    felon_policy: {
      condition: 'PROBATION',
      url:
        'http://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=78446'
    },
    absentee: {
      no_excuse: true
    }
  },
  OR: {
    fbid: '108325505857259',
    wording: {
      a: 'an',
      in: 'in'
    },
    check_reg: {
      online: true,
      url:
        'https://secure.sos.state.or.us/orestar/vr/showVoterSearch.do?lang=eng&source=SOS'
    },
    min_age_to_reg: 17,
    online: {
      url: 'https://secure.sos.state.or.us/orestar/vr/register.do?lang=eng'
    },
    mail: {
      form_url: 'http://sos.oregon.gov/elections/Documents/SEL500.pdf',
      type: 'postmarked'
    },
    in_person: {},
    felon_policy: {
      condition: 'INCARCERATION',
      url:
        'https://web.archive.org/web/20130408025742/http://www.leg.state.or.us/ors/137.html'
    },
    absentee: {
      no_excuse: true,
      automatic: true
    }
  },
  PA: {
    fbid: '105528489480786',
    swing: true,
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url:
        'https://www.pavoterservices.state.pa.us/pages/voterregistrationstatus.aspx'
    },
    online: {
      url:
        'https://www.pavoterservices.state.pa.us/Pages/VoterRegistrationApplication.aspx'
    },
    mail: {
      form_url:
        'https://www.pavoterservices.state.pa.us/documents/VoterApplication_English.pdf',
      type: 'received'
    },
    in_person: {},
    felon_policy: {
      condition: 'INCARCERATION',
      url: 'http://www.votespa.com/en-us/Pages/Convicted-Felon.aspx'
    },
    absentee: {
      no_excuse: false,
      requirements: [
        'Be in the military',
        'Spouses and dependent children of individuals in the military who will be away from home on Election Day, November 8',
        'Members of the Merchant Marine and their spouses and dependent children who will be away from home on Election Day, November 8',
        'Members of a religious or welfare group who are serving with the armed forces and their spouses and dependent children who will be away on Election Day, November 8',
        'An individual who will be away from home on Election Day, November 8, because of his or her business or occupation',
        'A qualified war veteran who is bedridden or hospitalized due to illness or disability and is away from home on Election Day, November 8',
        'A person who can’t vote in person because of illness or disability',
        'A spouse or dependent child of a person employed by Pennsylvania or the federal government who is away from home on Election Day, November 8',
        'A county employee whose Election Day duties will prevent him or her from voting',
        'A person who can’t go to a voting location on Election Day, November 8 because of a religious holiday'
      ],
      special_instructions:
        "Pennsylvania requires you to provide your PA drivers license number or the last four digits of your Social Security number when you vote by absentee ballot. You'll see a place to enter this information on the absentee ballot itself. If you can't provide either of these numbers for whatever reason, you'll need to include a photocopy of your ID with this application."
    }
  },
  RI: {
    fbid: '108295552526163',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'https://sos.ri.gov/vic/'
    },
    min_age_to_reg: 16,
    online: {
      url: 'https://vote.sos.ri.gov'
    },
    mail: {
      form_url:
        'http://www.elections.state.ri.us/publications/Election_Publications/Voter_Registration/December_2012_RI_English_VRF.pdf',
      type: 'postmarked'
    },
    in_person: {},
    felon_policy: {
      condition: 'INCARCERATION',
      url:
        'http://sos.ri.gov/documents/elections/Proposed%20Posted%20Rules%20&%20Voting%20Rights%20Act%20of%202006.pdf'
    },
    absentee: {
      no_excuse: false,
      requirements: [
        'Incapacitated due to illness, mental or physical disability, blindness, or serious mobility impairment',
        'Confined to a hospital, convalescent home, nursing home, rest home, or similar institution',
        'Temporarily absent from the State because of military service, or will be outside the US on Election Day',
        "Unsure if you'll be able to vote at your own polling place on Election Day"
      ]
    }
  },
  SC: {
    fbid: '108635949160808',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url:
        'https://info.scvotes.sc.gov/eng/voterinquiry/VoterInformationRequest.aspx?PageMode=VoterInfo'
    },
    online: {
      url: 'https://info.scvotes.sc.gov/eng/ovr/start.aspx'
    },
    mail: {
      form_url: 'http://www.scvotes.org/files/VR_Blank_Form.pdf',
      type: 'postmarked'
    },
    in_person: {
      time: 'end of day at county clerk',
      url: 'http://www.scvotes.org/how_to_register_absentee_voting'
    },
    felon_policy: {
      condition: 'PROBATION',
      url: 'http://www.scstatehouse.gov/code/t07c005.php'
    },
    absentee: {
      no_excuse: false,
      requirements: [
        'You’re a student who’s away at school you’re a spouse or dependent who lives with them',
        'You’ll be away on Election Day, November 8, because of your job',
        'You’re on vacation on Election Day, November 8',
        'You’re a citizen living overseas',
        'You’re physically disabled',
        'You’re in the military and you’re a spouse or dependent who is outside of their county of residence on Election Day, November 8',
        'You’re serving with the American Red Cross or with the United Service Organizations who are serving with the Armed Forces outside of your county of residence, or you’re a spouse or dependent who lives with them',
        'You’re a government employees who’s serving outside of your county on Election Day, November 8, or you’re a spouse or dependent who lives with them',
        'You’re serving on a jury on Election Day, November 8',
        'You’re admitted to the hospital for an emergency starting Nov 4 through Election Day, November 8',
        'You have a death or funeral in the family on or after Nov 5',
        'You’re in jail or in a pre-trial facility',
        'You’re a caretaker for sick or disabled people',
        'You’re a certified poll watcher, poll manager, or county election official working on Election Day, November 8',
        'You’re 65 or older'
      ]
    }
  },
  SD: {
    fbid: '112283278784694',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'https://sos.sd.gov/Elections/VIPLogin.aspx'
    },
    mail: {
      form_url:
        'https://sdsos.gov/elections-voting/assets/FinalVoterRegistrationForm11.16.12.pdf',
      type: 'received'
    },
    in_person: {},
    felon_policy: {
      condition: 'PROBATION',
      more_details: true,
      url: 'http://felonvoting.procon.org/sourcefiles/south-dakota-hb-1274.pdf'
    },
    absentee: {
      no_excuse: true,
      special_instructions:
        "You must send a copy your South Dakota photo ID with your absentee ballot application. You can find a list of acceptable forms of ID <a href='http://www.ncsl.org/research/elections-and-campaigns/voter-id.aspx' target='_blank'>here</a>. If you can't get a copy of an acceptable form of photo ID, then you must have your absentee ballot application signed and notarized by an authorized witness."
    }
  },
  TN: {
    fbid: '108545005836236',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'https://tnmap.tn.gov/voterlookup/'
    },
    mail: {
      form_url: 'http://sos.tn.gov/node/5996',
      type: 'postmarked'
    },
    in_person: {},
    felon_policy: {
      condition: 'RESTRICTED',
      url: 'http://felonvoting.procon.org/sourcefiles/tennessee_law.pdf',
      more_details: true,
      application:
        'http://felonvoting.procon.org/sourcefiles/tennessee-voting-restoration-application-2012.pdf'
    },
    absentee: {
      no_excuse: false,
      requirements: [
        'You or your spouse is enrolled as a full-time student in an accredited college or university outside your county',
        'You’ll be outside your county during the early voting period and all day on Election Day',
        'You are a member of the military or an overseas citizen',
        'You’ve applied for placement on, and have been placed on, the permanent absentee voting list',
        'You’ll be unable to vote in person due to service as a juror for a federal or state court',
        'You’re 60 years old or older',
        'You have a physical disability and can’t access your polling place',
        'You’re hospitalized, ill, or physically disabled and can’t vote in person',
        'You’re a caretaker of a person who is hospitalized, ill, or disabled',
        'You’re a candidate for office in the election',
        'You serve as an Election Day official or as a member or employee of the election commission',
        'Your observance of a religious holiday prevents you from voting in person during the early voting period and on Election Day',
        "You or your spouse possess a valid commercial driver’s license (CDL) or Transportation Worker Identification Credential (TWIC) card and you certify that you'll be working outside the state or county of registration during the open hours of early voting and Election Day, and have no specific out-of-county or out-of-state address to which mail may be sent or received during such time",
        'You live in a licensed long term care facility outside your county'
      ],
      first_time_vote_restriction: true,
      first_time_vote_exceptions: null
    }
  },
  TX: {
    fbid: '108337852519784',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'https://teamrv-mvp.sos.texas.gov/MVP/mvp.do'
    },
    min_age_to_reg: 17.8333,
    mail: {
      form_url: 'https://webservices.sos.state.tx.us/vrapp/index.asp',
      type: 'received'
    },
    in_person: {},
    felon_policy: {
      condition: 'PROBATION',
      url: 'http://www.statutes.legis.state.tx.us/Docs/EL/htm/EL.11.htm#11.001'
    },
    absentee: {
      no_excuse: false,
      requirements: [
        'You’ll be away from your county during the early voting period and on Election Day',
        'You have a sickness or physical disability',
        'You’re confined in jail but are eligible to vote',
        'You’re 65 years of age or older on Election Day'
      ],
      special_instructions:
        "If you are a first-time voter and you did not provide either your Texas drivers license number or Social Security number on your voter registration form, you need to include a copy of photo ID with your application (disabled persons are exempt). Texas is very strict about ID (student ID cards don't count)."
    }
  },
  UT: {
    fbid: '104164412953145',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'https://vote.utah.gov/vote/menu/index'
    },
    min_age_to_reg: 16,
    online: {
      url: 'https://secure.utah.gov/voterreg/index.html'
    },
    mail: {
      form_url:
        'https://elections.utah.gov/Media/Default/Forms/Utah%20Voter%20Registration%20Form.pdf',
      type: 'postmarked'
    },
    in_person: {},
    felon_policy: {
      condition: 'INCARCERATION',
      url: 'http://le.utah.gov/xcode/Title20A/Chapter3/20A-3-S105.html'
    },
    absentee: {
      no_excuse: true,
      permanent: true
    }
  },
  VT: {
    fbid: '107907135897622',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'https://mvp.sec.state.vt.us/'
    },
    online: {
      url: 'https://olvr.sec.state.vt.us/Registration/'
    },
    mail: {
      form_url: 'https://www.sec.state.vt.us/media/33935/VTVoterApp.pdf',
      type: 'received'
    },
    in_person: {},
    felon_policy: {
      condition: 'UNRESTRICTED',
      url: 'http://legislature.vermont.gov/statutes/section/17/043/02121'
    },
    absentee: {
      no_excuse: true
    }
  },
  VA: {
    fbid: '109564639069465',
    swing: true,
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'https://vote.elections.virginia.gov/VoterInformation'
    },
    online: {
      url: 'https://vote.elections.virginia.gov/Registration/Eligibility'
    },
    mail: {
      form_url:
        'http://elections.virginia.gov/Files/Forms/VoterForms/VoterRegistrationApplication.pdf',
      type: 'postmarked'
    },
    in_person: {},
    felon_policy: {
      condition: 'PROBATION',
      more_details: true,
      url:
        'https://commonwealth.virginia.gov/judicial-system/restoration-of-rights/'
    },
    absentee: {
      no_excuse: false,
      requirements: [
        'A student or the spouse of a student attending school outside your county or city on Election Day',
        'Not in your county or city on Election Day, November 8, because of work, vacation, or personal reasons',
        'Working a required shift of 11 or more hours during the time your voting location is open ',
        'Temporarily living outside the US for work or the spouse or dependent living outside the US with employee',
        'No longer a resident of Virginia but moved less than 30 days before the presidential election and are requesting a ballot to vote for President and Vice President only',
        'Temporarily living outside of US',
        'Disabled, sick, or pregnant',
        'A member of US Armed Forces or the spouse or dependent of a member and won’t be in your county or city on Election Day',
        'In jail on November 5 or later either 1) awaiting trial or 2) for a misdemeanor conviction ',
        'A member of an electoral board, registrar, officer of election, or custodian of voting equipment',
        'Primarily responsible for taking care of a sick or disabled family member confined at home',
        'Under a religious obligation',
        'A law-enforcement officer, firefighter, volunteer firefighter, search and rescue personnel, or emergency medical services personnel ',
        'An official partisan poll watcher'
      ],
      first_time_vote_restriction: true,
      first_time_vote_exceptions: [
        'full-time college student',
        'an active duty military or overseas voter',
        'a physically handicapped individuals',
        '65 or older'
      ]
    }
  },
  WA: {
    fbid: '110453875642908',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'https://weiapplets.sos.wa.gov/MyVote/#/login'
    },
    online: {
      url: 'http://www.sos.wa.gov/elections/myvote/'
    },
    mail: {
      form_url:
        'http://www.sos.wa.gov/elections/Print-Voter-Registration-Forms.aspx',
      type: 'postmarked'
    },
    in_person: {},
    felon_policy: {
      condition: 'PROBATION',
      more_details: true,
      url:
        'http://felonvoting.procon.org/sourcefiles/washington-felon-voting-law-2012.pdf'
    },
    absentee: {
      no_excuse: true,
      automatic: true
    }
  },
  WV: {
    fbid: '112083625475436',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'https://services.sos.wv.gov/Elections/Voter/AmIRegisteredToVote'
    },
    min_age_to_reg: 17,
    online: {
      url: 'https://ovr.sos.wv.gov/Register#Qualifications'
    },
    mail: {
      form_url:
        'http://www.sos.wv.gov/elections/forms/Documents/Forms%20-%20Voter/mail%20in%20voter%20registration%20application.pdf',
      type: 'received'
    },
    in_person: {},
    felon_policy: {
      condition: 'PROBATION',
      url:
        'http://felonvoting.procon.org/sourcefiles/west-virginia-felon-voting-2012.pdf'
    },
    absentee: {
      no_excuse: false,
      requirements: [
        'You attend school away from your home',
        'You’re attending college, university, or other place of education or training',
        'Your work hours or location prevents you from going to the polls',
        'You’ll be away working or on personal travel on Election Day',
        'You’re a military or overseas voter, or a spouse or dependent of someone in the armed forces',
        'You have health problems (including illness and injury) or a physical disability or immobility due to extreme advanced age',
        'You’re in jail or on home detention (but must not be under conviction of any felony, treason, or bribery in an election, including any period of probation or parole)',
        'You’re a participant in the Secretary of State’s address confidentiality program',
        'You’re temporarily required to live away from your home for a period of 4 years or less due to an assignment by your employer',
        'You’re temporarily required to live away from your home because you’re an elected or appointed state or federal officer',
        'Your designated area for absentee voting within the county courthouse or annex of the courthouse and your assigned polling place are inaccessible because of your physical disability'
      ]
    }
  },
  WI: {
    swing: true,
    fbid: '109146809103536',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      online: true,
      url: 'https://myvote.wi.gov/en-us/UpdateMyNameorAddress'
    },
    mail: {
      form_url:
        'http://www.gab.wi.gov/sites/default/files/gab_forms/4/el_131_voter_registration_form_2016_08_pdf_29450.pdf',
      type: 'postmarked'
    },
    in_person: {},
    felon_policy: {
      condition: 'PROBATION',
      url: 'https://docs.legis.wisconsin.gov/statutes/statutes/304/078/3'
    },
    absentee: {
      no_excuse: true,
      special_instructions:
        'Unless you are indefinitely confined due to age, illness, infirmity, or disability or are military or permanently overseas, you have to provide photo ID when requesting an absentee ballot.'
    }
  },
  WY: {
    fbid: '104039182964473',
    wording: {
      a: 'a',
      in: 'in'
    },
    check_reg: {
      instructions: "Call county clerk's office",
      online: false,
      url: 'http://soswy.state.wy.us/Elections/Docs/WYCountyClerks.pdf',
      prefer_vote_dot_org: true
    },
    mail: {
      form_url:
        'http://soswy.state.wy.us/Forms/Elections/General/VoterRegistrationForm.pdf',
      type: 'received'
    },
    in_person: {},
    felon_policy: {
      condition: 'RESTRICTED',
      url:
        'http://felonvoting.procon.org/sourcefiles/wyoming_voting_restoration_bill_2003.pdf',
      more_details: true,
      application:
        'http://felonvoting.procon.org/sourcefiles/wyoming-restoration-of-rights-application-2012.pdf'
    },
    absentee: {
      no_excuse: true
    }
  }
}

export default statesInfo
