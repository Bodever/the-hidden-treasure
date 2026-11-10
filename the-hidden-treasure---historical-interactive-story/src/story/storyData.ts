import { StoryScene } from './types';

export const STORY_SCENES: Record<string, StoryScene> = {
  intro_baghdad: {
    id: 'intro_baghdad',
    chapterNumber: 1,
    chapterTitleEn: 'Chapter I: The Parchment of Baghdad',
    chapterTitleAr: 'الفصل الأول: رقيعة بغداد',
    locationEn: 'Souk al-Warraqin (Booksellers Market), Baghdad • 9th Century',
    locationAr: 'سوق الوراقين، بغداد • القرن التاسع الميلادي',
    illustrationKey: 'baghdad_market',
    paragraphs: [
      {
        id: 'p1',
        speaker: 'narrator',
        en: 'The golden afternoon sun cast long shadows across the bustling alleyways of Baghdad. Merchants called out their wares, camels trod the stone streets, and the sweet scent of saffron and roasted coffee filled the warm air. Here, in the heart of the Abbasid civilization, knowledge and commerce flourished side by side.',
        ar: 'ألقت شمس الأصيل الذهبية ظلالاً طويلة على أزقة بغداد الصاخبة. تعالت نداءات التجار، ومشت القوافل على الحجارة العتيقة، بينما ملأت رائحة الزعفران والبن المحمص نسيم الهواء الدافئ. هنا، في قلب الحضارة العباسية، كان العلم والتجارة يزدهران معاً جنباً إلى جنب.',
      },
      {
        id: 'p2',
        speaker: 'yusuf',
        speakerName: { en: 'Yusuf', ar: 'يوسف' },
        en: 'Inside an old bookshop near the Tigris River, Yusuf carefully unfolded a brittle parchment he had discovered inside an ancient geometry treatise. His hands trembled with excitement. The inked lines traced a forgotten caravan route leading deep into the western desert, marking a lost caravanserai known as "Qasr al-Zill" (The Fortress of Shadows).',
        ar: 'داخل متجر كتب قديم قرب ضفاف نهر دجلة، بسط يوسف بعناية رقيعة جلدية قديمة وجدها بين طيات كتاب للهندسة. ارتجفت يداه من فرط الحماسة؛ فقد خطت تلك السطور مساراً منسياً لقوافل تمتد عميقاً في الصحراء الغربية، مشيرة إلى محطة قوافل مهجورة تُعرف باسم "قصر الظل".',
      },
      {
        id: 'p3',
        speaker: 'qasim',
        speakerName: { en: 'Qasim', ar: 'قاسم' },
        en: '"Look at these faded notes, Yusuf!" whispered Qasim, leaning his portly frame over the wooden table. Qasim was a prosperous merchant from the Karkh district, draped in fine silk robes. "The scribes speak of a hidden royal vault abandoned during the old wars. If we locate it, we will possess more wealth than the grand vizier himself! I will pay for all the camels and supplies."',
        ar: '"انظر إلى هذه الملاحظات الباهتة يا يوسف!" همس قاسم وهو يميل بجسده الممتلئ فوق الطاولة الخشبية. كان قاسم تاجراً ثرياً من حي الكرخ يرتدي أثواب الحرير الفاخر. "يتحدث النساخ عن خزانة سلطانية مهجورة منذ الحروب القديمة. إن وجدناها سنملك ثروة تضاهي ثروة الوزير نفسه! سأتكفل بنفقات الجمال والمؤونة كاملة."',
      },
      {
        id: 'p4',
        speaker: 'harith',
        speakerName: { en: 'Harith', ar: 'حارث' },
        en: 'Standing silently in the doorway was Harith. His weathered face was lined by forty years of desert winds, and his piercing dark eyes held no greed. "The desert does not give away secrets easily, Master Qasim," Harith warned in a low, gravelly voice. "Many men search for gold in the sands, but only those who respect the dunes return alive. If you wish me to guide you, remember: my word on the trail is law."',
        ar: 'كان حارث يقف في صمت عند عتبة الباب. نقشت رياح الصحراء على وجهه الأسمر خطوط أربعين عاماً، وكانت عيناه الثاقبتان بريئتين من داء الطمع. حذر حارث بصوت عميق: "الصحراء لا تبوح بأسرارها رخيصة يا سيد قاسم. كم من رجال خرجوا يبتغون الذهب فما عادوا. إن أردتموني دليلاً لكم، فاعلموا أن كلمتي في الطريق لا تعلوها كلمة."',
      },
      {
        id: 'p5',
        speaker: 'narrator',
        en: 'Yusuf closed the parchment. For him, this journey was more than adventure—his elderly mother was frail, and finding fortune could secure a dignified life for his household. But as he looked between the greedy merchant and the stoic guide, he realized the journey ahead would test far more than their stamina.',
        ar: 'طوى يوسف الرقيعة. لم تكن هذه الرحلة مجرد مغامرة عابرة بالنسبة له؛ فأمه الطاعنة في السن كانت مريضة، والعثور على نصيب من الرزق قد يكفل لأسرته عيشاً كريماً ومستقبلاً آمناً. لكن حين نظر بين التاجر الطامع والدليل الحكيم، شعر في قرارة نفسه أن هذه الرحلة ستمتحن قلوبهم قبل أقدامهم.',
      },
    ],
    choices: [
      {
        id: 'c_start_journey',
        textEn: 'Gather the provisions and set out into the Syrian-Arabian desert.',
        textAr: 'جمع المؤن وتجهيز الركائب والانطلاق نحو الصحراء السورية العربية.',
        nextSceneId: 'desert_crossing',
      },
    ],
  },

  desert_crossing: {
    id: 'desert_crossing',
    chapterNumber: 2,
    chapterTitleEn: 'Chapter II: The Sunken Well of Al-Khatim',
    chapterTitleAr: 'الفصل الثاني: بئر الخاتم الغائرة',
    locationEn: 'Wadi al-Zill Desert Basin • Five Days West of Baghdad',
    locationAr: 'منخفض وادي الظل الصحراوي • خمسة أيام غرب بغداد',
    illustrationKey: 'desert_caravan',
    paragraphs: [
      {
        id: 'dc1',
        speaker: 'narrator',
        en: 'For five grueling days, the three men rode beneath a merciless sun. Endless waves of golden dunes stretched to the horizon, shimmering under the dry heat. By midday, water was as precious as rubies, and the silence was broken only by the rhythmic crunch of camel hooves on baked earth.',
        ar: 'على مدى خمسة أيام مضنية، واصل الرجال الثلاثة مسيرهم تحت شمس لاهبة لا ترحم. امتدت كثبان الرمال الذهبية اللامتناهية حتى الأفق متلألئة تحت القيظ الجاف. مع اشتداد الهجيرة، باتت قطرة الماء أغلى من الياقوت، ولم يقطع الصمت سوى وقع خفاف الإبل على الثرى المحترق.',
      },
      {
        id: 'dc2',
        speaker: 'harith',
        speakerName: { en: 'Harith', ar: 'حارث' },
        en: 'Suddenly, as they negotiated a treacherous rocky ridge above an ancient dry riverbed, the sand gave way. Harith\'s camel stumbled violently. With a sharp gasp of pain, the veteran guide tumbled down the steep embankment, his leg caught beneath a heavy leather saddle-pack.',
        ar: 'وفجأة، وأثناء عبورهم حافة صخرية وعرة فوق مجرى وادٍ جاف، انهارت الرمال من تحتهم. تعثرت ناقة حارث بشدة، ومع صرخة ألم مباغتة، تدحرج الدليل الخبير أسفل المنحدر الحاد، لتعلق ساقه تحت حِمل الركاب الجلدي الثقيل.',
      },
      {
        id: 'dc3',
        speaker: 'narrator',
        en: 'Yusuf leapt from his mount and slid down the ridge. Harith lay in the dust, pale and grimacing in agony. His ankle was badly twisted, and worse: two large leather water skins strapped to the saddle had split open against the sharp rocks, their cool water evaporating instantly into the thirsty sand.',
        ar: 'قفز يوسف عن راحلته وانحدر مسرعاً على الحافة. وجد حارثاً ممدداً في التراب وشاحب الوجه يعتصره الألم؛ فقد التوت كاحله بشدة، والأنكى من ذلك أن قربتين جلديتين كبيرتين من الماء كانتا مشدودتين إلى الرحل تمزقتا بفعل الصخور الحادة، وتبخر ماؤهما الزلال في لحظات على الرمال الظمأى.',
      },
      {
        id: 'dc4',
        speaker: 'qasim',
        speakerName: { en: 'Qasim', ar: 'قاسم' },
        en: 'Qasim peered down from the ridge, shielding his eyes with a silk sleeve. "Look to the east!" he shouted in panic. "A dust storm is gathering, and rival traders from Basra were only one day behind us in the last oasis! If we stop now to set his leg, night will trap us in this open valley without shelter, and we will lose the lead. Tie a quick rag around his foot and let him ride through the pain!"',
        ar: 'أطل قاسم من أعلى الحافة واضعاً طرف كمه الحريري ليحجب وهج الشمس. صاح بهلع: "انظروا إلى الشرق! ثمة عاصفة غبار تتشكل في الأفق، وقافلة تجار منافسين من البصرة كانت خلفنا بيوم واحد في آخر واحة! إن توقفنا الآن لتجبير ساقه، فسيدركنا الليل في هذا الوادي المكشوف بلا مأوى وسنخسر السبق. شدوا خرقة حول قدمه ودعوه يتحامل على ألمه ونمضي!"',
      },
      {
        id: 'dc5',
        speaker: 'harith',
        speakerName: { en: 'Harith', ar: 'حارث' },
        en: 'Harith clenched his teeth, breathing heavily. "A man who cannot plant his heel will only slow you down on the high dunes... But if we march tonight without dressing this joint and resting in the shade of these rocks, my leg will swell until I cannot walk at all. Do what your conscience tells you, young Yusuf."',
        ar: 'ضغط حارث على أسنانه وهو يتنفس بصعوبة، ثم قال: "الرجل الذي يعجز عن تثبيت كعبه سيعيق مسيركم فوق الكثبان... ولكن إن واصلنا السير الليلة دون تجبير هذا المفصل وأخذ قسط من الراحة في ظل هذه الصخور، فسيتورم حتى أعجز عن الوقوف تماماً. افعل ما يمليه عليك ضميرك يا بني."',
      },
    ],
    choices: [
      {
        id: 'c_compassion',
        textEn: 'Halt the caravan to properly splint Harith’s leg, rest in the canyon shade, and share the remaining water.',
        textAr: 'إيقاف القافلة لتجبير ساق حارث بعناية، والاستراحة في ظل الوادي الصخري، وتقاسم الماء المتبقي بالعدل.',
        nextSceneId: 'branch1_compassion',
        recordChoiceKey: 'decision1',
        recordChoiceValue: 'compassion',
      },
      {
        id: 'c_haste',
        textEn: 'Tie a tight cloth around his ankle and push through the night to outpace the storm and rival traders.',
        textAr: 'ربط الكاحل برباط سريع وإجبار القافلة على مواصلة السير ليلاً لتفادي العاصفة وتجار البصرة.',
        nextSceneId: 'branch1_haste',
        recordChoiceKey: 'decision1',
        recordChoiceValue: 'haste',
      },
    ],
  },

  branch1_compassion: {
    id: 'branch1_compassion',
    chapterNumber: 3,
    chapterTitleEn: 'Chapter III: The Bond of the Desert',
    chapterTitleAr: 'الفصل الثالث: ميثاق الصحراء',
    locationEn: 'Shaded Canyon of Al-Khatim • Dusk',
    locationAr: 'مضيق الخاتم المظلل • وقت الغسق',
    illustrationKey: 'desert_caravan',
    paragraphs: [
      {
        id: 'b1c1',
        speaker: 'yusuf',
        speakerName: { en: 'Yusuf', ar: 'يوسف' },
        en: '"We do not leave our guide to break under the desert sun," Yusuf announced firmly. Ignoring Qasim\'s furious complaints, Yusuf gathered dry desert scrub and wooden saddle-slats to build a sturdy splint for Harith’s swollen ankle, then shared half of his personal water flask with the older man.',
        ar: '"لن نترك دليلنا ينهار تحت شمس الصحراء الحارقة،" قال يوسف بحزم. وتجاهل تذمر قاسم الشديد، فجمع أعواد شجيرات برية وألواحاً خشبية من الرحل وصنع جبيرة محكمة لكاحل حارث المتورم، ثم اقتسم معه نصف مطهرته الشخصية من الماء العذب.',
      },
      {
        id: 'b1c2',
        speaker: 'harith',
        speakerName: { en: 'Harith', ar: 'حارث' },
        en: 'As dusk painted the sky in deep violet and amber, Harith looked at Yusuf with immense respect. He unfastened a small brass astrolabe and a parchment slip tucked inside his leather vest. "You have the heart of a true desert traveler, Yusuf. Because you valued my life above speed, let me show you what the old map does not reveal."',
        ar: 'وحين كسا الغسق أرجاء السماء بحمرة الشفق والبنفسج، نظر حارث إلى يوسف بنظرة ملؤها التقدير والوفاء. أخرج من جيب صدره أسطرلاباً نحاسياً صغيراً ورقعة مطوية كانت مخبأة في سترته الجلدية: "تملك قلباً نبيلاً يا يوسف. لأنك آثرت سلامة رفيقك على العجلة، سأكشف لك ما لم تفصح عنه الرقيعة القديمة."',
      },
      {
        id: 'b1c3',
        speaker: 'harith',
        speakerName: { en: 'Harith', ar: 'حارث' },
        en: '"The ancient fortress of Qasr al-Zill was never just a treasure hoard," Harith explained, his voice hushed. "It was built by 9th-century astronomers and scholars from Baghdad\'s House of Wisdom. They guarded knowledge that was meant to sustain generations. When we arrive, keep your eyes open for the truth."',
        ar: '"إن حصن قصر الظل العتيق لم يُبنَ ليكون مجرد مستودع لكنوز الذهب،" أوضح حارث بنبرة مهيبة. "لقد شيده علماء الفلك وهندسة الري في عهد بيت الحكمة ببغداد، لحفظ معارف كان هدفها إحياء الأرض وإرواء الأجيال. حين نصل هناك، تذكر أن تبصر بعين الحكمة."',
      },
      {
        id: 'b1c4',
        speaker: 'qasim',
        speakerName: { en: 'Qasim', ar: 'قاسم' },
        en: 'Qasim sat across the dying embers, counting gold coins between his plump fingers. "Scholars and stars do not buy palaces in Baghdad, Harith," he scoffed. "Only gold endures. Rest well, young man—tomorrow we enter the fortress, and I expect every dirham I was promised."',
        ar: 'جلس قاسم في الطرف الآخر يقلب دنانيره الذهبية بين أصابعه المكتنزة، وقال ساخراً: "العلم والنجوم لا يبنيان القصور في بغداد يا حارث، وحدها السبائك تصنع المجد. ناموا واستريحوا، فغداً ندخل الحصن، ولن أقبل أن أنقص درهماً واحداً مما وعدت به."',
      },
    ],
    choices: [
      {
        id: 'c_proceed_fortress_1',
        textEn: 'Follow Harith’s stars through the cool morning air toward Qasr al-Zill.',
        textAr: 'اتباع إرشادات حارث ونجوم السماء عبر نسمات الصباح الباردة نحو قصر الظل.',
        nextSceneId: 'the_ancient_vault',
      },
    ],
  },

  branch1_haste: {
    id: 'branch1_haste',
    chapterNumber: 3,
    chapterTitleEn: 'Chapter III: The Bitter March',
    chapterTitleAr: 'الفصل الثالث: المسير المرير',
    locationEn: 'Bleak Salt Flats • Deep Night',
    locationAr: 'سبخات الملح القاحلة • جوف الليل',
    illustrationKey: 'storm_dunes',
    paragraphs: [
      {
        id: 'b1h1',
        speaker: 'yusuf',
        speakerName: { en: 'Yusuf', ar: 'يوسف' },
        en: 'Fear of losing the treasure drove Yusuf\'s choice. "Qasim is right," Yusuf said reluctantly. "We cannot afford to waste a single hour." They bound Harith\'s injured ankle tightly with rough cloth, forced him onto the saddle, and drove the weary beasts forward into the cold desert night.',
        ar: 'كان الخوف من فوات الكنز وضياع السبق دافعاً لقرار يوسف. قال بتردد: "قاسم على حق، لا نملك ترف إضاعة ساعة واحدة." ربطوا كاحل حارث المصاب بقماش خشن، وألزموه ركوب راحلته، وحثوا الخطى وسط ليل الصحراء البارد تحت وطأة الإرهاق الشديد.',
      },
      {
        id: 'b1h2',
        speaker: 'narrator',
        en: 'The forced march was agony. Harith endured the jarring steps in grim silence, his jaw clenched tight against the throbbing pain. By sunrise, his leg was swollen and purple, and his gaze toward Yusuf turned cold and distant. The fragile trust between guide and traveler had fractured.',
        ar: 'كان المسير الليلي عذاباً أليماً. تجرع حارث وخز الألم في صمت رهيب دون أن يشكو، بينما اصطكت أسنانه من شدة الوجع. ومع شروق الشمس، كانت ساقه قد انتفخت وتغير لونها، وباتت نظراته إلى يوسف باردة يشوبها العتب والجفاء؛ لقد انكسر جدار الثقة بين الدليل وصاحبه.',
      },
      {
        id: 'b1h3',
        speaker: 'qasim',
        speakerName: { en: 'Qasim', ar: 'قاسم' },
        en: 'Qasim clapped Yusuf on the shoulder with a triumph that felt hollow. "Well done, Yusuf! You possess the cold steel of a true merchant! The rival traders are nowhere to be seen, and look—on yonder hill stand the dark towers of Qasr al-Zill. The gold is ours!"',
        ar: 'ربت قاسم على كتف يوسف ممتدحاً بابتسامة خلت من الدفء: "أحسنت يا يوسف! تملك حزم التجار وصلابة الإرادة! لقد هزمنا القوافل المنافسة، وانظر أمامك.. ها هي أبراج قصر الظل الداكنة تلوح فوق التل. الذهب بات بين أيدينا!"',
      },
      {
        id: 'b1h4',
        speaker: 'harith',
        speakerName: { en: 'Harith', ar: 'حارث' },
        en: 'Harith leaned heavily on his camel\'s flank, his breath wheezing. "You reached the stones faster, young master, but you left something irreplaceable in the sands. May the Creator have mercy when the true test arrives in that dark vault."',
        ar: 'اتكأ حارث بكل ثقله على جنب ناقته لاهثاً، وقال بصوت خافت: "لقد بلغتم الحجارة سريعاً يا بني، لكنكم أسقطتم في رمال الصحراء شيئاً لا يعوضه بريق الذهب. أسأل الله أن يلطف بكم حين تحل ساعة الامتحان الحقيقي داخل ذلك القبو المظلم."',
      },
    ],
    choices: [
      {
        id: 'c_proceed_fortress_2',
        textEn: 'Approach the towering, ruined gateway of the ancient desert fortress.',
        textAr: 'الاقتراب من بوابة الحصن الصحراوي القديم الشاهقة والمهدمة.',
        nextSceneId: 'the_ancient_vault',
      },
    ],
  },

  the_ancient_vault: {
    id: 'the_ancient_vault',
    chapterNumber: 4,
    chapterTitleEn: 'Chapter IV: The Secret of Qasr al-Zill',
    chapterTitleAr: 'الفصل الرابع: سر قصر الظل',
    locationEn: 'Subterranean Vault of Qasr al-Zill • Ancient Caravanserai',
    locationAr: 'القبو السردابي لقصر الظل • محطة القوافل التاريخية',
    illustrationKey: 'vault_chamber',
    paragraphs: [
      {
        id: 'v1',
        speaker: 'narrator',
        en: 'The ruined fortress of Qasr al-Zill rose like a stone giant above the dunes. Its mudbrick arches and sandstone battlements had defied the winds for centuries. Guided by the ancient parchment, Yusuf cleared mounds of suffocating dust from an iron-banded stone trapdoor, revealing steep stairs descending into the earth.',
        ar: 'نهضت أطلال حصن قصر الظل كعملاق حجري رابض وسط الرمال. تحدت أقواسه الطينية وأسواره الرملية عواصف القرون. واهتداءً بالرقيعة، أزاح يوسف أكوام الغبار الخانق عن مزلاج حجري مصفح بالحديد، فانكشفت درجات حجرية شديدة الانحدار تهبط إلى جوف الأرض.',
      },
      {
        id: 'v2',
        speaker: 'narrator',
        en: 'They lit their brass oil lamps. The flickering flames cast dancing shadows across stone walls adorned with Kufic calligraphy, geometric star charts, and engraved depictions of irrigation aqueducts. At the center of the subterranean chamber rested a massive ironbound chest of Lebanese cedar, sealed with the wax seal of a 9th-century caliphal scholar.',
        ar: 'أشعلوا مصابيح الزيت النحاسية. رقصت ألسنة اللهب ملقية ظلالاً مهيبة على جدران حجرية نقشت عليها آيات بالخط الكوفي، وخرائط فلكية هندسية، ورسوم منحوتة لقنوات الري والأفلاج. وفي منتصف القبو استقر صندوق عظيم من خشب الأرز اللبناني مصفح بالحديد، خُتم بشمع أحمر يحمل خاتم عالم من رجالات بيت الحكمة.',
      },
      {
        id: 'v3',
        speaker: 'qasim',
        speakerName: { en: 'Qasim', ar: 'قاسم' },
        en: 'With greedy haste, Qasim struck the ancient lock with his iron pry-bar. The wood groaned, and the lid swung open. Inside lay two compartments: on the top shelf rested heavy sacks of pure Abbasid gold dinars and silver ingots, glistening intoxicatingly in the lamplight.',
        ar: 'وبلهفة الطمع، ضرب قاسم القفل القديم بعتلة حديدية. أنّ الخشب العتيق، وانفرج الغطاء كاشفاً عن حجرتين: استقرت في الحجرة العلوية أكياس ثقيلة ملأى بالدنانير العباسية الذهبية والسبائك الفضية، تتلألأ ببريق ساحر يأسر الألباب تحت ضوء المصباح.',
      },
      {
        id: 'v4',
        speaker: 'yusuf',
        speakerName: { en: 'Yusuf', ar: 'يوسف' },
        en: 'Beneath the false tray, Yusuf discovered the true treasure: five heavy bronze cylinders preserving pristine leather scrolls. Yusuf unrolled one: it was not folklore, but masterworks of science—detailed surveying maps of the subterranean water aquifers and forgotten qanats stretching across the arid provinces, along with invaluable medical formulas.',
        ar: 'لكن تحت ذلك الدرج الخشبي، اكتشف يوسف الكنز الحقيقي الدفين: خمس أسطوانات برونزية محكمة حفظت بداخلها رقاعاً جلدية نادرة. بسط يوسف إحداها، فلم تكن أساطير بل عيون العلم؛ خرائط مساحية دقيقة لشبكة المياه الجوفية والينابيع المخفية التي كانت تغذي الواحات الجافة، إلى جانب وصفات طبية فريدة.',
      },
      {
        id: 'v5',
        speaker: 'harith',
        speakerName: { en: 'Harith', ar: 'حارث' },
        en: 'Outside, a terrifying sound shook the foundations. A ferocious desert Haboob—a black sandstorm towering hundreds of cubits high—was engulfing the fortress. Harith looked up toward the darkening stairs: "The storm has arrived! Our surviving camels are exhausted. If we overburden them, they will collapse in the dunes. We cannot take both the heavy crates of gold and all the large bronze scroll cases!"',
        ar: 'وفجأة، هز هدير مروع أرجاء الحصن. هبت في الخارج عاصفة رملية عاتية وحاجب ترابي أسود يرتفع مئات الأذرع في السماء يحجب ضوء النهار. صاح حارث وهو ينظر نحو الدرج المظلم: "العاصفة أطبقت علينا! الجمال المتبقية منهكة ولا طاقة لها بحمل كل شيء. إن أثقلنا عليها فستهلك في الرمال. لا يمكننا حمل صناديق الذهب الثقيلة وأسطوانات المخطوطات البرونزية معاً!"',
      },
      {
        id: 'v6',
        speaker: 'qasim',
        speakerName: { en: 'Qasim', ar: 'قاسم' },
        en: 'Qasim grabbed two heavy sacks of gold, his eyes wild with desperation. "Throw those dusty useless papers into the dirt, Yusuf! Ink will not buy food or build mansions! Pack every ounce of gold, or I swear by my ancestors I will brand you a thief in every court of Baghdad!"',
        ar: 'أمسك قاسم بكيسين ثقيلين من الذهب وعيناه تشتعلان هوساً وجشعاً: "ألقِ هذه الأوراق المغبرة التافهة في التراب يا يوسف! الحبر لا يشتري قصوراً ولا يطعم جائعاً! املأ الأكياس بالذهب حتى آخر قيراط، وإلا أقسمت بأسلافي أن أرميك بتهمة الغدر والسرقة في ديوان قضاة بغداد!"',
      },
    ],
    choices: [
      {
        id: 'c_choice_wisdom',
        textEn: 'Protect the scrolls of water engineering and medicine, taking only a modest pouch of gold coins.',
        textAr: 'حماية أسطوانات المعرفة وهندسة المياه والطب، والاكتفاء بحفنة متواضعة من الذهب تكفي للحاجة.',
        nextSceneId: 'eval_ending',
        recordChoiceKey: 'decision2',
        recordChoiceValue: 'wisdom',
      },
      {
        id: 'c_choice_gold',
        textEn: 'Heed Qasim’s demand: abandon the bulky scrolls to load the packs with all the heavy gold bullion.',
        textAr: 'الاستجابة لطلب قاسم: ترك المخطوطات في القبو وشحن الرواحل بكامل سبائك الذهب الثقيلة.',
        nextSceneId: 'eval_ending',
        recordChoiceKey: 'decision2',
        recordChoiceValue: 'gold',
      },
    ],
  },

  // Ending 1: The Scholar's Legacy (True Moral Victory)
  ending_legacy: {
    id: 'ending_legacy',
    chapterNumber: 5,
    chapterTitleEn: 'Final Chapter: The Water of Life',
    chapterTitleAr: 'الفصل الختامي: ماء الحياة',
    locationEn: 'Bayt al-Hikma (House of Wisdom), Baghdad • One Month Later',
    locationAr: 'دار الحكمة، بغداد • بعد شهر من الرحلة',
    illustrationKey: 'ending_legacy',
    isEnding: true,
    endingType: 'legacy',
    endingTitleEn: 'Ending I: The Scholar’s Eternal Legacy',
    endingTitleAr: 'النهاية الأولى: إرث الحكمة الخالد',
    moralLessonEn: 'True wealth is not measured in minted coin, but in knowledge that preserves human life and dignity.',
    moralLessonAr: 'ليست الثروة الحقيقية بما تكدسه من سبائك الذهب، بل في علم يُحيي النفوس وينفع الناس ويبقى أثره عبر الأجيال.',
    paragraphs: [
      {
        id: 'el1',
        speaker: 'narrator',
        en: 'Yusuf stood firm against Qasim\'s furious screams. Carefully wrapping the bronze cylinders in oiled cloth, he strapped them to his chest and took only a single modest purse of gold coins to pay for supplies and medicine. Together with Harith, they navigated the blinding wall of sand.',
        ar: 'ثبت يوسف كالطود أمام صرخات قاسم الهستيرية. لف الأسطوانات البرونزية بعناية في قماش مدهون بالزيت، وشدها إلى صدره، مكتفياً بصرة متواضعة من الدنانير لتأمين الزاد ودواء والدته. وبرفقة حارث، تمكنوا من اجتياز جدار الرمال الخانق بأمان.',
      },
      {
        id: 'el2',
        speaker: 'narrator',
        en: 'The return was not an effortless fairy tale. Upon reaching Baghdad, Qasim was bitter and broke all ties, spreading rumors that Yusuf was a naive fool who gave up a king’s ransom for worthless scraps of leather. Yusuf returned to his humble mudbrick home with empty pockets and an uncertain future.',
        ar: 'لم تكن العودة نزهة وردية؛ فعند وصولهم إلى بغداد، انصرف قاسم ساخطاً وقطع كل صلة بهما، وأشاع في الأسواق أن يوسف غبي فرّط في ثروة الملوك من أجل رقاع بالية. عاد يوسف إلى بيت أمه الطيني البسيط بجيوب شبه خاوية ومستقبل تكتنفه الحيرة.',
      },
      {
        id: 'el3',
        speaker: 'yusuf',
        speakerName: { en: 'Yusuf', ar: 'يوسف' },
        en: 'Yet Yusuf carried the bronze tubes directly to the grand portico of Bayt al-Hikma (The House of Wisdom). The master scholars were astounded. The surveying scrolls revealed forgotten underground aquifers spanning three drought-ravaged provinces between the Tigris and the desert rim.',
        ar: 'لكن يوسف سار بتلك الأسطوانات مباشرة إلى بهو بيت الحكمة العظيم. ذهل كبار العلماء والمهندسين؛ فقد كانت المخطوطات تحوي خرائط دقيقة لشبكة مياه جوفية ممتدة تسقي ثلاث ولايات حاصرتها سنين الجفاف بين ضفاف دجلة وبادية الشام.',
      },
      {
        id: 'el4',
        speaker: 'narrator',
        en: 'Within months, royal engineers cleared the ancient stone wells based on Yusuf\'s maps. Fresh, crystalline water surged into parched desert villages, saving thousands of families and turning dry fields into blooming palm groves. Yusuf was appointed as a junior surveyor at the royal academy, earning an honorable stipend that supported his mother in comfort.',
        ar: 'وخلال أشهر قليلة، قام مهندسو الخلافة بإعادة فتح تلك الآبار التاريخية استناداً إلى خرائط يوسف. تفجر الماء العذب الزلال في قرى البادية، فأحيا آلاف العائلات وأحال الحقول اليابسة إلى واحات نخيل خضراء. وعُين يوسف مساحاً ببيت الحكمة براتب كريم كفل لأمه حياة هانئة ورعاية تامة.',
      },
      {
        id: 'el5',
        speaker: 'harith',
        speakerName: { en: 'Harith', ar: 'حارث' },
        en: 'Beside the peaceful Tigris, Harith patted Yusuf on the shoulder with a warm smile. "You chose life over glitter, my brother. Gold disappears with the wind, but the wells you uncovered will quench thirsty travelers for another hundred years."',
        ar: 'وعلى ضفاف دجلة الهادئة، ابتسم حارث وربت على كتف يوسف باعتزاز: "لقد آثرت الحياة على بريق زائل يا أخي. إن الذهب تذروه الرياح، أما ينابيع الماء التي بعثتها فستسقي الظمأى لمئة عام قادمة."',
      },
    ],
    choices: [
      {
        id: 'c_restart_1',
        textEn: 'Begin a new journey to explore different choices.',
        textAr: 'بدء رحلة جديدة لاكتشاف خيارات ومصائر أخرى.',
        nextSceneId: 'intro_baghdad',
      },
    ],
  },

  // Ending 2: The Golden Ruin (Pure Greed)
  ending_ruin: {
    id: 'ending_ruin',
    chapterNumber: 5,
    chapterTitleEn: 'Final Chapter: The Heavy Burden',
    chapterTitleAr: 'الفصل الختامي: الوزر الثقيل',
    locationEn: 'The Wasteland of Sand • The Day After',
    locationAr: 'فيافي التيه الصحراوية • اليوم التالي',
    illustrationKey: 'ending_ruin',
    isEnding: true,
    endingType: 'ruin',
    endingTitleEn: 'Ending II: The Golden Calamity',
    endingTitleAr: 'النهاية الثانية: هلاك الذهب والغرور',
    moralLessonEn: 'When greed blinds the heart to compassion and wisdom, even the greatest fortune turns into dust.',
    moralLessonAr: 'حين يعمي الطمع بصيرة الإنسان عن الرحمة والحكمة، يتحول أعظم الكنوز إلى رماد يثقل كاهل صاحبه بالندم.',
    paragraphs: [
      {
        id: 'er1',
        speaker: 'narrator',
        en: 'Blind to all warnings, Yusuf cast the ancient parchment cylinders onto the cold vault floor and loaded every available pack with heavy sacks of gold dinars and silver plates. Outside, the black dust storm shrieked like a pack of enraged beasts.',
        ar: 'وبدافع من بريق الطمع، ألقى يوسف أسطوانات المخطوطات القديمة على أرضية القبو الباردة، وراح يحشو كل جراب متاح بأكياس الدنانير الذهبية والصفائح الفضية. وفي الخارج، كانت العاصفة الرملية السوداء تعوي كوحش هائج يبتلع الأفق.',
      },
      {
        id: 'er2',
        speaker: 'narrator',
        en: 'Disaster struck within two hours of leaving the fortress. The exhausted, dehydrated camels, strained under the crushing dead-weight of the metal, collapsed one by one in the blinding whiteout of wind and stinging sand. In blind panic, Qasim refused to unstrap his treasure sacks and wandered into the dunes.',
        ar: 'حلت الكارثة بعد ساعتين فقط من مغادرة الحصن. انهارت الإبل المنهكة والظمأى تحت وطأة وزن السبائك الثقيل، وسقطت واحدة تلو الأخرى وسط عمى الغبار العاتي. وفي نوبة ذعر وهوس، رفض قاسم التخلي عن أكياسه وتاه متشبثاً بذهبه في عمق الكثبان المائجة.',
      },
      {
        id: 'er3',
        speaker: 'narrator',
        en: 'Yusuf crawled for his life behind the carcass of a camel, suffocating in dust, his mouth full of bitter grit. When the storm finally died at sunrise, the landscape was unrecognizable. Qasim was gone, swallowed by the shifting desert sea along with the vast majority of the gold.',
        ar: 'زحف يوسف طلباً للنجاة متوارياً خلف جيفة ناقة نافقة، تكاد أنفاسه تنقطع من الغبار وفمه يمتلئ بالرمل المر. وحين سكنت العاصفة مع بزوغ الفجر، كانت معالم الأرض قد طمست تماماً. اختفى قاسم وابتلعته أمواج الصحراء المتحركة مع معظم صناديق الذهب.',
      },
      {
        id: 'er4',
        speaker: 'harith',
        speakerName: { en: 'Harith', ar: 'حارث' },
        en: 'Harith found Yusuf hours later, clutching three loose gold coins in his trembling fingers. The old guide shook his head in silent sorrow: "Look at your hands, Yusuf. All that gold could not buy a single cup of water when the sky turned black. We came seeking treasure, but you left your soul in the ruins."',
        ar: 'عثر حارث على يوسف بعد ساعات، وهو يقبض على ثلاثة دنانير في أصابعه المرتجفة. هز الدليل الحكيم رأسه بأسى عميق: "انظر إلى يديك يا يوسف.. كل ذلك الذهب لم يستطع شراء جرعة ماء واحدة حين اسودت السماء. خرجنا نبتغي كنزاً، لكنك تركت إنسانيتك وضميرك في تلك الأطلال."',
      },
      {
        id: 'er5',
        speaker: 'yusuf',
        speakerName: { en: 'Yusuf', ar: 'يوسف' },
        en: 'Yusuf returned to Baghdad on foot, impoverished in pocket and shattered in spirit. He spent the rest of his days haunted by the memory of the abandoned scrolls, knowing that he had traded eternal wisdom and his friend\'s trust for coins that the desert had devoured in an instant.',
        ar: 'عاد يوسف إلى بغداد راجلاً، خاوي الوفاض وكسير الفؤاد. عاش بقية أيامه تلاحقه صورة تلك المخطوطات التي تركها للضياع، مدركاً بعد فوات الأوان أنه استبدل الحكمة والوفاء بحفنة دنانير ابتلعتها رمال البادية في غمضة عين.',
      },
    ],
    choices: [
      {
        id: 'c_restart_2',
        textEn: 'Begin a new journey to make different choices.',
        textAr: 'بدء رحلة جديدة لاتخاذ قرارات أخرى وتغيير المصير.',
        nextSceneId: 'intro_baghdad',
      },
    ],
  },

  // Ending 3: The Merchant's Compromise (Middle / Bittersweet)
  ending_compromise: {
    id: 'ending_compromise',
    chapterNumber: 5,
    chapterTitleEn: 'Final Chapter: The Divided Heart',
    chapterTitleAr: 'الفصل الختامي: القلب المنقسم',
    locationEn: 'The Caravanserai of Al-Hilla • Two Weeks Later',
    locationAr: 'خان الحلة التجاري • بعد أسبوعين',
    illustrationKey: 'ending_compromise',
    isEnding: true,
    endingType: 'compromise',
    endingTitleEn: 'Ending III: The Merchant’s Compromise',
    endingTitleAr: 'النهاية الثالثة: مساومة التاجر والندم الخفي',
    moralLessonEn: 'Compromising between greed and virtue brings earthly safety, but the spirit forever mourns what was left behind.',
    moralLessonAr: 'المساومة بين الطمع والفضيلة قد تجلب السلامة الدنيوية، لكن الروح تظل تحن وتندم على ما فرطت فيه من معانٍ سامية.',
    paragraphs: [
      {
        id: 'ec1',
        speaker: 'narrator',
        en: 'Unable to choose between wealth and wisdom, Yusuf negotiated a tense truce in the subterranean vault: they packed two bags of gold and took only one bronze cylinder containing a partial astronomical chart, leaving the critical hydrological maps behind in the dust.',
        ar: 'عجز يوسف عن حسم أمره بين بريق الذهب ونداء الحكمة، فعقد تسوية قلقة في قبو الحصن: ملأوا جرابين بالذهب وحملوا أسطوانة برونزية واحدة تحوي خارطة فلكية جزئية، تاركين خرائط المياه الجوفية الأساسية ملقاة في غبار القبو.',
      },
      {
        id: 'ec2',
        speaker: 'narrator',
        en: 'The lighter load allowed them to outpace the worst edges of the dust storm. They reached the trading outpost of Al-Hilla battered and sun-scorched, but alive and carrying enough wealth to change their circumstances.',
        ar: 'مكّنتهم الحمولة المعتدلة من النجاة عبر أطراف العاصفة الرملية. وصلوا إلى محطة الحلة التجارية منهكين ولوحت وجوههم شمس القفار، لكنهم أحياء وبحوزتهم ما يكفي من المال لتغيير مسار حياتهم.',
      },
      {
        id: 'ec3',
        speaker: 'qasim',
        speakerName: { en: 'Qasim', ar: 'قاسم' },
        en: 'Qasim was pleased with the returns. In Baghdad, he opened a lucrative spice warehouse and offered Yusuf a permanent partnership. "You have good instincts, young man," Qasim chuckled over sweet mint tea. "A little gold for the pocket, a little paper for the conscience. That is how the world turns."',
        ar: 'كان قاسم راضياً عن الربح؛ ففي بغداد افتتح مستودعاً رابحاً للتوابل وعرض على يوسف شراكة دائمة: "تملك فطنة التجار يا فتى!" قال قاسم وهو يرتشف شاي النعناع: "قليل من الذهب للجيب، وقليل من الورق لراحة الضمير.. هكذا تدار الدنيا."',
      },
      {
        id: 'ec4',
        speaker: 'yusuf',
        speakerName: { en: 'Yusuf', ar: 'يوسف' },
        en: 'Yusuf’s mother received comfort and good medicine, and his household wanted for nothing. Yet whenever travelers arrived from the desert bearing news of drought-stricken villages and dried wells, a sharp pang pierced Yusuf’s heart. He often climbed to his rooftop at night, staring at the western desert.',
        ar: 'نالت والدة يوسف الرعاية والدواء الشافي، واستقرت أحوال أسرته المادية. لكن كلما قدمت قوافل البادية بأنباء الجفاف في القرى وعطش الأطفال حول الآبار الغائرة، اعتصر قلب يوسف وخز ندم حاد. كان يصعد إلى سطح منزله ليلاً يرمق أفق الصحراء الغربية.',
      },
      {
        id: 'ec5',
        speaker: 'harith',
        speakerName: { en: 'Harith', ar: 'حارث' },
        en: 'Harith parted ways politely, returning to the desert routes. Before departing, he whispered gently: "You survived, Yusuf, and you fed your family. That is not a small thing. But deep in your chest, you know that the greatest treasure of Qasr al-Zill still lies buried in the sand, waiting for a braver soul."',
        ar: 'ودعهم حارث بأدب وعاد إلى دروب البادية، وقبل أن يغادر همس ليوسف بلطف: "لقد نجوت يا بني وأمنت رغد العيش لأهلك، وهذا ليس بالشيء الهين.. ولكن في قرارة صدرك، تعلم يقيناً أن الكنز الأعظم لقصر الظل ما زال مدفوناً في الرمال، ينتظر نفساً أكثر شجاعة وتجرداً."',
      },
    ],
    choices: [
      {
        id: 'c_restart_3',
        textEn: 'Begin a new journey to seek the true treasure.',
        textAr: 'بدء رحلة جديدة للبحث عن الكنز الحقيقي.',
        nextSceneId: 'intro_baghdad',
      },
    ],
  },
};

export interface CharacterProfile {
  id: string;
  nameEn: string;
  nameAr: string;
  roleEn: string;
  roleAr: string;
  traitsEn: string;
  traitsAr: string;
  quoteEn: string;
  quoteAr: string;
  bioEn: string;
  bioAr: string;
}

export const CHARACTERS: CharacterProfile[] = [
  {
    id: 'yusuf',
    nameEn: 'Yusuf ibn Tariq',
    nameAr: 'يوسف بن طارق',
    roleEn: 'Young Scholar & Seeker',
    roleAr: 'شاب باحث وطامح',
    traitsEn: 'Honest, quick-witted, dutiful, torn between ambition and moral conscience.',
    traitsAr: 'صادق، نبيه، بار بوالدته، تتنازعه الرغبة في تحسين واقعه مع وخز الضمير.',
    quoteEn: '"Knowledge is like fresh water; once shared, it never runs dry."',
    quoteAr: '"العلم كالماء الزلال؛ كلما أُفيض منه على الناس نما وزاد."',
    bioEn: 'A young literate man living in the booksellers’ district of Baghdad. With his ailing mother to support, he searches for the lost caravanserai of Qasr al-Zill, hoping to turn his destiny around.',
    bioAr: 'شاب متعلم من أهل بغداد نشأ في سوق الوراقين. يسعى للعثور على حصن قصر الظل أملاً في علاج والدته وتأمين مستقبل كريم لأسرته دون أن يخسر مروءته.',
  },
  {
    id: 'harith',
    nameEn: 'Harith al-Badawi',
    nameAr: 'حارث البدوي',
    roleEn: 'Veteran Caravan Guide',
    roleAr: 'دليل القوافل الخبير',
    traitsEn: 'Patient, loyal, observant, values honor and human lives above any material wealth.',
    traitsAr: 'صبور، وفيّ، حكيم البصيرة، يضع حفظ النفس والعهد فوق كنوز الأرض قاطبة.',
    quoteEn: '"The desert does not test your muscles; it tests the purity of your heart."',
    quoteAr: '"الصحراء لا تمتحن قوة عضلاتك، بل تمتحن نقاء قلبك وصدق سريرتك."',
    bioEn: 'A seasoned desert guide who has crossed the Syrian-Arabian sands for over forty years. He knows the stars by heart and understands that in the sands, water and trust are the only true currency.',
    bioAr: 'دليل قوافل مخضرم خَبَر دروب البادية لأكثر من أربعين عاماً. يحفظ النجوم عن ظهر قلب ويعلم أن قطرة الماء وصدق العهد هما الثروة الباقية في الفيافي.',
  },
  {
    id: 'qasim',
    nameEn: 'Qasim al-Taqafi',
    nameAr: 'قاسم الثقفي',
    roleEn: 'Wealthy Baghdad Merchant',
    roleAr: 'تاجر بغدادي ثري',
    traitsEn: 'Pragmatic, ambitious, impatient, driven by profit yet anxious about risk.',
    traitsAr: 'عملي، طموح، قليل الصبر، يزن الأمور بميزان الربح والخسارة ويخشى ضياع ماله.',
    quoteEn: '"Ink dries and words blow away, but pure gold commands empires."',
    quoteAr: '"الحبر يجف والكلمات تذروها الرياح، أما الذهب الخالص فتخضع له الممالك."',
    bioEn: 'A prosperous merchant from Baghdad’s Karkh bazaar who financed the expedition’s camels, tents, and provisions. He believes every problem in life can be resolved with cold dinars.',
    bioAr: 'تاجر ميسور من سوق الكرخ ببغداد موّل تجهيز القافلة بالجمال والمؤن. يؤمن بأن المال عصب الحياة وأن الغاية تبرر الوسيلة للوصول إلى الثراء.',
  },
];

export interface GlossaryItem {
  termEn: string;
  termAr: string;
  meaningEn: string;
  meaningAr: string;
}

export const HISTORICAL_GLOSSARY: GlossaryItem[] = [
  {
    termEn: 'Bayt al-Hikma (House of Wisdom)',
    termAr: 'بيت الحكمة',
    meaningEn: 'The celebrated grand academy and library founded in Abbasid Baghdad, where scholars translated, preserved, and advanced sciences, astronomy, and mathematics.',
    meaningAr: 'أعظم مجمع علمي ومكتبة عالمية تأسست في بغداد العباسية، اجتمع فيها العلماء لترجمة وتطوير علوم الفلك والطب والرياضيات والهندسة.',
  },
  {
    termEn: 'Caravanserai (Khan)',
    termAr: 'الخان / محطة القوافل',
    meaningEn: 'A roadside inn and fortified station along desert trade routes where caravans rested, replenished water, and secured their animals.',
    meaningAr: 'حصن ومحطة استراحة على طرق التجارة الصحراوية، تأوي إليها القوافل للتزود بالماء والراحة وحماية البضائع من غوائل الطريق.',
  },
  {
    termEn: 'Astrolabe',
    termAr: 'الأسطرلاب',
    meaningEn: 'An intricate brass scientific instrument perfected by Islamic astronomers to tell time, calculate latitude, and navigate across vast deserts by the stars.',
    meaningAr: 'آلة فلكية نحاسية دقيقة أبدعها علماء الحضارة الإسلامية لتحديد الوقت وقياس مواقع النجوم والملاحة عبر الصحاري والبحار.',
  },
  {
    termEn: 'Qanat (Aflaj)',
    termAr: 'القناة / الأفلاج',
    meaningEn: 'An ingenious underground channel and aqueduct system designed to transport fresh water from deep aquifers to arid surface fields without evaporative loss.',
    meaningAr: 'نظام هندسي عبقري لقنوات مياه جوفية تنحدر ببطء لنقل الماء العذب لمسافات طويلة دون أن يتبخر تحت لهيب الشمس.',
  },
  {
    termEn: 'Dinar & Dirham',
    termAr: 'الدينار والدرهم',
    meaningEn: 'The primary currency of the Abbasid Caliphate: gold Dinars and silver Dirhams, recognized across global trade routes from Spain to China.',
    meaningAr: 'العملة الرسمية السائدة في الدولة العباسية: الدينار من الذهب الخالص والدرهم من الفضة، وكانا معتمدين في التجارة الدولية.',
  },
  {
    termEn: 'Haboob',
    termAr: 'الهبوب / العاصفة الرملية',
    meaningEn: 'A sudden, massive wall of blinding desert dust and violent wind that can obscure daylight within minutes and alter entire dune landscapes.',
    meaningAr: 'جدار هائل وكثيف من الغبار والرياح العاتية يهب فجأة في الصحراء فيحجب ضوء الشمس ويغير تضاريس الكثبان في لحظات.',
  },
];
