// Client stories: one page each at /success-stories/:slug.
//
// Every figure and quote below comes from the client's own video testimonial
// (transcribed, lightly edited for readability: interviewer prompts and filler
// removed). Do not add numbers that the client did not say on camera.

const VIDEO_BASE = 'https://storage.googleapis.com/crown_money/Video%20Testimonials/';

export interface StoryHighlight {
  label: string;
  value: string;
}

export interface Story {
  slug: string;
  /** Client names as shown on the site (first names only). */
  name: string;
  /** Page H1. */
  headline: string;
  /** <title>, max 60 characters including " | Crown Money". */
  seoTitle: string;
  /** Meta description, max 155 characters. */
  description: string;
  /** One-line card summary for the hub page. */
  summary: string;
  highlights: StoryHighlight[];
  /** Short factual intro, written in third person. */
  intro: string;
  /** The client's words, one paragraph per item. */
  quotes: string[];
  video: string;
}

export const STORIES_PUBLISHED = '2026-11-03';

export const STORIES: Story[] = [
  {
    slug: '320000-to-100000-in-four-years',
    name: 'Crown Money clients',
    headline: '$320,000 to $100,000 in Four Years',
    seoTitle: '$320k to $100k Mortgage in 4 Years | Crown Money',
    description:
      'How one couple took their mortgage from $320,000 to about $100,000 in four years, with two years left to go, by directing all their money into the loan.',
    summary: 'From $320,000 to about $100,000 in four years, with an investment property next.',
    highlights: [
      { label: 'Starting mortgage', value: '$320,000' },
      { label: 'After four years', value: '~$100,000' },
      { label: 'Time left on main loan', value: '~2 years' },
    ],
    intro:
      'This couple started the Crown Money programme with $320,000 owing on their home. Four years later the balance was about $100,000, and they expect to clear the main mortgage in around two more years before buying an investment property.',
    quotes: [
      "It's been fantastic. We were never going to pay a mortgage off without it. Since we started, we've gone from $320,000 to basically $100,000 in four years, and things are looking a hell of a lot sweeter than they were four years ago.",
      "All our money is directed into our mortgage, and that's now a focus for us. We know where our money is going. Each month we get that statement, and it's the only piece of mail I look forward to. When it comes through, it's like, yes! A sticker and a woohoo, you've done that. That little bit of feedback is positive.",
      "We won't take a cent more than we need to, because we know where our money is going. We've got two years on the main mortgage, maybe a little bit less, and after that there's an investment property we'll be purchasing.",
    ],
    video: `${VIDEO_BASE}320%2C000_in_4_years_(k)_v1%20(720p).mp4`,
  },
  {
    slug: 'chris-8000-a-month-off-the-loan',
    name: 'Chris',
    headline: 'Chris: $8,000 a Month Off the Loan, and Two Investment Properties',
    seoTitle: 'Chris: $8,000 a Month Off His Home Loan | Crown Money',
    description:
      'After eight years with ME Bank, Chris and his family now pay off around $8,000 a month, still travel overseas and have bought two investment properties.',
    summary: 'Around $8,000 a month off the loan, overseas holidays, and two investment properties.',
    highlights: [
      { label: 'Average paid off', value: '~$8,000 / month' },
      { label: 'Previous lender', value: 'ME Bank (8 years)' },
      { label: 'Investment properties since', value: '2' },
    ],
    intro:
      'Chris and his family had their home loan with ME Bank for about eight years before moving to Crown Money. They now pay off around $8,000 a month while still eating out and travelling, and have bought two investment properties.',
    quotes: [
      "We were with ME Bank for about eight years, but we just knew we could find another way and possibly do even better. It was so out of the box, but in the end we figured: he's showing us the numbers, and it makes sense.",
      "It really has stunned us. We've been paying off on average about $8,000 a month off our loan, and we're not being overly frugal. We're still spending money and going to restaurants, and in the last few years we've had some overseas holidays as well. Yet we've been able to do all of that and still achieve everything that we have.",
      'About two years ago we bought our first investment property, and two days ago we signed the contract for our second.',
      "When our loans were with the bank, no one rang us or emailed to ask how we were going. With Crown, and particularly with Craig, the service just keeps on going. If there's something we're not sure about, Craig or someone else at Crown is there to answer it. They don't just sign you up and leave you.",
      "My advice is to give this a go and think outside the box. It's really worked for us, and it hasn't been that hard to do.",
    ],
    video: `${VIDEO_BASE}chris_battistuzzi_(k)_v1%20(720p).mp4`,
  },
  {
    slug: '360000-to-95000-in-three-years',
    name: 'Crown Money client',
    headline: '$360,000 to $95,000 in Three Years',
    seoTitle: '$360k to $95k Mortgage in 3 Years | Crown Money',
    description:
      'This client went from owing $360,000 to $95,000 in three years, with interest down to about $450 a month and a goal of being debt-free in two more years.',
    summary: 'From $360,000 to $95,000 in three years, paying around $8,000 a month off principal.',
    highlights: [
      { label: 'Starting balance', value: '$360,000' },
      { label: 'After three years', value: '$95,000' },
      { label: 'Monthly interest now', value: '~$450' },
    ],
    intro:
      'When this client joined the programme they owed $360,000. Three years later they owed $95,000, including a small inheritance put against the loan, and were aiming to be debt-free within two years and then retire.',
    quotes: [
      "When I first started the program I owed $360,000. Now I owe $95,000. We haven't done anything differently as far as the money we were normally putting aside for our mortgage, but having my bills paid automatically, I don't worry about money anymore.",
      'We had a small inheritance and took that off the mortgage as well. The interest has gone right down to about $450 a month.',
      "From the first month, I saw it take off more than we'd taken off in the 12 months prior. My last statement said about $8,000 off the principal in one month.",
      "If you're at the start of it, take the leap. I was really nervous because I've always worried about money, and I took a leap of faith. Our goal is to be debt-free in two years, and then retirement.",
    ],
    video: `${VIDEO_BASE}copy_of_7_(k)_v1%20(720p).mp4`,
  },
  {
    slug: 'marcus-and-taryn-80000-in-12-months',
    name: 'Marcus & Taryn',
    headline: 'Marcus & Taryn: $80,000 Off the Home Loan in 12 Months',
    seoTitle: 'Marcus & Taryn: $80k Off Their Home Loan | Crown Money',
    description:
      'Marcus and Taryn paid $80,000 off their home loan in 12 months, up from just under $10,000 the year before, without changing much about their lifestyle.',
    summary: '$80,000 off in 12 months, up from just under $10,000 the year before.',
    highlights: [
      { label: 'Paid off in 12 months', value: '$80,000' },
      { label: 'Previous year', value: 'Under $10,000' },
      { label: 'Lifestyle change', value: 'Minimal' },
    ],
    intro:
      'Marcus and Taryn came to Crown Money looking for direction on their spending and their future. In their first 12 months they paid $80,000 off their home loan, compared with just under $10,000 the year before.',
    quotes: [
      'We wanted a bit of guidance as to where we were going to go in the future. We needed direction, and we needed to know where we could cut costs and how we could improve our spending.',
      "In the last 12 months we paid $80,000 off our home loan. Previously we would have paid off just under $10,000. We haven't had to change much in our lifestyle at all. There was no way we'd have expected to pay that much off in 12 months.",
      "It definitely takes a bit of pressure off. It's a lot more comforting knowing how much you're taking off. Absolutely give it a go: nothing to lose, everything to gain. From our results, we can see the program absolutely works.",
    ],
    video: `${VIDEO_BASE}marcus_%26_taryn_burdett_(k)_v1%20(720p).mp4`,
  },
  {
    slug: '294000-paid-off-in-four-years',
    name: 'Crown Money clients',
    headline: '$294,000 Paid Off in Four Years',
    seoTitle: '$294,000 Mortgage Paid Off in 4 Years | Crown Money',
    description:
      'This couple paid $294,000 off their home loan in four years and became mortgage-free, then started planning trips and how to use their long service leave.',
    summary: '$294,000 paid off in four years: mortgage-free and planning trips.',
    highlights: [
      { label: 'Paid off', value: '$294,000' },
      { label: 'Time taken', value: '4 years' },
      { label: 'Result', value: 'Mortgage-free' },
    ],
    intro:
      "In this video, a couple shares the moment they confirmed they'd paid $294,000 off their home loan in four years. Their coach talks them through what comes next, from booking trips to taking long service leave tax-efficiently.",
    quotes: [
      "We paid $294,000 off our loan in four years. It's so good, it's unbelievable.",
    ],
    video: `${VIDEO_BASE}monaghan_-_debt_free_(k)_v1%20(720p)_vocals_only.mp4`,
  },
  {
    slug: 'kamani-60000-in-12-months',
    name: 'Kamani',
    headline: 'Kamani: $60,000 Off in 12 Months, up From $3,500',
    seoTitle: 'Kamani: $60,000 Off Her Mortgage in a Year | Crown Money',
    description:
      'Kamani knocked $60,000 off her home loan in her first 12 months with Crown Money. With her previous bank she paid off about $3,500 a year.',
    summary: '$60,000 off in 12 months, compared with $3,500 at her previous bank.',
    highlights: [
      { label: 'Paid off in 12 months', value: '$60,000' },
      { label: 'With previous bank', value: '~$3,500 / year' },
    ],
    intro:
      'Kamani has been with Crown Money for just over a year. She paid $60,000 off her home loan in that time, compared with about $3,500 a year with her previous bank.',
    quotes: [
      "I've been with Crown Money for over 12 months and they've been a massive lifesaver. I've knocked off $60,000 in 12 months. With my previous bank I only knocked off three and a half.",
      "At the beginning it was tough to set up, and it felt like a risk moving over, but it's been the best thing ever. Thank you, Crown Money, for taking me on board.",
    ],
    video: `${VIDEO_BASE}riverside_edit_-%20kamani%20%26%20scott_crown_money%20(2).mp4`,
  },
  {
    slug: 'graham-50000-in-12-months',
    name: 'Graham',
    headline: 'Graham: $50,000 Off the House in 12 Months',
    seoTitle: 'Graham: $50,000 Off His Home Loan in a Year | Crown Money',
    description:
      'In his first 12 months, Graham paid $50,000 off his home loan, around ten times what he was paying off before, with bills now paid automatically.',
    summary: '$50,000 off in 12 months, about ten times his previous rate.',
    highlights: [
      { label: 'Paid off in 12 months', value: '$50,000' },
      { label: 'Compared with before', value: '~10x faster' },
    ],
    intro:
      'Graham has been on the programme for 12 months. With his bills paid automatically from one account, he paid $50,000 off his home loan, about ten times what he had been paying off.',
    quotes: [
      "I've been on the program for 12 months. We're not stressing about bills: they all come out directly from the account, so we're not worrying about our finances in that regard.",
      "We're paying ten times off the loan compared with what we were paying earlier. We paid $50,000 off in 12 months, and we can see that we'll be able to own our house pretty quickly.",
    ],
    video: `${VIDEO_BASE}gram_(k)_v1%20(720p).mp4`,
  },
  {
    slug: 'ella-30000-a-year-off-the-mortgage',
    name: 'Ella',
    headline: 'Ella: From $4,000 to $30,000 a Year Off the Mortgage',
    seoTitle: 'Ella: $4k to $30k a Year Off Her Mortgage | Crown Money',
    description:
      'Ella went from struggling with repayments and paying off about $4,000 a year to paying $30,000 off the principal in 12 months, with no credit card debt.',
    summary: 'From about $4,000 a year to $30,000 off the principal in 12 months.',
    highlights: [
      { label: 'Paid off in 12 months', value: '~$30,000' },
      { label: 'Before Crown Money', value: '~$4,000 / year' },
      { label: 'Credit card debt', value: 'None' },
    ],
    intro:
      'Before joining Crown Money, Ella and her partner were struggling to make mortgage repayments and paying off about $4,000 a year. In the last 12 months they paid about $30,000 off the principal, and they now have no credit card debt.',
    quotes: [
      "Over the last couple of years we've been able to save a lot of money and push down our debt. We feel a lot more secure and happy financially. If we want to go on a holiday, we can go on a holiday.",
      "We don't have any credit card debt. We only have the mortgage and a car, and that's it. It's a lot less stressful: we don't have to worry about money or paying bills anymore.",
      'Before we first sat down, I was struggling to pay my mortgage every month. We were paying off about $4,000 a year. In the last 12 months, about $30,000.',
      'Next, we want to pay off the mortgage as quickly as possible, have a comfortable life, have a family and send them to good schools without worrying about it financially.',
    ],
    video: `${VIDEO_BASE}ella_(ok)_v1%20(720p).mp4`,
  },
  {
    slug: '41000-off-in-12-months',
    name: 'Crown Money client',
    headline: '$41,000 Off the House in 12 Months',
    seoTitle: '$41,000 Off a Home Loan in 12 Months | Crown Money',
    description:
      'Despite higher interest rates, this client paid $41,000 off their home loan in 12 months by keeping expenses down and directing money through Crown Money.',
    summary: '$41,000 off in 12 months, despite higher interest rates.',
    highlights: [
      { label: 'Paid off in 12 months', value: '$41,000' },
    ],
    intro:
      'In this check-in, a client learns they paid $41,000 off their home loan over the last 12 months, despite higher interest rates, by keeping expenses down and putting as much as possible through their Crown Money structure.',
    quotes: [
      "Considering the situation now, with the rates and everything, we're trying our best to minimise expenses and put as much as we can into Crown Money. $41,000 in 12 months: that's a pretty good result.",
    ],
    video: `${VIDEO_BASE}om_testimonial_01_(k)_v1%20(720p)_vocals_only.mp4`,
  },
  {
    slug: 'peter-and-karina-47000-in-first-year',
    name: 'Peter & Karina',
    headline: 'Peter & Karina: $47,000 Off in Their First Year',
    seoTitle: 'Peter & Karina: $47,000 Off in Year One | Crown Money',
    description:
      'After refinancing and extending their loan term with little progress, Peter and Karina paid about $47,000 off their mortgage in their first year.',
    summary: 'About $47,000 off in the first year, after years of refinancing for a better rate.',
    highlights: [
      { label: 'Paid off in first year', value: '$46,000 to $47,000' },
      { label: 'With Crown Money', value: '18 months' },
    ],
    intro:
      'Peter and Karina had refinanced more than once chasing a better rate, and each time the loan term went back to 30 years while the balance barely moved. In their first year with Crown Money they paid off about $46,000 to $47,000.',
    quotes: [
      'It was going very slowly. Two years later we remortgaged and put the mortgage back to 30 years. We got a small reduction in the monthly repayments, but the balance was pretty much the same. We changed a couple of times to get a better deal or a better rate, but we realised that if you keep extending the term, it’s not doing you any good.',
      "It's a completely different way of looking at financing. It wasn't about the best interest rate on the market; it was about how quickly you can have your financial freedom.",
      "It's better than anticipated. We've been with Crown for a year and a half, and in the first year we paid $46,000 to $47,000. There's no way we would have paid that much off if we'd continued on the path we were on.",
      'I feel more in control, and less stressed about money. I would definitely recommend a chat with Craig Parry.',
    ],
    video: `${VIDEO_BASE}peter_kerak_%26_karina_kerakova_v1%20(720p).mp4`,
  },
  {
    slug: 'sheena-219000-paid-off-debt-free',
    name: 'Sheena',
    headline: 'Sheena: $219,000 Paid Off and Debt-Free for Life',
    seoTitle: 'Sheena: $219,000 Paid Off, Now Debt-Free | Crown Money',
    description:
      'Without a high income, Sheena paid $219,000 off her home loan over 10 years, around $21,000 a year, and is now debt-free.',
    summary: '$219,000 paid off over 10 years on an ordinary income. Now debt-free.',
    highlights: [
      { label: 'Paid off', value: '$219,000' },
      { label: 'Time taken', value: '10 years' },
      { label: 'Result', value: 'Debt-free' },
    ],
    intro:
      "Sheena doesn't earn a high income. Over 10 years she paid $219,000 off her home loan, about $21,000 a year on average, and today she is debt-free.",
    quotes: ['I paid $219,000 off in 10 years.'],
    video: `${VIDEO_BASE}sheena_(k)_v1%20(720p).mp4`,
  },
  {
    slug: 'steve-107000-off-in-one-year',
    name: 'Steve',
    headline: 'Steve: $107,000 Off in a Single Year, Now Debt-Free',
    seoTitle: 'Steve: $107,000 Off His Debt in One Year | Crown Money',
    description:
      'More than a decade after joining Crown Money, Steve and his partner knocked $107,000 off their personal debt in one year and are now personally debt-free.',
    summary: '$107,000 off personal debt in one year, and now personally debt-free.',
    highlights: [
      { label: 'Paid off in one year', value: '$107,000' },
      { label: 'Result', value: 'Personally debt-free' },
    ],
    intro:
      'Steve and his partner joined Crown Money around 12 or 13 years ago. In the 2014 to 2015 financial year they knocked $107,000 off their personal debt, and they are now personally debt-free.',
    quotes: [
      "We've worked very hard. In 2014 to 2015 we knocked $107,000 off our personal debt in one year, which is a direct result of coming on board with you some 12 or 13 years ago. And now we're debt-free personally.",
      "If you'd told me when we first sat down that we'd knock $100,000 off our mortgage in one year, I wouldn't have believed it. But you can't argue with the figures. It's taken a lot of hard work, and working with you has realised this result.",
    ],
    video: `${VIDEO_BASE}steve_(k)_v1%20(720p).mp4`,
  },
  {
    slug: 'stephen-and-lynda-from-66-to-90-percent-owned',
    name: 'Stephen & Lynda',
    headline: 'Stephen & Lynda: From 66% to 90% of Their Home Owned',
    seoTitle: 'Stephen & Lynda: 66% to 90% of Home Owned | Crown Money',
    description:
      'Stephen and Lynda went from owning 66% of their home to about 90% in three and a half years, after feeling they were working hard and getting nowhere.',
    summary: 'From owning 66% of their home to about 90% in three and a half years.',
    highlights: [
      { label: 'Home owned at start', value: '66%' },
      { label: 'After 3.5 years', value: '~90%' },
    ],
    intro:
      'Stephen and Lynda felt they were working a lot without getting anywhere with their money. When they started they owned 66% of their home. Three and a half years later they own about 90%.',
    quotes: [
      "We seemed to be working a lot and not really getting anywhere with our money. We did have reservations at the start. I couldn't believe it when Craig went through what we could achieve in that first appointment. I thought it was too good to be true, because you think: what have we been doing up until now?",
      "It exceeded all of our expectations, and we started getting positive outcomes immediately. We now own about 90% of our house after three and a half years, and we started at only 66%.",
      "Craig really cares about how you're tracking. He asks the hard questions as much as he gives you encouragement. We've referred a few people, and they've come back and thanked us.",
    ],
    video: `${VIDEO_BASE}stephen_%26_lynda_milde_(k)_v1%20(720p).mp4`,
  },
  {
    slug: 'from-part-time-income-to-mortgage-free',
    name: 'Crown Money client',
    headline: 'From a Part-Time Income to $2,000 Left on the Mortgage',
    seoTitle: 'From Part-Time Income to Almost Mortgage-Free | Crown Money',
    description:
      'Starting on a part-time income, she paid her home loan down to about $2,000, put her son through college and is now planning retirement.',
    summary: 'Started on a part-time income; now about $2,000 from mortgage-free.',
    highlights: [
      { label: 'Left on the mortgage', value: '~$2,000' },
      { label: 'Expected debt-free', value: 'Within 30 to 60 days' },
    ],
    intro:
      'This client started with Crown Money while working part-time. She now has about $2,000 left on her mortgage and expects to be debt-free within 30 to 60 days, having put her son through college along the way.',
    quotes: [
      "I came from part-time work and we've built it up to now. I've just about paid it off: I've got about two grand left on my mortgage. I'll be able to have a lovely Christmas.",
      "It's been a good journey. I've been able to spend money, pay off my house, have a life and put my son through college. I'm already in retirement mode. If they said I could retire tomorrow, my hand's going up.",
    ],
    video: `${VIDEO_BASE}copy_of_3_(k)_v1%20(720p).mp4`,
  },
  {
    slug: 'dominic-and-elisabeth-no-longer-treading-water',
    name: 'Dominic & Elisabeth',
    headline: 'Dominic & Elisabeth: No Longer Treading Water',
    seoTitle: 'Dominic & Elisabeth: No Longer Treading Water | Crown Money',
    description:
      'After years of little progress, Dominic and Elisabeth saw their mortgage start falling within months, without giving up the lifestyle they enjoy.',
    summary: 'Saw their loan falling within months, without giving up their lifestyle.',
    highlights: [
      { label: 'Progress visible', value: 'Within a few months' },
      { label: 'Lifestyle', value: 'Unchanged' },
    ],
    intro:
      'After moving to the city and taking on a mortgage, Dominic and Elisabeth spent their first couple of years making little progress. Within a few months of joining Crown Money they could see the loan coming down, without giving up their social life.',
    quotes: [
      "We were going okay, but we just couldn't pay anything off our debt. We were treading water. It came very highly recommended, but after the first meeting I was very sceptical: I thought it was too good to be true.",
      "Within a few months we could see the loan being reduced, which we couldn't see before, and we hadn't really stopped anything. We continued our lifestyle, just with better information.",
      "We both thought it was important at our age to keep enjoying life as well as get debt-free as quickly as we can. With the banks, once you sign the loan you don't hear much from them apart from a statement. Crown focus on paying the debt as quickly as possible and give you the strategies to do it.",
      'Sometimes we think things are too good to be true, but this actually does work, and I would recommend anyone give it a go.',
    ],
    video: `${VIDEO_BASE}dominic_%26_elisabeth_lobosso_v1%20(720p).mp4`,
  },
  {
    slug: 'ryan-sceptical-to-surprised',
    name: 'Ryan',
    headline: 'Ryan: From Sceptical to Surprised in the First Year',
    seoTitle: 'Ryan: From Sceptical to Surprised in Year One | Crown Money',
    description:
      'Ryan and his partner moved from CommBank to fast-track their mortgage. They were sceptical at first, and the first 12 months blew their expectations.',
    summary: 'Moved from CommBank to fast-track the mortgage; year one beat their expectations.',
    highlights: [
      { label: 'Previous lender', value: 'CommBank' },
      { label: 'First year', value: 'Beat expectations' },
    ],
    intro:
      'Ryan and his partner were with CommBank and wanted to fast-track paying down their mortgage. They were sceptical about how quickly their money could work for them, and their first 12 months with Crown Money surprised them.',
    quotes: [
      "We were with CommBank. The loan was going along okay, but our goal was to fast-track and pay down our mortgage. We were both very sceptical to begin with: we just didn't think our money could work for us that quickly.",
      'The first 12 months really did take us by surprise. It actually became a little bit addictive, because you could see how much you were knocking off. It blew our expectations in the first year.',
      "Money stress can really play on a partnership. There's basically no financial stress now. Jump straight into it. I was sceptical, but get on board and you'll be amazed what your own money can do.",
    ],
    video: `${VIDEO_BASE}ryan_hillman_(k)_v1%20(720p).mp4`,
  },
  {
    slug: 'a-better-life-on-a-modest-income',
    name: 'Crown Money client',
    headline: 'A Better Life, and a Smaller Mortgage, on a Modest Income',
    seoTitle: 'Paying Down a Mortgage on a Modest Income | Crown Money',
    description:
      "This client didn't earn a lot when she started with Crown Money. The programme gave her more control, less mortgage and room to enjoy life.",
    summary: 'Started on a low income; now in control, with less mortgage and more life.',
    highlights: [{ label: 'Starting point', value: 'Modest income' }],
    intro:
      "This client didn't earn a lot when she first sat down with Scott Parry. She describes going from feeling that life was a struggle to having money to enjoy, while paying her mortgage down.",
    quotes: [
      "The results are astronomical. I actually have a life now, instead of always thinking that life's a struggle and I don't have the money. I'm more in control.",
      "I didn't earn a lot of money at that time, so Scott was able to help me out. We did a program, and that program got me where I am: a life, a better income, less mortgage. It's very easy to do. I found it very manageable. Definitely do it.",
    ],
    video: `${VIDEO_BASE}copy_of_5_(ok)_v1%20(720p).mp4`,
  },
];

export const getStory = (slug: string) => STORIES.find((s) => s.slug === slug);
