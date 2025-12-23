"use client";

import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import "./syllabusStyles.css"; // Import the CSS file for scoped styling
import QuizCard from "@/app/previous-year-paper/components/QuizCard";
import { useAuth } from "@/Context/AuthContext";
import { useQuestions } from "@/Context/QuestionsContext";
import { useRouter } from "next/navigation";
import { BASE_URL, FREE_QUIZ_NUMBER } from "@/utils/globalStrings";
import axios from "axios";
import SubscriptionPopup from "@/app/previous-year-paper/components/SubscriptionPopup";

const PageContentSection = ({ questionsData = [] }) => {
  const [activeTab, setActiveTab] = useState(""); // Default active tab will be set dynamically
  const [tabConfig, setTabConfig] = useState([]); // Dynamically populated tab configuration
  const [isLoading, setIsLoading] = useState(true);
  const [isSubscriptionActive, setIsSubscriptionActive] = useState(false);
  const [loadingCard, setLoadingCard] = useState(null);
  const [isSubscriptionPopupOpen, setIsSubscriptionPopupOpen] = useState(false);
  const { user, openLoginPopup } = useAuth();
  const { updatePaperMeta, setQuestions } = useQuestions();
  const router = useRouter();
  const solvePaperRef = useRef(null); // Reference to the "Solve Paper" section

  // Enrich questionsData with attempted counts
  const enrichedQuestionsData = useMemo(() => {
    return questionsData.map((quiz) => ({
      ...quiz,
      attempted: quiz.attempted || `${(Math.random() * 4 + 1).toFixed(1)}k`,
    }));
  }, [questionsData]);

  // Fetch tab configuration from an external source (e.g., API or JSON file)
  useEffect(() => {
    // Simulate fetching data from an API or JSON file
    const fetchTabConfig = async () => {
      const dynamicConfig = [
        {
          label: "Previous Year Papers",
          value: "papers",
          isVisible: true,
          type: "papers", // Special type to show QuizCards
        },
        {
          label: "About Exam",
          value: "syllabus",
          isVisible: true,
          content: `
    

    <h2>गट-क संवर्गातील कृषी सेवक सरळसेवा</h2>

    <h2>अ) कृषि सेवक लेखी परीक्षेचा पाठयक्रम</h2>
    <ul>
        <li>सामान्य ज्ञान - २० प्रश्न</li>
        <li>बुध्दीमत्ता चाचणी - २० प्रश्न</li>
        <li>मराठी भाषा - २० प्रश्न</li>
        <li>इंग्रजी भाषा - २० प्रश्न</li>
    </ul>

    <h2>ब) कृषी सेवक लेखी परीक्षेचा विस्तृत पाठयक्रम</h2>
    <table border="1">
        <tr>
            <th>अभ्यासक्रम</th>
            <th>प्रश्न संख्या</th>
        </tr>
        <tr>
            <td>शैक्षणिक अर्हता व कृषी सहाय्यक पदांची कर्तव्य व जबाबदाऱ्या</td>
            <td>६० प्रश्न</td>
        </tr>
    </table>


<body>

<h2>१) मृद शास्त्र व्यवस्थापन</h2>

<h3>१.१ जमिनीचे स्वाभाविक गुणधर्म</h3>
<ul>
    <li>जमिनीचे प्राकृतिक व भौतिक गुणधर्म</li>
    <li>जमिनीचा पोत, घडण, रचना, घनता</li>
    <li>पोकळी किंवा सच्छिद्रता, रंग, स्थिरता</li>
    <li>तापमान किंवा उष्णतामान</li>
    <li>जमिनीचे रासायनिक गुणधर्म</li>
    <li>जमिनीचा सामु, विद्युतवाहकता, सेंद्रिय कर्ब</li>
    <li>मुक्त चुनखडी, मातीतील कलील</li>
    <li>आघात, प्रतिबंधक योग्यता (सी.ई.सी)</li>
</ul>

<h3>१.२ जमिनीचे जैविक गुणधर्म</h3>
<ul>
    <li>सुक्ष्म जीवजंतू व त्यांचे उत्पादन क्षमतेशी असलेले संबंध</li>
    <li>जमिनीतील उपलब्ध अन्नद्रव्य व त्यांच्या उपलब्धतेवर होणारा परिणाम</li>
    <li>वनस्पतीसाठी लागणारी आवश्यक अन्नद्रव्ये</li>
    <li>मुख्य, दुय्यम व सुक्ष्म अन्नद्रव्ये</li>
    <li>त्यांचे कार्य व त्यांच्या कमतरतेची लक्षणे</li>
</ul>

<h3>१.३ जमिनीतील पाण्याचे प्रकार आणि महत्व</h3>
<ul>
    <li>पाण्याचे कार्य</li>
    <li>जमिनीतील प्रवेश व हलचाल</li>
    <li>जमिनीतील पाणी धरुन ठेवणे</li>
    <li>जमिनीतील पाणी स्थिर पदे</li>
    <li>जमिनीचे पाण्याचे नुकसान आणि पाण्याचे चक्र</li>
    <li>जमिनीचा निचरा, निचरा पध्दती</li>
    <li>अतिरिक्त पाण्याचे पीकावर व जमिनीवर होणारे परिणाम</li>
</ul>

<h3>१.४ जमिनीची मशागत</h3>
<ul>
    <li>तिचे प्रकार, औजारे व त्यांचा उपयोग</li>
    <li>मशागतीचे उद्देश</li>
    <li>मशागतीच्या कामाचे प्रकार</li>
    <li>त्यासाठी लागणारी निरनिराळी औजारे</li>
</ul>

<h3>१.५ माती परीक्षण</h3>
<ul>
    <li>महत्व व उद्देश</li>
</ul>

<h2>२) जमिन व्यवस्थापन</h2>

<h3>२.१ जमिनीची धूप</h3>
<ul>
    <li>धूप होण्याची कारणे</li>
    <li>धूपीचे निरनिराळे प्रकार व नुकसान</li>
    <li>धूप थांबविण्याचे उपाय</li>
</ul>

<h3>२.२ भुमि व जलसंरक्षणाच्या पध्दती</h3>
<ul>
    <li>व्यवस्थापन पध्दती</li>
    <li>यांत्रिकी पध्दती</li>
    <li>भूमी सुधारण्याच्या व संरक्षणाच्या पध्दती</li>
    <li>निरनिराळया शासकिय योजना</li>
</ul>

<h3>२.३ सेंद्रिय खते</h3>
<ul>
    <li>प्रकार व त्याचे गुणधर्म</li>
    <li>शेणखत बनविण्याच्या सुधारलेल्या पध्दती</li>
    <li>कंपोष्ट खत बनविण्याच्या पध्दती</li>
    <li>जैविक खते</li>
</ul>

<h3>२.४ रासायनिक खतांचा प्रकार व वापर</h3>
<ul>
    <li>रासायनिक खतांचा कार्यक्षम वापर</li>
    <li>सेंद्रिय खतांचा वापर</li>
    <li>रासायनिक खतांचा समतोल वापर</li>
    <li>खते देण्याच्या पध्दती</li>
    <li>खते घालताना घ्यावयाची काळजी</li>
</ul>

<h3>२.५ कोरडवाहू क्षेत्राची व्यवस्था</h3>
<ul>
    <li>पाणलोट क्षेत्राचा कोरडवाहू शेतीमधील सहभाग</li>
    <li>पाणलोट क्षेत्राच्या पीकासाठी सामाजिक वनीकरण</li>
    <li>मृद संधारण विभाग, फलोद्यान विभाग आणि सेवाभावी संस्थांचा सहभाग</li>
</ul>

<h3>२.६ जमिनीचा आणि पाणी देण्याचा संबंध</h3>
<ul>
    <li>पाणी देण्याच्या पध्दती</li>
    <li>तुषार, ठिबक व बायऑल सिंचन पध्दती</li>
</ul>

<h2>३) पीक संवर्धन</h2>

<h3>३.१ पीकसंवर्धन</h3>
<ul>
    <li>पिकांचे वर्गीकरण</li>
    <li>हवामान आणि हंगाम</li>
</ul>

<h3>३.२ बियाणे</h3>
<ul>
    <li>बियाणाचे गुणधर्म</li>
    <li>बियाच्या उगवणसाठी लागणाऱ्या आवश्यक गोष्टी</li>
</ul>

<h3>३.३ पीकाच्या वाढीसाठी लागणाऱ्या आवश्यक गोष्टी</h3>
<ul>
    <li>जमीन, पाणी आणि हवामान</li>
</ul>

<h3>३.४ तृणवर्गीय व इतर पिके</h3>
<ul>
    <li>तृणवर्गीय पिके</li>
    <li>कडधान्य वर्गीय पिके</li>
    <li>गळीतधान्य</li>
    <li>हिरवळी खताची पिके</li>
</ul>

<h3>३.५ रोग व कीड नियंत्रण</h3>
<ul>
    <li>रोग नियंत्रणाची व कीड नियंत्रणाची सर्वसाधारण तत्त्वे</li>
    <li>जैविक किड/ रोगनियंत्रण</li>
    <li>एकात्मिक किड व रोगनियंत्रण</li>
</ul>

<h3>३.६ कीटक नाशके व बुरशी नाशकांचा अभ्यास</h3>

<h3>३.७ साठवलेल्या धान्यातील किडी व त्यांचे नियंत्रण</h3>

<h3>३.८ बिजोत्पादन</h3>
<ul>
    <li>तंत्रप्रमाणीकरण</li>
    <li>विलगीकरण</li>
    <li>संकर कार्यक्रम</li>
    <li>बिजोत्पादनाचे टप्पे</li>
</ul>


<h2>४) पीक संवर्धन व शेती पुरक उद्योग</h2>

<h3>४.१ निरनिराळया पीकपद्धती</h3>

<h3>४.२ पीकाचे पाणी व्यवस्थापन</h3>
<ul>
    <li>पाणी व्यवस्थापन म्हणजे काय?</li>
    <li>महत्त्व</li>
    <li>विहिरीतील पाणी मोजणे व विहिरीची क्षमता काढणे</li>
    <li>पीकांना पाण्याच्या वेळा ठरविण्याचे निकष</li>
    <li>पाणी देण्याच्या निरनिराळया पद्धतींचा अभ्यास</li>
</ul>

<h3>४.३ अळिंबी उत्पादन</h3>
<ul>
    <li>माहिती आणि उत्पादनाचे तंत्र</li>
    <li>खाण्यायोग्य अळिंबीचा अभ्यास व वर्गीकरण</li>
    <li>अळिंबी उत्पादनासाठी आवश्यक साहित्य</li>
    <li>अळिंबीची काढणी, विक्री प्रक्रिया आणि टिकविणे</li>
</ul>

<h3>४.४ रेशीमउत्पादनाची ओळख</h3>

<h2>५) उद्यानविद्या - रोपवाटिका आणि फळबाग व्यवस्थापन</h2>

<h3>५.१ महाराष्ट्राचे हवामानानुसार पडलेले विभाग</h3>

<h3>५.२ फळबाग यशस्वी करण्यासाठी आवश्यक बाबी</h3>
<ul>
    <li>पर्जन्यमान</li>
    <li>तापमान</li>
    <li>आर्द्रता</li>
    <li>जमिनीची निवड</li>
    <li>योग्य जातीची निवड</li>
    <li>पाणीपुरवठा</li>
    <li>बाजारपेठ</li>
</ul>

<h3>५.३ फळबाग लागवड व व्यवस्थापन</h3>
<ul>
    <li>पाणी / खते देण्याच्या पध्दती</li>
    <li>सेंद्रिय खताचा निर्यातक्षम फळांच्या निर्मितीमध्ये महत्त्व</li>
    <li>आंतर मशागत आणि पाण्याचा निचरा करण्याच्या पध्दती</li>
    <li>तणाचा बंदोबस्त</li>
    <li>बहार धरणे पध्दती - मृग, हस्त व आंबेबहार</li>
    <li>छाटणी आणि वहाण देण्याचे उद्देश व पध्दती</li>
    <li>फुल धारणेच्या सवयी आणि फुल धारणेवर होणारे परिणाम</li>
    <li>फळांची गळ, विरळणी, पक्वता, काढणी अवस्था ओळखणे</li>
    <li>प्रतवारी, पॅकींग, वाहतूक व विक्री व्यवस्था</li>
</ul>

<h3>५.४ कोरडवाहू फळपिकांचे व्यवस्थापन</h3>

<h3>५.५ महाराष्ट्रातील समशीतोष्ण व उष्णकटिबंधीय फळझाडे</h3>

<h3>५.६ फळपिकांवरील रोग व किडी नियंत्रण</h3>

<h3>५.७ शासनाच्या फळबाग लागवडीच्या योजना</h3>

<h3>५.८ रोपवाटिका व्यवस्थापन</h3>
<ul>
    <li>भाजीपाला व फुलझाडे यांच्या अभिवृद्धीचे प्रकार</li>
    <li>बियापासून शाकीय अभिवृद्धी - पद्धती, फायदे व तोटे</li>
</ul>

<h3>५.९ मातृ वृक्षाचे महत्त्व व निगा</h3>

<h3>५.१० हरितगृह व तुषारगृह</h3>
<ul>
    <li>आधुनिक शेतीतील महत्त्व</li>
    <li>प्रकार व आकार</li>
    <li>उभारणी</li>
</ul>


<h2>६) उद्यानविद्या - भाजीपाला आणि फुलांचे उत्पादन</h2>

<h3>६.१ भाजीपाल्याचे वर्गीकरण</h3>

<h3>६.२ प्रमुख भाजीपाल्याची लागवड</h3>
<ul>
    <li>पालेभाज्या</li>
    <li>फळभाज्या</li>
    <li>वेलवर्गीय भाज्या</li>
    <li>शेंगवर्गीय भाज्या</li>
    <li>मुळवर्गीय भाज्या</li>
    <li>कंदवर्गीय भाज्या</li>
    <li>कोबीवर्गीय भाज्या</li>
    <li>बहुवर्षीय भाज्या</li>
</ul>

<h3>६.३ फुलशेती</h3>
<ul>
    <li>महत्त्व व लागवडीस असलेला वाव</li>
</ul>

<h3>६.४ पुष्प उत्पादनातील विशेष बाबी</h3>
<ul>
    <li>हरित गृहातील फुलशेती</li>
    <li>पुष्प-प्रदर्शनासाठी फुलांची निवड व तयारी</li>
</ul>

<h3>६.५ फुलपिकांच्या अभिवृद्धीच्या पद्धती</h3>

<h3>६.६ महत्त्वाच्या फुलझाडांची लागवड</h3>

<h3>६.७ फळे आणि भाजीपाला टिकविण्याच्या विविध पद्धती</h3>

<h2>७) कृषी विस्तार</h2>

<h3>७.१ विस्ताराची मूलतत्त्वे</h3>
<ul>
    <li>वैयक्तिक संपर्क - शेतावर व घरी भेट</li>
    <li>दूरध्वनीवरील चर्चा</li>
    <li>वैयक्तिक चर्चा</li>
</ul>

<h3>७.२ कार्यालयीन भेट व गटसंपर्क</h3>
<ul>
    <li>सभा</li>
    <li>प्रात्यक्षिके</li>
    <li>शैक्षणिक सहल</li>
    <li>गट चर्चा</li>
</ul>

<h3>७.३ समूह संपर्क</h3>
<ul>
    <li>शेतकरी मेळावे</li>
    <li>कृषी दिन</li>
    <li>प्रदर्शन</li>
    <li>रेडिओ, दूरदर्शन, सभा</li>
</ul>

<h3>७.४ शेती विषयक वाड्मय</h3>
<ul>
    <li>घडीपत्रिका</li>
    <li>परिपत्रक</li>
    <li>पुस्तिका</li>
    <li>भित्तीपत्रक</li>
    <li>तक्ते</li>
    <li>आलेख</li>
    <li>बातमी</li>
    <li>नमुने छायाचित्र</li>
</ul>

<h3>७.५ दृकश्राव्य साधने</h3>
<ul>
    <li>रेडिओ</li>
    <li>दूरदर्शन</li>
    <li>टेपरेकॉर्डर</li>
    <li>चलचित्रपट</li>
    <li>स्लाइड शो</li>
    <li>व्हिडिओ कॅसेट</li>
    <li>नाटक, तमाशा, कीर्तन</li>
</ul>

<h3>७.६ संगणक</h3>
<ul>
    <li>रचना</li>
    <li>कार्य</li>
    <li>उपयोग</li>
    <li>माहिती साठविणे व देवाणघेवाण</li>
</ul>

<h3>७.७ विस्तार कार्यकर्ता</h3>
<ul>
    <li>गुणकर्तव्ये</li>
    <li>प्रकार</li>
</ul>

<h3>७.८ कार्यक्रमाचे नियोजन</h3>
<ul>
    <li>तत्त्वे</li>
    <li>पायऱ्या</li>
    <li>फायदे</li>
</ul>

<h3>७.९ विकास योजना</h3>
<ul>
    <li>माहिती, उद्देश, लाभार्थी</li>
    <li>प्रशासन आणि फायदे-तोटे</li>
    <li>कोरडवाहू क्षेत्र विकास योजना (DPOP)</li>
    <li>निर्धारित लाभ क्षेत्र विकास कार्यक्रम</li>
    <li>आदिवासी क्षेत्र विकास कार्यक्रम</li>
    <li>डोंगरी क्षेत्र विकास कार्यक्रम</li>
    <li>एकात्मिक ग्रामीण विकास कार्यक्रम</li>
    <li>एकात्मिक बळ विकास योजना</li>
    <li>फळबाग विकास योजना</li>
    <li>बहुविध पीक योजना</li>
    <li>एकात्मिक कडधान्य सुधार योजना</li>
    <li>एकात्मिक तेलबिया सुधार कार्यक्रम</li>
    <li>राष्ट्रीय प्रात्यक्षिक योजना</li>
    <li>राष्ट्रीय कृषी संशोधन प्रकल्प</li>
    <li>एकात्मिक चारा विकास योजना</li>
    <li>जवाहर रोजगार योजना</li>
    <li>राष्ट्रीय पाणलोट विकास कार्यक्रम</li>
    <li>कृषी विज्ञान केंद्र</li>
</ul>

<h3>७.१० महत्त्वाचे शेती विषयक कायदे</h3>
<table border="1">
    <tr>
        <th>क्र.</th>
        <th>कायदा</th>
    </tr>
    <tr>
        <td>१</td>
        <td>बि-बियाणे कायदा</td>
    </tr>
    <tr>
        <td>२</td>
        <td>रासायनिक खत नियंत्रण कायदा</td>
    </tr>
    <tr>
        <td>३</td>
        <td>कीटकनाशक कायदा</td>
    </tr>
    <tr>
        <td>४</td>
        <td>जंगल कायदा</td>
    </tr>
    <tr>
        <td>५</td>
        <td>तुकडेबंदी व तुकडे तोड कायदा</td>
    </tr>
</table>


<h2>८) कृषी व्यवसायातील वित्त व्यवस्थापन</h2>

<h3>८.१ कृषी व्यवसायात वित्त व्यवस्थापनाचे महत्त्व</h3>

<h3>८.२ कृषी व्यवसायात पत पुरवठ्याची भूमिका</h3>

<h3>८.३ कृषी पत पुरवठा करणाऱ्या संस्था</h3>
<ul>
    <li>राष्ट्रीय बँका</li>
    <li>सहकारी बँका</li>
    <li>ग्रामीण पतसंस्था</li>
    <li>मायक्रोफायनान्स संस्था</li>
</ul>

<h3>८.४ कृषी पत प्रस्ताव</h3>
<ul>
    <li>आर्थिक सुसज्जतेसाठी कृषी पत चाचणी</li>
    <li>पत प्रस्ताव सादर करण्याची प्रक्रिया</li>
    <li>पत परतफेडीच्या अटी</li>
</ul>

<h3>८.५ कृषी व्यवसाय विश्लेषण</h3>
<ul>
    <li>शेतीतील नफा-तोटा विश्लेषण</li>
    <li>उत्पन्न व खर्चाचे व्यवस्थापन</li>
    <li>गुंतवणूक परतावा</li>
</ul>

<h2>९) कृषी विपणन</h2>

<h3>९.१ शेतीमाल विक्री - व्याप्ती आणि महत्त्व</h3>

<h3>९.२ शेतीमालाच्या बाजारपेठेचे प्रकार</h3>
<ul>
    <li>स्थानिक बाजार</li>
    <li>राज्यस्तरीय बाजार</li>
    <li>राष्ट्रीय बाजार</li>
    <li>आंतरराष्ट्रीय बाजार</li>
</ul>

<h3>९.३ शेतीमाल विक्री व्यवस्थेतील माध्यम आणि संस्था</h3>
<ul>
    <li>कृषी उत्पन्न बाजार समित्या</li>
    <li>सरकारी खरेदी केंद्रे</li>
    <li>निजी व्यापार माध्यमे</li>
    <li>ई-नाम आणि डिजिटल मार्केटिंग</li>
</ul>

<h3>९.४ शेतीमाल विक्रीच्या समस्या</h3>
<table border="1">
    <tr>
        <th>क्र.</th>
        <th>समस्या</th>
    </tr>
    <tr>
        <td>१</td>
        <td>मध्यस्थांचा अधिक हस्तक्षेप</td>
    </tr>
    <tr>
        <td>२</td>
        <td>योग्य बाजारभाव मिळण्यात अडचणी</td>
    </tr>
    <tr>
        <td>३</td>
        <td>वाहतूक व साठवणूक समस्या</td>
    </tr>
    <tr>
        <td>४</td>
        <td>शेतीमालाचे लवकर खराब होणे</td>
    </tr>
    <tr>
        <td>५</td>
        <td>आंतरराष्ट्रीय बाजारपेठेत प्रवेश मर्यादा</td>
    </tr>
</table>


          
          `,
          type: "html", // Type of content (e.g., HTML, array, URL)
        },
        {
          label: "Current News",
          value: "news",
          isVisible: true,
          content: [
            // {
            //   title: "New Exam Dates Announced",
            //   date: "Oct 15, 2024",
            //   link: "#",
            // },
            // {
            //   title: "Admit Cards Released",
            //   date: "Sep 20, 2024",
            //   link: null,
            // },
          ],
          type: "array", // Type of content (array of objects)
        },
        {
          label: "Official Website",
          value: "website",
          isVisible: true,
          content:
            "https://mahaforest.gov.in/Contentpage/index/RlBnaHZ1dEJTZnhTWlZZPQ%3D%3D/en",
          type: "url", // Type of content (URL string)
        },
      ];

      // Simulate a delay (e.g., network request)
      setTimeout(() => {
        setTabConfig(dynamicConfig);
        // Set "papers" tab as active first (Previous Year Papers)
        const papersTab = dynamicConfig.find(tab => tab.value === "papers" && tab.isVisible);
        setActiveTab(papersTab?.value || dynamicConfig[0]?.value || "");
        setIsLoading(false);
      }, 1000);
    };

    fetchTabConfig();
  }, []);

  // Fetch subscription status
  useEffect(() => {
    const fetchSubscriptionStatus = async () => {
      if (user) {
        try {
          const response = await axios.get(`${BASE_URL}/${user._id}`);
          setIsSubscriptionActive(response.data.user.isSubscriptionActive);
        } catch (error) {
          console.error("Error fetching subscription status:", error);
        }
      }
    };
    fetchSubscriptionStatus();
  }, [user]);

  // Handle start test
  const handleStartTest = useCallback(async (catID, subcatId, yearId, cardIndex, paper) => {
    if (!user) {
      openLoginPopup();
      return;
    }

    setLoadingCard(cardIndex);

    try {
      if (cardIndex < FREE_QUIZ_NUMBER || isSubscriptionActive) {
        const [categoriesResponse, papersResponse] = await Promise.all([
          axios.get(`${BASE_URL}/exam-categories/get-all-exam-category`),
          axios.get(`${BASE_URL}/papers/${catID}/${subcatId}/${yearId}`)
        ]);

        const allCategories = categoriesResponse.data;
        const categoryDetail = allCategories.find((cat) => cat._id === catID);

        setQuestions(papersResponse.data.questions);
        updatePaperMeta({
          name: paper?.title,
          logo: categoryDetail?.image || "/default-error-logo.png",
          year: paper?.paper?.QPYear,
        });

        router.push("/test");
      } else {
        setIsSubscriptionPopupOpen(true);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      updatePaperMeta({
        name: "Error Loading Paper",
        logo: "/default-error-logo.png",
      });
    } finally {
      setLoadingCard(null);
    }
  }, [user, isSubscriptionActive, openLoginPopup, router, setQuestions, updatePaperMeta]);

  const scrollToSolvePaper = useCallback(() => {
    if (solvePaperRef.current) {
      solvePaperRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Memoize visible tabs to prevent unnecessary recalculations
  const visibleTabs = useMemo(() => {
    return tabConfig.filter((tab) => tab.isVisible);
  }, [tabConfig]);

  // Memoize tab change handler
  const handleTabChange = useCallback((value) => {
    setActiveTab(value);
  }, []);

  return (
    <section data-section="tabs" className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
      {/* Section Header */}
      <div className="text-center mb-6 sm:mb-8 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#055AAB] via-[#1BA9BC] to-[#2966C1]">
            Complete Exam Resources
          </span>
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
          Access previous year papers, syllabus, news, and official information all in one place
        </p>
      </div>

      {/* Horizontal Navigation Bar */}
      <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center mb-6 sm:mb-8 md:mb-12 px-2">
        {visibleTabs.map((tab) => (
          <button
            key={tab.value}
            className={`px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 rounded-full transition-all duration-300 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap ${
              activeTab === tab.value
                ? "bg-gradient-to-r from-[#055AAB] to-[#2966C1] text-white shadow-lg transform scale-105"
                : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-[#055AAB] focus:outline-none focus:ring-2 focus:ring-[#055AAB] shadow-sm"
            }`}
            onClick={() => handleTabChange(tab.value)}
            aria-label={`Switch to ${tab.label} tab`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="w-full bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 p-4 sm:p-6 md:p-8 lg:p-10">
        {/* Render content based on activeTab */}
        {visibleTabs.map((tab) => {
          if (activeTab === tab.value) {
            switch (tab.type) {
              case "papers":
                // Show QuizCards for Previous Year Papers
                return (
                  <div key={tab.value} className="animate-fade-in">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-4">
                      <div className="flex-1">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#055AAB] to-[#1BA9BC] mb-1 sm:mb-2">
                          {tab.label}
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                          Practice with {enrichedQuestionsData.length}+ authentic previous year papers
                        </p>
                      </div>
                      {!isSubscriptionActive && (
                        <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-50 border border-orange-200 rounded-lg w-full sm:w-auto">
                          <span className="text-xs sm:text-sm text-orange-600 font-semibold">
                            Free: {FREE_QUIZ_NUMBER} | Premium: {enrichedQuestionsData.length - FREE_QUIZ_NUMBER}+
                          </span>
                        </div>
                      )}
                    </div>
                    {enrichedQuestionsData && enrichedQuestionsData.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
                        {enrichedQuestionsData.map((quiz, qIndex) => (
                          <QuizCard
                            key={`${quiz.paper?.catID}-${quiz.paper?.yearId}-${qIndex}`}
                            title={quiz.title}
                            time={`${quiz.time} min`}
                            questions={`${quiz.questions} Questions`}
                            marks={`${quiz.marks} Marks`}
                            languages={quiz.languages.join(", ")}
                            attempted={quiz.attempted}
                            buttonText={
                              loadingCard === qIndex
                                ? "Loading..."
                                : qIndex < FREE_QUIZ_NUMBER || isSubscriptionActive
                                ? "Start Test"
                                : "Unlock Premium"
                            }
                            free={quiz.free}
                            live={quiz.live}
                            onButtonClick={() =>
                              handleStartTest(
                                quiz.paper.catID,
                                quiz.paper.subCatId,
                                quiz.paper.yearId,
                                qIndex,
                                quiz
                              )
                            }
                            onUnlockClick={() =>
                              handleStartTest(
                                quiz.paper.catID,
                                quiz.paper.subCatId,
                                quiz.paper.yearId,
                                qIndex,
                                quiz
                              )
                            }
                            paper={quiz.paper}
                            cardIndex={qIndex}
                            isSubscriptionActive={isSubscriptionActive}
                            FREE_QUIZ_NUMBER={FREE_QUIZ_NUMBER}
                            user={user}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="text-center text-gray-500 py-8">
                        <p>No papers available yet.</p>
                      </div>
                    )}
                  </div>
                );

              case "html":
                return (
                  <div key={tab.value} className="syllabus-container">
                    {tab.content ? (
                      <div
                        className="syllabus-content space-y-4 text-sm md:text-base overflow-x-auto"
                        dangerouslySetInnerHTML={{ __html: tab.content }}
                      />
                    ) : (
                      <div className="text-center text-gray-500 py-8">
                        <p>Will update soon...</p>
                      </div>
                    )}
                  </div>
                );

              case "array":
                return (
                  <div key={tab.value} className="animate-fade-in">
                    <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 md:mb-6">
                      {tab.label}
                    </h2>
                    {Array.isArray(tab.content) && tab.content.length > 0 ? (
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden text-sm md:text-base">
                          <thead className="bg-gray-100">
                            <tr>
                              {tab.value === "papers" && (
                                <>
                                  <th className="py-3 px-4 text-left font-semibold text-gray-700">
                                    Paper Name
                                  </th>
                                  <th className="py-3 px-4 text-left font-semibold text-gray-700">
                                    Year
                                  </th>
                                  <th className="py-3 px-4 text-left font-semibold text-gray-700">
                                    Download PDF
                                  </th>
                                  <th className="py-3 px-4 text-left font-semibold text-gray-700">
                                    Solve Paper
                                  </th>
                                </>
                              )}
                              {tab.value === "news" && (
                                <>
                                  <th className="py-3 px-4 text-left font-semibold text-gray-700">
                                    Title
                                  </th>
                                  <th className="py-3 px-4 text-left font-semibold text-gray-700">
                                    Date
                                  </th>
                                  <th className="py-3 px-4 text-left font-semibold text-gray-700">
                                    Link
                                  </th>
                                </>
                              )}
                            </tr>
                          </thead>
                          <tbody>
                            {tab.content.map((item, index) => (
                              <tr
                                key={index}
                                className={`border-b ${
                                  index % 2 === 0 ? "bg-gray-50" : ""
                                }`}
                              >
                                {tab.value === "papers" && (
                                  <>
                                    <td className="py-3 px-4 text-gray-700">
                                      {item.name}
                                    </td>
                                    <td className="py-3 px-4 text-gray-700">
                                      {item.year}
                                    </td>
                                    <td className="py-3 px-4">
                                      {item.link ? (
                                        <a
                                          href={item.link}
                                          className="text-blue-600 hover:text-blue-800 flex items-center gap-2 transition-all duration-300"
                                          aria-label={`Download paper for year ${item.year}`}
                                        >
                                          Download PDF
                                        </a>
                                      ) : (
                                        <span className="text-gray-500">
                                          No Link
                                        </span>
                                      )}
                                    </td>
                                    <td className="py-3 px-4">
                                      <button
                                        onClick={scrollToSolvePaper}
                                        className="gradient-disco-text flex items-center gap-2 transition-all duration-300"
                                        aria-label={`Solve paper for year ${item.year}`}
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth="1.5"
                                          stroke="#ff7eb3"
                                          className="w-4 h-4 md:w-5 md:h-5"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                          />
                                        </svg>
                                        Solve Paper
                                      </button>
                                    </td>
                                  </>
                                )}
                                {tab.value === "news" && (
                                  <>
                                    <td className="py-3 px-4 text-gray-700">
                                      {item.link ? (
                                        <a
                                          href={item.link}
                                          className="text-blue-600 hover:text-blue-800 transition-all duration-300"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          {item.title}
                                        </a>
                                      ) : (
                                        <span className="text-gray-500">
                                          {item.title}
                                        </span>
                                      )}
                                    </td>
                                    <td className="py-3 px-4 text-gray-700">
                                      {item.date}
                                    </td>
                                    <td className="py-3 px-4 text-gray-700">
                                      {item.link ? (
                                        <a
                                          href={item.link}
                                          className="text-blue-600 hover:text-blue-800 transition-all duration-300"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          View Details
                                        </a>
                                      ) : (
                                        <span className="text-gray-500">
                                          No Link
                                        </span>
                                      )}
                                    </td>
                                  </>
                                )}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="text-center text-gray-500 py-8">
                        <p>Will update soon...</p>
                      </div>
                    )}
                  </div>
                );

              case "url":
                return (
                  <div
                    key={tab.value}
                    className="animate-fade-in flex flex-col items-center justify-center h-64 md:h-80"
                  >
                    <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 md:mb-8">
                      {tab.label}
                    </h2>
                    {tab.content ? (
                      <a
                        href={tab.content}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 text-sm md:text-base"
                        aria-label="Visit official website"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                          />
                        </svg>
                        Visit Official Website
                      </a>
                    ) : (
                      <div className="text-center text-gray-500 py-8">
                        <p>Will update soon...</p>
                      </div>
                    )}
                  </div>
                );

              default:
                return null;
            }
          }
          return null;
        })}
      </div>

      {/* Subscription Popup */}
      {isSubscriptionPopupOpen && (
        <SubscriptionPopup
          onClose={() => setIsSubscriptionPopupOpen(false)}
          onRedirect={() => router.push("/pricing")}
        />
      )}
    </section>
  );
};

export default PageContentSection;
