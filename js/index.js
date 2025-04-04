// Typing Effect
let text = "INNOVATION SUMMIT";
let index = 0;
const speed = 100;
let typingElement = document.getElementById("typing");

function typeEffect() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');
  
  // Toggle menu visibility
  navLinks.classList.toggle('show');
  
  // Toggle hamburger animation
  hamburger.classList.toggle('active');
  
  // Toggle body scroll
  document.body.style.overflow = navLinks.classList.contains('show') 
    ? 'hidden' 
    : 'auto';
}

// Detailed Information for Each Period
const detailsData = {
  precolonial: {
    title: "Pre-colonial",
    description: `
      <strong>Uri ng Panitikan:</strong> Alamat, epiko, awiting-bayan<br>
      <strong>Paraan ng Pagsulat:</strong> Oral tradition at Baybayin<br>
      <strong>Kahalagahan:</strong> Nagpapakita ng mayamang kultura at tradisyon bago dumating ang mga mananakop<br>
      <strong>Tema:</strong> Kabayanihan, kalikasan, at lipunan<br>
      <strong>Halimbawa:</strong> <i>Biag ni Lam-ang</i>, <i>Hudhud ng Ifugao</i><br>
      <strong>Mga Kilalang Akda:</strong> <i>Hinilawod</i>, <i>Ullalim</i><br>
      <strong>May Akda:</strong> Walang kilalang may-akda, dahil sa oral tradition<br>
      <strong>Kasaysayan ng Panitikan:</strong> Sa panahon ng pre-kolonyal, ang panitikan ng Pilipinas ay isang oral na tradisyon na naipapasa mula sa isang henerasyon hanggang sa susunod. Ang mga epiko tulad ng <i>Biag ni Lam-ang</i> at mga awit na gaya ng <i>Hudhud ng Ifugao</i> ay naglalarawan ng kultura at kasaysayan ng mga sinaunang Pilipino.<br>
      <strong>Kahalagahan sa Lipunan:</strong> Ang panitikan noong panahong iyon ay isang paraan ng pagpreserba ng kasaysayan at mga tradisyon ng mga sinaunang Pilipino, pati na rin ng pagpapalaganap ng mga aral ng kabayanihan at moralidad.
    `,
    showBaybayin: true
  },
  
  spanish: {
    title: "Panahon ng Espanyol",
    description: `
      <strong>Uri ng Panitikan:</strong> Panitikang relihiyoso at kolonyal<br>
      <strong>Paraan ng Pagsulat:</strong> Pagsasalin ng oral na tradisyon sa nakasulat na anyo; napalitan ang Baybayin ng Alpabetong Romano<br>
      <strong>Kahalagahan:</strong> Nagbigay-daan sa pagkalat ng relihiyon at kolonyal na kaisipan<br>
      <strong>Tema:</strong> Pananampalataya, sakripisyo, at kolonyalismo<br>
      <strong>Halimbawa:</strong> <i>Pasyon</i>, <i>Florante at Laura</i><br>
      <strong>Mga Kilalang Akda:</strong> <i>Doctrina Christiana</i>, <i>La Solidaridad</i><br>
      <strong>May Akda:</strong> Francisco Balagtas, Jose de la Cruz<br>
      <strong>Kasaysayan ng Panitikan:</strong> Sa panahon ng Espanyol, ang panitikan ng Pilipinas ay naging instrumento sa pagpapalaganap ng Kristiyanismo at ang mga kolonyal na kaisipan ng mga mananakop. Nagsimula ang mga akdang pampanitikan sa pagsusulat ng mga relihiyosong akda tulad ng <i>Pasyon</i> at mga tula ng pagninilay.<br>
      <strong>Kahalagahan sa Lipunan:</strong> Ang mga akdang ito ay nagsilbing kasangkapan sa pagpapalaganap ng relihiyon at naging tulay sa pagpapalaganap ng ideolohiyang kolonyal.
    `,
    showBaybayin: false
  },
  
  revolution: {
    title: "Panahon ng Rebolusyong Pilipino",
    description: `
      <strong>Uri ng Panitikan:</strong> Makabayan at rebolusyonaryo<br>
      <strong>Paraan ng Pagsulat:</strong> Nobela, tula, at pahayagan na nagpapasiklab ng damdaming makabayan at nagtatanggol ng kalayaan<br>
      <strong>Kahalagahan:</strong> Nagbigay inspirasyon sa pakikibaka para sa kalayaan at nagbigay boses sa mga inaapi at inaabuso<br>
      <strong>Tema:</strong> Kalayaan, nasyonalismo, at rebolusyon<br>
      <strong>Halimbawa:</strong> <i>Noli Me Tangere</i>, <i>El Filibusterismo</i><br>
      <strong>Mga Kilalang Akda:</strong> <i>Sa mga Kuko ng Liwanag</i>, <i>La Solidaridad</i><br>
      <strong>May Akda:</strong> Jose Rizal, Andres Bonifacio, Emilio Jacinto<br>
      <strong>Kasaysayan ng Panitikan:</strong> Sa panahon ng Rebolusyong Pilipino, ang mga akda ay naging isang pangunahing instrumento sa pagpapahayag ng damdaming makabayan. Ang mga nobela ni Jose Rizal tulad ng <i>Noli Me Tangere</i> at <i>El Filibusterismo</i> ay nagbigay liwanag sa kalupitan ng mga kolonyal na mananakop at nagpasigla sa diwa ng rebolusyon.<br>
      <strong>Kahalagahan sa Lipunan:</strong> Ang mga akdang ito ay naging inspirasyon sa mga Pilipinong nagnais ng kalayaan at pagbabago. Pinatunayan ng mga manunulat sa panahon ito na ang panitikan ay may malaking bahagi sa pambansang kalayaan at pagkakaisa.
    `,
    showBaybayin: false
  },
  
  japanese: {
    title: "Panahon ng Hapon",
    description: `
      <strong>Uri ng Panitikan:</strong> Mga akdang sumasalamin sa digmaan at paghihirap<br>
      <strong>Paraan ng Pagsulat:</strong> Maikling kwento, tula, sanaysay<br>
      <strong>Kahalagahan:</strong> Nagbibigay-daan sa pag-unawa sa epekto ng digmaan<br>
      <strong>Tema:</strong> Paghihirap, sakripisyo, at pagbangon<br>
      <strong>Halimbawa:</strong> Mga akdang pampanitikan ukol sa digmaan<br>
      <strong>Mga Kilalang Akda:</strong> <i>Sa Mga Kuko ng Liwanag</i>, <i>Mga Alamat ng Digmaan</i><br>
      <strong>May Akda:</strong> Liwayway Arceo, Jose Dalisay Jr.<br>
      <strong>Kasaysayan ng Panitikan:</strong> Ang panitikan ng panahon ng Hapon ay nagsilbing pahayag ng mga Pilipino sa kanilang paghihirap sa ilalim ng pananakop ng Hapon. Ang mga tula, maikling kwento, at sanaysay ay nagbigay-diin sa mga paghihirap at ang kaisipan ng pagbabago at pagbangon mula sa digmaan.<br>
      <strong>Kahalagahan sa Lipunan:</strong> Nagbigay ito ng boses sa mga Pilipino tungkol sa digmaan at mga epekto nito sa kanilang buhay at komunidad. Naging tulay ito sa muling pagbangon ng bansa.
    `,
    showBaybayin: false
  },
  
  american: {
    title: "Panahon ng Amerikano",
    description: `
      <strong>Uri ng Panitikan:</strong> Modernong maikling kwento, dula, at nobela sa Ingles<br>
      <strong>Paraan ng Pagsulat:</strong> Pagsasalin ng tradisyunal na anyo sa modernong format<br>
      <strong>Kahalagahan:</strong> Nagbigay daan sa globalisasyon at modernisasyon ng panitikan<br>
      <strong>Tema:</strong> Modernisasyon, individualismo, at pagbabago<br>
      <strong>Halimbawa:</strong> <i>Dead Stars</i> ni Paz Marquez Benitez<br>
      <strong>Mga Kilalang Akda:</strong> <i>Mga Alamat ng Pagbabago</i>, <i>America’s Ghosts</i><br>
      <strong>May Akda:</strong> Paz Marquez Benitez, Carlos Bulosan<br>
      <strong>Kasaysayan ng Panitikan:</strong> Sa panahon ng Amerikano, ang mga akdang pampanitikan ay nagkaroon ng malalim na impluwensiya mula sa mga Amerikano. Ang mga akda ay lumaganap sa Ingles at nagsimulang magtampok ng mga tema ng modernisasyon at personal na mga karanasan.<br>
      <strong>Kahalagahan sa Lipunan:</strong> Pinadali nito ang komunikasyon at pagpapalaganap ng mga ideya mula sa mga banyaga at naging kasangkapan sa pagbuo ng modernong panitikan sa Pilipinas.
    `,
    showBaybayin: false
  },
  
  modern: {
    title: "Panahon ng Kasalukuyan",
    description: `
      <strong>Uri ng Panitikan:</strong> Digital literature, social media, spoken word poetry<br>
      <strong>Paraan ng Pagsulat:</strong> Multimedia at interaktibong anyo; digital na pagsasanib ng tradisyunal na panitikan<br>
      <strong>Kahalagahan:</strong> Nagbibigay boses sa kabataan at marginalized na sektor<br>
      <strong>Tema:</strong> Identidad, pagbabago, at global connectivity<br>
      <strong>Halimbawa:</strong> Mga akda ni Juan Miguel Severo at iba pang makabagong manunulat<br>
      <strong>Mga Kilalang Akda:</strong> <i>In the Spirit of Revolution</i>, <i>Literature on Screen</i><br>
      <strong>May Akda:</strong> Juan Miguel Severo, Angelo V. Roxas<br>
      <strong>Kasaysayan ng Panitikan:</strong> Ang modernong panahon ng panitikan ay nagpakita ng isang pagbabago sa paraan ng pagsusulat, kung saan ang teknolohiya at media ay may malaking bahagi sa pagpapahayag ng mga ideya at damdamin. Ang mga digital literature at spoken word poetry ay nagbigay ng bagong plataporma para sa pagpapahayag.<br>
      <strong>Kahalagahan sa Lipunan:</strong> Binibigyan nito ng plataporma ang mga kabataan at marginalized na sektor upang magsalita at magpahayag ng kanilang mga saloobin sa isang makabago at global na paraan.
    `,
    showBaybayin: false
  }
};

// Show modal with event details
function showDetails(period) {
  const detail = detailsData[period];
  document.getElementById("event-title").innerHTML = detail.title;
  document.getElementById("event-description").innerHTML = detail.description;

  // Show Baybayin section only for Pre-colonial
  if (detail.showBaybayin) {
    document.getElementById("baybayin-section").style.display = "block";
    convertToBaybayin();  // Call the Baybayin conversion here
  } else {
    document.getElementById("baybayin-section").style.display = "none";
  }

  // Display the modal
  document.getElementById("event-details").style.display = "block";
}

// Close modal
function closeDetails() {
  document.getElementById("event-details").style.display = "none";
}



function convertToBaybayin() {
  const inputText = document.getElementById("baybayinInput").value.toLowerCase();

  // Baybayin character mapping
  const baybayinMap = {
    a: "ᜀ", e: "ᜁ", i: "ᜁ", o: "ᜂ", u: "ᜂ",
    b: "ᜊ", k: "ᜃ", d: "ᜇ", g: "ᜄ", h: "ᜑ", l: "ᜎ", m: "ᜋ",
    n: "ᜈ", p: "ᜉ", s: "ᜐ", t: "ᜆ", w: "ᜏ", y: "ᜌ",
    ng: "ᜅ"
  };

  // Baybayin vowel markers (kudlit)
  const vowelMarkers = {
    a: "", // Default na may "a"
    e: "ᜒ", i: "ᜒ",
    o: "ᜓ", u: "ᜓ"
  };

  let outputText = "";
  let i = 0;

  while (i < inputText.length) {
    let char = inputText[i];

    // Special case: "NG"
    if (char === "n" && inputText[i + 1] === "g") {
      outputText += "ᜅ";
      i += 2; // Skip "ng"
      continue;
    }

    // Convert consonant
    if (baybayinMap[char]) {
      outputText += baybayinMap[char];

      // Check if may kasunod na vowel
      let nextChar = inputText[i + 1];
      if (vowelMarkers[nextChar]) {
        outputText += vowelMarkers[nextChar]; // Magdagdag ng kudlit
        i++; // Skip next vowel
      }
    } else {
      outputText += char; // Kung hindi recognized, ilagay as is
    }

    i++;
  }

  // Update the Baybayin output
  document.getElementById("baybayinOutput").innerText = outputText;
}


// Run Typing Effect on Page Load
window.onload = () => {
  typingElement.innerHTML = "";
  typeEffect();
}
