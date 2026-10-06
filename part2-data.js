window.PART2_CONFIG = {
  "version": "part2-v3-s6",
  "sections": [
    {
      "id": "part2-7",
      "number": 7,
      "tiers": [
        "AA_HL_PLUS",
        "ENRICHMENT"
      ],
      "title": {
        "en": "Inverse Functions, Composition & Fixed Points",
        "id": "Fungsi Invers, Komposisi & Titik Tetap"
      },
      "subtitle": {
        "en": "Reduce new-looking inverse and composition questions to fixed-point structure.",
        "id": "Reduksi soal invers dan komposisi yang tampak baru menjadi struktur titik tetap."
      },
      "intro": {
        "en": "For a strictly increasing one-to-one function, an intersection of f and f⁻¹ must lie on y=x. The same order idea also shows that an increasing map cannot create a non-trivial two-cycle.",
        "id": "Untuk fungsi satu-ke-satu yang naik tegas, titik potong f dan f⁻¹ harus berada pada y=x. Ide urutan yang sama juga menunjukkan bahwa fungsi naik tidak dapat memiliki siklus dua titik yang bukan titik tetap."
      },
      "idea": {
        "en": "MONOTONICITY → ORDER → FIXED POINT → REUSE KNOWN CLASSIFICATION",
        "id": "MONOTONISITAS → URUTAN → TITIK TETAP → GUNAKAN KLASIFIKASI YANG SUDAH DIKENAL"
      },
      "explore": {
        "en": "Before doing algebra, ask whether monotonicity forces the geometry. If f(f(x))=x and f is increasing, compare f(x) with x first.",
        "id": "Sebelum melakukan aljabar, tanyakan apakah sifat monoton sudah memaksa bentuk geometrinya. Jika f(f(x))=x dan f naik, bandingkan dulu f(x) dengan x."
      },
      "formal": {
        "en": "If f is strictly increasing and (x,y) lies on both y=f(x) and y=f⁻¹(x), then f(x)=y and f(y)=x. The cases x<y and x>y both contradict strict increase, so x=y. Likewise, f(f(x))=x implies f(x)=x for an increasing f.",
        "id": "Jika f naik tegas dan (x,y) berada pada grafik y=f(x) dan y=f⁻¹(x), maka f(x)=y dan f(y)=x. Kasus x<y maupun x>y bertentangan dengan sifat naik tegas, sehingga x=y. Dengan cara yang sama, untuk f yang naik, f(f(x))=x mengakibatkan f(x)=x."
      },
      "insight": {
        "en": "The new-looking problem may contain no new roots; the main decision is recognizing an old fixed-point structure inside a new representation.",
        "id": "Soal yang tampak baru belum tentu memiliki akar baru; keputusan utamanya adalah mengenali struktur titik tetap yang sudah dikenal di dalam representasi baru."
      },
      "problemIds": [
        "P7-01",
        "P7-02"
      ]
    },
    {
      "id": "part2-8",
      "number": 8,
      "tiers": [
        "AA_HL_PLUS",
        "ENRICHMENT"
      ],
      "title": {
        "en": "Strategic Method Selection",
        "id": "Pemilihan Metode secara Strategis"
      },
      "subtitle": {
        "en": "Choose the method that answers the mathematical question, not the most powerful method available.",
        "id": "Pilih metode yang menjawab pertanyaan matematis, bukan sekadar metode paling kuat yang tersedia."
      },
      "intro": {
        "en": "Advanced work is often a method-choice problem. A graph may suggest, calculus may prove, an inequality may collapse the question immediately, and normalization may expose monotonicity.",
        "id": "Soal tingkat lanjut sering kali merupakan soal memilih metode. Grafik dapat memberi dugaan, kalkulus dapat membuktikan, pertidaksamaan dapat langsung menyelesaikan inti soal, dan normalisasi dapat memperlihatkan struktur monoton."
      },
      "idea": {
        "en": "QUESTION → REPRESENTATION → WHAT DOES THIS METHOD PROVE? → SHORTEST SUFFICIENT ARGUMENT",
        "id": "PERTANYAAN → REPRESENTASI → APA YANG DIBUKTIKAN METODE INI? → ARGUMEN TERPENDEK YANG CUKUP"
      },
      "explore": {
        "en": "For eˣ=1+x, compare graph evidence, a calculus minimum argument, and the tangent inequality eˣ≥1+x. For aˣ+bˣ=cˣ, divide by cˣ so both remaining bases lie between 0 and 1.",
        "id": "Untuk eˣ=1+x, bandingkan bukti visual dari grafik, argumen minimum dengan kalkulus, dan pertidaksamaan garis singgung eˣ≥1+x. Untuk aˣ+bˣ=cˣ, bagi dengan cˣ agar kedua basis yang tersisa berada di antara 0 dan 1."
      },
      "formal": {
        "en": "When 0<a,b<c, normalization gives (a/c)ˣ+(b/c)ˣ=1. Each term is strictly decreasing, so their sum is strictly decreasing. This directly turns the equation into an existence-and-uniqueness problem.",
        "id": "Jika 0<a,b<c, normalisasi memberi (a/c)ˣ+(b/c)ˣ=1. Setiap suku menurun tegas, sehingga jumlahnya juga menurun tegas. Dengan demikian persamaan langsung berubah menjadi masalah keberadaan dan keunikan solusi."
      },
      "insight": {
        "en": "A good method exposes the structure needed for the claim. Extra machinery is not automatically extra rigor.",
        "id": "Metode yang baik memperlihatkan struktur yang dibutuhkan untuk kesimpulan. Alat yang lebih rumit tidak otomatis membuat argumen lebih kuat."
      },
      "problemIds": [
        "P8-01",
        "P8-02"
      ]
    },
    {
      "id": "part2-9",
      "number": 9,
      "tiers": [
        "AA_HL_PLUS"
      ],
      "title": {
        "en": "Calculus as a Structural Tool",
        "id": "Kalkulus sebagai Alat Struktural"
      },
      "subtitle": {
        "en": "Separate existence from uniqueness, and differentiate only when it answers a structural question.",
        "id": "Pisahkan keberadaan dari keunikan, dan gunakan turunan hanya ketika menjawab pertanyaan struktural."
      },
      "intro": {
        "en": "A sign change can establish existence for a continuous function; monotonicity can establish uniqueness. These are different logical jobs and should be stated separately.",
        "id": "Perubahan tanda dapat membuktikan keberadaan akar untuk fungsi kontinu; sifat monoton dapat membuktikan keunikannya. Keduanya memiliki peran logis yang berbeda dan perlu dinyatakan secara terpisah."
      },
      "idea": {
        "en": "CONTINUITY / SIGN CHANGE → EXISTENCE · DERIVATIVE / MONOTONICITY → UNIQUENESS",
        "id": "KONTINUITAS / PERUBAHAN TANDA → KEBERADAAN · TURUNAN / MONOTONISITAS → KEUNIKAN"
      },
      "explore": {
        "en": "For eˣ=4−x, define F(x)=eˣ+x−4. First find two inputs with opposite signs; then inspect F′(x).",
        "id": "Untuk eˣ=4−x, definisikan F(x)=eˣ+x−4. Cari dulu dua nilai x yang menghasilkan tanda berlawanan; setelah itu periksa F′(x)."
      },
      "formal": {
        "en": "F(1)=e−3<0 and F(2)=e²−2>0, so continuity gives at least one zero in (1,2). Since F′(x)=eˣ+1>0 for every real x, F is strictly increasing and therefore has at most one zero. Hence exactly one real root exists.",
        "id": "F(1)=e−3<0 dan F(2)=e²−2>0, sehingga kontinuitas memberi setidaknya satu akar pada (1,2). Karena F′(x)=eˣ+1>0 untuk setiap x real, F naik tegas dan paling banyak memiliki satu akar. Jadi terdapat tepat satu akar real."
      },
      "insight": {
        "en": "“There is a root” and “there is only one root” are separate statements requiring separate evidence.",
        "id": "“Ada sebuah akar” dan “hanya ada satu akar” adalah dua pernyataan berbeda yang memerlukan alasan berbeda."
      },
      "problemIds": [
        "P9-01"
      ]
    },
    {
      "id": "part2-10",
      "number": 10,
      "tiers": [
        "ENRICHMENT",
        "ANALYSIS_CEILING"
      ],
      "title": {
        "en": "Inequalities, Convexity & Tangent-Line Bounds",
        "id": "Pertidaksamaan, Konveksitas & Batas Garis Singgung"
      },
      "subtitle": {
        "en": "Turn tangent geometry into global inequalities, then reuse one bound to build a sharper one.",
        "id": "Ubah geometri garis singgung menjadi pertidaksamaan global, lalu gunakan kembali satu batas untuk membangun batas yang lebih tajam."
      },
      "intro": {
        "en": "For the functions used here, upward curvature of eˣ places the graph above its tangent lines, while downward curvature of ln x places the graph below its tangent lines.",
        "id": "Untuk fungsi yang digunakan di sini, kelengkungan ke atas pada eˣ membuat grafik berada di atas garis singgungnya, sedangkan kelengkungan ke bawah pada ln x membuat grafik berada di bawah garis singgungnya."
      },
      "idea": {
        "en": "TANGENT LINE → DIFFERENCE FUNCTION → GLOBAL MINIMUM / MAXIMUM → INEQUALITY → EQUALITY CASE",
        "id": "GARIS SINGGUNG → FUNGSI SELISIH → MINIMUM / MAKSIMUM GLOBAL → PERTIDAKSAMAAN → KASUS KESETARAAN"
      },
      "explore": {
        "en": "At x=a, the tangent to eˣ gives eˣ≥eᵃ(1+x−a). For ln x, the tangent at a>0 gives ln x≤ln a+(x−a)/a. Ask first whether the tangent should be an upper or lower bound.",
        "id": "Pada x=a, garis singgung eˣ memberi eˣ≥eᵃ(1+x−a). Untuk ln x, garis singgung pada a>0 memberi ln x≤ln a+(x−a)/a. Tentukan dulu apakah garis singgung menjadi batas atas atau batas bawah."
      },
      "formal": {
        "en": "Setting a=0 in the exponential tangent bound gives eˣ≥1+x. Setting a=1 in the logarithmic tangent bound gives ln x≤x−1. For x≥0, R(x)=eˣ−1−x−x²/2 has R′(x)=eˣ−1−x≥0, so eˣ≥1+x+x²/2 without using a series.",
        "id": "Mengambil a=0 pada batas garis singgung eksponensial memberi eˣ≥1+x. Mengambil a=1 pada batas logaritma memberi ln x≤x−1. Untuk x≥0, R(x)=eˣ−1−x−x²/2 memiliki R′(x)=eˣ−1−x≥0, sehingga eˣ≥1+x+x²/2 tanpa menggunakan deret."
      },
      "insight": {
        "en": "The sharper bound is built from an earlier inequality rather than from a Taylor series; the proof reuses structure.",
        "id": "Batas yang lebih tajam dibangun dari pertidaksamaan sebelumnya, bukan dari deret Taylor; buktinya menggunakan kembali struktur yang sudah diketahui."
      },
      "problemIds": [
        "P10-01",
        "P10-02"
      ]
    },
    {
      "id": "part2-11",
      "number": 11,
      "tiers": [
        "ENRICHMENT"
      ],
      "title": {
        "en": "Parameter Families + Existence / Uniqueness",
        "id": "Keluarga Berparameter + Keberadaan / Keunikan"
      },
      "subtitle": {
        "en": "Separate a built-in root from possible extra roots, then turn the parameter into a level-set problem.",
        "id": "Pisahkan akar yang selalu ada dari akar tambahan yang mungkin muncul, lalu ubah parameter menjadi masalah level fungsi."
      },
      "intro": {
        "en": "In ln x=k(x−1), x=1 is always a root. The real work is deciding whether a second root exists and whether it is unique.",
        "id": "Pada ln x=k(x−1), x=1 selalu merupakan akar. Inti masalahnya adalah menentukan apakah ada akar kedua dan apakah akar itu unik."
      },
      "idea": {
        "en": "PERMANENT ROOT → EXCLUDE IT TEMPORARILY → k=q(x) → RANGE GIVES EXISTENCE → MONOTONICITY GIVES UNIQUENESS",
        "id": "AKAR TETAP → PISAHKAN SEMENTARA → k=q(x) → JANGKAUAN MEMBERI KEBERADAAN → MONOTONISITAS MEMBERI KEUNIKAN"
      },
      "explore": {
        "en": "For x≠1, write k=q(x)=ln x/(x−1). Think of k as a horizontal level. The number of additional roots is controlled by the range and monotonicity of q.",
        "id": "Untuk x≠1, tulis k=q(x)=ln x/(x−1). Anggap k sebagai level horizontal. Jumlah akar tambahan dikendalikan oleh jangkauan nilai dan sifat monoton q."
      },
      "formal": {
        "en": "The continuous extension satisfies q(1)=1, q(x)→∞ as x→0⁺, and q(x)→0⁺ as x→∞. Using ln x≥1−1/x shows q is strictly decreasing. Therefore k≤0 or k=1 gives only the permanent root x=1, while k>0 and k≠1 gives exactly one additional root.",
        "id": "Perluasan kontinu memenuhi q(1)=1, q(x)→∞ saat x→0⁺, dan q(x)→0⁺ saat x→∞. Dengan ln x≥1−1/x dapat ditunjukkan bahwa q menurun tegas. Jadi k≤0 atau k=1 hanya memberi akar tetap x=1, sedangkan k>0 dan k≠1 memberi tepat satu akar tambahan."
      },
      "insight": {
        "en": "Range answers whether an extra root exists; strict decrease answers whether more than one extra root is possible.",
        "id": "Jangkauan nilai menjawab apakah akar tambahan ada; sifat menurun tegas menjawab apakah mungkin ada lebih dari satu akar tambahan."
      },
      "problemIds": [
        "P11-01"
      ]
    },
    {
      "id": "part2-12",
      "number": 12,
      "tiers": [
        "ENRICHMENT"
      ],
      "title": {
        "en": "General Exponential Families: What Changes When the Base Crosses 1?",
        "id": "Keluarga Eksponensial Umum: Apa yang Berubah Saat Basis Melewati 1?"
      },
      "subtitle": {
        "en": "Reverse the monotonicity picture for 0<a<1 instead of copying the a>1 classification.",
        "id": "Balik gambaran monoton untuk 0<a<1, bukan menyalin klasifikasi a>1."
      },
      "intro": {
        "en": "Part I studied aˣ=kx for a>1. When 0<a<1, the exponential is decreasing, so the geometry changes qualitatively.",
        "id": "Part I mempelajari aˣ=kx untuk a>1. Ketika 0<a<1, fungsi eksponensial menurun, sehingga geometri masalah berubah secara mendasar."
      },
      "idea": {
        "en": "BASE CROSSES 1 → MONOTONICITY REVERSES → POSITIVE-k BRANCH SIMPLIFIES → NEGATIVE-k BRANCH CARRIES THE THRESHOLD",
        "id": "BASIS MELEWATI 1 → MONOTONISITAS BERBALIK → CABANG k POSITIF MENJADI LEBIH SEDERHANA → AMBANG PINDAH KE CABANG k NEGATIF"
      },
      "explore": {
        "en": "For k>0, any solution has x>0: aˣ decreases while kx increases, so there is exactly one positive intersection. For k<0, set y=−x and reduce to a base A=1/a>1.",
        "id": "Untuk k>0, setiap solusi harus memiliki x>0: aˣ menurun sedangkan kx meningkat, sehingga ada tepat satu titik potong positif. Untuk k<0, ambil y=−x dan reduksi ke basis A=1/a>1."
      },
      "formal": {
        "en": "For 0<a<1, the critical negative parameter is k_c=e ln a<0. The classification is: k<e ln a → 2 roots; k=e ln a → 1; e ln a<k<0 → 0; k=0 → 0; k>0 → 1.",
        "id": "Untuk 0<a<1, parameter kritis negatif adalah k_c=e ln a<0. Klasifikasinya: k<e ln a → 2 akar; k=e ln a → 1; e ln a<k<0 → 0; k=0 → 0; k>0 → 1."
      },
      "insight": {
        "en": "Crossing a=1 is not a cosmetic parameter change; it reverses monotonicity and moves the non-trivial threshold to the other sign of k.",
        "id": "Melewati a=1 bukan perubahan parameter yang kosmetik; sifat monoton berbalik dan ambang nontrivial berpindah ke tanda k yang lain."
      },
      "problemIds": [
        "P12-01"
      ]
    },
    {
      "id": "part2-13",
      "number": 13,
      "tiers": [
        "AA_HL_PLUS",
        "ANALYSIS_CEILING"
      ],
      "title": {
        "en": "Fixed Points + Iterative Behaviour",
        "id": "Titik Tetap + Perilaku Iterasi"
      },
      "subtitle": {
        "en": "A fixed point may exist but still repel nearby iterations.",
        "id": "Titik tetap dapat ada tetapi tetap menolak iterasi yang dimulai di dekatnya."
      },
      "intro": {
        "en": "Iteration asks a different question from existence: if xₙ₊₁=f(xₙ), do nearby starting values move toward a fixed point or away from it?",
        "id": "Iterasi mengajukan pertanyaan yang berbeda dari keberadaan: jika xₙ₊₁=f(xₙ), apakah nilai awal yang dekat bergerak menuju titik tetap atau menjauh darinya?"
      },
      "idea": {
        "en": "FIXED POINT f(r)=r → LOCAL SLOPE f′(r) → |f′(r)|<1 SHRINKS ERROR · |f′(r)|>1 AMPLIFIES ERROR",
        "id": "TITIK TETAP f(r)=r → KEMIRINGAN LOKAL f′(r) → |f′(r)|<1 MENGECILKAN GALAT · |f′(r)|>1 MEMPERBESAR GALAT"
      },
      "explore": {
        "en": "For f(x)=(√2)ˣ, the exact fixed points are 2 and 4. Before iterating numerically, use the derivative to predict which one attracts nearby values.",
        "id": "Untuk f(x)=(√2)ˣ, titik tetap eksaknya adalah 2 dan 4. Sebelum melakukan iterasi numerik, gunakan turunan untuk memprediksi mana yang menarik nilai di sekitarnya."
      },
      "formal": {
        "en": "At any fixed point r of f(x)=aˣ, aʳ=r and r ln a=ln r. Hence f′(r)=aʳ ln a=ln r. In the two-fixed-point regime 1<a<e^(1/e), the smaller root lies between 1 and e and has |ln r|<1; the larger lies above e and has ln r>1.",
        "id": "Pada setiap titik tetap r dari f(x)=aˣ, aʳ=r dan r ln a=ln r. Maka f′(r)=aʳ ln a=ln r. Dalam kasus dengan dua titik tetap 1<a<e^(1/e), akar yang lebih kecil berada di antara 1 dan e sehingga |ln r|<1; akar yang lebih besar berada di atas e sehingga ln r>1."
      },
      "insight": {
        "en": "Existence and local stability are different properties. The derivative is used only after the fixed point has been identified.",
        "id": "Keberadaan dan kestabilan lokal adalah dua sifat berbeda. Turunan digunakan setelah titik tetapnya ditentukan."
      },
      "problemIds": [
        "P13-01",
        "P13-02"
      ]
    },
    {
      "id": "part2-14",
      "number": 14,
      "tiers": [
        "ENRICHMENT"
      ],
      "title": {
        "en": "Advanced Modelling + Identifiability",
        "id": "Pemodelan Lanjut + Identifiabilitas"
      },
      "subtitle": {
        "en": "Ask whether the data determine the model before trying to calculate its parameters.",
        "id": "Tanyakan apakah data cukup menentukan model sebelum mencoba menghitung parameternya."
      },
      "intro": {
        "en": "A model can fit all available observations and still fail to be uniquely determined. Parameter fitting begins with an identifiability question.",
        "id": "Sebuah model dapat cocok dengan semua observasi yang tersedia tetapi tetap tidak ditentukan secara unik. Pencarian parameter harus dimulai dengan pertanyaan identifiabilitas."
      },
      "idea": {
        "en": "OBSERVATIONS → COUNT / RELATE PARAMETERS → IDENTIFIABLE? → ADD INFORMATION → RECONSTRUCT",
        "id": "OBSERVASI → HITUNG / HUBUNGKAN PARAMETER → DAPAT DITENTUKAN UNIK? → TAMBAH INFORMASI → REKONSTRUKSI"
      },
      "explore": {
        "en": "For Q(t)=L+Ae⁻ᵏᵗ with Q(0)=90 and Q(2)=50, choosing any L<50 produces a valid positive k, so two observations leave infinitely many models.",
        "id": "Untuk Q(t)=L+Ae⁻ᵏᵗ dengan Q(0)=90 dan Q(2)=50, setiap pilihan L<50 menghasilkan k positif yang valid, sehingga dua observasi masih menyisakan tak hingga banyak model."
      },
      "formal": {
        "en": "A=90−L and e⁻²ᵏ=(50−L)/(90−L). Adding Q(4)=30 and using equal spacing gives (50−L)²=(90−L)(30−L), so L=10, A=80 and k=(ln 2)/2.",
        "id": "A=90−L dan e⁻²ᵏ=(50−L)/(90−L). Setelah menambah Q(4)=30, karena waktunya berjarak sama diperoleh (50−L)²=(90−L)(30−L), sehingga L=10, A=80, dan k=(ln 2)/2."
      },
      "insight": {
        "en": "The correct response to insufficient data is not to guess a parameter; it is to state that the model is underdetermined and identify what additional information is needed.",
        "id": "Respons yang benar terhadap data yang tidak cukup bukan menebak parameter, melainkan menyatakan bahwa model belum dapat ditentukan secara unik dan menjelaskan informasi tambahan yang dibutuhkan."
      },
      "problemIds": [
        "P14-01"
      ]
    },
    {
      "id": "part2-15",
      "number": 15,
      "tiers": [
        "ANALYSIS_CEILING"
      ],
      "title": {
        "en": "Asymptotic Comparison",
        "id": "Perbandingan Asimtotik"
      },
      "subtitle": {
        "en": "“Eventually” is a tail statement; a finite graph can suggest it but cannot prove it.",
        "id": "“Pada akhirnya” adalah pernyataan tentang perilaku untuk nilai x yang sangat besar; grafik terbatas hanya memberi dugaan, bukan bukti."
      },
      "intro": {
        "en": "The goal is to prove that exponentials eventually dominate any fixed positive power, then reuse that representation to compare logarithms with powers.",
        "id": "Tujuannya adalah membuktikan bahwa eksponensial pada akhirnya mengungguli setiap pangkat positif tetap, lalu menggunakan kembali representasi itu untuk membandingkan logaritma dengan pangkat."
      },
      "idea": {
        "en": "COMPARE POSITIVE FUNCTIONS → TAKE LOGS / CHANGE VARIABLES → STUDY A DIFFERENCE → CONTROL THE TAIL",
        "id": "BANDINGKAN FUNGSI POSITIF → AMBIL LOG / GANTI VARIABEL → PELAJARI FUNGSI SELISIH → KENDALIKAN PERILAKU EKOR"
      },
      "explore": {
        "en": "For fixed n>0, eˣ>xⁿ is equivalent to x>n ln x. Study h(x)=x−n ln x and ask what happens once x is larger than a multiple of n.",
        "id": "Untuk n>0 tetap, eˣ>xⁿ ekuivalen dengan x>n ln x. Pelajari h(x)=x−n ln x dan tanyakan apa yang terjadi setelah x lebih besar dari suatu kelipatan n."
      },
      "formal": {
        "en": "h′(x)=1−n/x. For x>2n, h′(x)>1/2, so h grows at least linearly from that point and therefore tends to +∞. Hence eˣ>xⁿ for all sufficiently large x and xⁿe⁻ˣ→0.",
        "id": "h′(x)=1−n/x. Untuk x>2n, h′(x)>1/2, sehingga h bertumbuh setidaknya secara linear dari titik itu dan akhirnya menuju +∞. Jadi eˣ>xⁿ untuk semua x yang cukup besar dan xⁿe⁻ˣ→0."
      },
      "insight": {
        "en": "A visible crossover on a finite graph is evidence only. The proof must control all sufficiently large x.",
        "id": "Titik perpotongan yang terlihat pada grafik terbatas hanya merupakan bukti awal. Pembuktian harus mengendalikan semua x yang cukup besar."
      },
      "problemIds": [
        "P15-01"
      ]
    },
    {
      "id": "part2-16",
      "number": 16,
      "tiers": [
        "ENRICHMENT"
      ],
      "title": {
        "en": "Functional Structure of Exponentials",
        "id": "Struktur Fungsional Eksponensial"
      },
      "subtitle": {
        "en": "Adding inputs and multiplying outputs characterizes exponential behaviour under continuity.",
        "id": "Menjumlahkan masukan dan mengalikan hasilnya mencirikan perilaku eksponensial dengan asumsi kontinuitas."
      },
      "intro": {
        "en": "Suppose f:ℝ→(0,∞) is continuous and f(x+y)=f(x)f(y). The functional equation first determines integers and rationals; continuity is needed only to extend the result to all real inputs.",
        "id": "Misalkan f:ℝ→(0,∞) kontinu dan f(x+y)=f(x)f(y). Persamaan fungsional pertama-tama menentukan nilai pada bilangan bulat dan rasional; kontinuitas baru diperlukan untuk memperluas hasil ke semua bilangan real."
      },
      "idea": {
        "en": "f(0)=1 → NEGATIVES → INTEGERS → RATIONALS → CONTINUITY → ALL REALS",
        "id": "f(0)=1 → NILAI NEGATIF → BILANGAN BULAT → RASIONAL → KONTINUITAS → SEMUA REAL"
      },
      "explore": {
        "en": "Let a=f(1)>0. Repeated addition gives f(n)=aⁿ for integers. For q=m/n, positivity lets us select the positive n-th root and obtain f(q)=aᑫ.",
        "id": "Ambil a=f(1)>0. Penjumlahan berulang memberi f(n)=aⁿ untuk bilangan bulat. Untuk q=m/n, sifat positif memungkinkan kita memilih akar ke-n yang positif dan memperoleh f(q)=aᑫ."
      },
      "formal": {
        "en": "Because the rationals are dense, for any real x choose rational qⱼ→x. Continuity gives f(x)=lim f(qⱼ)=lim a^qⱼ=aˣ. Thus the additive-to-multiplicative law produces exponential functions in this setting.",
        "id": "Karena bilangan rasional rapat di ℝ, untuk setiap x real pilih qⱼ rasional dengan qⱼ→x. Kontinuitas memberi f(x)=lim f(qⱼ)=lim a^qⱼ=aˣ. Jadi hukum “masukan dijumlahkan, hasilnya dikalikan” menghasilkan fungsi eksponensial dalam kerangka ini."
      },
      "insight": {
        "en": "Continuity is not doing the early algebra; it prevents different behaviour from appearing between rational points.",
        "id": "Kontinuitas bukan yang mengerjakan aljabar awal; perannya adalah mencegah perilaku lain muncul di antara titik-titik rasional."
      },
      "problemIds": [
        "P16-01"
      ]
    },
    {
      "id": "part2-17",
      "number": 17,
      "tiers": [
        "ANALYSIS_CEILING"
      ],
      "title": {
        "en": "Multi-Parameter Classification",
        "id": "Klasifikasi Dua Parameter"
      },
      "subtitle": {
        "en": "Classify eˣ=mx+c in the (m,c)-plane and interpret the boundary geometrically.",
        "id": "Klasifikasikan eˣ=mx+c pada bidang parameter (m,c) dan tafsirkan batasnya secara geometris."
      },
      "intro": {
        "en": "One numerical parameter value is no longer the goal. We want regions in parameter space corresponding to 0, 1 or 2 real intersections.",
        "id": "Tujuannya bukan lagi satu nilai parameter numerik. Kita ingin menentukan wilayah pada ruang parameter yang menghasilkan 0, 1, atau 2 titik potong real."
      },
      "idea": {
        "en": "FIX m → Hₘ(x)=eˣ−mx → FIND ITS RANGE → COMPARE c → ASSEMBLE PARAMETER REGIONS",
        "id": "TETAPKAN m → Hₘ(x)=eˣ−mx → CARI JANGKAUAN NILAI → BANDINGKAN c → SUSUN WILAYAH PARAMETER"
      },
      "explore": {
        "en": "For m<0, Hₘ is strictly increasing and covers all real outputs. For m=0, solve eˣ=c directly. For m>0, the global minimum occurs at x=ln m.",
        "id": "Untuk m<0, Hₘ naik tegas dan menghasilkan seluruh nilai real. Untuk m=0, selesaikan eˣ=c secara langsung. Untuk m>0, minimum global terjadi pada x=ln m."
      },
      "formal": {
        "en": "For m>0, min Hₘ=m(1−ln m). Therefore c below this value gives 0 roots, equality gives 1, and c above gives 2. The boundary c=m(1−ln m) records all tangent lines y=mx+c to y=eˣ.",
        "id": "Untuk m>0, min Hₘ=m(1−ln m). Maka c di bawah nilai ini memberi 0 akar, sama dengan nilai ini memberi 1, dan di atasnya memberi 2. Batas c=m(1−ln m) mencatat semua garis y=mx+c yang menyinggung y=eˣ."
      },
      "insight": {
        "en": "The tangency boundary is a geometric object in parameter space, not just a collection of isolated critical numbers.",
        "id": "Batas ketertutupan adalah objek geometris di ruang parameter, bukan sekadar kumpulan nilai kritis yang terpisah."
      },
      "problemIds": [
        "P17-01"
      ]
    },
    {
      "id": "part2-18",
      "number": 18,
      "tiers": [
        "ANALYSIS_CEILING"
      ],
      "title": {
        "en": "Synthesis Investigation I — Fixed-Point Existence vs Iterative Stability",
        "id": "Investigasi Sintesis I — Keberadaan Titik Tetap vs Kestabilan Iterasi"
      },
      "subtitle": {
        "en": "A fixed point can exist for every parameter while its iterative behaviour changes at a critical parameter.",
        "id": "Titik tetap dapat ada untuk semua parameter sementara perilaku iterasinya berubah pada parameter kritis."
      },
      "intro": {
        "en": "For fλ(x)=λe⁻ˣ with λ>0, first solve the fixed-point existence problem. Only after that should local iterative stability be analysed.",
        "id": "Untuk fλ(x)=λe⁻ˣ dengan λ>0, selesaikan dulu masalah keberadaan titik tetap. Setelah itu baru analisis kestabilan iterasinya secara lokal."
      },
      "idea": {
        "en": "EXISTENCE: r eʳ=λ → UNIQUE r · STABILITY: f′λ(r)=−r → COMPARE r WITH 1 → TRANSLATE BACK TO λ",
        "id": "KEBERADAAN: r eʳ=λ → r UNIK · KESTABILAN: f′λ(r)=−r → BANDINGKAN r DENGAN 1 → KEMBALIKAN KE λ"
      },
      "explore": {
        "en": "The function g(r)=reʳ is strictly increasing from 0 to +∞ on r>0, so every λ>0 has exactly one positive fixed point. But this says nothing yet about convergence of iteration.",
        "id": "Fungsi g(r)=reʳ naik tegas dari 0 ke +∞ untuk r>0, sehingga setiap λ>0 memiliki tepat satu titik tetap positif. Namun hal ini belum menjawab apakah iterasinya akan konvergen."
      },
      "formal": {
        "en": "At a fixed point, λe⁻ʳ=r, so f′λ(r)=−r. Thus |f′λ(r)|=r: locally attracting for r<1 and repelling for r>1. Since λ=reʳ is increasing, this becomes 0<λ<e attracting and λ>e repelling. At λ=e, the slope is −1 and the first-order test is inconclusive.",
        "id": "Pada titik tetap, λe⁻ʳ=r, sehingga f′λ(r)=−r. Jadi |f′λ(r)|=r: menarik secara lokal untuk r<1 dan menolak untuk r>1. Karena λ=reʳ meningkat, hasilnya menjadi 0<λ<e menarik dan λ>e menolak. Pada λ=e, kemiringannya −1 sehingga uji orde pertama belum menentukan perilaku."
      },
      "insight": {
        "en": "Existence of a solution and convergence of an iterative algorithm are different mathematical questions.",
        "id": "Keberadaan solusi dan konvergensi algoritma iterasi adalah dua pertanyaan matematis yang berbeda."
      },
      "problemIds": [
        "P18-01"
      ]
    },
    {
      "id": "part2-19",
      "number": 19,
      "tiers": [
        "ANALYSIS_CEILING"
      ],
      "title": {
        "en": "Synthesis Investigation II — Identifiability & Competing Models",
        "id": "Investigasi Sintesis II — Identifiabilitas & Model yang Bersaing"
      },
      "subtitle": {
        "en": "Different model structures can fit the same early data yet disagree qualitatively in the long term.",
        "id": "Struktur model yang berbeda dapat cocok dengan data awal yang sama tetapi memberi prediksi jangka panjang yang sangat berbeda."
      },
      "intro": {
        "en": "Two observations uniquely determine a pure exponential Ae⁻ᵏᵗ, but the same two observations do not identify a shifted model L+Be⁻ʳᵗ. A third observation can change the identifiability of the model.",
        "id": "Dua observasi menentukan model eksponensial murni Ae⁻ᵏᵗ secara unik, tetapi dua observasi yang sama belum cukup menentukan model bergeser L+Be⁻ʳᵗ. Observasi ketiga dapat mengubah identifiabilitas model."
      },
      "idea": {
        "en": "FIT EARLY DATA → ASK WHICH MODEL IS IDENTIFIABLE → ADD INFORMATION → RECONSTRUCT → COMPARE LONG-TERM PREDICTIONS",
        "id": "COCOKKAN DATA AWAL → TANYAKAN MODEL MANA YANG DAPAT DITENTUKAN → TAMBAH INFORMASI → REKONSTRUKSI → BANDINGKAN PREDIKSI JANGKA PANJANG"
      },
      "explore": {
        "en": "With Q(0)=90 and Q(2)=50, a pure exponential is fixed, while a shifted exponential admits infinitely many choices of L<50. Adding Q(4)=30 identifies the shifted model.",
        "id": "Dengan Q(0)=90 dan Q(2)=50, model eksponensial murni sudah tertentu, sedangkan model bergeser masih mengizinkan tak hingga banyak pilihan L<50. Menambah Q(4)=30 membuat model bergeser dapat ditentukan."
      },
      "formal": {
        "en": "The pure model tends to 0. The reconstructed shifted model is S(t)=10+80e^−(ln 2)t/2 and tends to 10. Thus models agreeing with the same early observations can make qualitatively different long-term predictions.",
        "id": "Model murni menuju 0. Model bergeser yang direkonstruksi adalah S(t)=10+80e^−(ln 2)t/2 dan menuju 10. Jadi model yang sama-sama cocok dengan data awal dapat menghasilkan prediksi jangka panjang yang berbeda secara kualitatif."
      },
      "insight": {
        "en": "More observations can be necessary not merely for numerical accuracy, but to determine which model structure is justified at all.",
        "id": "Observasi tambahan dapat diperlukan bukan hanya untuk meningkatkan akurasi numerik, tetapi untuk menentukan struktur model mana yang memang dapat dibenarkan."
      },
      "problemIds": [
        "P19-01"
      ]
    }
  ],
  "problems": [
    {
      "id": "P7-01",
      "tier": "AA_HL_PLUS",
      "subtopic": 7,
      "keyword": {
        "en": "inverse intersection / fixed point",
        "id": "invers / titik tetap"
      },
      "calculator": "optional",
      "solutionId": "SOL-P7-01",
      "reasoning": "INVERSE_FIXED_POINT",
      "prompt": {
        "en": "For real p, define fₚ(x)=ln x+p, x>0. The function is strictly increasing and one-to-one.\n(a) Explain why every intersection of y=fₚ(x) and y=fₚ⁻¹(x) must lie on y=x.\n(b) Classify all real p according to whether the two graphs have 0, 1, or 2 intersection points.\n(c) Find the unique intersection in the critical case.",
        "id": "Untuk p real, definisikan fₚ(x)=ln x+p, x>0. Fungsi ini naik tegas dan satu-ke-satu.\n(a) Jelaskan mengapa setiap titik potong y=fₚ(x) dan y=fₚ⁻¹(x) harus berada pada y=x.\n(b) Klasifikasikan semua p real menurut apakah kedua grafik memiliki 0, 1, atau 2 titik potong.\n(c) Tentukan titik potong tunggal pada kasus kritis."
      },
      "hints": [
        {
          "en": "First reduce the inverse-intersection question to a fixed-point question. What does strict increase force if fₚ(x)=y and fₚ(y)=x?",
          "id": "Reduksi dulu soal titik potong invers menjadi soal titik tetap. Apa yang dipaksa oleh sifat naik tegas jika fₚ(x)=y dan fₚ(y)=x?"
        },
        {
          "en": "After proving x=y, rewrite the fixed-point equation as p=x−ln x. Now p is a horizontal level of one auxiliary function.",
          "id": "Setelah membuktikan x=y, tulis ulang persamaan titik tetap menjadi p=x−ln x. Sekarang p menjadi level horizontal dari satu fungsi bantu."
        },
        {
          "en": "Study h(x)=x−ln x on x>0. Locate its minimum from h′(x)=1−1/x and use the range of h to count intersections.",
          "id": "Pelajari h(x)=x−ln x pada x>0. Tentukan minimumnya dari h′(x)=1−1/x lalu gunakan jangkauan nilai h untuk menghitung titik potong."
        }
      ],
      "criteria": [
        {
          "en": "I proved why inverse intersections are fixed points using monotonic order.",
          "id": "Saya membuktikan mengapa titik potong dengan invers merupakan titik tetap menggunakan argumen urutan."
        },
        {
          "en": "I converted the parameter question to the range of h(x)=x−ln x.",
          "id": "Saya mengubah soal parameter menjadi soal jangkauan nilai h(x)=x−ln x."
        },
        {
          "en": "I stated the full 0/1/2 classification and the critical intersection.",
          "id": "Saya menyatakan klasifikasi lengkap 0/1/2 dan titik potong kritis."
        }
      ],
      "solution": {
        "en": "If (x,y) lies on both graphs, then fₚ(x)=y and fₚ(y)=x. If x<y, strict increase gives y=fₚ(x)<fₚ(y)=x, a contradiction; similarly x>y is impossible. Hence x=y, so intersections are exactly fixed points.\n\nSolve ln x+p=x, or p=x−ln x. Let h(x)=x−ln x for x>0. Then h′(x)=1−1/x, so h decreases on (0,1) and increases on (1,∞). Its unique minimum is h(1)=1, and h(x)→∞ as x→0⁺ and as x→∞. Thus range(h)=[1,∞).\n\nTherefore: p<1 gives 0 intersections; p=1 gives 1; p>1 gives 2. At p=1 the unique fixed point is x=1, so the graphs meet at (1,1).",
        "id": "Jika (x,y) berada pada kedua grafik, maka fₚ(x)=y dan fₚ(y)=x. Jika x<y, sifat naik tegas memberi y=fₚ(x)<fₚ(y)=x, kontradiksi; kasus x>y juga mustahil. Jadi x=y, sehingga titik potong tepat sama dengan titik tetap.\n\nSelesaikan ln x+p=x, atau p=x−ln x. Definisikan h(x)=x−ln x untuk x>0. Karena h′(x)=1−1/x, h menurun pada (0,1) dan meningkat pada (1,∞). Minimum tunggalnya h(1)=1, dan h(x)→∞ saat x→0⁺ maupun x→∞. Jadi jangkauan h adalah [1,∞).\n\nMaka: p<1 memberi 0 titik potong; p=1 memberi 1; p>1 memberi 2. Pada p=1, titik tetap tunggalnya x=1, sehingga kedua grafik bertemu di (1,1)."
      }
    },
    {
      "id": "P7-02",
      "tier": "ENRICHMENT",
      "subtopic": 7,
      "keyword": {
        "en": "composition / no non-trivial 2-cycle",
        "id": "komposisi / tanpa siklus dua nontrivial"
      },
      "calculator": "no",
      "solutionId": "SOL-P7-02",
      "reasoning": "COMPOSITION_ORDER",
      "prompt": {
        "en": "Let fₐ(x)=aˣ, a>1. Investigate fₐ(fₐ(x))=x.\n(a) Prove that every solution must actually satisfy fₐ(x)=x.\n(b) Hence classify the number of real solutions in terms of a. You may use the Part I fixed-point classification once the reduction is proved.",
        "id": "Misalkan fₐ(x)=aˣ, a>1. Selidiki fₐ(fₐ(x))=x.\n(a) Buktikan bahwa setiap solusi sebenarnya harus memenuhi fₐ(x)=x.\n(b) Selanjutnya klasifikasikan jumlah solusi real terhadap a. Kamu boleh memakai klasifikasi titik tetap dari Part I setelah reduksinya dibuktikan."
      },
      "hints": [
        {
          "en": "Do not expand the composition algebraically. Compare fₐ(x) with x and use the fact that fₐ is strictly increasing.",
          "id": "Jangan uraikan komposisinya secara aljabar. Bandingkan fₐ(x) dengan x dan gunakan fakta bahwa fₐ naik tegas."
        },
        {
          "en": "If fₐ(x)>x, apply fₐ to both sides. What does strict increase say about fₐ(fₐ(x))?",
          "id": "Jika fₐ(x)>x, terapkan fₐ pada kedua sisi. Apa akibat sifat naik tegas terhadap fₐ(fₐ(x))?"
        },
        {
          "en": "The cases fₐ(x)>x and fₐ(x)<x both contradict fₐ(fₐ(x))=x. Therefore only fixed points remain; then reuse the known classification of aˣ=x.",
          "id": "Kasus fₐ(x)>x dan fₐ(x)<x sama-sama bertentangan dengan fₐ(fₐ(x))=x. Jadi hanya titik tetap yang tersisa; lalu gunakan kembali klasifikasi aˣ=x yang sudah diketahui."
        }
      ],
      "criteria": [
        {
          "en": "I proved there is no non-trivial 2-cycle for a strictly increasing map.",
          "id": "Saya membuktikan bahwa fungsi naik tegas tidak memiliki siklus dua titik nontrivial."
        },
        {
          "en": "I reduced the composition equation to aˣ=x before using the Part I result.",
          "id": "Saya mereduksi persamaan komposisi menjadi aˣ=x sebelum memakai hasil Part I."
        },
        {
          "en": "I stated the three parameter regimes correctly.",
          "id": "Saya menyatakan tiga daerah parameter dengan benar."
        }
      ],
      "solution": {
        "en": "Because a>1, fₐ is strictly increasing. Suppose fₐ(fₐ(x))=x. If fₐ(x)>x, then applying fₐ gives fₐ(fₐ(x))>fₐ(x)>x, contradiction. If fₐ(x)<x, then fₐ(fₐ(x))<fₐ(x)<x, again a contradiction. Therefore fₐ(x)=x.\n\nSo the composition equation has exactly the same real solutions as aˣ=x. Using the established Part I classification: 1<a<e^(1/e) gives 2 real solutions; a=e^(1/e) gives 1; a>e^(1/e) gives 0.",
        "id": "Karena a>1, fₐ naik tegas. Misalkan fₐ(fₐ(x))=x. Jika fₐ(x)>x, maka dengan menerapkan fₐ diperoleh fₐ(fₐ(x))>fₐ(x)>x, kontradiksi. Jika fₐ(x)<x, maka fₐ(fₐ(x))<fₐ(x)<x, juga kontradiksi. Jadi fₐ(x)=x.\n\nMaka persamaan komposisi memiliki solusi real yang sama persis dengan aˣ=x. Dengan klasifikasi Part I: 1<a<e^(1/e) memberi 2 solusi real; a=e^(1/e) memberi 1; a>e^(1/e) memberi 0."
      }
    },
    {
      "id": "P8-01",
      "tier": "AA_HL_PLUS",
      "subtopic": 8,
      "keyword": {
        "en": "method selection / normalization",
        "id": "pemilihan metode / normalisasi"
      },
      "calculator": "no",
      "solutionId": "SOL-P8-01",
      "reasoning": "METHOD_SELECTION",
      "prompt": {
        "en": "Solve 2ˣ+5ˣ=7ˣ and prove that your solution is unique. Then briefly compare: taking logarithms immediately; graphical/numerical solving; normalization followed by monotonicity. Which approach gives the cleanest proof?",
        "id": "Selesaikan 2ˣ+5ˣ=7ˣ dan buktikan bahwa solusinya unik. Lalu bandingkan secara singkat: langsung mengambil logaritma; penyelesaian grafik/numerik; normalisasi lalu monotonisitas. Pendekatan mana yang memberi bukti paling bersih?"
      },
      "hints": [
        {
          "en": "Taking logs does not separate a sum. Try dividing by the largest exponential term.",
          "id": "Mengambil logaritma tidak memisahkan penjumlahan. Coba bagi dengan suku eksponensial terbesar."
        },
        {
          "en": "After dividing by 7ˣ, both bases lie in (0,1). What does that imply about the left-hand side as a function of x?",
          "id": "Setelah dibagi 7ˣ, kedua basis berada di (0,1). Apa akibatnya terhadap ruas kiri sebagai fungsi x?"
        },
        {
          "en": "Define L(x)=(2/7)ˣ+(5/7)ˣ. It is strictly decreasing. Check x=1.",
          "id": "Definisikan L(x)=(2/7)ˣ+(5/7)ˣ. Fungsi ini menurun tegas. Cek x=1."
        }
      ],
      "criteria": [
        {
          "en": "I normalized by 7ˣ and identified monotonicity.",
          "id": "Saya menormalisasi dengan 7ˣ dan mengenali sifat monoton."
        },
        {
          "en": "I proved uniqueness, not just found x=1.",
          "id": "Saya membuktikan keunikan, bukan hanya menemukan x=1."
        },
        {
          "en": "I explained why the other methods are weaker for this goal.",
          "id": "Saya menjelaskan mengapa metode lain lebih lemah untuk tujuan ini."
        }
      ],
      "solution": {
        "en": "Divide by 7ˣ>0: (2/7)ˣ+(5/7)ˣ=1. Let L(x)=(2/7)ˣ+(5/7)ˣ. Both bases are in (0,1), so each term is strictly decreasing; hence L is strictly decreasing and L(x)=1 has at most one solution. At x=1, L(1)=2/7+5/7=1. Therefore x=1 is the unique solution.\n\nTaking logs immediately does not separate the sum. A graph can suggest the solution but does not prove uniqueness. Normalization exposes monotonicity and proves uniqueness directly.",
        "id": "Bagi dengan 7ˣ>0: (2/7)ˣ+(5/7)ˣ=1. Misalkan L(x)=(2/7)ˣ+(5/7)ˣ. Kedua basis berada di (0,1), sehingga setiap suku menurun tegas; jadi L menurun tegas dan L(x)=1 paling banyak memiliki satu solusi. Pada x=1, L(1)=2/7+5/7=1. Jadi x=1 adalah solusi tunggal.\n\nMengambil logaritma langsung tidak memisahkan penjumlahan. Grafik dapat memberi dugaan tetapi tidak membuktikan keunikan. Normalisasi memperlihatkan monotonisitas dan membuktikan keunikan secara langsung."
      }
    },
    {
      "id": "P8-02",
      "tier": "ENRICHMENT",
      "subtopic": 8,
      "keyword": {
        "en": "general uniqueness theorem",
        "id": "teorema keunikan umum"
      },
      "calculator": "no",
      "solutionId": "SOL-P8-02",
      "reasoning": "MONOTONICITY_UNIQUENESS",
      "prompt": {
        "en": "Let 0<a,b<c. Prove that aˣ+bˣ=cˣ has exactly one real solution r. Then prove: c<a+b ⇒ r>1; c=a+b ⇒ r=1; c>a+b ⇒ r<1. Do not use a graph as the main proof.",
        "id": "Misalkan 0<a,b<c. Buktikan bahwa aˣ+bˣ=cˣ memiliki tepat satu solusi real r. Lalu buktikan: c<a+b ⇒ r>1; c=a+b ⇒ r=1; c>a+b ⇒ r<1. Jangan gunakan grafik sebagai bukti utama."
      },
      "hints": [
        {
          "en": "Normalize by cˣ so that both remaining bases are strictly between 0 and 1.",
          "id": "Normalisasi dengan cˣ agar kedua basis yang tersisa berada ketat di antara 0 dan 1."
        },
        {
          "en": "Define L(x)=(a/c)ˣ+(b/c)ˣ. Use continuity and strict decrease separately: one gives existence, the other uniqueness.",
          "id": "Definisikan L(x)=(a/c)ˣ+(b/c)ˣ. Gunakan kontinuitas dan sifat menurun tegas secara terpisah: yang satu memberi keberadaan, yang lain keunikan."
        },
        {
          "en": "To locate r relative to 1, evaluate L(1)=(a+b)/c and use the fact that L is decreasing.",
          "id": "Untuk menentukan posisi r terhadap 1, hitung L(1)=(a+b)/c dan gunakan fakta bahwa L menurun."
        }
      ],
      "criteria": [
        {
          "en": "I established existence and uniqueness separately.",
          "id": "Saya membuktikan keberadaan dan keunikan secara terpisah."
        },
        {
          "en": "I used L(1) to locate the unique root relative to 1.",
          "id": "Saya menggunakan L(1) untuk menentukan posisi akar tunggal terhadap 1."
        },
        {
          "en": "I did not rely on a graph as proof.",
          "id": "Saya tidak mengandalkan grafik sebagai bukti."
        }
      ],
      "solution": {
        "en": "Divide by cˣ>0: (a/c)ˣ+(b/c)ˣ=1. Let L(x)=(a/c)ˣ+(b/c)ˣ. Since 0<a/c<1 and 0<b/c<1, L is continuous and strictly decreasing. As x→−∞, L(x)→∞; as x→∞, L(x)→0. Continuity gives at least one solution of L(x)=1, while strict decrease gives at most one. Hence there is exactly one root r.\n\nNow L(1)=(a+b)/c. Because L decreases: if c<a+b, then L(1)>1, so the level 1 is reached later and r>1; if c=a+b, r=1; if c>a+b, L(1)<1, so the level was reached earlier and r<1.",
        "id": "Bagi dengan cˣ>0: (a/c)ˣ+(b/c)ˣ=1. Misalkan L(x)=(a/c)ˣ+(b/c)ˣ. Karena 0<a/c<1 dan 0<b/c<1, L kontinu dan menurun tegas. Saat x→−∞, L(x)→∞; saat x→∞, L(x)→0. Kontinuitas memberi setidaknya satu solusi L(x)=1, sedangkan sifat menurun tegas memberi paling banyak satu. Jadi ada tepat satu akar r.\n\nSekarang L(1)=(a+b)/c. Karena L menurun: jika c<a+b, maka L(1)>1, sehingga level 1 dicapai lebih kemudian dan r>1; jika c=a+b, r=1; jika c>a+b, L(1)<1, sehingga level sudah dilewati lebih awal dan r<1."
      }
    },
    {
      "id": "P9-01",
      "tier": "AA_HL_PLUS",
      "subtopic": 9,
      "keyword": {
        "en": "existence vs uniqueness",
        "id": "keberadaan vs keunikan"
      },
      "calculator": "yes for final approximation only",
      "solutionId": "SOL-P9-01",
      "reasoning": "EXISTENCE_IVT",
      "prompt": {
        "en": "Show that eˣ=4−x has exactly one real solution. Your proof must state separately: (i) why a solution exists; (ii) why there cannot be two solutions. Then find the solution to three decimal places.",
        "id": "Tunjukkan bahwa eˣ=4−x memiliki tepat satu solusi real. Bukti harus menyatakan secara terpisah: (i) mengapa solusi ada; (ii) mengapa tidak mungkin ada dua solusi. Lalu tentukan solusinya hingga tiga tempat desimal."
      },
      "hints": [
        {
          "en": "Move everything to one side: define F(x)=eˣ+x−4.",
          "id": "Pindahkan semua ke satu sisi: definisikan F(x)=eˣ+x−4."
        },
        {
          "en": "For existence, look for a sign change at two simple inputs and use continuity.",
          "id": "Untuk keberadaan, cari perubahan tanda pada dua nilai x sederhana dan gunakan kontinuitas."
        },
        {
          "en": "For uniqueness, inspect F′(x). If it is always positive, F can cross the axis at most once.",
          "id": "Untuk keunikan, periksa F′(x). Jika selalu positif, F paling banyak memotong sumbu sekali."
        }
      ],
      "criteria": [
        {
          "en": "I explicitly separated existence from uniqueness.",
          "id": "Saya secara eksplisit memisahkan keberadaan dari keunikan."
        },
        {
          "en": "I used continuity/sign change for existence and monotonicity for uniqueness.",
          "id": "Saya menggunakan kontinuitas/perubahan tanda untuk keberadaan dan monotonisitas untuk keunikan."
        },
        {
          "en": "I gave the numerical root only after the proof.",
          "id": "Saya memberikan akar numerik setelah pembuktian."
        }
      ],
      "solution": {
        "en": "Let F(x)=eˣ+x−4. F is continuous. F(1)=e−3<0 while F(2)=e²−2>0, so a root exists in (1,2). Also F′(x)=eˣ+1>0 for every real x, so F is strictly increasing and can have at most one zero. Therefore exactly one real root exists. Numerically, x≈1.074.",
        "id": "Misalkan F(x)=eˣ+x−4. F kontinu. F(1)=e−3<0 sedangkan F(2)=e²−2>0, sehingga ada akar pada (1,2). Selain itu F′(x)=eˣ+1>0 untuk setiap x real, jadi F naik tegas dan paling banyak mempunyai satu nol. Maka terdapat tepat satu akar real. Secara numerik, x≈1.074."
      }
    },
    {
      "id": "P10-01",
      "tier": "ENRICHMENT",
      "subtopic": 10,
      "keyword": {
        "en": "tangent-line logarithmic bound",
        "id": "batas logaritma dari garis singgung"
      },
      "calculator": "no",
      "solutionId": "SOL-P10-01",
      "reasoning": "INEQUALITY_TANGENT",
      "prompt": {
        "en": "Let a>0.\n(a) Prove, without assuming a pre-existing convexity theorem, that ln x ≤ ln a + (x−a)/a for x>0.\n(b) State the equality case.\n(c) Choose a strategically to deduce ln x ≤ x/e for every x>0.",
        "id": "Misalkan a>0.\n(a) Buktikan, tanpa mengasumsikan teorema konveksitas yang sudah ada, bahwa ln x ≤ ln a + (x−a)/a untuk x>0.\n(b) Nyatakan kasus kesetaraannya.\n(c) Pilih a secara strategis untuk memperoleh ln x ≤ x/e untuk setiap x>0."
      },
      "hints": [
        {
          "en": "Subtract ln x from the candidate tangent-line expression and study the difference.",
          "id": "Kurangkan ln x dari bentuk garis singgung yang diusulkan lalu pelajari fungsi selisihnya."
        },
        {
          "en": "Define G(x)=ln a+(x−a)/a−ln x. Find G′(x) and locate its global minimum.",
          "id": "Definisikan G(x)=ln a+(x−a)/a−ln x. Cari G′(x) dan tentukan minimum globalnya."
        },
        {
          "en": "For the final bound ln x≤x/e, choose the tangent point a so that the constant terms collapse cleanly.",
          "id": "Untuk batas akhir ln x≤x/e, pilih titik singgung a sehingga suku konstan menyederhana dengan rapi."
        }
      ],
      "criteria": [
        {
          "en": "I proved the inequality via a minimum of a difference function.",
          "id": "Saya membuktikan pertidaksamaan melalui minimum fungsi selisih."
        },
        {
          "en": "I stated equality occurs only at x=a.",
          "id": "Saya menyatakan kesetaraan hanya terjadi pada x=a."
        },
        {
          "en": "I chose a=e and simplified to ln x≤x/e.",
          "id": "Saya memilih a=e dan menyederhanakan menjadi ln x≤x/e."
        }
      ],
      "solution": {
        "en": "Define G(x)=ln a+(x−a)/a−ln x. Then G′(x)=1/a−1/x=(x−a)/(ax). Thus G′(x)<0 for 0<x<a, G′(a)=0, and G′(x)>0 for x>a. Hence G has a global minimum at x=a, where G(a)=0. Therefore G(x)≥0 and ln x≤ln a+(x−a)/a, with equality only at x=a.\n\nChoose a=e. Since ln e=1, ln x≤1+(x−e)/e=x/e. Equality occurs only at x=e.",
        "id": "Definisikan G(x)=ln a+(x−a)/a−ln x. Maka G′(x)=1/a−1/x=(x−a)/(ax). Jadi G′(x)<0 untuk 0<x<a, G′(a)=0, dan G′(x)>0 untuk x>a. Dengan demikian G memiliki minimum global pada x=a, dengan G(a)=0. Maka G(x)≥0 dan ln x≤ln a+(x−a)/a, dengan kesetaraan hanya saat x=a.\n\nPilih a=e. Karena ln e=1, diperoleh ln x≤1+(x−e)/e=x/e. Kesetaraan hanya terjadi saat x=e."
      }
    },
    {
      "id": "P10-02",
      "tier": "ANALYSIS_CEILING",
      "subtopic": 10,
      "keyword": {
        "en": "sharper exponential bound without series",
        "id": "batas eksponensial lebih tajam tanpa deret"
      },
      "calculator": "no",
      "solutionId": "SOL-P10-02",
      "reasoning": "CONVEXITY_BOUND",
      "prompt": {
        "en": "Without using a Taylor or Maclaurin series, prove that eˣ ≥ 1+x+x²/2 for x≥0. Show that equality occurs only at x=0. Hence determine all non-negative solutions of eˣ=1+x+x²/2.",
        "id": "Tanpa menggunakan deret Taylor atau Maclaurin, buktikan bahwa eˣ ≥ 1+x+x²/2 untuk x≥0. Tunjukkan bahwa kesetaraan hanya terjadi pada x=0. Selanjutnya tentukan semua solusi tak-negatif dari eˣ=1+x+x²/2."
      },
      "hints": [
        {
          "en": "Build a new difference function R(x)=eˣ−1−x−x²/2.",
          "id": "Bangun fungsi selisih baru R(x)=eˣ−1−x−x²/2."
        },
        {
          "en": "Differentiate once. R′(x)=eˣ−1−x, which is controlled by the already-known inequality eˣ≥1+x.",
          "id": "Turunkan sekali. R′(x)=eˣ−1−x, yang dapat dikendalikan oleh pertidaksamaan yang sudah diketahui eˣ≥1+x."
        },
        {
          "en": "On x≥0, show R′(x)≥0 and use R(0)=0. For x>0, the first-order tangent inequality is strict.",
          "id": "Pada x≥0, tunjukkan R′(x)≥0 dan gunakan R(0)=0. Untuk x>0, pertidaksamaan garis singgung orde pertama bersifat ketat."
        }
      ],
      "criteria": [
        {
          "en": "I reused the earlier tangent inequality rather than a power series.",
          "id": "Saya menggunakan kembali pertidaksamaan garis singgung sebelumnya, bukan deret pangkat."
        },
        {
          "en": "I proved strictness for x>0.",
          "id": "Saya membuktikan ketatnya pertidaksamaan untuk x>0."
        },
        {
          "en": "I concluded the only non-negative equality solution is x=0.",
          "id": "Saya menyimpulkan satu-satunya solusi kesetaraan tak-negatif adalah x=0."
        }
      ],
      "solution": {
        "en": "Let R(x)=eˣ−1−x−x²/2. Then R′(x)=eˣ−1−x. From eˣ≥1+x, R′(x)≥0 for x≥0, and the inequality is strict for x>0. Since R(0)=0, R is non-decreasing from 0, so R(x)≥0. Thus eˣ≥1+x+x²/2 for x≥0. For x>0, R′(x)>0, so R(x)>0. Equality occurs only at x=0. Therefore eˣ=1+x+x²/2 has exactly one non-negative solution: x=0.",
        "id": "Misalkan R(x)=eˣ−1−x−x²/2. Maka R′(x)=eˣ−1−x. Dari eˣ≥1+x, diperoleh R′(x)≥0 untuk x≥0, dan pertidaksamaan itu ketat untuk x>0. Karena R(0)=0, R tidak menurun dari 0, sehingga R(x)≥0. Jadi eˣ≥1+x+x²/2 untuk x≥0. Untuk x>0, R′(x)>0, sehingga R(x)>0. Kesetaraan hanya terjadi pada x=0. Maka eˣ=1+x+x²/2 memiliki tepat satu solusi tak-negatif: x=0."
      }
    },
    {
      "id": "P11-01",
      "tier": "ENRICHMENT",
      "subtopic": 11,
      "keyword": {
        "en": "built-in root + parameter family",
        "id": "akar tetap + keluarga parameter"
      },
      "calculator": "no",
      "solutionId": "SOL-P11-01",
      "reasoning": "PARAMETER_LEVEL_SET",
      "prompt": {
        "en": "For real k, investigate ln x=k(x−1), x>0.\n(a) Show that x=1 is always a solution.\n(b) Classify the number of distinct real solutions for every k.\n(c) Explain clearly which argument gives existence of an extra root and which gives uniqueness of that extra root.",
        "id": "Untuk k real, selidiki ln x=k(x−1), x>0.\n(a) Tunjukkan bahwa x=1 selalu merupakan solusi.\n(b) Klasifikasikan jumlah solusi real berbeda untuk setiap k.\n(c) Jelaskan dengan jelas argumen mana yang memberi keberadaan akar tambahan dan argumen mana yang memberi keunikan akar tambahan itu."
      },
      "hints": [
        {
          "en": "Separate the built-in root x=1 before dividing by x−1.",
          "id": "Pisahkan akar bawaan x=1 sebelum membagi dengan x−1."
        },
        {
          "en": "For x≠1, write k=q(x)=ln x/(x−1). The extra roots are level-set intersections.",
          "id": "Untuk x≠1, tulis k=q(x)=ln x/(x−1). Akar tambahan adalah titik potong level horizontal."
        },
        {
          "en": "Show the continuous extension of q is strictly decreasing from +∞ to 0 with q(1)=1. Range gives existence; strict decrease gives uniqueness.",
          "id": "Tunjukkan perpanjangan kontinu q menurun tegas dari +∞ ke 0 dengan q(1)=1. Jangkauan nilai memberi keberadaan; sifat menurun tegas memberi keunikan."
        }
      ],
      "criteria": [
        {
          "en": "I preserved the permanent root x=1 before transforming the equation.",
          "id": "Saya mempertahankan akar permanen x=1 sebelum mentransformasi persamaan."
        },
        {
          "en": "I used the range of q for existence and strict decrease for uniqueness.",
          "id": "Saya menggunakan jangkauan nilai q untuk keberadaan dan sifat menurun tegas untuk keunikan."
        },
        {
          "en": "I counted distinct roots correctly at k=1.",
          "id": "Saya menghitung akar berbeda dengan benar pada k=1."
        }
      ],
      "solution": {
        "en": "x=1 is always a root because ln1=0 and k(1−1)=0. For x≠1, write k=q(x)=ln x/(x−1). The continuous extension has q(1)=1. Differentiate: q′(x)=[1−1/x−ln x]/(x−1)². Using ln x≥1−1/x, the numerator is non-positive, with equality only at x=1, so q is strictly decreasing away from 1. Also q(x)→∞ as x→0⁺, q(1)=1, and q(x)→0⁺ as x→∞.\n\nThus if k≤0, there is no non-1 root; if k=1, the level 1 occurs only at the limiting point x=1; if k>0 and k≠1, there is exactly one non-1 root. Adding the permanent root gives: k≤0 → 1 root; k=1 → 1 root; k>0, k≠1 → 2 roots. Existence of the extra root comes from the range of q; uniqueness comes from strict decrease.",
        "id": "x=1 selalu merupakan akar karena ln1=0 dan k(1−1)=0. Untuk x≠1, tulis k=q(x)=ln x/(x−1). Perpanjangan kontinu memiliki q(1)=1. Turunkan: q′(x)=[1−1/x−ln x]/(x−1)². Dengan ln x≥1−1/x, pembilang tidak positif dan hanya nol pada x=1, sehingga q menurun tegas di luar x=1. Selain itu q(x)→∞ saat x→0⁺, q(1)=1, dan q(x)→0⁺ saat x→∞.\n\nJadi jika k≤0, tidak ada akar selain 1; jika k=1, level 1 hanya terjadi pada titik limit x=1; jika k>0 dan k≠1, ada tepat satu akar non-1. Dengan menambahkan akar permanen: k≤0 → 1 akar; k=1 → 1 akar; k>0, k≠1 → 2 akar. Keberadaan akar tambahan berasal dari jangkauan nilai q; keunikannya berasal dari sifat menurun tegas."
      }
    },
    {
      "id": "P12-01",
      "tier": "ENRICHMENT",
      "subtopic": 12,
      "keyword": {
        "en": "base below 1 / reversed geometry",
        "id": "basis di bawah 1 / geometri terbalik"
      },
      "calculator": "no",
      "solutionId": "SOL-P12-01",
      "reasoning": "BASE_CROSSES_ONE",
      "prompt": {
        "en": "Fix a base 0<a<1. Classify the number of real solutions of aˣ=kx for every real k. Your answer must make clear what changes compared with the familiar case a>1.",
        "id": "Tetapkan basis 0<a<1. Klasifikasikan jumlah solusi real dari aˣ=kx untuk setiap k real. Jawabanmu harus menjelaskan apa yang berubah dibanding kasus familiar a>1."
      },
      "hints": [
        {
          "en": "Split by the sign of k. Since aˣ>0, what sign must x have?",
          "id": "Pisahkan berdasarkan tanda k. Karena aˣ>0, tanda apa yang harus dimiliki x?"
        },
        {
          "en": "For k>0, compare a decreasing exponential with an increasing line on x>0.",
          "id": "Untuk k>0, bandingkan eksponensial yang menurun dengan garis yang meningkat pada x>0."
        },
        {
          "en": "For k<0, set y=−x>0 and A=1/a>1, K=−k>0. Reduce to Aʸ=Ky and translate the known threshold back to k.",
          "id": "Untuk k<0, tetapkan y=−x>0 dan A=1/a>1, K=−k>0. Reduksi menjadi Aʸ=Ky lalu ubah kembali nilai ambang yang sudah dikenal ke k."
        }
      ],
      "criteria": [
        {
          "en": "I separated positive, zero, and negative k.",
          "id": "Saya memisahkan k positif, nol, dan negatif."
        },
        {
          "en": "I used the reversed monotonic geometry for k>0.",
          "id": "Saya menggunakan geometri monoton yang terbalik untuk k>0."
        },
        {
          "en": "I transformed the negative-k case to a base greater than 1 and converted the threshold correctly.",
          "id": "Saya mentransformasi kasus k negatif ke basis lebih besar dari 1 dan mengubah nilai ambangnya dengan benar."
        }
      ],
      "solution": {
        "en": "For k>0, any root must have x>0. On (0,∞), aˣ is strictly decreasing while kx is strictly increasing. At x=0, aˣ=1 and kx=0; for large x, aˣ→0 while kx→∞. Thus exactly one positive root exists. For k=0, aˣ=0 has no real root.\n\nFor k<0, any root has x<0. Let y=−x>0, A=1/a>1 and K=−k>0. Then Aʸ=Ky. The known base-greater-than-1 threshold is Kc=e ln A=−e ln a. Converting K=−k back gives: k<e ln a → 2 roots; k=e ln a → 1; e ln a<k<0 → 0; k=0 → 0; k>0 → 1. The non-trivial threshold has moved from the positive-k side to the negative-k side.",
        "id": "Untuk k>0, setiap akar harus memiliki x>0. Pada (0,∞), aˣ menurun tegas sedangkan kx meningkat tegas. Pada x=0, aˣ=1 dan kx=0; untuk x besar, aˣ→0 sedangkan kx→∞. Jadi ada tepat satu akar positif. Untuk k=0, aˣ=0 tidak memiliki akar real.\n\nUntuk k<0, setiap akar memiliki x<0. Ambil y=−x>0, A=1/a>1, dan K=−k>0. Maka Aʸ=Ky. Ambang yang dikenal untuk basis lebih besar dari 1 adalah Kc=e ln A=−e ln a. Mengubah kembali K=−k memberi: k<e ln a → 2 akar; k=e ln a → 1; e ln a<k<0 → 0; k=0 → 0; k>0 → 1. Ambang nontrivial berpindah dari sisi k positif ke sisi k negatif."
      }
    },
    {
      "id": "P13-01",
      "tier": "AA_HL_PLUS",
      "subtopic": 13,
      "keyword": {
        "en": "exact fixed points + iteration",
        "id": "titik tetap eksak + iterasi"
      },
      "calculator": "yes for iterates",
      "solutionId": "SOL-P13-01",
      "reasoning": "ITERATION_FIXED_POINT",
      "prompt": {
        "en": "Consider the iteration xₙ₊₁=(√2)^(xₙ).\n(a) Verify that 2 and 4 are fixed points.\n(b) Use the derivative to predict which fixed point is locally attracting and which is locally repelling.\n(c) Starting from x₀=2.1 and separately from x₀=4.1, compute the first four iterates and compare them with your prediction.",
        "id": "Pertimbangkan iterasi xₙ₊₁=(√2)^(xₙ).\n(a) Verifikasi bahwa 2 dan 4 adalah titik tetap.\n(b) Gunakan turunan untuk memprediksi titik tetap mana yang menarik secara lokal dan mana yang menolak secara lokal.\n(c) Mulai dari x₀=2.1 dan secara terpisah dari x₀=4.1, hitung empat iterasi pertama dan bandingkan dengan prediksimu."
      },
      "hints": [
        {
          "en": "Let f(x)=(√2)ˣ. At a fixed point r, local behaviour is predicted by |f′(r)|.",
          "id": "Misalkan f(x)=(√2)ˣ. Pada titik tetap r, perilaku lokal diprediksi oleh |f′(r)|."
        },
        {
          "en": "f′(x)=(√2)ˣ ln √2. At a fixed point, (√2)ʳ=r, so f′(r)=r ln √2.",
          "id": "f′(x)=(√2)ˣ ln √2. Pada titik tetap, (√2)ʳ=r, sehingga f′(r)=r ln √2."
        },
        {
          "en": "Evaluate the slope at r=2 and r=4 before computing the iterates.",
          "id": "Hitung kemiringan pada r=2 dan r=4 sebelum menghitung iterasinya."
        }
      ],
      "criteria": [
        {
          "en": "I verified both fixed points exactly.",
          "id": "Saya memverifikasi kedua titik tetap secara eksak."
        },
        {
          "en": "I used |f′(r)|<1 versus >1 to make a local prediction.",
          "id": "Saya menggunakan |f′(r)|<1 versus >1 untuk membuat prediksi lokal."
        },
        {
          "en": "I compared the numerical iterates with the prediction.",
          "id": "Saya membandingkan iterasi numerik dengan prediksi."
        }
      ],
      "solution": {
        "en": "Let f(x)=(√2)ˣ. Since f(2)=2 and f(4)=4, both are fixed points. Also f′(x)=(√2)ˣ ln √2. At x=2, f′(2)=2 ln √2=ln 2≈0.693<1, so 2 is locally attracting. At x=4, f′(4)=4 ln √2=2ln 2≈1.386>1, so 4 is locally repelling.\n\nFrom x₀=2.1: 2.1→2.0705→2.0495→2.0346→2.0241, moving toward 2. From x₀=4.1: 4.1→4.1411→4.2004→4.2877→4.4194, moving away from 4.",
        "id": "Misalkan f(x)=(√2)ˣ. Karena f(2)=2 dan f(4)=4, keduanya titik tetap. Selain itu f′(x)=(√2)ˣ ln √2. Pada x=2, f′(2)=2 ln √2=ln 2≈0.693<1, sehingga 2 menarik secara lokal. Pada x=4, f′(4)=4 ln √2=2ln 2≈1.386>1, sehingga 4 menolak secara lokal.\n\nDari x₀=2.1: 2.1→2.0705→2.0495→2.0346→2.0241, bergerak menuju 2. Dari x₀=4.1: 4.1→4.1411→4.2004→4.2877→4.4194, bergerak menjauh dari 4."
      }
    },
    {
      "id": "P13-02",
      "tier": "ANALYSIS_CEILING",
      "subtopic": 13,
      "keyword": {
        "en": "local stability of exponential fixed points",
        "id": "kestabilan lokal titik tetap eksponensial"
      },
      "calculator": "no",
      "solutionId": "SOL-P13-02",
      "reasoning": "LOCAL_STABILITY",
      "prompt": {
        "en": "Assume 1<a<e^(1/e), so aˣ=x has two fixed points r₁<r₂. Prove that under xₙ₊₁=a^(xₙ), the smaller fixed point is locally attracting and the larger fixed point is locally repelling. Do not solve explicitly for r₁ or r₂.",
        "id": "Asumsikan 1<a<e^(1/e), sehingga aˣ=x memiliki dua titik tetap r₁<r₂. Buktikan bahwa pada iterasi xₙ₊₁=a^(xₙ), titik tetap yang lebih kecil menarik secara lokal dan yang lebih besar menolak secara lokal. Jangan mencoba menyelesaikan r₁ atau r₂ secara eksplisit."
      },
      "hints": [
        {
          "en": "At a fixed point r, use aʳ=r to simplify the derivative f′(r)=aʳ ln a.",
          "id": "Pada titik tetap r, gunakan aʳ=r untuk menyederhanakan turunan f′(r)=aʳ ln a."
        },
        {
          "en": "Take logs of aʳ=r to express r ln a=ln r. Therefore f′(r)=ln r.",
          "id": "Ambil logaritma dari aʳ=r untuk memperoleh r ln a=ln r. Jadi f′(r)=ln r."
        },
        {
          "en": "Use the shape of (ln x)/x: in the two-fixed-point regime, 1<r₁<e<r₂.",
          "id": "Gunakan bentuk (ln x)/x: pada daerah dua titik tetap, 1<r₁<e<r₂."
        }
      ],
      "criteria": [
        {
          "en": "I simplified the derivative at a fixed point to ln r.",
          "id": "Saya menyederhanakan turunan pada titik tetap menjadi ln r."
        },
        {
          "en": "I located r₁ and r₂ relative to e without solving them explicitly.",
          "id": "Saya menentukan posisi r₁ dan r₂ terhadap e tanpa menyelesaikannya secara eksplisit."
        },
        {
          "en": "I concluded attraction/repulsion from the slope magnitude.",
          "id": "Saya menyimpulkan tarikan/penolakan dari besar kemiringan."
        }
      ],
      "solution": {
        "en": "Let f(x)=aˣ. At a fixed point r, aʳ=r. Taking logs gives r ln a=ln r, so ln a=(ln r)/r. Hence f′(r)=aʳ ln a=r ln a=ln r.\n\nThe fixed-point equation is equivalent to ln a=(ln x)/x. For 1<a<e^(1/e), we have 0<ln a<1/e, so the two intersections with (ln x)/x satisfy 1<r₁<e<r₂. Thus 0<ln r₁<1, so |f′(r₁)|<1 and r₁ is locally attracting. But ln r₂>1, so |f′(r₂)|>1 and r₂ is locally repelling.",
        "id": "Misalkan f(x)=aˣ. Pada titik tetap r, aʳ=r. Dengan mengambil logaritma diperoleh r ln a=ln r, sehingga ln a=(ln r)/r. Maka f′(r)=aʳ ln a=r ln a=ln r.\n\nPersamaan titik tetap setara dengan ln a=(ln x)/x. Untuk 1<a<e^(1/e), berlaku 0<ln a<1/e, sehingga dua titik potong dengan (ln x)/x memenuhi 1<r₁<e<r₂. Jadi 0<ln r₁<1, sehingga |f′(r₁)|<1 dan r₁ menarik secara lokal. Sementara ln r₂>1, sehingga |f′(r₂)|>1 dan r₂ menolak secara lokal."
      }
    },
    {
      "id": "P14-01",
      "tier": "ENRICHMENT",
      "subtopic": 14,
      "keyword": {
        "en": "model identifiability",
        "id": "identifiabilitas model"
      },
      "calculator": "no",
      "solutionId": "SOL-P14-01",
      "reasoning": "MODEL_IDENTIFIABILITY",
      "prompt": {
        "en": "A process is modelled by Q(t)=L+Ae^(−kt), A,k>0, t≥0. Measurements give Q(0)=90 and Q(2)=50.\n(a) Decide whether L,A,k are uniquely determined. Justify mathematically.\n(b) Parameterize the family of compatible models using L.\n(c) A third observation gives Q(4)=30. Reconstruct the unique model.\n(d) Explain why equally spaced observation times are especially useful here.",
        "id": "Suatu proses dimodelkan oleh Q(t)=L+Ae^(−kt), A,k>0, t≥0. Diketahui Q(0)=90 dan Q(2)=50.\n(a) Tentukan apakah L,A,k dapat ditentukan secara unik. Beri alasan matematis.\n(b) Parametrisasikan keluarga model yang kompatibel menggunakan L.\n(c) Observasi ketiga memberi Q(4)=30. Rekonstruksi model uniknya.\n(d) Jelaskan mengapa waktu observasi yang berjarak sama sangat berguna di sini."
      },
      "hints": [
        {
          "en": "Count parameters and independent equations before trying to solve.",
          "id": "Hitung jumlah parameter dan persamaan independen sebelum mencoba menyelesaikan."
        },
        {
          "en": "From Q(0)=90, A=90−L. Then use Q(2)=50 to express e^(−2k) in terms of L. What values of L keep this ratio in (0,1)?",
          "id": "Dari Q(0)=90, A=90−L. Lalu gunakan Q(2)=50 untuk menyatakan e^(−2k) terhadap L. Nilai L mana yang membuat rasio ini tetap di (0,1)?"
        },
        {
          "en": "With Q(4)=30 and equal spacing, the deviations from L form a geometric progression: 90−L, 50−L, 30−L.",
          "id": "Dengan Q(4)=30 dan jarak waktu sama, deviasi dari L membentuk barisan geometri: 90−L, 50−L, 30−L."
        }
      ],
      "criteria": [
        {
          "en": "I decided identifiability before fitting parameters.",
          "id": "Saya menilai identifiabilitas sebelum menghitung parameter."
        },
        {
          "en": "I exhibited a whole family of compatible two-point models.",
          "id": "Saya menunjukkan seluruh keluarga model yang kompatibel dengan dua titik."
        },
        {
          "en": "I used the third equally spaced observation to identify L and reconstruct the model.",
          "id": "Saya menggunakan observasi ketiga yang berjarak sama untuk menentukan L dan merekonstruksi model."
        }
      ],
      "solution": {
        "en": "From Q(0)=90, A=90−L. From Q(2)=50, e^(−2k)=(50−L)/(90−L). For every L<50, this ratio lies in (0,1), so it defines a positive k. Hence two observations permit infinitely many compatible triples (L,A,k): the model is not identifiable.\n\nAdd Q(4)=30. With equal spacing, 90−L, 50−L, 30−L form a geometric progression, so (50−L)²=(90−L)(30−L). This gives L=10. Then A=80 and e^(−2k)=40/80=1/2, so k=(ln 2)/2. The unique model is Q(t)=10+80e^(−(ln 2)t/2). Equal spacing is useful because the exponential deviation is multiplied by one fixed ratio across each equal time step.",
        "id": "Dari Q(0)=90, A=90−L. Dari Q(2)=50, e^(−2k)=(50−L)/(90−L). Untuk setiap L<50, rasio ini berada di (0,1), sehingga menentukan k positif. Jadi dua observasi memungkinkan tak hingga banyak tripel (L,A,k): model belum teridentifikasi.\n\nTambahkan Q(4)=30. Karena jarak waktunya sama, 90−L, 50−L, 30−L membentuk barisan geometri, sehingga (50−L)²=(90−L)(30−L). Diperoleh L=10. Lalu A=80 dan e^(−2k)=40/80=1/2, sehingga k=(ln 2)/2. Model uniknya Q(t)=10+80e^(−(ln 2)t/2). Jarak waktu yang sama berguna karena deviasi eksponensial dikalikan oleh satu rasio tetap pada setiap selang waktu yang sama."
      }
    },
    {
      "id": "P15-01",
      "tier": "ANALYSIS_CEILING",
      "subtopic": 15,
      "keyword": {
        "en": "asymptotic dominance",
        "id": "dominasi asimtotik"
      },
      "calculator": "no",
      "solutionId": "SOL-P15-01",
      "reasoning": "ASYMPTOTIC_DOMINANCE",
      "prompt": {
        "en": "Let n>0 be fixed.\n(a) Prove that eˣ>xⁿ for all sufficiently large x.\n(b) Deduce that xⁿe^(−x)→0 as x→∞.\n(c) Explain why a graph showing one crossover point is not, by itself, a proof of eventual dominance. Do not use L’Hôpital’s rule or formal asymptotic notation.",
        "id": "Misalkan n>0 tetap.\n(a) Buktikan bahwa eˣ>xⁿ untuk semua x yang cukup besar.\n(b) Simpulkan bahwa xⁿe^(−x)→0 saat x→∞.\n(c) Jelaskan mengapa grafik yang menunjukkan satu titik perpotongan bukan dengan sendirinya bukti dominasi pada akhirnya. Jangan gunakan aturan L’Hôpital atau notasi asimtotik formal."
      },
      "hints": [
        {
          "en": "Because both sides are positive, take logarithms. Compare x with n ln x.",
          "id": "Karena kedua ruas positif, ambil logaritma. Bandingkan x dengan n ln x."
        },
        {
          "en": "Define h(x)=x−n ln x. For x>2n, h′(x)=1−n/x>1/2.",
          "id": "Definisikan h(x)=x−n ln x. Untuk x>2n, h′(x)=1−n/x>1/2."
        },
        {
          "en": "Use the derivative lower bound to show h(x)→∞. Then xⁿe^(−x)=e^(−h(x)).",
          "id": "Gunakan batas bawah turunan untuk menunjukkan h(x)→∞. Lalu xⁿe^(−x)=e^(−h(x))."
        }
      ],
      "criteria": [
        {
          "en": "I converted the comparison to x versus n ln x.",
          "id": "Saya mengubah perbandingan menjadi x versus n ln x."
        },
        {
          "en": "I controlled the whole tail, not just one finite graph window.",
          "id": "Saya mengendalikan seluruh ekor fungsi, bukan hanya satu jendela grafik terbatas."
        },
        {
          "en": "I deduced the limit from h(x)→∞.",
          "id": "Saya menurunkan limit dari h(x)→∞."
        }
      ],
      "solution": {
        "en": "Since both sides are positive, eˣ>xⁿ is equivalent to x>n ln x. Let h(x)=x−n ln x. Then h′(x)=1−n/x. For x>2n, h′(x)>1/2. Therefore for x>2n, h(x)≥h(2n)+(x−2n)/2, which tends to +∞. Hence h(x) is eventually positive and stays positive, so eˣ>xⁿ for all sufficiently large x.\n\nMoreover xⁿe^(−x)=e^(−h(x))→0. A finite graph can show only a finite window; “eventually” means a statement valid for every sufficiently large x, so a tail-controlling argument is required.",
        "id": "Karena kedua ruas positif, eˣ>xⁿ setara dengan x>n ln x. Misalkan h(x)=x−n ln x. Maka h′(x)=1−n/x. Untuk x>2n, h′(x)>1/2. Jadi untuk x>2n, h(x)≥h(2n)+(x−2n)/2, yang menuju +∞. Maka h(x) pada akhirnya positif dan tetap positif, sehingga eˣ>xⁿ untuk semua x yang cukup besar.\n\nSelain itu xⁿe^(−x)=e^(−h(x))→0. Grafik berhingga hanya menunjukkan jendela berhingga; “pada akhirnya” adalah pernyataan untuk setiap x yang cukup besar, jadi dibutuhkan argumen yang mengendalikan ekor fungsi."
      }
    },
    {
      "id": "P16-01",
      "tier": "ENRICHMENT",
      "subtopic": 16,
      "keyword": {
        "en": "functional structure",
        "id": "struktur fungsional"
      },
      "calculator": "no",
      "solutionId": "SOL-P16-01",
      "reasoning": "FUNCTIONAL_STRUCTURE",
      "prompt": {
        "en": "Let f:R→(0,∞) be continuous and satisfy f(x+y)=f(x)f(y) for all real x,y. Suppose f(1)=3. Prove that f(x)=3ˣ for every real x. Explain why continuity is used only at the final extension from rational to real inputs.",
        "id": "Misalkan f:R→(0,∞) kontinu dan memenuhi f(x+y)=f(x)f(y) untuk semua x,y real. Diketahui f(1)=3. Buktikan bahwa f(x)=3ˣ untuk setiap x real. Jelaskan mengapa kontinuitas baru digunakan pada perluasan akhir dari input rasional ke real."
      },
      "hints": [
        {
          "en": "Start with f(0). Positivity rules out one of the algebraic possibilities.",
          "id": "Mulai dari f(0). Positivitas menyingkirkan salah satu kemungkinan aljabar."
        },
        {
          "en": "Use the functional equation to determine negative values and all integer values. Then consider q=m/n.",
          "id": "Gunakan persamaan fungsional untuk menentukan nilai negatif dan semua bilangan bulat. Lalu pertimbangkan q=m/n."
        },
        {
          "en": "Show f(q)=3^q for every rational q. Only then use density of the rationals plus continuity to pass to every real x.",
          "id": "Tunjukkan f(q)=3^q untuk setiap q rasional. Baru setelah itu gunakan kerapatan bilangan rasional dan kontinuitas untuk beralih ke setiap x real."
        }
      ],
      "criteria": [
        {
          "en": "I forced f(0)=1 and handled negative inputs.",
          "id": "Saya memperoleh f(0)=1 dan menangani input negatif."
        },
        {
          "en": "I proved the rule for integers and rationals before using continuity.",
          "id": "Saya membuktikan aturan untuk bilangan bulat dan rasional sebelum menggunakan kontinuitas."
        },
        {
          "en": "I explained exactly where continuity enters.",
          "id": "Saya menjelaskan tepat di mana kontinuitas digunakan."
        }
      ],
      "solution": {
        "en": "Set x=y=0: f(0)=f(0)². Since f(0)>0, f(0)=1. Also 1=f(0)=f(x)f(−x), so f(−x)=1/f(x). For positive integers n, f(n)=f(1)^n=3ⁿ; negative integers follow by reciprocals.\n\nLet q=m/n with n>0. Then f(q)^n=f(nq)=f(m)=3ᵐ. Positivity gives f(q)=3^(m/n)=3^q. Thus f(q)=3^q for every rational q. For any real x, choose rationals qⱼ→x. By continuity, f(x)=lim f(qⱼ)=lim 3^(qⱼ)=3ˣ. Therefore f(x)=3ˣ for every real x. Continuity is used only in this final rational-to-real extension.",
        "id": "Ambil x=y=0: f(0)=f(0)². Karena f(0)>0, maka f(0)=1. Selain itu 1=f(0)=f(x)f(−x), sehingga f(−x)=1/f(x). Untuk bilangan bulat positif n, f(n)=f(1)^n=3ⁿ; bilangan bulat negatif mengikuti dari kebalikan.\n\nAmbil q=m/n dengan n>0. Maka f(q)^n=f(nq)=f(m)=3ᵐ. Karena f(q)>0, diperoleh f(q)=3^(m/n)=3^q. Jadi f(q)=3^q untuk setiap q rasional. Untuk setiap x real, pilih qⱼ rasional dengan qⱼ→x. Dari kontinuitas, f(x)=lim f(qⱼ)=lim 3^(qⱼ)=3ˣ. Jadi f(x)=3ˣ untuk setiap x real. Kontinuitas hanya digunakan pada perluasan akhir dari rasional ke real ini."
      }
    },
    {
      "id": "P17-01",
      "tier": "ANALYSIS_CEILING",
      "subtopic": 17,
      "keyword": {
        "en": "two-parameter classification",
        "id": "klasifikasi dua parameter"
      },
      "calculator": "no",
      "solutionId": "SOL-P17-01",
      "reasoning": "MULTI_PARAMETER_REGION",
      "prompt": {
        "en": "For real parameters m and c, classify the number of real solutions of eˣ=mx+c. Your final answer should describe regions in the (m,c) parameter plane and identify the tangency boundary geometrically.",
        "id": "Untuk parameter real m dan c, klasifikasikan jumlah solusi real dari eˣ=mx+c. Jawaban akhir harus menggambarkan daerah pada bidang parameter (m,c) dan mengidentifikasi batas singgungnya secara geometris."
      },
      "hints": [
        {
          "en": "For fixed m, write Hₘ(x)=eˣ−mx and compare its range with the horizontal level c.",
          "id": "Untuk m tetap, tulis Hₘ(x)=eˣ−mx dan bandingkan jangkauan nilainya dengan level horizontal c."
        },
        {
          "en": "Treat m<0, m=0, and m>0 separately. Their geometries are genuinely different.",
          "id": "Tangani m<0, m=0, dan m>0 secara terpisah. Geometrinya memang berbeda."
        },
        {
          "en": "For m>0, Hₘ has a global minimum at x=ln m. Evaluate that minimum to obtain the boundary curve.",
          "id": "Untuk m>0, Hₘ memiliki minimum global pada x=ln m. Hitung nilai minimum itu untuk memperoleh kurva batas."
        }
      ],
      "criteria": [
        {
          "en": "I separated the three slope regimes m<0, m=0, m>0.",
          "id": "Saya memisahkan tiga daerah kemiringan m<0, m=0, m>0."
        },
        {
          "en": "I derived the minimum m(1−ln m) for m>0.",
          "id": "Saya menurunkan minimum m(1−ln m) untuk m>0."
        },
        {
          "en": "I interpreted c=m(1−ln m) as the tangent-line boundary.",
          "id": "Saya menginterpretasikan c=m(1−ln m) sebagai batas garis singgung."
        }
      ],
      "solution": {
        "en": "Write Hₘ(x)=eˣ−mx=c.\n\nIf m<0, Hₘ′(x)=eˣ−m>0, so Hₘ is strictly increasing; it tends to −∞ as x→−∞ and +∞ as x→∞. Therefore every real c gives exactly 1 root.\n\nIf m=0, the equation is eˣ=c: there is 1 root for c>0 and 0 for c≤0.\n\nIf m>0, Hₘ′(x)=0 at x=ln m, and Hₘ″(x)=eˣ>0, so this is a global minimum. Its value is m−m ln m=m(1−ln m). Thus c<m(1−ln m) gives 0 roots; equality gives 1; c>m(1−ln m) gives 2. The boundary c=m(1−ln m), m>0, is exactly the family of tangent lines y=mx+c to y=eˣ, tangent at x=ln m.",
        "id": "Tulis Hₘ(x)=eˣ−mx=c.\n\nJika m<0, Hₘ′(x)=eˣ−m>0, sehingga Hₘ naik tegas; Hₘ→−∞ saat x→−∞ dan Hₘ→∞ saat x→∞. Jadi setiap c real memberi tepat 1 akar.\n\nJika m=0, persamaan menjadi eˣ=c: ada 1 akar untuk c>0 dan 0 untuk c≤0.\n\nJika m>0, Hₘ′(x)=0 pada x=ln m, dan Hₘ″(x)=eˣ>0, sehingga titik ini merupakan minimum global. Nilainya m−m ln m=m(1−ln m). Maka c<m(1−ln m) memberi 0 akar; sama dengan batas memberi 1; c>m(1−ln m) memberi 2. Batas c=m(1−ln m), m>0, tepat merupakan keluarga garis singgung y=mx+c terhadap y=eˣ, dengan titik singgung x=ln m."
      }
    },
    {
      "id": "P18-01",
      "tier": "ANALYSIS_CEILING",
      "subtopic": 18,
      "keyword": {
        "en": "fixed-point existence vs iteration",
        "id": "keberadaan titik tetap vs iterasi"
      },
      "calculator": "no",
      "solutionId": "SOL-P18-01",
      "reasoning": "SYNTHESIS_ITERATION",
      "prompt": {
        "en": "Let fλ(x)=λe^(−x), λ>0, and consider xₙ₊₁=fλ(xₙ).\n(a) Prove that every λ>0 gives exactly one positive fixed point r.\n(b) Show that fλ′(r)=−r.\n(c) Determine the parameter range for which the fixed point is locally attracting and the range for which it is locally repelling.\n(d) Explain what happens to the simple slope test at the boundary parameter.",
        "id": "Misalkan fλ(x)=λe^(−x), λ>0, dan pertimbangkan xₙ₊₁=fλ(xₙ).\n(a) Buktikan bahwa setiap λ>0 memberi tepat satu titik tetap positif r.\n(b) Tunjukkan bahwa fλ′(r)=−r.\n(c) Tentukan rentang parameter ketika titik tetap menarik secara lokal dan ketika menolak secara lokal.\n(d) Jelaskan apa yang terjadi pada uji kemiringan sederhana di parameter batas."
      },
      "hints": [
        {
          "en": "First solve the existence problem independently of iteration: r=λe^(−r) is equivalent to reʳ=λ.",
          "id": "Selesaikan dulu masalah keberadaan secara terpisah dari iterasi: r=λe^(−r) setara dengan reʳ=λ."
        },
        {
          "en": "Show g(r)=reʳ is continuous and strictly increasing for r>0, from 0 to +∞.",
          "id": "Tunjukkan g(r)=reʳ kontinu dan naik tegas untuk r>0, dari 0 ke +∞."
        },
        {
          "en": "At a fixed point, fλ′(r)=−λe^(−r)=−r. The transition occurs when |r|=1; convert r=1 back to λ.",
          "id": "Pada titik tetap, fλ′(r)=−λe^(−r)=−r. Transisi terjadi saat |r|=1; ubah r=1 kembali menjadi λ."
        }
      ],
      "criteria": [
        {
          "en": "I proved fixed-point existence and uniqueness before discussing stability.",
          "id": "Saya membuktikan keberadaan dan keunikan titik tetap sebelum membahas kestabilan."
        },
        {
          "en": "I simplified the derivative at the fixed point to −r.",
          "id": "Saya menyederhanakan turunan pada titik tetap menjadi −r."
        },
        {
          "en": "I converted the stability threshold r=1 to λ=e and treated the boundary separately.",
          "id": "Saya mengubah ambang kestabilan r=1 menjadi λ=e dan menangani kasus batas secara terpisah."
        }
      ],
      "solution": {
        "en": "A fixed point satisfies r=λe^(−r), so reʳ=λ. For r>0, g(r)=reʳ has g′(r)=eʳ(1+r)>0, and g(r) rises continuously from 0 to +∞. Hence every λ>0 gives exactly one positive fixed point.\n\nNow fλ′(x)=−λe^(−x). At a fixed point, λe^(−r)=r, so fλ′(r)=−r. Thus the local slope magnitude is r: nearby errors shrink when r<1 and grow when r>1. Because λ=reʳ is strictly increasing, r<1 iff λ<e, and r>1 iff λ>e. Therefore 0<λ<e is locally attracting; λ>e is locally repelling. At λ=e, r=1 and fλ′(r)=−1, so the first-order slope test is exactly on its boundary and does not by itself decide convergence.",
        "id": "Titik tetap memenuhi r=λe^(−r), sehingga reʳ=λ. Untuk r>0, g(r)=reʳ memiliki g′(r)=eʳ(1+r)>0, dan g(r) naik kontinu dari 0 ke +∞. Jadi setiap λ>0 memberi tepat satu titik tetap positif.\n\nSelanjutnya fλ′(x)=−λe^(−x). Pada titik tetap, λe^(−r)=r, sehingga fλ′(r)=−r. Maka besar kemiringan lokal adalah r: galat sekitar mengecil jika r<1 dan membesar jika r>1. Karena λ=reʳ naik tegas, r<1 iff λ<e, dan r>1 iff λ>e. Jadi 0<λ<e menarik secara lokal; λ>e menolak secara lokal. Pada λ=e, r=1 dan fλ′(r)=−1, sehingga uji kemiringan orde pertama tepat berada di batas dan tidak dengan sendirinya menentukan konvergensi."
      }
    },
    {
      "id": "P19-01",
      "tier": "ANALYSIS_CEILING",
      "subtopic": 19,
      "keyword": {
        "en": "modelling synthesis / competing models",
        "id": "sintesis pemodelan / model bersaing"
      },
      "calculator": "optional",
      "solutionId": "SOL-P19-01",
      "reasoning": "SYNTHESIS_MODELLING",
      "prompt": {
        "en": "Two measurements of a decaying quantity are Q(0)=90 and Q(2)=50.\n(a) Fit the pure exponential model P(t)=Ae^(−kt) to these observations.\n(b) Explain why the shifted model S(t)=L+Be^(−rt) is not uniquely determined by the same two observations.\n(c) A third observation is Q(4)=30. Reconstruct the unique shifted model.\n(d) Compare the long-term predictions of the pure and shifted models.\n(e) What mathematical lesson about model choice can be drawn?",
        "id": "Dua pengukuran suatu besaran yang meluruh adalah Q(0)=90 dan Q(2)=50.\n(a) Sesuaikan model eksponensial murni P(t)=Ae^(−kt) dengan kedua observasi.\n(b) Jelaskan mengapa model bergeser S(t)=L+Be^(−rt) tidak dapat ditentukan secara unik dari dua observasi yang sama.\n(c) Observasi ketiga Q(4)=30. Rekonstruksi model bergeser yang unik.\n(d) Bandingkan prediksi jangka panjang kedua model.\n(e) Pelajaran matematis apa tentang pemilihan model yang dapat ditarik?"
      },
      "hints": [
        {
          "en": "The pure exponential has two parameters, so the two measurements determine A and k. The shifted model has three parameters.",
          "id": "Eksponensial murni memiliki dua parameter, sehingga dua pengukuran menentukan A dan k. Model bergeser memiliki tiga parameter."
        },
        {
          "en": "For the shifted two-point family, let L vary. Then B=90−L and e^(−2r)=(50−L)/(90−L).",
          "id": "Untuk keluarga model bergeser dua titik, biarkan L bervariasi. Maka B=90−L dan e^(−2r)=(50−L)/(90−L)."
        },
        {
          "en": "With Q(4)=30, use equal spacing: 90−L, 50−L, 30−L must form a geometric progression. Then compare limits as t→∞.",
          "id": "Dengan Q(4)=30, gunakan jarak waktu sama: 90−L, 50−L, 30−L harus membentuk barisan geometri. Lalu bandingkan limit saat t→∞."
        }
      ],
      "criteria": [
        {
          "en": "I distinguished parameter fitting from model identifiability.",
          "id": "Saya membedakan pencocokan parameter dari identifiabilitas model."
        },
        {
          "en": "I reconstructed both the pure model and the unique three-point shifted model.",
          "id": "Saya merekonstruksi model murni dan model bergeser tiga titik yang unik."
        },
        {
          "en": "I compared their long-term predictions and stated the modelling lesson.",
          "id": "Saya membandingkan prediksi jangka panjang dan menyatakan pelajaran pemodelannya."
        }
      ],
      "solution": {
        "en": "For P(t)=Ae^(−kt), P(0)=90 gives A=90. From P(2)=50, e^(−2k)=5/9, so k=(1/2)ln(9/5). Thus P(t)=90e^(−(1/2)ln(9/5)t).\n\nFor S(t)=L+Be^(−rt), the two data give 90=L+B and 50=L+Be^(−2r). There are three unknowns and only two independent equations; indeed every L<50 gives B=90−L and e^(−2r)=(50−L)/(90−L), so the model is not identifiable from two points.\n\nAdd Q(4)=30. Equal spacing gives (50−L)²=(90−L)(30−L), hence L=10. Then B=80 and e^(−2r)=1/2, so r=(ln 2)/2. Thus S(t)=10+80e^(−(ln 2)t/2). Long-term, P(t)→0 while S(t)→10. The same early data can support different model structures; extra data may be needed to identify the model itself, not merely improve parameter accuracy.",
        "id": "Untuk P(t)=Ae^(−kt), P(0)=90 memberi A=90. Dari P(2)=50, e^(−2k)=5/9, sehingga k=(1/2)ln(9/5). Jadi P(t)=90e^(−(1/2)ln(9/5)t).\n\nUntuk S(t)=L+Be^(−rt), dua data memberi 90=L+B dan 50=L+Be^(−2r). Ada tiga parameter tetapi hanya dua persamaan independen; bahkan setiap L<50 memberi B=90−L dan e^(−2r)=(50−L)/(90−L), sehingga model tidak teridentifikasi dari dua titik.\n\nTambahkan Q(4)=30. Jarak waktu sama memberi (50−L)²=(90−L)(30−L), sehingga L=10. Lalu B=80 dan e^(−2r)=1/2, jadi r=(ln 2)/2. Maka S(t)=10+80e^(−(ln 2)t/2). Untuk jangka panjang, P(t)→0 sedangkan S(t)→10. Data awal yang sama dapat mendukung struktur model berbeda; data tambahan mungkin diperlukan untuk mengidentifikasi model itu sendiri, bukan sekadar meningkatkan akurasi parameter."
      }
    }
  ],
  "practiceOrder": [
    "P7-01",
    "P7-02",
    "P8-01",
    "P8-02",
    "P9-01",
    "P10-01",
    "P10-02",
    "P11-01",
    "P12-01",
    "P13-01",
    "P13-02",
    "P14-01",
    "P15-01",
    "P16-01",
    "P17-01",
    "P18-01",
    "P19-01"
  ]
};
