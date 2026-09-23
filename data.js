
/* ============================================================
   PUBLICATION DATA — edit here to keep the site up to date.
   Under-revision / submitted papers are intentionally excluded.
   Fields:
     n:number (1 = oldest, continuous, no gaps) | y:year | t:title
     j:journal | b:"vol, pages" or status ("Accepted","Online published")
     if:Impact Factor or null | jcr:JCR TOP percentile (e.g. 3.2) or null
     lead:true if lead author (first / co-first / corresponding), false if co-author
     hcp:"HCP" | "HCP-C" | null | rep:true if representative
     url:journal/DOI link or null (null -> falls back to a Scholar search)
     img:image path (e.g. "images/p42.jpg") or null
   ============================================================ */
var PHOTO = "images/park.jpg";
var PAPERS = [
  {n:53,y:2026,t:"Mitigating high-temperature degradation of Nb-doped Ni-rich cathodes through surface stabilization",j:"Energy Storage Materials",b:"91, 105490",if:null,jcr:4.7,lead:false,hcp:null,rep:false,url:"https://doi.org/10.1016/j.ensm.2026.105490",au:"G.-H. Kim, E.-J. Hong, J.-H. Ryu, C.-Y. Kim, M.-C. Kim, R. S. Monteiro, R. M. Ribas, G.-T. Park, Y.-K. Sun",img:"images/p53.jpg"},
  {n:52,y:2026,t:"Ni-Rich Cathodes for High-Energy All-Solid-State Batteries Suppressing Phase Gradients",j:"Advanced Energy Materials",b:"Online published",if:null,jcr:2.5,lead:false,hcp:null,rep:false,url:"https://doi.org/10.1002/aenm.71455",au:"S. Park, H. Kim, K. Kim, N. Park, D. Hwang, M. Jang, G.-T. Park, M. Kim, K. Y. Chung, H. Jung, Y.-K. Sun",img:"images/p52.jpg"},
  {n:51,y:2026,t:"Dual-Ion Modification Strategy for High-Voltage Mid-Ni Single-Crystal Cathode",j:"Energy Storage Materials",b:"89, 105177",if:26.8,jcr:4.7,lead:true,cofirst:true,hcp:null,rep:false,url:"https://doi.org/10.1016/j.ensm.2026.105177",au:"S.-B. Lee, G.-T. Park, H.-J. Jeon, D.-W. Kim, H.-J. Hwang, N.-Y. Park, K.-M. Kim, Y.-K. Sun",img:"images/p51.jpg"},
  {n:50,y:2026,t:"Strategic Synthetic Pathway for Tailoring the Crystallographic and Microstructural Evolution of Li-Ion Battery Cathode Materials",j:"ACS Energy Letters",b:"11 (5), 4084–4093",if:20.0,jcr:4.1,lead:false,hcp:null,rep:false,url:"https://doi.org/10.1021/acsenergylett.6c00663",au:"M.-G. Seo, S.-M. Han, H.-J. Jo, G.-T. Park, G.-H. Kim, N.-Y. Park, Y.-K. Sun",img:"images/p50.jpg"},
  {n:49,y:2026,t:"High-Energy Quasi-Solid-State Lithium–Sulfur Batteries Based on Electrostatic Nucleophilic Synergy",j:"ACS Energy Letters",b:"11, 2924–2934",if:18.2,jcr:4.1,lead:false,hcp:null,rep:false,url:"https://doi.org/10.1021/acsenergylett.5c04332",au:"Y. Zhang, X. Song, Y. Zhao, G.-T. Park, Y.-K. Sun",img:"images/p49.jpg"},
  {n:48,y:2026,t:"High-Voltage Zero-Strain Mid-Mn Layered Cathode",j:"ACS Energy Letters",b:"11, 2059–2067",if:18.2,jcr:4.1,lead:true,hcp:null,rep:false,url:"https://doi.org/10.1021/acsenergylett.5c03855",au:"G.-T. Park, J.-W. Lee, M. G. Kim, Y.-K. Sun",img:"images/p48.jpg"},
  {n:47,y:2025,t:"A Long-Life and Safe Ni-Rich Cathode Material for Lithium Batteries",j:"Advanced Energy Materials",b:"16, e05925",if:24.4,jcr:2.5,lead:true,hcp:null,rep:false,url:"https://doi.org/10.1002/aenm.202505925",au:"G.-T. Park, B. Park, J. Yoon, G. Kim, M. Kim, H. Kim, M. G. Kim, Y.-K. Sun",img:"images/p47.jpg"},
  {n:46,y:2025,t:"Practical Codoping Strategy for Ni-Rich Cathode Materials",j:"ACS Energy Letters",b:"11, 716–725",if:19.3,jcr:4.1,lead:true,cofirst:true,hcp:null,rep:false,url:"https://doi.org/10.1021/acsenergylett.5c03390",au:"S.-M. Han, G.-T. Park, G.-H. Kim, M.-G. Seo, Y.-K. Sun",img:"images/p46.jpg"},
  {n:45,y:2025,t:"Nanostructured Nb-Doped Ni-Rich Multiphase Positive Electrode Active Material for High-Power Lithium-Based Batteries",j:"Nature Nanotechnology",b:"21, 240–248",if:38.1,jcr:1.6,lead:false,hcp:"HCP-C",rep:false,url:"https://doi.org/10.1038/s41565-025-02092-y",au:"N.-Y. Park, G.-T. Park, J.-H. Ryu, S.-E. Park, J.-H. Kim, S.-Y. Lee, J. Choi, Y. M. Lee, M. G. Kim, H. Lee, J. P. Cline, Z. Liu, H.-G. Jung, Y.-K. Sun",img:"images/p45.jpg"},
  {n:44,y:2025,t:"Single-Crystal vs. Polycrystalline Cathodes for Lithium-Ion Batteries",j:"Chemical Reviews",b:"125, 9930–10000",if:51.4,jcr:0.2,lead:true,hcp:"HCP-C",rep:true,url:"https://doi.org/10.1021/acs.chemrev.5c00441",au:"G.-T. Park, H.-H. Ryu, N.-Y. Park, S.-B. Lee, Y.-K. Sun",img:"images/p44.jpg"},
  {n:43,y:2025,t:"A New Concentration-Gradient Design Employing Wet-Doped Tungsten for Advanced Ni-Rich Cathodes",j:"Journal of Power Sources",b:"658, 238279",if:8.1,jcr:14.8,lead:true,cofirst:true,hcp:null,rep:false,url:"https://doi.org/10.1016/j.jpowsour.2025.238279",au:"G.-H. Kim, G.-T. Park, J.-I. Yoon, J.-H. Ryu, M.-G. Seo, Y.-K. Sun",img:"images/p43.jpg"},
  {n:42,y:2025,t:"Zero-Strain Mn-Rich Layered Cathode for Sustainable and High-Energy Next-Generation Batteries",j:"Nature Energy",b:"10, 1215–1225",if:49.7,jcr:0.3,lead:true,hcp:"HCP-C",rep:true,url:"https://doi.org/10.1038/s41560-025-01852-3",au:"G.-T. Park, N.-Y. Park, J.-H. Ryu, S.-J. Sohn, T.-Y. Yu, M.-C. Kim, S. Baiju, P. Kaghazchi, C. S. Yoon, Y.-K. Sun",img:"images/p42.jpg"},
  {n:41,y:2025,t:"Scalable Shell Doping Strategy for Enhancing the Stability of Ni-Rich Cathode Materials",j:"Energy Storage Materials",b:"78, 104252",if:18.9,jcr:4.7,lead:false,hcp:null,rep:false,url:"https://doi.org/10.1016/j.ensm.2025.104252",au:"M.-C. Kim, B.-C. Park, N.-Y. Park, M.-s. Kim, K.-M. Kim, J.-H. Kim, E.-J. Kim, G.-T. Park, Y.-K. Sun",img:"images/p41.jpg"},
  {n:40,y:2025,t:"Improving Cycling Stability of Ni-Rich Cathode for Lithium-Metal Batteries via Interphase Tuning",j:"Advanced Energy Materials",b:"15, 2403386",if:24.4,jcr:2.5,lead:false,hcp:null,rep:false,url:"https://doi.org/10.1002/aenm.202403386",au:"H. Kim, J. Kim, G.-T. Park, Y. Ahn, J. Hwang, D. Aurbach, Y.-K. Sun",img:"images/p40.jpg"},
  {n:39,y:2025,t:"Ni-Rich Cathode Materials Enabled by a Cracked-Surface Protection Strategy for High-Energy Lithium Batteries",j:"Materials Science & Engineering: R",b:"164, 100945",if:31.6,jcr:2.1,lead:true,hcp:null,rep:false,url:"https://doi.org/10.1016/j.mser.2025.100945",au:"G.-T. Park, J.-I. Yoon, G.-H. Kim, N.-Y. Park, B.-C. Park, Y.-K. Sun",img:"images/p39.jpg"},
  {n:38,y:2025,t:"Structural Unpredictability of a Cobalt-Free Layered Cathode and Its Mitigation for Reliable, Sustainable Batteries",j:"Advanced Energy Materials",b:"15, 2404593",if:24.4,jcr:2.5,lead:true,hcp:null,rep:false,url:"https://doi.org/10.1002/aenm.202404593",au:"G.-T. Park, M. Kim, M. Kim, T. Noh, J. Ryu, N. Park, Y.-K. Sun",img:"images/p38.jpg"},
  {n:37,y:2025,t:"Structural Analysis of Deeply Charged Li(Ni0.95Co0.04Al0.01)O2 Cathode for Li-Ion Battery",j:"ChemSusChem",b:"18, e202401856",if:7.5,jcr:19.5,lead:false,hcp:null,rep:false,url:"https://doi.org/10.1002/cssc.202401856",au:"B. Cheol Lee, J. Kim, H. Kim, G.-T. Park, Y.-K. Sun, C. Seung Yoon",img:"images/p37.jpg"},
  {n:36,y:2024,t:"Nano-Rods in Ni-Rich Layered Cathodes for Practical Batteries",j:"Chemical Society Reviews",b:"53, 11462–11518",if:46.2,jcr:1,lead:true,hcp:"HCP",rep:true,url:"https://doi.org/10.1039/d3cs01110k",au:"G.-T. Park, N.-Y. Park, H.-H. Ryu, H. H. Sun, J.-Y. Hwang, Y.-K. Sun",img:"images/p36.jpg"},
  {n:35,y:2024,t:"Introducing Co Nanoshells onto Ni-Rich Cathode Materials for High-Rate Long-Life Li-Ion Batteries",j:"ACS Energy Letters",b:"9, 5859–5868",if:22.0,jcr:4.1,lead:true,cofirst:true,hcp:null,rep:false,url:"https://doi.org/10.1021/acsenergylett.4c02638",au:"S.-M. Han, G.-T. Park, D.-H. Kim, M.-G. Seo, N.-Y. Park, Y.-K. Sun",img:"images/p35.jpg"},
  {n:34,y:2024,t:"Tailoring Primary Particle Size Distribution to Suppress Microcracks in Ni-Rich Cathodes via Controlled Grain Coarsening",j:"ACS Energy Letters",b:"9, 3595–3604",if:22.0,jcr:4.1,lead:false,hcp:null,rep:false,url:"https://doi.org/10.1021/acsenergylett.4c01397",au:"N.-Y. Park, S.-M. Han, J.-H. Ryu, M.-C. Kim, J.-I. Yoon, J.-H. Kim, G.-T. Park, J. E. Frerichs, C. Erk, Y.-K. Sun",img:"images/p34.jpg"},
  {n:33,y:2024,t:"Aluminum-Distribution-Dependent Microstructural Evolution of NCA Cathodes",j:"Energy Storage Materials",b:"70, 103496",if:20.4,jcr:4.7,lead:true,hcp:null,rep:false,url:"https://doi.org/10.1016/j.ensm.2024.103496",au:"G.-T. Park, J.-H. Ryu, J.-H. Kim, H. H. Sun, D. E. Suh, S.-M. Han, N.-Y. Park, Y.-K. Sun",img:"images/p33.jpg"},
  {n:32,y:2024,t:"Unraveling the New Role of Manganese in Nano- and Microstructural Engineering of Ni-Rich Layered Cathodes",j:"Advanced Energy Materials",b:"14, 2400130",if:27.8,jcr:2.5,lead:true,hcp:null,rep:false,url:"https://doi.org/10.1002/aenm.202400130",au:"G.-T. Park, S. Kim, J. Yoon, N. Park, M. Kim, S. Han, D. Kim, M. Kim, Y.-K. Sun",img:"images/p32.jpg"},
  {n:31,y:2024,t:"Mechanism Behind the Loss of Fast-Charging Capability in Nickel-Rich Cathode Materials",j:"Angewandte Chemie International Edition",b:"63, e202319707",if:16.6,jcr:6.1,lead:false,hcp:null,rep:false,url:"https://doi.org/10.1002/anie.202319707",au:"N. Park, M. Kim, S. Han, G.-T. Park, D. Kim, M. Kim, Y.-K. Sun",img:"images/p31.jpg"},
  {n:30,y:2024,t:"Doping Strategy in Developing Ni-Rich Cathodes for High-Performance Lithium-Ion Batteries",j:"ACS Energy Letters",b:"9, 740–747",if:22.0,jcr:4.1,lead:false,hcp:"HCP",rep:false,url:"https://doi.org/10.1021/acsenergylett.3c02759",au:"S.-B. Lee, N.-Y. Park, G.-T. Park, U.-H. Kim, S.-J. Sohn, M.-S. Kang, R. M. Ribas, R. S. Monteiro, Y.-K. Sun",img:"images/p30.jpg"},
  {n:29,y:2023,t:"Intergranular Shielding for Ultrafine-Grained Mo-Doped Ni-Rich Li[Ni0.96Co0.04]O2 Cathode",j:"Angewandte Chemie International Edition",b:"135, e202314480",if:16.8,jcr:6.1,lead:true,hcp:null,rep:false,url:"https://doi.org/10.1002/anie.202314480",au:"G.-T. Park, S. Kim, B. Namkoong, J. Ryu, J. Yoon, N. Park, M. Kim, S. Han, F. Maglia, Y.-K. Sun",img:"images/p29.jpg"},
  {n:28,y:2023,t:"A New Ternary Co-Free Layered Cathode, Li[Ni1−x−yTixAly]O2, for High-Energy Lithium-Ion Batteries",j:"Materials Today",b:"71, 38–49",if:26.9,jcr:3.8,lead:true,hcp:null,rep:false,url:"https://doi.org/10.1016/j.mattod.2023.11.006",au:"G.-T. Park, S.-B. Kim, B. Namkoong, N.-Y. Park, H. Kim, C. S. Yoon, Y.-K. Sun",img:"images/p28.jpg"},
  {n:27,y:2023,t:"Opening a New Horizon for the Facile Synthesis of Long-Life Ni-Rich Layered Cathode",j:"ACS Energy Letters",b:"8, 3784–3792",if:24.0,jcr:4.1,lead:true,hcp:null,rep:false,url:"https://doi.org/10.1021/acsenergylett.3c01322",au:"G.-T. Park, S.-M. Han, J.-H. Ryu, M.-C. Kim, D.-H. Kim, M.-S. Kim, Y.-K. Sun",img:"images/p27.jpg"},
  {n:26,y:2022,t:"Nanostructured Co-Free Layered Oxide Cathode that Affords Fast-Charging Lithium-Ion Batteries for Electric Vehicles",j:"Advanced Energy Materials",b:"12, 2202719",if:29.4,jcr:2.5,lead:true,hcp:null,rep:false,url:"https://doi.org/10.1002/aenm.202202719",au:"G.-T. Park, H. H. Sun, T. Noh, F. Maglia, S. Kim, P. Lamp, Y.-K. Sun",img:"images/p26.jpg"},
  {n:25,y:2022,t:"Dipole–Dipole Interaction-Induced Electrolyte Interfacial Model to Stabilize Antimony Anode for High-Safety Li-Ion Batteries",j:"ACS Energy Letters",b:"7, 3545–3556",if:23.1,jcr:4.1,lead:false,hcp:"HCP",rep:false,url:"https://doi.org/10.1021/acsenergylett.2c01408",au:"Q. Sun, Z. Cao, Z. Ma, J. Zhang, H. Cheng, X. Guo, G.-T. Park, Q. Li, E. Xie, L. Cavallo, Y.-K. Sun, J. Ming",img:"images/p25.jpg"},
  {n:24,y:2022,t:"Introducing High-Valence Elements into Cobalt-Free Layered Cathodes for Practical Lithium-Ion Batteries",j:"Nature Energy",b:"7, 946–954",if:60.9,jcr:0.3,lead:true,hcp:"HCP",rep:true,url:"https://doi.org/10.1038/s41560-022-01106-6",au:"G.-T. Park, B. Namkoong, S.-B. Kim, J. Liu, C. S. Yoon, Y.-K. Sun",img:"images/p24.jpg"},
  {n:23,y:2022,t:"Degradation Mechanism of Ni-Rich Cathode Materials: Focusing on the Particle Interior",j:"ACS Energy Letters",b:"7, 2362–2369",if:23.1,jcr:4.1,lead:true,cofirst:true,hcp:"HCP",rep:false,url:"https://doi.org/10.1021/acsenergylett.2c01272",au:"N.-Y. Park, G.-T. Park, S.-B. Kim, W. Jung, B.-C. Park, Y.-K. Sun",img:"images/p23.jpg"},
  {n:22,y:2022,t:"High-Energy Ni-Rich Cathode Materials for Long-Range and Long-Life Electric Vehicles",j:"Advanced Energy Materials",b:"12, 2200615",if:29.4,jcr:2.5,lead:false,hcp:null,rep:false,url:"https://doi.org/10.1002/aenm.202200615",au:"B. Namkoong, N. Park, G.-T. Park, J. Shin, T. Beierling, C. S. Yoon, Y.-K. Sun",img:"images/p22.jpg"},
  {n:21,y:2022,t:"Intrinsic Weaknesses of Co-Free Ni–Mn Layered Cathodes for Electric Vehicles",j:"Materials Today",b:"56, 8–15",if:31.0,jcr:3.8,lead:false,hcp:null,rep:false,url:"https://doi.org/10.1016/j.mattod.2022.03.005",au:"H.-H. Ryu, G.-C. Kang, R. Ismoyojati, G.-T. Park, F. Maglia, Y.-K. Sun",img:"images/p21.jpg"},
  {n:20,y:2022,t:"Microstructure-Optimized Concentration-Gradient NCM Cathode for Long-Life Li-Ion Batteries",j:"Materials Today",b:"52, 9–18",if:31.0,jcr:3.8,lead:true,hcp:null,rep:false,url:"https://doi.org/10.1016/j.mattod.2021.11.018",au:"G.-T. Park, H.-H. Ryu, T.-C. Noh, G.-C. Kang, Y.-K. Sun",img:"images/p20.jpg"},
  {n:19,y:2021,t:"Interfacial Model Deciphering High-Voltage Electrolytes for High-Energy-Density, High-Safety, Fast-Charging Li-Ion Batteries",j:"Advanced Materials",b:"33, 2102964",if:27.4,jcr:2.1,lead:false,hcp:"HCP",rep:false,url:"https://doi.org/10.1002/adma.202102964",au:"Y. Zou, Z. Cao, J. Zhang, W. Wahyudi, Y. Wu, G. Liu, Q. Li, H. Cheng, D. Zhang, G.-T. Park, L. Cavallo, T. D. Anthopoulos, L. Wang, Y.-K. Sun, J. Ming",img:"images/p19.jpg"},
  {n:18,y:2021,t:"Electrolyte Chemistry in 3D Metal-Oxide Nanorod Arrays Deciphers Li Dendrite-Free Plating/Stripping Behaviors",j:"Journal of Physical Chemistry Letters",b:"12, 4857–4866",if:6.7,jcr:32.6,lead:false,hcp:null,rep:false,url:"https://doi.org/10.1021/acs.jpclett.1c01049",au:"Q. Li, Z. Cao, G. Liu, H. Cheng, Y. Wu, H. Ming, G.-T. Park, D. Yin, L. Wang, L. Cavallo, Y.-K. Sun, J. Ming",img:"images/p18.jpg"},
  {n:17,y:2021,t:"Optimized Ni-Rich NCMA Cathode for Electric Vehicle Batteries",j:"Advanced Energy Materials",b:"11, 2003767",if:25.2,jcr:2.5,lead:false,hcp:null,rep:false,url:"https://doi.org/10.1002/aenm.202003767",au:"N. Park, H. Ryu, G.-T. Park, T. Noh, Y.-K. Sun",img:"images/p17.jpg"},
  {n:16,y:2021,t:"Electrolyte-Mediated Stabilization of High-Capacity Micro-Sized Antimony Anodes for Potassium-Ion Batteries",j:"Advanced Materials",b:"33, 2005993",if:27.4,jcr:2.1,lead:false,hcp:null,rep:false,url:"https://doi.org/10.1002/adma.202005993",au:"L. Zhou, Z. Cao, J. Zhang, H. Cheng, G. Liu, G.-T. Park, L. Cavallo, L. Wang, H. N. Alshareef, Y.-K. Sun, J. Ming",img:"images/p16.jpg"},
  {n:15,y:2021,t:"Ultrafine-Grained Ni-Rich Layered Cathode for Advanced Li-Ion Batteries",j:"Energy & Environmental Science",b:"14, 6616–6626",if:30.3,jcr:0.9,lead:true,hcp:"HCP",rep:true,url:"https://doi.org/10.1039/d1ee02898g",au:"G.-T. Park, D. R. Yoon, U.-H. Kim, B. Namkoong, J. Lee, M. M. Wang, A. C. Lee, X. W. Gu, W. C. Chueh, C. S. Yoon, Y.-K. Sun",img:"images/p15.jpg"},
  {n:14,y:2021,t:"High-Performance Ni-Rich Li[Ni0.9−xCo0.1Alx]O2 Cathodes via Multi-Stage Microstructural Tailoring",j:"Energy & Environmental Science",b:"14, 5084–5095",if:30.3,jcr:0.9,lead:true,hcp:null,rep:false,url:"https://doi.org/10.1039/d1ee01773j",au:"G.-T. Park, N.-Y. Park, T.-C. Noh, B. Namkoong, H.-H. Ryu, J.-Y. Shin, T. Beierling, C. S. Yoon, Y.-K. Sun",img:"images/p14.jpg"},
  {n:13,y:2021,t:"Cation-Ordered Ni-Rich Layered Cathode for Ultra-Long Battery Life",j:"Energy & Environmental Science",b:"14, 1573–1583",if:30.3,jcr:0.9,lead:false,hcp:null,rep:false,url:"https://doi.org/10.1039/d0ee03774e",au:"U.-H. Kim, G.-T. Park, P. Conlin, N. Ashburn, K. Cho, Y.-S. Yu, D. A. Shapiro, F. Maglia, S.-J. Kim, P. Lamp, C. S. Yoon, Y.-K. Sun",img:"images/p13.jpg"},
  {n:12,y:2020,t:"Unraveling the New Role of an Ethylene Carbonate Solvation Shell in Rechargeable Metal-Ion Batteries",j:"ACS Energy Letters",b:"6, 69–78",if:19.0,jcr:4.1,lead:false,hcp:null,rep:false,url:"https://doi.org/10.1021/acsenergylett.0c02140",au:"Q. Li, Z. Cao, W. Wahyudi, G. Liu, G.-T. Park, L. Cavallo, T. D. Anthopoulos, L. Wang, Y.-K. Sun, H. N. Alshareef, J. Ming",img:"images/p12.jpg"},
  {n:11,y:2020,t:"High-Energy W-Doped Li[Ni0.95Co0.04Al0.01]O2 Cathodes for Next-Generation Electric Vehicles",j:"Energy Storage Materials",b:"33, 399–407",if:17.8,jcr:4.7,lead:false,hcp:null,rep:false,url:"https://doi.org/10.1016/j.ensm.2020.08.013",au:"U.-H. Kim, N.-Y. Park, G.-T. Park, H. Kim, C. S. Yoon, Y.-K. Sun",img:"images/p11.jpg"},
  {n:10,y:2020,t:"Heuristic Solution for Achieving Long-Term Cycle Stability for Ni-Rich Layered Cathodes at Full Depth of Discharge",j:"Nature Energy",b:"5, 860–869",if:54.0,jcr:0.3,lead:false,hcp:"HCP",rep:false,url:"https://doi.org/10.1038/s41560-020-00693-6",au:"U.-H. Kim, G.-T. Park, B.-K. Son, G. W. Nam, J. Liu, L.-Y. Kuo, P. Kaghazchi, C. S. Yoon, Y.-K. Sun",img:"images/p10.jpg"},
  {n:9,y:2020,t:"Model-Based Design of Stable Electrolytes for Potassium-Ion Batteries",j:"ACS Energy Letters",b:"5, 3124–3131",if:16.3,jcr:4.1,lead:false,hcp:null,rep:false,url:"https://doi.org/10.1021/acsenergylett.0c01634",au:"J. Zhang, Z. Cao, L. Zhou, G.-T. Park, L. Cavallo, L. Wang, H. N. Alshareef, Y.-K. Sun, J. Ming",img:"images/p9.jpg"},
  {n:8,y:2020,t:"Model-Based Design of Graphite-Compatible Electrolytes in Potassium-Ion Batteries",j:"ACS Energy Letters",b:"5, 2651–2661",if:16.3,jcr:4.1,lead:false,hcp:null,rep:false,url:"https://doi.org/10.1021/acsenergylett.0c01401",au:"J. Zhang, Z. Cao, L. Zhou, G. Liu, G.-T. Park, L. Cavallo, L. Wang, H. N. Alshareef, Y.-K. Sun, J. Ming",img:"images/p8.jpg"},
  {n:7,y:2020,t:"Cobalt-Free High-Capacity Ni-Rich Layered Li[Ni0.9Mn0.1]O2 Cathode",j:"Advanced Energy Materials",b:"10, 1903179",if:21.9,jcr:2.5,lead:true,cofirst:true,hcp:"HCP-C",rep:false,url:"https://doi.org/10.1002/aenm.201903179",au:"A. Aishova, G.-T. Park, C. S. Yoon, Y.-K. Sun",img:"images/p7.jpg"},
  {n:6,y:2019,t:"Tungsten Doping for Stabilization of Li[Ni0.90Co0.05Mn0.05]O2 Cathode at High Voltage",j:"Journal of Power Sources",b:"442, 227242",if:6.9,jcr:14.8,lead:true,hcp:null,rep:false,url:"https://doi.org/10.1016/j.jpowsour.2019.227242",au:"G.-T. Park, H.-H. Ryu, N.-Y. Park, C. S. Yoon, Y.-K. Sun",img:"images/p6.jpg"},
  {n:5,y:2019,t:"Adiponitrile (C6H8N2): A New Bi-Functional Additive for High-Performance Li-Metal Batteries",j:"Advanced Functional Materials",b:"29, 1902496",if:13.3,jcr:4.8,lead:false,hcp:null,rep:false,url:"https://doi.org/10.1002/adfm.201902496",au:"S. H. Lee, J. Hwang, S. Park, G.-T. Park, Y.-K. Sun",img:"images/p5.jpg"},
  {n:4,y:2019,t:"Suppressing Detrimental Phase Transitions via Tungsten Doping of LiNiO2 Cathode",j:"Journal of Materials Chemistry A",b:"7, 18580–18588",if:9.9,jcr:13.6,lead:false,hcp:null,rep:false,url:"https://doi.org/10.1039/c9ta06402h",au:"H.-H. Ryu, G.-T. Park, C. S. Yoon, Y.-K. Sun",img:"images/p4.jpg"},
  {n:3,y:2018,t:"Microstructural Degradation of Ni-Rich Li[NixCoyMn1−x−y]O2 Cathodes During Accelerated Calendar Aging",j:"Small",b:"14, 1803179",if:8.6,jcr:13.5,lead:false,hcp:null,rep:false,url:"https://doi.org/10.1002/smll.201803179",au:"H. Ryu, G.-T. Park, C. S. Yoon, Y.-K. Sun",img:"images/p3.jpg"},
  {n:2,y:2018,t:"Self-Passivation of a LiNiO2 Cathode for a Lithium-Ion Battery through Zr Doping",j:"ACS Energy Letters",b:"3, 1634–1639",if:12.3,jcr:4.1,lead:false,hcp:null,rep:false,url:"https://doi.org/10.1021/acsenergylett.8b00805",au:"C. S. Yoon, U.-H. Kim, G.-T. Park, S. J. Kim, K.-H. Kim, J. Kim, Y.-K. Sun",img:"images/p2.jpg"},
  {n:1,y:2018,t:"Extracting Maximum Capacity from Ni-Rich Li[Ni0.95Co0.025Mn0.025]O2 Cathodes for High-Energy-Density Lithium-Ion Batteries",j:"Journal of Materials Chemistry A",b:"6, 4126–4132",if:8.9,jcr:13.6,lead:false,hcp:null,rep:false,url:"https://doi.org/10.1039/c7ta11346c",au:"C. S. Yoon, H.-H. Ryu, G.-T. Park, J.-H. Kim, K.-H. Kim, Y.-K. Sun",img:"images/p1.jpg"}
];
var JAB={"Nature Energy":"Nat. Energy","Nature Nanotechnology":"Nat. Nanotechnol.","Nature Communications":"Nat. Commun.","Chemical Reviews":"Chem. Rev.","Chemical Society Reviews":"Chem. Soc. Rev.","ACS Energy Letters":"ACS Energy Lett.","Advanced Energy Materials":"Adv. Energy Mater.","Advanced Materials":"Adv. Mater.","Advanced Functional Materials":"Adv. Funct. Mater.","Advanced Science":"Adv. Sci.","Angewandte Chemie International Edition":"Angew. Chem. Int. Ed.","Energy & Environmental Science":"Energy Environ. Sci.","Energy Storage Materials":"Energy Storage Mater.","Materials Today":"Mater. Today","Materials Science & Engineering: R":"Mater. Sci. Eng. R","Journal of Power Sources":"J. Power Sources","Journal of Materials Chemistry A":"J. Mater. Chem. A","Journal of Physical Chemistry Letters":"J. Phys. Chem. Lett.","Small":"Small","ChemSusChem":"ChemSusChem"};
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
function eatt(s){return esc(s).replace(/"/g,"&quot;");}
function abbr(j){return JAB[j]||j;}
function paperURL(p){return p.url?p.url:("https://scholar.google.com/scholar?q="+encodeURIComponent(p.t));}
function subTitle(t){
  var s=esc(t);
  s=s.replace(/([A-Za-z\)\]])(\d+\.?\d*(?:[−-][xyz](?:[−-][xyz])?)?)/g,'$1<sub>$2</sub>');
  s=s.replace(/([A-Za-z])([xyz])(?=\]|\)|[A-Z])/g,'$1<sub>$2</sub>');
  return s;
}

function renderHomeStats(){
  var el=document.getElementById('home-stats'); if(!el)return;
  var total=PAPERS.length, lead=PAPERS.filter(function(p){return p.lead;}).length, hcp=PAPERS.filter(function(p){return p.hcp==="HCP";}).length;
  el.innerHTML=
    '<div class="hstat"><div class="n">'+total+'</div><div class="l">Peer-reviewed publications</div></div>'+
    '<div class="hstat"><div class="n">'+lead+'</div><div class="l">Lead-author papers</div></div>'+
    '<div class="hstat"><div class="n">'+hcp+'</div><div class="l">Highly Cited Papers (WoS)</div></div>'+
    '<div class="hstat"><div class="n">Top&nbsp;2%</div><div class="l">World’s Top 2% (Elsevier, 2025)</div></div>';
}
function renderPubs(){
  var host=document.getElementById('pub-years'); if(!host)return;
  var THIS_YEAR=2026;
  var total=PAPERS.length, lead=PAPERS.filter(function(p){return p.lead;}).length;
  var hcp=PAPERS.filter(function(p){return p.hcp==="HCP"&&(THIS_YEAR-p.y)<=10;}).length;
  var hcpc=PAPERS.filter(function(p){return p.hcp==="HCP-C";}).length;
  var sum=document.getElementById('pub-summary');
  if(sum)sum.innerHTML=
    '<div class="sumcard"><div class="n">'+total+'</div><div class="l">Total peer-reviewed papers</div></div>'+
    '<div class="sumcard"><div class="n">'+lead+'</div><div class="l">Lead-author papers</div><div class="sub">first / co-first / corresponding</div></div>'+
    '<div class="sumcard hl"><div class="n">'+hcp+'</div><div class="l">Highly Cited Papers (last 10 yr)</div></div>';
  var bins=[{k:"Top 5%",lo:0,hi:5,cls:"b0"},{k:"5–10%",lo:5,hi:10,cls:"b1"},{k:"10–25%",lo:10,hi:25,cls:"b2"},{k:"25–50%",lo:25,hi:50,cls:"b3"},{k:"Over 50%",lo:50,hi:100,cls:"b3"}];
  var scored=PAPERS.filter(function(p){return typeof p.jcr==="number";});
  bins.forEach(function(b){b.c=scored.filter(function(p){return p.jcr>b.lo&&p.jcr<=b.hi;}).length;});
  bins[0].c=scored.filter(function(p){return p.jcr<=5;}).length;
  var unranked=PAPERS.length-scored.length;
  if(unranked>0)bins.push({k:"Unranked",c:unranked,cls:"b4"});
  var maxc=1; bins.forEach(function(b){if(b.c>maxc)maxc=b.c;});
  var be=document.getElementById('jcr-bins');
  if(be)be.innerHTML=bins.filter(function(b){return b.c>0;}).map(function(b){return '<div class="bin"><div class="bl">'+b.k+'</div><div class="bt"><div class="bf '+b.cls+'" data-w="'+Math.round(b.c/maxc*100)+'"></div></div><div class="bv">'+b.c+'</div></div>';}).join('');
  var note=document.getElementById('jcr-note');
  var binsum=bins.reduce(function(a,b){return a+b.c;},0);
  if(note)note.textContent=scored.length===0?'JCR percentiles not entered yet — add "jcr" values in data.js and these counts populate automatically.':(binsum+' papers total · '+scored.length+' ranked by JCR percentile'+(unranked>0?', '+unranked+' pending (percentile not yet available)':'')+'.');
  var rep=PAPERS.filter(function(p){return p.rep;}).sort(function(a,b){return b.y-a.y;});
  var re=document.getElementById('rep-papers');
  if(re)re.innerHTML=rep.map(function(p){var rf=p.img?('<img src="'+eatt(p.img)+'" alt="'+eatt(p.t)+'">'):('<span>'+esc(abbr(p.j))+'<br>'+p.y+'</span>');return '<a class="repcard" href="'+eatt(paperURL(p))+'" target="_blank" rel="noopener"><div class="rf">'+rf+'</div><div class="rb"><div class="rj">'+esc(abbr(p.j))+'</div><div class="rt">'+subTitle(p.t)+'</div></div></a>';}).join('');
  var years=[]; PAPERS.forEach(function(p){if(years.indexOf(p.y)<0)years.push(p.y);}); years.sort(function(a,b){return b-a;});
  host.innerHTML=years.map(function(yr,idx){
    var items=PAPERS.filter(function(p){return p.y===yr;}).sort(function(a,b){return b.n-a.n;});
    var rows=items.map(function(p){
      var fig=p.img?'<img src="'+eatt(p.img)+'" alt="'+eatt(p.t)+'">':'<div class="jab">'+esc(abbr(p.j))+'</div>';
      var chips='';
      if(p.lead)chips+='<span class="chip auth">Lead author</span>';
      else chips+='<span class="chip">Co-author</span>';
      if(p.hcp==="HCP")chips+='<span class="chip hcp">★ HCP</span>';
      var authors='';
      if(p.au){
        var mk=' <sup class="cf" title="Co-first author (equal contribution)">†</sup>';
        var parts=p.au.split(', ');
        var html=parts.map(function(nm,ix){
          var isMe=(nm==="G.-T. Park");
          var s=esc(nm);
          if(isMe)s='<b class="me">'+s+'</b>';
          if(p.cofirst&&(ix===0||isMe))s+=mk;
          return s;
        }).join(', ');
        authors='<div class="paper-authors">'+html+'</div>';
      }
      var metrics='';
      if(typeof p.if==="number")metrics+='<span class="chip if">IF '+p.if.toFixed(1)+'</span>';
      metrics+='<span class="chip jcr'+(typeof p.jcr==="number"?' set':'')+'">'+(typeof p.jcr==="number"?('JCR top '+p.jcr+'%'):'JCR top —')+'</span>';
      var isStatus=/^(Accepted|Under revision|Online published|Submitted|In press)/i.test(p.b);
      var jr='<em>'+esc(p.j)+'</em> '+(isStatus?'<span class="status">('+esc(p.b)+')</span>':esc(p.b));
      var title='<a href="'+eatt(paperURL(p))+'" target="_blank" rel="noopener">'+subTitle(p.t)+'</a>';
      return '<article class="paper" id="p'+p.n+'"><div class="paper-fig">'+fig+'</div><div class="paper-body"><div class="paper-top"><span class="pnum">#'+p.n+'</span>'+chips+'</div><div class="paper-title">'+title+'</div>'+authors+'<div class="paper-jr">'+jr+'</div><div class="paper-metrics">'+metrics+'</div></div></article>';
    }).join('');
    return '<div class="yblock'+(idx===0?' open':'')+'"><button class="yhead" aria-expanded="'+(idx===0?'true':'false')+'"><span class="yy">'+yr+'</span><span class="yc">'+items.length+' paper'+(items.length>1?'s':'')+'</span><svg class="chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><div class="ypanel"><div class="ypanel-in">'+rows+'</div></div></div>';
  }).join('');
  host.querySelectorAll('.yhead').forEach(function(btn){btn.addEventListener('click',function(){var blk=btn.parentElement,o=blk.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');});});
  var ea=document.getElementById('expand-all'), ca=document.getElementById('collapse-all');
  if(ea)ea.addEventListener('click',function(){host.querySelectorAll('.yblock').forEach(function(b){b.classList.add('open');b.querySelector('.yhead').setAttribute('aria-expanded','true');});});
  if(ca)ca.addEventListener('click',function(){host.querySelectorAll('.yblock').forEach(function(b){b.classList.remove('open');b.querySelector('.yhead').setAttribute('aria-expanded','false');});});
  function fill(){if(be)be.querySelectorAll('.bf').forEach(function(f){f.style.width=f.getAttribute('data-w')+'%';});}
  if('IntersectionObserver' in window && be){var bo=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){fill();bo.disconnect();}});},{threshold:.3});bo.observe(be);}else fill();
}
document.addEventListener('DOMContentLoaded',function(){renderHomeStats();renderPubs();});
