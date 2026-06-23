/* ============================================================
   داده‌های آثار تاریخی ایران
   ————————————————————————————
   برای افزودن اثر جدید: یک شیء به آرایه اضافه کنید.
   فیلدها: name, teaser, image, alt, desc
   ============================================================ */

const SITES = [
  {
    name:   'تخت جمشید',
    teaser: 'پایتخت تشریفاتی امپراتوری هخامنشی',
    image:  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/General_view_of_the_ruins_of_Persepolis.jpg/1280px-General_view_of_the_ruins_of_Persepolis.jpg',
    alt:    'نمای کلی ویرانه‌های تخت جمشید، پایتخت امپراتوری هخامنشی',
    desc:   'تخت جمشید، پایتخت تشریفاتی امپراتوری هخامنشی، در سال ۵۱۸ پیش از میلاد به دستور داریوش بزرگ بنا نهاده شد. این شهر باستانی با ستون‌های سر به فلک کشیده، دروازه‌ی ملل، و نقوش برجسته‌ی شگفت‌انگیز خود، نماد اوج شکوه و تمدن ایران زمین است. در سال ۳۳۰ پیش از میلاد توسط اسکندر مقدونی به آتش کشیده شد، اما ویرانه‌های آن همچنان روایتگر عظمت یک امپراتوری جهانی است. تخت جمشید در سال ۱۹۷۹ در فهرست میراث جهانی یونسکو ثبت شد.',
  },
  {
    name:   'میدان نقش جهان',
    teaser: 'شاهکار شهرسازی عصر صفوی در دل اصفهان',
    image:  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Naqsh-i_Jahan_Square%2C_Jan._2018.jpg/1280px-Naqsh-i_Jahan_Square%2C_Jan._2018.jpg',
    alt:    'نمای هوایی میدان نقش جهان اصفهان با مسجد امام و کاخ عالی‌قاپو',
    desc:   'میدان نقش جهان در اصفهان، یکی از بزرگ‌ترین میدان‌های شهری جهان است که در دوران صفوی به دستور شاه عباس اول احداث شد. این میدان با مساحت ۸۹٬۶۰۰ متر مربع، در برگیرنده‌ی مسجد شیخ لطف‌الله، مسجد جامع عباسی (مسجد امام)، کاخ عالی‌قاپو و سردر بازار قیصریه است. کاشی‌کاری‌های لاجوردی و نقوش ظریف اطراف میدان، اوج هنر معماری ایرانی را به نمایش می‌گذارند. این اثر در سال ۱۹۷۹ در فهرست میراث جهانی یونسکو ثبت شد.',
  },
  {
    name:   'پاسارگاد',
    teaser: 'آرامگاه کوروش بزرگ، بنیانگذار امپراتوری پارس',
    image:  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pasargad_Tomb_Cyrus3.jpg/1280px-Pasargad_Tomb_Cyrus3.jpg',
    alt:    'آرامگاه کوروش بزرگ در پاسارگاد در غروب آفتاب',
    desc:   'پاسارگاد، اولین پایتخت امپراتوری هخامنشی، به دستور کوروش بزرگ در قرن ششم پیش از میلاد بنا شد. آرامگاه کوروش با معماری ساده و باشکوه خود، از یک سکوی مدرج شش‌لایه و یک اتاق سنگی تشکیل شده که روایتگر سادگی شکوهمند اندیشه‌ی پارسی است. این بنا قرن‌ها مورد احترام ایرانیان بوده و اسکندر مقدونی نیز پس از فتح ایران دستور به نگهداری آن داد. پاسارگاد در سال ۲۰۰۴ در فهرست میراث جهانی یونسکو ثبت شد.',
  },
  {
    name:   'نقش رستم',
    teaser: 'آرامگاه‌های صخره‌ای پادشاهان هخامنشی',
    image:  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Naqsh-e_Rustam_necropolis_in_Iran.jpg/1280px-Naqsh-e_Rustam_necropolis_in_Iran.jpg',
    alt:    'نقش رستم، آرامگاه‌های صخره‌ای پادشاهان هخامنشی در نزدیکی شیراز',
    desc:   'نقش رستم، مجموعه‌ای عظیم از آرامگاه‌های صخره‌ای پادشاهان هخامنشی است که در نزدیکی تخت جمشید واقع شده. چهار آرامگاه داریوش اول، خشایارشا، اردشیر اول و داریوش دوم در دل صخره‌های سنگی به شکل صلیب تراشیده شده‌اند. در پایین همان صخره‌ها، هفت نقش برجسته‌ی ساسانی صحنه‌های پیروزی و تاج‌گذاری شاهان را به تصویر می‌کشند. این مکان نام خود را از اشتباه مردم بومی در تشخیص نقوش به‌عنوان رستم، پهلوان شاهنامه، گرفته است.',
  },
  {
    name:   'چغازنبیل',
    teaser: 'کهن‌ترین زیگورات ایران، یادگار تمدن عیلام',
    image:  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/%D8%B2%DB%8C%DA%AF%D9%88%D8%B1%D8%A7%D8%AA_%DA%86%D8%BA%D8%A7_%D8%B2%D9%86%D8%A8%DB%8C%D9%84.jpg/1280px-%D8%B2%DB%8C%DA%AF%D9%88%D8%B1%D8%A7%D8%AA_%DA%86%D8%BA%D8%A7_%D8%B2%D9%86%D8%A8%DB%8C%D9%84.jpg',
    alt:    'زیگورات چغازنبیل، معبد باستانی عیلام در خوزستان',
    desc:   'چغازنبیل، معبد باستانی تمدن عیلام، در حدود سال ۱۲۵۰ پیش از میلاد توسط اونتاش ناپیریشا، پادشاه عیلام، در نزدیکی شوش بنا شد. این زیگورات با ارتفاع اولیه‌ای نزدیک به ۵۲ متر، بزرگ‌ترین زیگورات خارج از بین‌النهرین و یکی از کهن‌ترین ساختمان‌های برجای‌مانده در ایران است. هزاران آجر آن هنوز نقش‌های میخی عیلامی را بر خود دارند. چغازنبیل در سال ۱۹۷۹ اولین اثر ایرانی بود که به فهرست میراث جهانی یونسکو پیوست.',
  },
  {
    name:   'سی‌وسه‌پل',
    teaser: 'شاهکار پل‌سازی صفوی بر بستر زاینده‌رود',
    image:  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/33_pol_esfahan.jpg/1280px-33_pol_esfahan.jpg',
    alt:    'پل سی‌وسه‌پل با ۳۳ طاق بر روی رودخانه زاینده‌رود اصفهان',
    desc:   'سی‌وسه‌پل یا پل الله‌وردی‌خان، زیباترین پل تاریخی ایران، در دوران شاه عباس اول صفوی بر روی رودخانه‌ی زاینده‌رود اصفهان ساخته شد. این پل با ۳۳ طاق و طول ۲۹۸ متر، هم راه تردد و هم سد تنظیم آب رودخانه را در خود جمع می‌کند. در طبقه‌ی همکف آن چایخانه‌های کوچکی وجود داشت که شاه عباس نیز از آن‌ها استفاده می‌کرد. ترکیب هنرمندانه‌ی آب، سنگ و آجر این پل را به نمادی ماندگار از روح شهر اصفهان بدل کرده است.',
  },
  {
    name:   'کاخ عالی‌قاپو',
    teaser: 'کاخ سلطنتی شاه عباس، مشرف به میدان نقش جهان',
    image:  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/%C4%80l%C4%AB_Q%C4%81p%C5%AB_in_golden_time.jpg/1280px-%C4%80l%C4%AB_Q%C4%81p%C5%AB_in_golden_time.jpg',
    alt:    'کاخ عالی‌قاپو در اصفهان در نور طلایی غروب',
    desc:   'کاخ عالی‌قاپو در کنار میدان نقش جهان اصفهان، در اوایل قرن هفدهم میلادی به دستور شاه عباس اول صفوی بنا شد و بعدها توسط شاه عباس دوم توسعه یافت. این کاخ شش‌طبقه با ایوان ستون‌دار چوبی‌اش، مکانی بود که شاه از آنجا مسابقات چوگان در میدان را تماشا می‌کرد. طبقه‌ی ششم که «اتاق موسیقی» نامیده می‌شود، با تزئینات گچ‌بری ظریف به شکل ظروف موسیقی آراسته است. این کاخ به‌عنوان بخشی از مجموعه‌ی میدان نقش جهان، در میراث جهانی یونسکو ثبت است.',
  },
  {
    name:   'ارگ بم',
    teaser: 'بزرگ‌ترین سازه‌ی خشت خام جهان در جنوب ایران',
    image:  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/010213-Kerman-IMG_0371-2.jpg/1280px-010213-Kerman-IMG_0371-2.jpg',
    alt:    'ارگ بم، شهر قلعه‌ای باستانی از خشت خام در کرمان',
    desc:   'ارگ بم، بزرگ‌ترین سازه‌ی خشت خام در جهان، با قدمتی بیش از دو هزار سال در استان کرمان واقع شده است. این شهر قلعه‌مانند در اوج شکوه خود در دوران ساسانی و اوایل اسلامی، منزلگاهی مهم بر راه جاده‌ی ابریشم بود و ده‌هزار نفر را در خود جای می‌داد. زلزله‌ی مخرب دی ماه ۱۳۸۲ که جان بیش از بیست و شش هزار نفر را گرفت، بخش بزرگی از ارگ را ویران کرد. بازسازی این اثر ارزشمند که در سال ۲۰۰۴ به ثبت جهانی رسید، با همکاری بین‌المللی ادامه دارد.',
  },
  {
    name:   'شوش',
    teaser: 'یکی از کهن‌ترین شهرهای جهان، پایتخت عیلام',
    image:  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Panorama_Shush.JPG/1280px-Panorama_Shush.JPG',
    alt:    'نمای پانوراما از شهر شوش (سوسای باستان) در استان خوزستان',
    desc:   'شوش یکی از کهن‌ترین شهرهای جهان است که قدمت آن به حدود ۴۲۰۰ سال پیش از میلاد می‌رسد. این شهر باستانی پایتخت امپراتوری عیلام و بعدها یکی از مقرهای زمستانی پادشاهان هخامنشی بود. آثار به‌دست‌آمده از این منطقه، از جمله کتیبه‌ی قانون‌نامه‌ی حمورابی و نقش‌برجسته‌های کاخ داریوش، اهمیت فرهنگی بی‌نظیری دارند. شوش در سال ۲۰۱۵ در فهرست میراث جهانی یونسکو ثبت شد.',
  },
  {
    name:   'بیستون',
    teaser: 'کتیبه‌ی سه‌زبانه‌ی داریوش، کلید رمزگشایی خط میخی',
    image:  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%DA%A9%D8%AA%DB%8C%D8%A8%D9%87_%D8%AF%D8%A7%D8%B1%DB%8C%D9%88%D8%B4_%28_%D8%A8%DB%8C%D8%B3%D8%AA%D9%88%D9%86%28.jpg/1280px-%DA%A9%D8%AA%DB%8C%D8%A8%D9%87_%D8%AF%D8%A7%D8%B1%DB%8C%D9%88%D8%B4_%28_%D8%A8%DB%8C%D8%B3%D8%AA%D9%88%D9%86%28.jpg',
    alt:    'کتیبه و نقش‌برجسته‌ی بیستون، داریوش اول در حال پیروزی بر دشمنان',
    desc:   'کتیبه و نقش‌برجسته‌ی بیستون، یکی از مهم‌ترین آثار باستانی جهان، توسط داریوش اول هخامنشی در قرن ششم پیش از میلاد بر دل کوه بیستون در کرمانشاه حک شد. این کتیبه به سه زبان پارسی باستان، عیلامی و بابلی نوشته شده و نقش کلیدی در رمزگشایی خط میخی توسط هنری راولینسون در قرن نوزدهم ایفا کرده است. نقش‌برجسته داریوش را در حال پیروزی بر نه شاه دشمن خود نشان می‌دهد. بیستون در سال ۲۰۰۶ در فهرست میراث جهانی یونسکو ثبت شد.',
  },
];

/* ============================================================
   Render gallery cards
   ============================================================ */

function renderCards() {
  const grid = document.getElementById('gallery-grid');

  SITES.forEach((site, index) => {
    const article = document.createElement('article');
    article.className = 'card';
    article.setAttribute('role', 'listitem');
    article.setAttribute('tabindex', '0');
    article.setAttribute('aria-label', site.name + ' — ' + site.teaser);

    article.innerHTML = `
      <div class="card-image-wrap">
        <img src="${site.image}" alt="${site.alt}" loading="lazy" decoding="async">
      </div>
      <div class="card-body">
        <p class="card-name">${site.name}</p>
        <p class="card-teaser">${site.teaser}</p>
      </div>
    `;

    article.addEventListener('click', () => openModal(index));

    article.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(index);
      }
    });

    grid.appendChild(article);
  });
}

/* ============================================================
   Modal / Lightbox
   ============================================================ */

const modal        = document.getElementById('modal');
const modalImg     = document.getElementById('modal-image');
const modalTitle   = document.getElementById('modal-title');
const modalDesc    = document.getElementById('modal-description');
const modalClose   = document.getElementById('modal-close');

let lastFocused = null;

function openModal(index) {
  const site = SITES[index];

  // Capture focus origin so we can restore it on close
  lastFocused = document.activeElement;

  modalImg.src             = site.image;
  modalImg.alt             = site.alt;
  modalTitle.textContent   = site.name;
  modalDesc.textContent    = site.desc;

  modal.removeAttribute('aria-hidden');
  modal.classList.add('active');
  document.body.classList.add('modal-open');

  // Move keyboard focus to the close button
  requestAnimationFrame(() => modalClose.focus());
}

function closeModal() {
  modal.setAttribute('aria-hidden', 'true');
  modal.classList.remove('active');
  document.body.classList.remove('modal-open');

  // Clear the image after the CSS transition ends (avoids stale image flash on reopen)
  setTimeout(() => { if (!modal.classList.contains('active')) modalImg.src = ''; }, 350);

  // Restore focus to the card that was clicked
  if (lastFocused) lastFocused.focus();
}

/* Close on button */
modalClose.addEventListener('click', closeModal);

/* Close on backdrop click (but not on the modal content itself) */
modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

/* Close on Escape key */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
});

/* ============================================================
   Boot
   ============================================================ */
document.addEventListener('DOMContentLoaded', renderCards);
