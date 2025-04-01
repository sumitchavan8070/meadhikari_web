"use client";

import React, { useState, useRef, useEffect } from "react";
import "./syllabusStyles.css"; // Import the CSS file for scoped styling

const PageContentSection = () => {
  const [activeTab, setActiveTab] = useState(""); // Default active tab will be set dynamically
  const [tabConfig, setTabConfig] = useState([]); // Dynamically populated tab configuration
  const solvePaperRef = useRef(null); // Reference to the "Solve Paper" section

  // Fetch tab configuration from an external source (e.g., API or JSON file)
  useEffect(() => {
    // Simulate fetching data from an API or JSON file
    const fetchTabConfig = async () => {
      const dynamicConfig = [
        {
          label: "About Exam",
          value: "syllabus",
          isVisible: true,
          content: `

          <h2>ऑनलाईन परीक्षा</h2>

<h3>परीक्षेचा स्वरूप</h3>
<ul>
    <li>ऑनलाईन अर्जातील माहितीनुसार पात्र ठरलेल्या उमेदवारांसाठी १२० गुणांची स्पर्धात्मक ऑनलाईन परीक्षा घेतली जाईल.</li>
    <li>प्रत्येक प्रश्नाला २ गुण असतील, एकूण ६० प्रश्न असतील.</li>
    <li>ही परीक्षा टि.सी.एस. आयओएन (टाटा कन्सल्टन्सी सर्व्हिसेस लिमिटेड) मार्फत घेतली जाईल.</li>
    <li>परीक्षेमध्ये खालीलप्रमाणे ४ विषयांवरील प्रश्न असतील:</li>
</ul>

<table border="1">
    <tr>
        <th>अ.क्र.</th>
        <th>विषय</th>
        <th>गुण</th>
    </tr>
    <tr>
        <td>१</td>
        <td>मराठी</td>
        <td>३०</td>
    </tr>
    <tr>
        <td>२</td>
        <td>इंग्रजी</td>
        <td>३०</td>
    </tr>
    <tr>
        <td>३</td>
        <td>सामान्य ज्ञान</td>
        <td>३०</td>
    </tr>
    <tr>
        <td>४</td>
        <td>बौद्धिक चाचणी</td>
        <td>३०</td>
    </tr>
</table>

<h3>परीक्षेचा स्तर</h3>
<ul>
    <li>परीक्षेतील प्रश्न माध्यमिक शालांत प्रमाणपत्र (१० वी) परीक्षेच्या स्तराचे असतील.</li>
    <li>सामान्य ज्ञान या विषयामध्ये राज्याचा भूगोल, सामाजिक इतिहास, वन, पर्यावरण, हवामान यांचा समावेश असेल.</li>
</ul>

<h3>परीक्षा पद्धत</h3>
<ul>
    <li>परीक्षा ऑनलाईन पद्धतीने (Computer Based Test) वस्तुनिष्ठ बहुपर्यायी स्वरूपात घेतली जाईल.</li>
    <li>परीक्षेचा कालावधी २ तासांचा असेल.</li>
</ul>

<h3>किमान पात्रता</h3>
<ul>
    <li>उमेदवाराला परीक्षेत किमान ४५% गुण मिळवणे आवश्यक आहे.</li>
    <li>४५% किंवा त्यापेक्षा अधिक गुण मिळविणाऱ्या उमेदवारांपैकी गुणवत्तेनुसार पुढील टप्प्यासाठी निवड होईल.</li>
    <li>४५% पेक्षा कमी गुण मिळविणारे उमेदवार भरती प्रक्रियेतून बाद होतील.</li>
</ul>

<h3> ऑनलाईन परीक्षेचा निकाल</h3>
<ul>
    <li>वनवृत्तनिहाय ऑनलाईन परीक्षेचा निकाल संकेतस्थळावर प्रकाशित केला जाईल.</li>
    <li>उमेदवाराने ज्या वनवृत्तासाठी अर्ज केला आहे त्याच वनवृत्ताचा निकाल त्याच्या निवडीसाठी ग्राह्य धरला जाईल.</li>
</ul>

          <h2>भरतीकरीता उपलब्ध पदे व वेतनश्रेणी</h2>

<table border="1">
    <tr>
        <th>अ.क्र.</th>
        <th>पदनाम</th>
        <th>वेतनश्रेणी</th>
    </tr>
    <tr>
        <td>१</td>
        <td>वनरक्षक</td>
        <td>S-७ : रु. २१७००-६९१०० अधिक महागाई भत्ता व नियमाप्रमाणे देय इतर भत्ते (सातव्या वेतन आयोगानुसार)</td>
    </tr>
</table>

<h2>शैक्षणिक पात्रता</h2>

<ul>
    <li>उमेदवाराने उच्च माध्यमिक शालांत प्रमाणपत्र परीक्षा (१२ वी) ही विज्ञान किंवा गणित किंवा भूगोल किंवा अर्थशास्त्र यापैकी किमान एका विषयासह उत्तीर्ण केलेली असावी.</li>
    <li>अनुसूचित जमाती प्रवर्गातील उमेदवाराने माध्यमिक शालांत प्रमाणपत्र परीक्षा (१० वी) उत्तीर्ण केली असल्यास अशा उमेदवार अर्ज करण्यास पात्र राहील.</li>
    <li>माजी सैनिक असलेल्या उमेदवाराने माध्यमिक शालांत प्रमाणपत्र परीक्षा (१० वी) उत्तीर्ण केली असल्यास अशा उमेदवार अर्ज करण्यास पात्र राहील.</li>
    <li>नक्षलवाद्यांच्या हल्ल्यात मरण पावलेले किंवा गंभीर जखमी झालेले वनखबरे व वन कर्मचाऱ्यांचे पाल्य असलेल्या उमेदवाराने माध्यमिक शालांत प्रमाणपत्र परीक्षा (१० वी) उत्तीर्ण केली असल्यास अशा उमेदवार अर्ज करण्यास पात्र राहील.</li>
</ul>

<p><strong>टिप:</strong> नक्षलवाद्यांच्या हल्ल्यात मरण पावलेले किंवा गंभीर जखमी झालेले वनखबरे व वन कर्मचाऱ्यांचे संबंधात वरील प्रयोजनाकरिता शासकीय वैद्यकीय अधिकारी आणि पोलिस खात्यातील घटनेच्या कार्यक्षेत्रातील सक्षम पोलिस अधिकारी यांचे कडून निर्गमित केलेले प्रमाणपत्र विचारार्थ घेण्यात येईल.</p>

<ul>
    <li>अर्ज स्वीकारण्याच्या अंतिम दिनांकास सदर अर्हता धारण करणे आवश्यक आहे.</li>
    <li>मराठी भाषेचे ज्ञान (लिहीणे, वाचणे व बोलणे) आवश्यक आहे.</li>
</ul>


<h2>वयोमर्यादा</h2>

<h3>वयोमर्यादा गणण्याचा दिनांक</h3>
<p>अर्ज स्वीकारण्याचा अंतिम दिनांक वनरक्षक पदासाठी किमान व कमाल वयोमर्यादा खालीलप्रमाणे राहील.</p>

<table border="1">
    <tr>
        <th>अ. क्र.</th>
        <th>घटक</th>
        <th>किमान वयोमर्यादा</th>
        <th>कमाल वयोमर्यादा</th>
    </tr>
    <tr>
        <td>१</td>
        <td>अमागास</td>
        <td>१८</td>
        <td>२७</td>
    </tr>
    <tr>
        <td>२</td>
        <td>मागासवर्गीय / अनाथ / आ.दु.घ.</td>
        <td>१८</td>
        <td>३२</td>
    </tr>
    <tr>
        <td rowspan="2">३</td>
        <td>प्राविण्यप्राप्त अमागास</td>
        <td>१८</td>
        <td>३२</td>
    </tr>
    <tr>
        <td>खेळाडू मागासवर्गीय / अनाथ / आ.दु.घ.</td>
        <td>१८</td>
        <td>३२</td>
    </tr>
    <tr>
        <td rowspan="3">४</td>
        <td>माजी सैनिक अमागास</td>
        <td>१८</td>
        <td>२७ + सैनिकी सेवेचा कालावधी + ३</td>
    </tr>
    <tr>
        <td>माजी सैनिक मागासवर्गीय</td>
        <td>१८</td>
        <td>३२ + सैनिकी सेवेचा कालावधी + ३</td>
    </tr>
    <tr>
        <td>माजी सैनिक अनाथ / आ.दु.घ.</td>
        <td>१८</td>
        <td>३२ + सैनिकी सेवेचा कालावधी + ३</td>
    </tr>
    <tr>
        <td>५</td>
        <td>प्रकल्पग्रस्त</td>
        <td>१८</td>
        <td>४५</td>
    </tr>
    <tr>
        <td>६</td>
        <td>भूकंपग्रस्त</td>
        <td>१८</td>
        <td>४५</td>
    </tr>
    <tr>
        <td>७</td>
        <td>पदवीधर अंशकालीन कर्मचारी</td>
        <td>१८</td>
        <td>५५</td>
    </tr>
    <tr>
        <td>८</td>
        <td>रोजंदारी मजूर</td>
        <td>१८</td>
        <td>५५</td>
    </tr>
</table>

<h2>शारीरिक पात्रता</h2>

<h3>(अ) उंची, छाती व वजन निकष</h3>
<table border="1">
    <tr>
        <th>शारीरिक माप</th>
        <th>किमान उंची (से.मी.)</th>
        <th>छातीचा घेर (से.मी.)</th>
        <th>फुगवून (से.मी.)</th>
        <th>वजन (कि. ग्र.)</th>
    </tr>
    <tr>
        <td>पुरुष</td>
        <td>१६३</td>
        <td>७९</td>
        <td>८४</td>
        <td>वैद्यकीय मापानुसार वयाच्या योग्य प्रमाणात</td>
    </tr>
    <tr>
        <td>स्त्री</td>
        <td>१५०</td>
        <td>वैद्यकीय मापानुसार</td>
        <td>वैद्यकीय मापानुसार</td>
        <td>वयाच्या योग्य प्रमाणात</td>
    </tr>
</table>

<h3>अनुसूचित जमातीसाठी शिथिलता</h3>
<table border="1">
    <tr>
        <th>किमान उंची (से.मी.)</th>
        <th>छातीचा घेर (से.मी.)</th>
        <th>फुगवून (से.मी.)</th>
    </tr>
    <tr>
        <td>पुरुष - १५२.५</td>
        <td>७९</td>
        <td>८४</td>
    </tr>
    <tr>
        <td>स्त्री - १४५</td>
        <td>वैद्यकीय मापानुसार</td>
        <td>वैद्यकीय मापानुसार</td>
    </tr>
</table>

<h3>(ब) दूरदृष्टी आणि जवळील दृष्टी निकष</h3>
<table border="1">
    <tr>
        <th>दृष्टी प्रकार</th>
        <th>अधिक चांगला डोळा</th>
        <th>वाईट डोळा</th>
    </tr>
    <tr>
        <td>दूरदृष्टी (सुधारलेली)</td>
        <td>६/६ किंवा ६/१२</td>
        <td>६/९</td>
    </tr>
    <tr>
        <td>जवळील दृष्टी (सुधारलेली)</td>
        <td>J.9</td>
        <td>J.11</td>
    </tr>
</table>
<p>प्रत्येक डोळा संपूर्ण क्षेत्र दृष्टीयुक्त असणे आवश्यक आहे.</p>

<h3>(क) वैद्यकीय तपासणी</h3>
<ul>
    <li>शासकीय वैद्यकीय अधिकारी किंवा प्राधिकृत वैद्यकीय विशेषज्ञांकडून वैद्यकीय पात्रता प्रमाणित केली जाईल.</li>
    <li>तिरळेपणा, रंग व रात अंधत्व, फेंगाडे गुडघे, सपाट पाय, त्वचा व छातीचे रोग इत्यादींसाठी तपासणी होईल.</li>
</ul>

<h3>(ड) नक्षलग्रस्त भागातील उमेदवारांसाठी सवलत</h3>
<ul>
    <li>उंची - पुरुष व स्त्री उमेदवारांना २.५ से.मी. सवलत</li>
    <li>छाती - मोजणी आवश्यक नाही</li>
</ul>

<h3>(इ) खेळाडू प्रवर्गासाठी सवलत</h3>
<ul>
    <li>विहित उंचीमध्ये २.५ से.मी. इतकी सवलत</li>
</ul>

<h3>(फ) वन कर्मचाऱ्यांचे पाल्यांसाठी सवलत</h3>
<ul>
    <li>उंची - पुरुष आणि स्त्री उमेदवारांना २.५ से.मी.</li>
    <li>छाती - पुरुष उमेदवारांना २.० से.मी. न फुगवता व १.५ से.मी. फुगवून</li>
</ul>

<h2>परीक्षा शुल्क</h2>

<table border="1">
    <tr>
        <th>प्रवर्ग</th>
        <th>शुल्क (रु.)</th>
    </tr>
    <tr>
        <td>अमागास</td>
        <td>१०००/-</td>
    </tr>
    <tr>
        <td>मागासवर्गीय / आ.दु.घ / अनाथ</td>
        <td>९००/-</td>
    </tr>
    <tr>
        <td>माजी सैनिक</td>
        <td>शासन निर्णयानुसार परीक्षा शुल्कातून सूट</td>
    </tr>
</table>

<p><strong>टिप:</strong> परीक्षा शुल्क ना-परतावा (Non-refundable) आहे.</p>


<h2>अर्ज करण्याची पद्धत</h2>

<ul>
    <li>उमेदवार हे फक्त कोणत्याही एका वनवृत्तासाठी ऑनलाईन पद्धतीने अर्ज करू शकतो.</li>
    <li>अर्ज फक्त ऑनलाईन पद्धतीने स्वीकारण्यात येतील, इतर कोणत्याही प्रकारे अर्ज स्वीकारले जाणार नाहीत.</li>
    <li> जिल्हा रोजगार कार्यालय, समाज कल्याण कार्यालय, सैनिक कल्याण कार्यालय यांकडे नोंदणीकृत उमेदवारांनाही स्वतः ऑनलाईन अर्ज करणे आवश्यक आहे.</li>
    <li> उमेदवाराने <a href="https://www.mahaforest.gov.in">www.mahaforest.gov.in</a> संकेतस्थळावरील "Recruitment" टॅबवर जाऊन अर्ज करावा.</li>
</ul>

<h3>अर्ज करण्याची प्रक्रिया</h3>

<ul>
    <li> उमेदवाराने Registration (नोंदणी) पृष्ठावर संपूर्ण माहिती भरावी.</li>
    <li> एस.एस.सी. रोल नंबर हा गुणपत्रिकेतील रोल नंबर असावा.</li>
    <li> नोंदणी पूर्ण झाल्यानंतर माहिती तपासून खात्री करावी. एकदा नोंदणी झाल्यानंतर बदल करता येणार नाही.</li>
    <li> नोंदणी झाल्यानंतर उमेदवारास Registration Number / Login Id आणि Password ई-मेल व एसएमएसद्वारे पाठवण्यात येईल.</li>
    <li> Login Id आणि Password द्वारे उमेदवार लॉग इन करू शकतो.</li>
    <li>उमेदवाराने Post Selection टॅबवर जाऊन अर्ज भरावा.</li>
</ul>

<h3>अनुसूचित जमातीच्या उमेदवारांसाठी विशेष मार्गदर्शक तत्त्वे</h3>

<ul>
    <li>अनुसूचित जमातीच्या उमेदवारांना त्यांच्या स्थानिक क्षेत्रासाठी राखीव पदांवर अर्ज करण्याचा पर्याय उपलब्ध असेल.</li>
    <li>स्थानिक अनुसूचित जमातीसाठी अर्ज करताना उमेदवाराने २६ जानेवारी १९५० पासून त्याच्या कुटुंबाने सातत्याने वास्तव्य केले असल्याचे प्रमाणपत्र आवश्यक आहे.</li>
</ul>

<h3>अर्जात माहिती भरण्याचे टप्पे</h3>

<ul>
    <li>Additional Details, Communication Details, Qualification and Experience माहिती भरावी.</li>
    <li>Documents / Image Upload पेजवर फोटो, स्वाक्षरी आणि आवश्यक कागदपत्रे अपलोड करावी.</li>
</ul>

<h3>फोटो व दस्तऐवज अपलोड करण्यासाठी निकष</h3>

<table border="1">
    <tr>
        <th>प्रकार</th>
        <th>साइज (KB)</th>
        <th>फॉर्मेट</th>
        <th>इतर निकष</th>
    </tr>
    <tr>
        <td>फोटो</td>
        <td>50 - 80</td>
        <td>.jpg, .jpeg</td>
        <td>पांढऱ्या पार्श्वभूमीतील रंगीत फोटो, 3.5 cm x 4.5 cm</td>
    </tr>
    <tr>
        <td>स्वाक्षरी</td>
        <td>50 - 80</td>
        <td>.jpg, .jpeg</td>
        <td>स्पष्ट असावी</td>
    </tr>
    <tr>
        <td>इतर कागदपत्रे</td>
        <td>100 - 300</td>
        <td>.jpg, .jpeg, .pdf</td>
        <td>स्कॅन केलेले व स्पष्ट असावेत</td>
    </tr>
</table>

<h3>पेमेंट प्रक्रिया</h3>
<ul>
    <li>परीक्षा शुल्क फक्त ऑनलाईन पद्धतीने भरता येईल.</li>
</ul>

<h2>निवडीची पद्धत</h2>

<p>शासन निर्णय क्रमांक एफएसटी-०६/२२/प्र.क्र.१२८/फ-४, दिनांक २७/१२/२०२२ व शासनाच्या अनुषंगिक दिशानिर्देशानुसार निवड करण्यात येईल.</p>


<h2>कागदपत्र तपासणी, शारीरिक मोजमाप व धाव चाचणी</h2>

<h3>पात्र उमेदवारांची तपासणी</h3>
<ul>
    <li>ऑनलाईन परीक्षेत किमान ४५% गुण प्राप्त केलेल्या उमेदवारांची प्रादेशिक निवड समितीमार्फत तपासणी केली जाईल.</li>
    <li>वयोमर्यादा, आरक्षण प्रवर्ग यांसह मुळ कागदपत्रांची तपासणी केली जाईल.</li>
    <li>उमेदवारांनी कागदपत्र तपासणीसाठी लहान कुटुंबाचे प्रतिज्ञापत्र (परिशिष्ट - १३) सादर करणे आवश्यक आहे.</li>
    <li>कागदपत्रे सादर न करणारे किंवा अनुपस्थित राहणारे उमेदवार भरती प्रक्रियेतून बाद ठरतील.</li>
</ul>

<h3>शारीरिक मोजमाप चाचणी</h3>
<ul>
    <li>वनरक्षक पदाच्या सेवाप्रवेश नियमानुसार आवश्यक शारीरिक पात्रता (उंची, छाती इत्यादी) तपासली जाईल.</li>
    <li>शासकीय वैद्यकीय अधिकाऱ्यांच्या उपस्थितीत ही मोजमाप चाचणी होईल.</li>
    <li>शारीरिक पात्रता नसलेले उमेदवार भरती प्रक्रियेतून बाद ठरतील.</li>
</ul>

<h3>धाव चाचणी</h3>
<ul>
    <li>शारीरिक मोजमापात पात्र ठरलेल्या उमेदवारांची धाव चाचणी घेतली जाईल.</li>
    <li>
        <b>पुरुष उमेदवार:</b> ३० मिनिटांत ५ कि.मी. धावणे आवश्यक.
        <ul>
            <li>संबंधित वैद्यकीय अधिकारीकडून शारीरिक तंदुरुस्ती प्रमाणपत्र व स्वतःचे वचनपत्र (परिशिष्ट-१४ व १५) सादर करणे आवश्यक.</li>
        </ul>
    </li>
    <li>
        <b>महिला उमेदवार:</b> २५ मिनिटांत ३ कि.मी. धावणे आवश्यक.
        <ul>
            <li>वैद्यकीय तंदुरुस्ती प्रमाणपत्र व वचनपत्र सादर केल्याशिवाय धाव चाचणी देता येणार नाही.</li>
        </ul>
    </li>
</ul>

<h3>धाव चाचणीचे गुण</h3>

<h4>पुरुष उमेदवार (५ कि.मी. धाव चाचणी - एकूण ८० गुण)</h4>
<table border="1">
    <tr>
        <th>अ.क्र.</th>
        <th>कालावधी (मिनिटांमध्ये)</th>
        <th>गुण</th>
    </tr>
    <tr><td>१</td><td>१७ मिनिटे किंवा कमी</td><td>८०</td></tr>
    <tr><td>२</td><td>१७-१८ मिनिटे</td><td>७०</td></tr>
    <tr><td>३</td><td>१८-१९ मिनिटे</td><td>६०</td></tr>
    <tr><td>४</td><td>१९-२० मिनिटे</td><td>५०</td></tr>
    <tr><td>५</td><td>२०-२१ मिनिटे</td><td>४५</td></tr>
    <tr><td>६</td><td>२१-२२ मिनिटे</td><td>४०</td></tr>
    <tr><td>७</td><td>२२-२३ मिनिटे</td><td>३५</td></tr>
    <tr><td>८</td><td>२३-२४ मिनिटे</td><td>३०</td></tr>
    <tr><td>९</td><td>२४-२५ मिनिटे</td><td>२५</td></tr>
    <tr><td>१०</td><td>२५-२६ मिनिटे</td><td>२०</td></tr>
    <tr><td>११</td><td>२६-२७ मिनिटे</td><td>१५</td></tr>
    <tr><td>१२</td><td>२७-२८ मिनिटे</td><td>१०</td></tr>
    <tr><td>१३</td><td>२८-२९ मिनिटे</td><td>५</td></tr>
    <tr><td>१४</td><td>२९-३० मिनिटे</td><td>०</td></tr>
</table>
<p><b>३० मिनिटांत ५ कि.मी. धावू न शकणारा पुरुष उमेदवार अपात्र ठरेल.</b></p>

<h4>महिला उमेदवार (३ कि.मी. धाव चाचणी - एकूण ८० गुण)</h4>
<table border="1">
    <tr>
        <th>अ.क्र.</th>
        <th>कालावधी (मिनिटांमध्ये)</th>
        <th>गुण</th>
    </tr>
    <tr><td>१</td><td>१२ मिनिटे किंवा कमी</td><td>८०</td></tr>
    <tr><td>२</td><td>१२-१३ मिनिटे</td><td>७०</td></tr>
    <tr><td>३</td><td>१३-१४ मिनिटे</td><td>६०</td></tr>
    <tr><td>४</td><td>१४-१५ मिनिटे</td><td>५०</td></tr>
    <tr><td>५</td><td>१५-१६ मिनिटे</td><td>४५</td></tr>
    <tr><td>६</td><td>१६-१७ मिनिटे</td><td>४०</td></tr>
    <tr><td>७</td><td>१७-१८ मिनिटे</td><td>३५</td></tr>
    <tr><td>८</td><td>१८-१९ मिनिटे</td><td>३०</td></tr>
    <tr><td>९</td><td>१९-२० मिनिटे</td><td>२५</td></tr>
    <tr><td>१०</td><td>२०-२१ मिनिटे</td><td>२०</td></tr>
    <tr><td>११</td><td>२१-२२ मिनिटे</td><td>१५</td></tr>
    <tr><td>१२</td><td>२२-२३ मिनिटे</td><td>१०</td></tr>
    <tr><td>१३</td><td>२३-२४ मिनिटे</td><td>५</td></tr>
    <tr><td>१४</td><td>२४-२५ मिनिटे</td><td>०</td></tr>
</table>
<p><b>२५ मिनिटांत ३ कि.मी. धावू न शकणारी महिला उमेदवार अपात्र ठरेल.</b></p>

<h3>अंतिम गुणवत्ता यादी</h3>
<ul>
    <li>ऑनलाईन परीक्षा व धाव चाचणीच्या गुणांवर आधारित सर्वसाधारण गुणवत्ता यादी वनवृत्तवार तयार केली जाईल.</li>
    <li>रिक्त पदांच्या प्रमाणात निवड व प्रतीक्षा यादी तयार केली जाईल.</li>
</ul>

<h3>शारीरिक तगधरण्याची (Stamina) चाचणी</h3>
<ul>
    <li>पुरुष उमेदवारांना ४ तासांत २५ कि.मी. व महिला उमेदवारांना १६ कि.मी. अंतर चालावे लागेल.</li>
    <li>ही चाचणी दिली नाही किंवा पूर्ण केली नाही तर उमेदवार अपात्र ठरेल.</li>
</ul>

<h3>निवड यादीची कालमर्यादा</h3>
<ul>
    <li>निवड यादी १ वर्षांसाठी वैध असेल.</li>
    <li>नियुक्तीसाठी शिफारस झाल्यानंतर उमेदवारांनी विहित मुदतीत रुजू न झाल्यास प्रतीक्षा यादीतील उमेदवारांची निवड केली जाईल.</li>
</ul>



<h2>सेवाप्रवेशोत्तर शर्ती</h2>

<ul>
    <li>
        <strong>प्रशिक्षण आवश्यकता:</strong>  
        वनरक्षक पदावर नियुक्त झालेल्या उमेदवारांनी वनविभागाच्या कोणत्याही राज्य वनरक्षक प्रशिक्षण विद्यालयातून 
        <strong>६ महिन्यांचा प्रशिक्षण पाठ्यक्रम</strong> यशस्वीरित्या पूर्ण करणे आवश्यक राहील.  
        तसेच, प्रशिक्षण सुरू होण्यापूर्वी उमेदवारांना <strong>₹१००/- च्या स्टॅम्प पेपरवर बंधपत्रक (Bond)</strong> द्यावे लागेल.
    </li>

    <li>
        <strong>भाषा परीक्षा:</strong>  
        हिंदी आणि मराठी भाषा परीक्षेसंबंधी शासनाच्या नियमानुसार जर उमेदवाराने पूर्वी ही परीक्षा उत्तीर्ण केली नसेल,  
        किंवा उत्तीर्ण होण्यास सूट मिळाली नसेल, तर ती परीक्षा उत्तीर्ण करणे आवश्यक राहील.
    </li>

    <li>
        <strong>संगणक हाताळणी परीक्षा:</strong>  
        महाराष्ट्र शासनाच्या माहिती तंत्रज्ञान संचालनालयाने वेळोवेळी विहित केलेल्या <strong>संगणक हाताळणीबाबतची प्रमाणपत्र परीक्षा</strong>  
        उत्तीर्ण करणे आवश्यक राहील.
    </li>

    <li>
        <strong>बदलीस पात्रता:</strong>  
        वनरक्षक पदावर नियुक्त झालेली व्यक्ती संबंधित <strong>वनवृत्तात कोठेही बदलीस पात्र</strong> राहील.
    </li>

    <li>
        <strong>नागरी सेवा नियम:</strong>  
        उमेदवारांना <strong>महाराष्ट्र नागरी सेवा (सेवेच्या सर्वसाधारण शर्ती) नियम १९८१</strong> व शासनाने वेळोवेळी निर्गमित  
        केलेल्या अधिसूचना, शासन निर्णय, परिपत्रके व शुद्धीपत्रकामधील तरतुदी बंधनकारक असतील.
    </li>

    <li>
        <strong>निवृत्तीवेतन योजना:</strong>  
        शासन निर्णय, वित्त विभाग क्रमांक <strong>अनियो/१०/०५/१२६/सेवा-४, दिनांक ३१/१०/२००५</strong> नुसार  
        दिनांक <strong>१/११/२००५</strong> रोजी व त्यानंतर निवड होणाऱ्या उमेदवारांसाठी <strong>नवीन परिभाषित अंशदान निवृत्तीवेतन योजना</strong>  
        (सध्या राष्ट्रीय निवृत्तीवेतन योजना) लागू राहील.
    </li>

    <li>
        <strong>विशेष व्याघ्र संरक्षण दल (STPF):</strong>  
        विशेष व्याघ्र संरक्षण दलामध्ये नियुक्त झालेल्या वनरक्षकांना  
        <strong>या कार्यालयाच्या स्थायी आदेश दिनांक १८/१०/२०१९</strong> नुसार  
        <strong>STPF मध्ये किमान २ पदावधी पूर्ण</strong> करणे आवश्यक राहील.
    </li>
</ul>



          `,
          type: "html", // Type of content (e.g., HTML, array, URL)
        },
        {
          label: "Previous Year Papers",
          value: "papers",
          isVisible: true,
          content: [
            // { year: 2024, name: "Talathi Bharti 2024", link: null },
            // { year: 2023, name: "Talathi Bharti 2023", link: "#" },
          ],
          type: "array", // Type of content (array of objects)
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
        setActiveTab(dynamicConfig[0]?.value || ""); // Set the first visible tab as active
      }, 1000);
    };

    fetchTabConfig();
  }, []);

  const scrollToSolvePaper = () => {
    if (solvePaperRef.current) {
      solvePaperRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Filter visible tabs
  const visibleTabs = tabConfig.filter((tab) => tab.isVisible);

  return (
    <section className="container mx-auto p-4 md:p-8 mt-16">
      {/* Horizontal Navigation Bar */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {visibleTabs.map((tab) => (
          <button
            key={tab.value}
            className={`px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm sm:text-base ${
              activeTab === tab.value
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            }`}
            onClick={() => setActiveTab(tab.value)}
            aria-label={`Switch to ${tab.label} tab`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="w-full bg-white rounded-2xl shadow-lg p-6 md:p-8">
        {/* Render content based on activeTab */}
        {visibleTabs.map((tab) => {
          if (activeTab === tab.value) {
            switch (tab.type) {
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

      {/* Solve Paper Section */}
      <div ref={solvePaperRef} className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient">
          Available Previous Year Papers
        </h2>
      </div>
    </section>
  );
};

export default PageContentSection;
