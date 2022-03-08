import './App.css';
import HomePage from './pages/homepage.js';
import Contactuspage from './pages/contactuspage.js'
import Lifeateffectualpage from './pages/lifeateffectualpage.js'
import CareerPage from './pages/careerpage.js'
import Ipmintogopage from './pages/ipmintogopage.js';
import Articlespage from './pages/articlespage.js';
import Casestudiespage from './pages/casestudiespage.js'
import Reportspage from './pages/reportspage.js'
import Pressreleasespage from './pages/pressreleasespage';
import Patentspage from './pages/patentspage';
import Trademarkservicespage from './pages/trademarkservicespage'
import Researchdevelopmentpage from './pages/researchdevelopmentpage'
import Informationcommunicationtechnologypage from './pages/informationcommunicationtechnologypage'
import Lifesciencespage from './pages/lifesciencespage'
import Industryengineeringpage from './pages/industryengineeringpage';
import Whowearepage from './pages/whowearepage';
import Foundersleadershippage from './pages/foundersleadershippage';
import Aboutcsrpage from './pages/aboutcsrpage'
import Patentcreationpage from './pages/patentcreationpage'
import Indianpatentservicespage from './pages/indianpatentservicespage'
import Patentmanagementpage from './pages/patentmanagementpage'
import Patentsearchespage from './pages/patentsearchespage'
import Patentlitigationpage from './pages/patentlitigationpage'
import Patentlicensingpage from './pages/patentlicensingpage'
import Trademarksearchpage from './pages/trademarksearchpage';
import Trademarkmanagementpage from './pages/trademarkmanagementpage'
import Trademarkregistrationpage from './pages/trademarkregistrationpage'
import Innovationscoutingpage from './pages/innovationscoutingpage'
import Patenttechnologylandscapepage from './pages/patenttechnologylandscapepage'
import Partneridentificationpage from './pages/partneridentificationpage'
import Competitiveintelligenceipwatchpage from './pages/competitiveintelligenceipwatchpage'
import Opportunityassessmentpage from './pages/opportunityassessmentpage'
import Portfoliowhitespaceanalysispage from './pages/portfoliowhitespaceanalysispage'
import Patentdraftingpage from './pages/patentdraftingpage'
import Officeactionresponsepage from './pages/officeactionresponsepage'
import Patentfilingservicespage from './pages/patentfilingservicespage'
import Formalpatentdrawingsillustrationspage from './pages/formalpatentdrawingsillustrationspage';
import Designpatentdrawingspage from './pages/designpatentdrawingspage';
import Defensivepublicationpage from './pages/defensivepublicationpage';
import Indianpatentapplicationdraftingpage from './pages/indianpatentapplicationdraftingpage';
import Designpatentapplicationpage from './pages/designpatentapplicationpage';
import Oppostionsearchespage from './pages/oppostionsearchespage';
import Licensinglitigationsupportpage from './pages/licensinglitigationsupportpage'
import Indiaentrystrategypage from './pages/indiaentrystrategypage';
import Patentproofreadingpage from './pages/patentproofreadingpage'
import Remotepatentdocketingpage from './pages/remotepatentdocketingpage'
import Patenttranslationspage from './pages/patenttranslationspage'
import Ptacalculationspage from './pages/ptacalculationspage'
import Filehistoryanalysispage from './pages/filehistoryanalysispage'
import Idsmanagementpage from './pages/idsmanagementpage'
import Dataverificationpage from './pages/dataverificationpage'
import Knockoutsearchpage from './pages/knockoutsearchpage'
import Patentabilitysearchpage from './pages/patentabilitysearchpage'
import Accelaratedexaminationsearchpage from './pages/accelaratedexaminationsearchpage'
import Designsearchpage from './pages/designsearchpage';
import Patentinvalidationsearchpage from './pages/patentinvalidationsearchpage'
import Freedomtooperatesearchpage from './pages/freedomtooperatesearchpage';
import Asianlanguagesearchpage from './pages/asianlanguagesearchpage'
import Patentlandscapepage from './pages/patentlandscapepage';
import Stateofartsearchpage from './pages/stateofartsearchpage'
import Biosequencesearchpage from './pages/biosequencesearchpage'
import Chemicalstructuresearchpage from './pages/chemicalstructuresearchpage'
import Prelitigationassessmentpage from './pages/prelitigationassessmentpage'
import Infringementcontentionspage from './pages/infringementcontentionspage'
import Ruleinvestigationsupportpage from './pages/ruleinvestigationsupportpage';
import Priorartsearchpage from './pages/priorartsearchpage'
import Producttestingcodereviewpage from './pages/producttestingcodereviewpage'
import Patentminingpage from './pages/patentminingpage'
import Eouchartpage from './pages/eouchartpage';
import Marketresearchpage from './pages/marketresearchpage'
import Infringementsearchpage from './pages/infringementsearchpage';
import Bucketingandrankingpage from './pages/bucketingandrankingpage'
import Patentduediligencepage from './pages/patentduediligence'
import Marketresearchcapabilitiespage from './pages/marketresearchcapabilitiespage';

import {  Routes, Route } from 'react-router-dom';


function App() {
  return (
    
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact-us" element={<Contactus />} />
    <Route path="/life-at-effectual" element={<Lifeeffectual />} />
    <Route path="/career" element={<Career />} />
    <Route path="/ip-minute-to-go" element={<Ipmintogo />} />
    <Route path="/articles" element={<Articles />} />
    <Route path="/case-studies" element={<Casestudies />} />
    <Route path="/reports" element={<Reports />} />
    <Route path="/press-releases" element={<Pressreleases />} />
    <Route path="/patents" element={<Patents />} />
    <Route path="/trademark-services" element={<Trademarkservices />} />
    <Route path="/research-and-development" element={<Researchdevelopment />} />
    <Route path="/information-communication-technology" element={<Informationcommunication />} />
    <Route path="/lifesciences-and-chemistry" element={<Lifesciences />} />
    <Route path="/industry-engineering" element={<Engineering />} />
    <Route path="/who-we-are" element={<Whoweare />} />
    <Route path="/founders-leadership" element={<Foundersleadership />} />
    <Route path="/about-csr" element={<Aboutcsr />} />
    <Route path="/patent-creation" element={<Patentcreation />} />
    <Route path="/indian-patent-services" element={<Indianpatentservices />} />
    <Route path="/patent-management" element={<Patentmanagement />} />
    <Route path="/patent-searches" element={<Patentsearches />} />
    <Route path="/patent-litigation" element={<Patentlitigation />} />
    <Route path="/patent-licensing" element={<Patentlicensing />} />
    <Route path="/trademark-management" element={<Trademarkmanagement />} />
    <Route path="/trademark-search" element={<Trademarksearch />} />
    <Route path="/trademark-registration" element={<Trademarkregistration />} />
    <Route path="/innovation-scouting" element={<Innovationscouting />} />
    <Route path="/patent-technology-landscape" element={<Patenttechnologylandscape />} />
    <Route path="/partner-identification" element={<Partneridentification />} />
    <Route path="/competitive-intelligence-ip-watch" element={<Competitiveintelligenceipwatch />} />
    <Route path="/opportunity-assessment" element={<Opportunityassessment />} />
    <Route path="/portfolio-whitespace-analysis" element={<Portfoliowhitespaceanalysis />} />
    <Route path="/patent-drafting" element={<Patentdrafting />} />
    <Route path="/office-action-response" element={<Officeactionresponse />} />
    <Route path="/patent-filing-services" element={<Patentfilingservices />} />
    <Route path="/formal-patent-drawings-illustrations" element={<Formalpatentdrawingsillustrations />} />
    <Route path="/design-patent-drawings" element={<Designpatentdrawings />} />
    <Route path="/defensive-publication" element={<Defensivepublication />} />
    <Route path="/indian-patent-application-drafting" element={<Indianpatentapplicationdrafting />} />
    <Route path="/design-patent-application" element={<Designpatentapplication />} />
    <Route path="/opposition-searches" element={<Oppositionsearches />} />
    <Route path="/licensing-litigation-support" element={<Licensinglitigationsupport />} />
    <Route path="/india-entry-strategy" element={<Indiaentrystrategy />} />
    <Route path="/patent-proofreading" element={<Patentproofreading />} />
    <Route path="/remote-patent-docketing" element={<Remotepatentdocketing />} />
    <Route path="/patent-translations" element={<Patenttranslations />} />
    <Route path="/pta-calculations" element={<Ptacalculations />} />
    <Route path="/file-history-analysis" element={<Filehistoryanalysis />} />
    <Route path="/ids-management" element={<Idsmanagement />} />
    <Route path="/data-verification" element={<Dataverification />} />
    <Route path="/knockout-search" element={<Knockoutsearch />} />
    <Route path="/patentability-search" element={<Patentabilitysearch />} />
    <Route path="/accelarated-examination-search" element={<Accelaratedexaminationsearch />} />
    <Route path="/design-search" element={<Designsearch />} />
    <Route path="/patent-invalidation-search" element={<Patentinvalidationsearch />} />
    <Route path="/freedom-to-operate-search" element={<Freedomtooperatesearch />} />
    <Route path="/asian-language-searches" element={<Asianlanguagesearch />} />
    <Route path="/patent-landscape" element={<Patentlandscape />} />
    <Route path="/state-of-art-search" element={<Stateofartsearch />} />
    <Route path="/bio-sequence-search" element={<Biosequencesearch />} />
    <Route path="/chemical-structure-search" element={<Chemicalstructuresearch />} />
    <Route path="/pre-litigation-assessment" element={<Prelitigationassessment />} />
    <Route path="/infringement-contentions" element={<Infringementcontentions />} />
    <Route path="/rule-11-337-investigation-support" element={<Ruleinvestigationsupport />} />
    <Route path="/prior-art-search" element={<Priorartsearch />} />
    <Route path="/product-testing-code-review" element={<Producttestingcodereview />} />
    <Route path="/patent-mining" element={<Patentmining />} />
    <Route path="/eou-chart" element={<Eouchart />} />
    <Route path="/market-research" element={<Marketresearch />} />
    <Route path="/infringement-search" element={<Infringementsearch />} />
    <Route path="/bucketing-and-ranking" element={<Bucketingandranking />} />
    <Route path="/patent-due-diligence" element={<Patentduediligence />} />
    <Route path="/market-research-capabilities" element={<Marketresearchcapabilities />} />
   
   
   </Routes>
  );
}

function Marketresearchcapabilities(){
  return(
    <Marketresearchcapabilitiespage />
  );
}

function Patentduediligence(){
  return(
    <Patentduediligencepage />
  );
}

function Bucketingandranking(){
  return(
    <Bucketingandrankingpage />
  );
}

function Infringementsearch(){
  return(
    <Infringementsearchpage />
  );
}

function Marketresearch(){
  return(
    <Marketresearchpage />
  );
}

function Eouchart(){
  return(
    <Eouchartpage />
  );
}

function Patentmining(){
  return(
    <Patentminingpage />
  )
}

function Producttestingcodereview(){
  return(
    <Producttestingcodereviewpage />
  );
}

function Priorartsearch(){
  return(
    <Priorartsearchpage />
  );
}

function Ruleinvestigationsupport(){
  return(
    <Ruleinvestigationsupportpage />
  )
}

function Infringementcontentions(){
  return(
    <Infringementcontentionspage />
  )
}

function Prelitigationassessment(){
  return(
    <Prelitigationassessmentpage />
  );
}

function Chemicalstructuresearch(){
  return(
    <Chemicalstructuresearchpage />
  );
}

function Biosequencesearch(){
  return(
    <Biosequencesearchpage />
  )
}

function Stateofartsearch(){
  return(
    <Stateofartsearchpage />
  );
}

function Patentlandscape(){
  return(
    <Patentlandscapepage />
  );
}

function Asianlanguagesearch() {
  return(
    <Asianlanguagesearchpage />
  );
}

function Freedomtooperatesearch() {
  return(
    <Freedomtooperatesearchpage/>
  );
}

function Patentinvalidationsearch(){
  return(
    <Patentinvalidationsearchpage />
  )

}

function Designsearch(){
  return(
    <Designsearchpage />
  );
}

function Accelaratedexaminationsearch(){
  return(
    <Accelaratedexaminationsearchpage />
  );
}


function Patentabilitysearch(){
  return(
    <Patentabilitysearchpage />
  );
}

function Knockoutsearch(){
  return(
    <Knockoutsearchpage />
  );
}

function Dataverification(){
  return(
    <Dataverificationpage />
  )
}

function Idsmanagement(){
  return(
    <Idsmanagementpage />
  );
}

function Filehistoryanalysis(){
  return(
    <Filehistoryanalysispage />
  );
}

function Ptacalculations(){
  return(
    <Ptacalculationspage />
  );
}

function Patenttranslations(){
  return(
    <Patenttranslationspage />
  );
}

function Remotepatentdocketing(){
  return(
    <Remotepatentdocketingpage />
  );
}

function Patentproofreading(){
  return(
    <Patentproofreadingpage />
  );
}

function Indiaentrystrategy(){
  return(
    <Indiaentrystrategypage />
  )
}

function Home() {
  return (
    <HomePage />
  );
}

function Contactus() {
  return (
    <Contactuspage />
  );
}

function Lifeeffectual() {
  return (
    <Lifeateffectualpage />
  );
}

function Career(){
  return (
    <CareerPage />
  );
}

function Ipmintogo() {
  return(
    <Ipmintogopage />
  );
}

function Articles(){
  return(
<Articlespage />
  );
}

function Casestudies(){
  return(
<Casestudiespage />  );
}

function Reports(){
return(
<Reportspage /> 
 );
}

function Pressreleases() {
  return(
    <Pressreleasespage />
  );
}

function Patents(){
  return(
    <Patentspage />
  );
}

function Trademarkservices(){
  return(
    <Trademarkservicespage />
  );
}

function Researchdevelopment(){
  return(
    <Researchdevelopmentpage />
  );
}

function Informationcommunication() {
  return(
    <Informationcommunicationtechnologypage />
  );
}

function Lifesciences(){
  return(
    <Lifesciencespage />
  );
}

function Engineering() {
  return(
    <Industryengineeringpage />
  );
}

function Whoweare() {
  return(
    <Whowearepage />
  );
}

function Foundersleadership(){
  return(
    <Foundersleadershippage />
  );
}

function Aboutcsr() {
  return(
    <Aboutcsrpage />
  );
}

function Patentcreation(){
return(
  <Patentcreationpage />
);
}

function Indianpatentservices(){
  return(
    <Indianpatentservicespage />
  );
}

function Patentmanagement() {
  return(
    <Patentmanagementpage />
  );
}

function Patentsearches(){
  return(
    <Patentsearchespage />
  )
}

function Patentlitigation(){
  return(
    <Patentlitigationpage />
  )
}

function Patentlicensing(){
  return(
    <Patentlicensingpage />
  )
}

function Trademarksearch(){
  return(
    <Trademarksearchpage />
  )
}

function Trademarkmanagement(){
  return(
    <Trademarkmanagementpage />
  )
}

function Trademarkregistration(){
  return(
    <Trademarkregistrationpage />
  );
}

function Innovationscouting(){
  return(
    <Innovationscoutingpage />
  );
}

function Patenttechnologylandscape(){
  return(
    <Patenttechnologylandscapepage />
  );
}

function Partneridentification(){
  return(
    <Partneridentificationpage />
  );
}

function Competitiveintelligenceipwatch(){
  return(
    <Competitiveintelligenceipwatchpage />
  )
}

function Opportunityassessment(){
  return(
    <Opportunityassessmentpage />
  );
}

function Portfoliowhitespaceanalysis(){
  return(
    <Portfoliowhitespaceanalysispage />
  )
}

function Patentdrafting(){
  return(
    <Patentdraftingpage />
  )
}

function Officeactionresponse(){
  return(
    <Officeactionresponsepage />
  )
}

function Patentfilingservices(){
  return(
<Patentfilingservicespage />
  );
}

function Formalpatentdrawingsillustrations(){
  return(
    <Formalpatentdrawingsillustrationspage />
  )
}

function Designpatentdrawings(){
  return(
    <Designpatentdrawingspage />
  )
}

function Defensivepublication(){
  return(
    <Defensivepublicationpage />
  )
}

function Indianpatentapplicationdrafting() {
  return(
    <Indianpatentapplicationdraftingpage />
  )
}

function Designpatentapplication(){
  return(
    <Designpatentapplicationpage />
  )
}

function Oppositionsearches(){
  return(
    <Oppostionsearchespage /> //
  )
}

function Licensinglitigationsupport(){
  return(
<Licensinglitigationsupportpage /> //
  );
}

export default App;
