// Industry landing page content
// Sourced from: Mick's CV (30 years sector experience), Lavndry investor review (Saudi market context),
// Mick Connor Laundry Advisory original content brief

export interface PainPoint {
  title: string;
  description: string;
}

export interface HelpItem {
  title: string;
  description: string;
}

export interface ProjectRef {
  name: string;
  meta: string;
  stat: string;
  statLabel: string;
  description: string;
}

export interface Industry {
  slug: string;
  number: string;
  name: string;
  shortName: string;
  heroTagline: string;
  heroSubline: string;
  imageUrl: string;
  meta: {
    title: string;
    description: string;
  };
  understanding: string[]; // 2-3 paragraphs showing we get this sector
  painPoints: PainPoint[]; // 4 common challenges
  helps: HelpItem[]; // what Mick does for this sector
  projects: ProjectRef[]; // 2-3 relevant past projects
  formPrompt: string; // sector-specific question for the form
}

export const industries: Industry[] = [
  {
    slug: 'commercial-laundries',
    number: '01',
    name: 'Commercial Laundries',
    shortName: 'Commercial',
    heroTagline: 'Multi-site economics live and die on PPOH.',
    heroSubline:
      'A 5% productivity swing across six plants is the difference between a profitable group and a loss-making one. I have lived inside that math for thirty years.',
    imageUrl:
      'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=1600&q=80&auto=format&fit=crop',
    meta: {
      title: 'Commercial Laundries · Multi-Site Operations Advisory — First Wave',
      description:
        'Group-level operations advisory for commercial laundries — multi-site P&L, productivity improvement, plant turnarounds, equipment selection, tender support. By Mick Connor, former Group Operations Director, Paragon Laundry (6 sites, UK).',
    },
    understanding: [
      "Commercial laundry is one of the hardest businesses to run profitably. Labor is your biggest line item but you can't cut it without cutting throughput. Utilities are rising every year. Textile costs are squeezed by clients pushing for lower per-kg pricing. Equipment depreciation is brutal. And every contract demands consistency you can only deliver if every plant in your group is hitting its PPOH target every shift.",
      "When I was Group Operations Director at Paragon, we ran six commercial laundries across the UK southwest. I learned that group-level numbers lie. The blended PPOH looks fine while one plant is bleeding. The group EBITDA looks healthy while one contract is below break-even. Real operational control means knowing exactly which plant, which shift, which line is the problem — and which lever moves it.",
      "Most multi-site operators have great data but no operational read on it. I help groups translate dashboards into actions that show up on next month's P&L.",
    ],
    painPoints: [
      {
        title: 'Group sees the numbers but not the cause.',
        description:
          'PPOH is down 8% on Plant 3 but nobody can tell you whether it is sortation, finishing, sickness, training, or equipment downtime. Three months later it is still down.',
      },
      {
        title: 'CAPEX decisions made without operational input.',
        description:
          'Equipment chosen by finance and procurement based on quote price. Five years in, the lifecycle cost is double what the cheap line is producing.',
      },
      {
        title: 'Tender margins compressed by competitors.',
        description:
          "You're winning bids but losing money. The operational assumptions in the bid were optimistic. The plant can't actually deliver the throughput the bid promised at the labor cost it promised.",
      },
      {
        title: 'Senior operations leadership thin.',
        description:
          'GMs of individual plants are firefighting. Group ops director slot vacant or stretched. No one is doing the cross-plant work that drives 200 basis points of margin.',
      },
    ],
    helps: [
      {
        title: 'Multi-site operational diagnostic',
        description:
          'I go plant by plant. Production, engineering, transport, service, P&L. I tell you exactly where the leaks are and what each one is worth in annualized EBITDA.',
      },
      {
        title: 'PPOH and productivity improvement',
        description:
          "At Paragon I took site-level PPOH from 80 to 145. At Clean Linen, from 90 to 135. The work is granular — line balancing, work measurement, manning models. It is exactly what I do.",
      },
      {
        title: 'Vendor-neutral equipment advisory',
        description:
          'When a tunnel washer purchase has to make sense for 10 years across multiple sites, the decision is not the brochure. I help operators make CAPEX calls that pay back.',
      },
      {
        title: 'Tender operational costing',
        description:
          "Before you bid, I model what the operation has to actually deliver to hit the margin you need. If the bid is unwinnable at a sustainable cost, you find out before you submit.",
      },
      {
        title: 'Senior operations recruitment',
        description:
          "I have recruited senior production, engineering, and operations talent from the UK, Europe, South Asia, and within the GCC. I know who is good and who is available.",
      },
    ],
    projects: [
      {
        name: 'Paragon Laundry Group',
        meta: 'United Kingdom · 2005 — 2012',
        stat: '6',
        statLabel: 'Laundries · Multi-Site P&L',
        description:
          'Group Operations Director responsible for six commercial laundries in the UK southwest. Twelve years across the group. Site-level linen throughput from 150K to 400K pieces/week. PPOH from 80 to 145. Senior management board member.',
      },
      {
        name: 'Lavndry Group — Riyadh & Dammam',
        meta: 'Saudi Arabia · 2023 — Present',
        stat: '76 t/day',
        statLabel: 'Combined Linen Capacity',
        description:
          'Built and launched two greenfield central laundries from concept to commercial operation. Structured group-level operations and the commercial book including St. Regis, JW Marriott, and the Qiddiya 5-year exclusive.',
      },
      {
        name: 'MCL Qatar',
        meta: 'Qatar · 2020 — 2023',
        stat: '78,000 kg/day',
        statLabel: 'Peak Daily Capacity',
        description:
          'General Manager. Scaled the operation from 20,000 to 78,000 kg per day in 18 months. Turned a loss-making business into bottom-line profit. Re-organized workflow, commissioned new equipment, rebuilt the team.',
      },
    ],
    formPrompt:
      'Tell me about your group — number of plants, current PPOH/cost-per-kg if you know them, and where you suspect the leaks are.',
  },
  {
    slug: 'hotels-hospitality',
    number: '02',
    name: 'Hotels & Hospitality',
    shortName: 'Hospitality',
    heroTagline: 'Linen consistency makes or breaks the guest review.',
    heroSubline:
      "Whether you build an on-premises laundry or buy from a central operator is one of the most consequential decisions in the hotel's first five years. Most properties get it wrong because nobody runs the numbers from the operator's side of the table.",
    imageUrl:
      'https://images.unsplash.com/photo-1728488444816-47abc89d82a4?w=1600&q=80&auto=format&fit=crop',
    meta: {
      title: 'Hotels & Hospitality · Laundry Strategy Advisory — First Wave',
      description:
        'OPL vs central laundry decisions, linen quality programs, hotel group laundry strategy, central laundry tender review. For hotels, resorts, and hospitality groups across the GCC and Europe. By Mick Connor.',
    },
    understanding: [
      "Linen is invisible when it is right and brand-defining when it is wrong. A four-star guest will overlook a slow check-in. They will not overlook stained sheets or a thin towel. Most hotel groups understand this. What they often do not understand is how the laundry industry actually works behind the contracts they sign.",
      "I have built central laundry operations that served St. Regis, JW Marriott, and a string of independent hotels across two countries. I have also commissioned hotel OPLs. The choice between OPL and central laundry is not a textbook decision — it depends on property type, room count, F&B intensity, location, peak/off-peak patterns, labor cost structure, and how much CAPEX you want to lock into linen processing instead of guest experience.",
      "When you outsource to a central laundry, you also outsource a risk you cannot see from your side. I sit on the operator's side. I can tell you what to ask for in the tender, what the contract should look like, what the SLA breach triggers should be, and what the operator is hiding in the per-piece price.",
    ],
    painPoints: [
      {
        title: 'OPL vs central laundry decision unclear.',
        description:
          "Owner wants OPL because they think it gives them control. Operator wants central because it removes a headache. Neither has run the actual numbers — CAPEX, OPEX, ROIC, risk-adjusted — for this specific property.",
      },
      {
        title: 'Linen quality slipping but root cause unknown.',
        description:
          'Guest reviews mention sheets, towels, robes. Housekeeping blames the laundry. Laundry blames the linen supplier. Procurement blames the chemicals. Nobody is doing the diagnostic work to find which is right.',
      },
      {
        title: 'Central laundry contract terms hidden complexity.',
        description:
          "Per-piece price looks fine. But the contract has unfavorable lost-and-damaged clauses, no penalties for missed delivery windows, and ambiguous reject criteria. Two years in, you are paying 30% more than benchmark.",
      },
      {
        title: 'New build: which laundry model, sized to what.',
        description:
          'New property in pre-opening. Architect drew an OPL into the basement based on a generic spec. Equipment will be too big for off-peak and too small for occupancy peaks. Nobody has stress-tested the manning model.',
      },
    ],
    helps: [
      {
        title: 'OPL vs central feasibility',
        description:
          'I build a property-specific model. 5-year CAPEX, OPEX, sensitivity on occupancy and F&B mix, labor and utility assumptions, risk-adjusted comparison. You get a clear recommendation with the math behind it.',
      },
      {
        title: 'Central laundry tender support',
        description:
          'Technical scope, commercial terms, SLA structure, evaluation criteria. I write the tender from the side of the operator so you can read the responses with their interests visible.',
      },
      {
        title: 'Linen quality diagnostic',
        description:
          "End-to-end audit from procurement to laundry to housekeeping to guest. I tell you which link is failing and what to do about it.",
      },
      {
        title: 'Pre-opening laundry commissioning',
        description:
          "Equipment sizing, layout review, manning model, SOPs and KPIs, opening-day readiness checklist. I have opened laundries from concrete slab to live operation more than once.",
      },
      {
        title: 'Group laundry strategy',
        description:
          'For hotel chains: central laundry vs OPL across the portfolio, group-level linen standards, brand consistency programs.',
      },
    ],
    projects: [
      {
        name: 'Lavndry Group — Hospitality Commercial Book',
        meta: 'Saudi Arabia · 2023 — Present',
        stat: '76 t/day',
        statLabel: 'Combined Linen Capacity',
        description:
          'Built the central laundries that anchor commercial agreements with St. Regis (Marriott), JW Marriott, Bab Samhan (Diriyah), and the platform that secured the Qiddiya 5-year exclusive.',
      },
      {
        name: 'MCL Qatar',
        meta: 'Qatar · 2020 — 2023',
        stat: '78,000 kg/day',
        statLabel: 'FIFA World Cup 2022 hospitality',
        description:
          'General Manager. Scaled MCL Qatar to handle FIFA 2022 hospitality demand — hotels, hospitality villages, official sites. Profitable inside 18 months.',
      },
      {
        name: 'Paragon Laundry Group',
        meta: 'UK · 2005 — 2012',
        stat: '6',
        statLabel: 'Sites · Hospitality contracts',
        description:
          'Group Operations Director responsible for six commercial laundries serving UK hotel and hospitality chains. Senior management board member through the financial crisis and recovery.',
      },
    ],
    formPrompt:
      'Tell me about the property — room count, brand, location, current laundry model, and what triggered the question.',
  },
  {
    slug: 'healthcare',
    number: '03',
    name: 'Hospitals & Healthcare',
    shortName: 'Healthcare',
    heroTagline: 'Healthcare laundry has zero margin for error.',
    heroSubline:
      'MOH compliance, infection control, surgical pack handling, RFID tracking. Most generalist consultants miss the validation requirements. Most equipment vendors miss the workflow requirements. I have lived in both.',
    imageUrl:
      'https://images.unsplash.com/photo-1551076805-e1869033e561?w=1600&q=80&auto=format&fit=crop',
    meta: {
      title: 'Hospitals & Healthcare · MOH-Compliant Laundry Advisory — First Wave',
      description:
        'Healthcare laundry advisory: MOH compliance, infection control workflow, surgical linen handling, RFID tracking, in-house vs outsourced decisions. For hospitals, clinics, and healthcare networks. By Mick Connor.',
    },
    understanding: [
      "Healthcare textiles are a different category from hospitality. The risk of infection transmission means the dirty-to-clean separation has to be airlocked, validated, and inspectable. The MOH audit is not a paperwork exercise — it is a real check that your processes withstand contamination scenarios.",
      "I have designed and commissioned healthcare laundry plants and worked with hospital networks on outsourced contracts. The workflow is different from commercial laundry from the very first step: barrier washers, dirty/clean physical separation, separate staff entry, dedicated transport, single-use bagging for surgical packs, and full traceability via RFID or barcode for liability.",
      "Most hospitals make one of two mistakes: they treat laundry as a hotel-grade operation and miss compliance, or they over-engineer for compliance and over-pay for capacity they do not need. The right answer is neither generic — it depends on bed count, surgical activity, isolation ward profile, and the regulatory environment.",
    ],
    painPoints: [
      {
        title: 'MOH audit flagging laundry workflow.',
        description:
          "Inspector found cross-contamination risk in the dirty-to-clean transition. The plant was built to the architect's drawing, not to a healthcare workflow standard. Now you need a remediation plan that does not stop operations.",
      },
      {
        title: 'Surgical pack tracking failures.',
        description:
          'Specific gowns, drapes, or instrument wraps going missing or arriving uncertified. The CSSD-to-laundry chain has a gap. Liability sits with the hospital.',
      },
      {
        title: 'In-house vs outsourced unclear.',
        description:
          "Network is considering centralizing healthcare laundry across multiple hospitals. The economics look good on paper but operational integration with infection control and CSSD scheduling has not been pressure-tested.",
      },
      {
        title: 'New hospital build: laundry barely in the brief.',
        description:
          "Healthcare designer has drawn a generic OPL into the basement. No specialist consulted. By the time anybody asks the right questions, the layout is locked, the equipment is ordered, and the operational reality is a problem the FM team inherits.",
      },
    ],
    helps: [
      {
        title: 'MOH-compliant workflow design',
        description:
          "Plant layout that an inspector cannot fault — physical separation, airlocks, staff zones, transport, and document trail. I have worked through compliance with healthcare regulators in multiple countries.",
      },
      {
        title: 'Healthcare-specific equipment specs',
        description:
          'Barrier washers (single-door vs double-door), surgical-grade dryers, processing protocols for different soil categories, RFID-compatible finishing lines.',
      },
      {
        title: 'Surgical and isolation linen handling',
        description:
          'End-to-end workflow design for surgical packs, isolation ward linen, NICU/PICU textiles, and other high-risk categories. Documentation chain for liability.',
      },
      {
        title: 'In-house vs outsourced operational model',
        description:
          'Network-level economics: own laundry vs outsourced vs hybrid. Sensitivity to occupancy, case mix, geography, and infection control requirements.',
      },
      {
        title: 'RFID and tracking systems for healthcare',
        description:
          'System selection (Lavatec, Datamars, etc.), integration with hospital systems, traceability protocols for audits and liability.',
      },
    ],
    projects: [
      {
        name: 'Bubble Dream Healthcare Plant Design',
        meta: 'United Arab Emirates · 2013 — 2014',
        stat: 'Greenfield',
        statLabel: 'Healthcare-specific plant',
        description:
          'Healthcare plant design and commissioning involvement during Bubble Dream Abu Dhabi greenfield start-up. Workflow, separation, and equipment specification for clinical-grade processing.',
      },
      {
        name: 'Paragon Laundry Group',
        meta: 'UK · 2005 — 2012',
        stat: '6',
        statLabel: 'Sites with healthcare contracts',
        description:
          'Group Operations Director responsible for plants serving UK healthcare clients including NHS trusts. Compliance, infection control, and surgical linen workflow across the network.',
      },
      {
        name: 'Lavndry Group — Healthcare Pipeline',
        meta: 'Saudi Arabia · 2023 — Present',
        stat: '1,450+',
        statLabel: 'Bed capacity in active discussions',
        description:
          'Built the operational platform underpinning Lavndry strategic partnership discussions with Saudi Health Holding (1,450+ beds) and Dr. Sulaiman Al Habib Hospital network.',
      },
    ],
    formPrompt:
      'Tell me about the facility — bed count, surgical activity, current laundry model, and what triggered the question (MOH finding, new build, network consolidation, etc.).',
  },
  {
    slug: 'aviation',
    number: '04',
    name: 'Airlines & Aviation',
    shortName: 'Aviation',
    heroTagline: 'High-volume, time-critical, low tolerance for error.',
    heroSubline:
      "Airline laundry is the most demanding sector I have run. Uniforms for 5,000-30,000 crew. In-flight textiles on a fixed turnaround. Catering linen with no second chances. Few operators understand aviation. Few aviation teams understand laundry. I have sat on both sides.",
    imageUrl:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80&auto=format&fit=crop',
    meta: {
      title: 'Airlines & Aviation · High-Volume Laundry Advisory — First Wave',
      description:
        'Airline and aviation laundry advisory: in-flight textile programs, crew uniform management, turnaround workflow design, hub laundry strategy, tender support. By Mick Connor.',
    },
    understanding: [
      "Aviation laundry breaks every assumption from the commercial sector. Turnaround windows are measured in hours, not days. Volumes spike at landing waves, not predictably across the shift. A failure in laundry shows up at gate hold or onboard — visible to passengers and crew, traceable to operations leadership within a single rotation.",
      "I have spent years building and running operations that served airlines and airline service providers. At London 2012 we processed 30,000 garments and 76,000 kg of linen daily — much of it on Olympics-class turnaround requirements. At MCL Qatar we handled hospitality and aviation parallels through FIFA. The operational discipline that aviation requires is different from anything else.",
      "Uniform programs at airline scale are their own discipline. Sizing tens of thousands of crew. Rotation cycles. Color standards. Damage and replacement logistics. Most airlines outsource this to a uniform vendor without realizing the laundry-side operational implications.",
    ],
    painPoints: [
      {
        title: 'Catering linen: 4-12 hour turnaround.',
        description:
          "First flight of the day needs linen on board. Last flight of the previous day landed at 2 AM with soiled returns. The window between is non-negotiable. Your laundry has to deliver every day or planes hold at gate.",
      },
      {
        title: 'Uniform program at scale unmanaged.',
        description:
          "5,000+ crew. Multiple uniform components. Damage and loss running higher than budgeted. No clean view of cost-per-crew-per-month. Procurement and laundry not aligned.",
      },
      {
        title: 'New hub: laundry an afterthought.',
        description:
          "New base or hub opening in 18 months. Laundry strategy not in the brief. By the time anybody asks, the catering contract is in tender with no laundry partner identified and no operational integration designed.",
      },
      {
        title: 'Outsourced laundry contract performance.',
        description:
          'Current provider missing delivery windows during peak. SLA penalties exist but not being enforced because nobody has time. Quality slipping on specific high-visibility items.',
      },
    ],
    helps: [
      {
        title: 'Aviation-specific operational workflow',
        description:
          'Turnaround-window-aware workflow design. Catering laundry, in-flight textile handling, uniform processing. Integration with airline catering schedules.',
      },
      {
        title: 'Crew uniform program operational design',
        description:
          'Sizing, rotation, damage, replacement logistics for airline-scale uniform programs. Vendor integration. Cost-per-crew-per-month transparency.',
      },
      {
        title: 'New hub laundry strategy',
        description:
          'Pre-opening laundry strategy for new airline bases or hubs. CAPEX vs outsource decision. Operational integration with catering partner. SLA design.',
      },
      {
        title: 'Outsourced contract review and improvement',
        description:
          "Diagnostic on current laundry provider's performance, contract terms, SLA enforcement. Operational improvement plan or competitive re-tender.",
      },
      {
        title: 'Tender support — both sides',
        description:
          "For airlines tendering laundry services or for laundry operators bidding on airline contracts. Either way, I have sat on the other side of the table.",
      },
    ],
    projects: [
      {
        name: 'London 2012 Olympics',
        meta: 'London · 2012',
        stat: '30,000',
        statLabel: 'Garments/day peak',
        description:
          'Operations Director through London 2012. Peak operations of 30,000 garments daily plus 76,000 kg linen daily on 6-24 hour turnarounds — comparable to airline catering and crew operations at scale.',
      },
      {
        name: 'MCL Qatar — FIFA World Cup 2022',
        meta: 'Qatar · 2020 — 2023',
        stat: '78,000 kg/day',
        statLabel: 'Peak Capacity',
        description:
          'General Manager during FIFA 2022. Time-critical hospitality and crew laundry on World Cup turnaround windows.',
      },
      {
        name: 'Lavndry Group — Aviation Pipeline',
        meta: 'Saudi Arabia · 2023 — Present',
        stat: '2027',
        statLabel: 'Planned aviation laundry',
        description:
          'Active discussions with Riyadh Air on current laundry needs and a planned central laundry partnership for 2027. Built the platform credibility that opened the conversation.',
      },
    ],
    formPrompt:
      'Tell me about the operation — fleet size or crew count, current laundry model, hubs/bases involved, and what triggered the question.',
  },
  {
    slug: 'developers',
    number: '05',
    name: 'Developers & Investors',
    shortName: 'Investors',
    heroTagline: 'A laundry investment is a 5-15 year decision.',
    heroSubline:
      "The difference between a profitable operation and a money-losing one usually shows up before construction — in feasibility, sizing, and operating model. Most due diligence misses operational reality. I do that part.",
    imageUrl:
      'https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=1600&q=80&auto=format&fit=crop',
    meta: {
      title: 'Developers & Investors · Laundry Feasibility & Due Diligence — First Wave',
      description:
        'Independent feasibility studies, capacity sizing, operating model selection, and acquisition due diligence for laundry investments. For developers, investors, and PE funds considering laundry CAPEX. By Mick Connor.',
    },
    understanding: [
      "Laundry CAPEX is hard to get right. A central laundry costs USD 5M to USD 50M to build depending on scale and equipment selection. The same building runs at very different cost-per-kg depending on layout, equipment, and operating model. Sensitivity to occupancy or utilization is brutal — a 20% drop from base case can take an IRR from 18% to negative.",
      "I have been on both sides of laundry investments. I built the operational case behind investments at Lavndry (combined SAR 92M CAPEX), at Bubble Dream Abu Dhabi (full greenfield), at MCL Qatar (capacity expansion). I have also done operational due diligence on acquisitions where the financial model passed but the operational reality would have killed the IRR.",
      "Most pre-investment work I see is done by financial advisors who model the spreadsheet correctly but get the operational assumptions wrong. Tunnel washer cost-per-kg, manning ratio, utilization curve, customer mix risk, equipment lifecycle. These are not spreadsheet questions. They need somebody who has signed off on the operational outcome of these decisions.",
    ],
    painPoints: [
      {
        title: 'Pre-investment: is this opportunity real?',
        description:
          "Sponsor or operator is pitching a laundry investment. Numbers look good. Market analysis looks credible. But you do not know if the operational assumptions are realistic and you do not have an operator to call.",
      },
      {
        title: 'Sizing without operating experience.',
        description:
          'Capacity calculations done by finance based on top-down market assumptions. Result is either over-sized (CAPEX wasted on idle capacity) or under-sized (capacity bottleneck two years in).',
      },
      {
        title: 'Acquisition: hidden operational liabilities.',
        description:
          "Target is profitable on the surface. Financial DD is clean. But there is deferred CAPEX, an aging core team, contracts with margin compression baked in, and equipment two years from end-of-life. You need somebody to walk the plant.",
      },
      {
        title: 'Operating model selection unclear.',
        description:
          "Should the investment own and operate, lease and operate, contract to a third-party operator, or build to lease? Different operating models have very different risk-return profiles. This is rarely modeled rigorously.",
      },
    ],
    helps: [
      {
        title: 'Independent feasibility studies',
        description:
          'For new laundry CAPEX. Demand model, capacity sizing, operating model recommendation, financial model, sensitivity analysis, risk register. Comprehensive enough for board approval.',
      },
      {
        title: 'Capacity sizing models',
        description:
          'Specific to laundry economics. Throughput per kg, peak vs average load, manning curves, utility load, sensitivity to occupancy and customer mix.',
      },
      {
        title: 'Operating model selection',
        description:
          'Own-and-operate vs operating contract vs lease vs hybrid. Comparison across CAPEX, OPEX, risk, and IRR. The right model is rarely obvious.',
      },
      {
        title: 'Acquisition operational due diligence',
        description:
          'Walk the plant, audit the equipment, interview the team, review the contracts. Tell you what the seller has not told you and what the financial DD missed.',
      },
      {
        title: 'IRR model operational sanity check',
        description:
          "Operating assumptions inside the financial model — manning ratio, cost-per-kg, utilization curve, growth assumptions. I tell you which are realistic and which are aspirational.",
      },
    ],
    projects: [
      {
        name: 'Lavndry Group — Capital Investments',
        meta: 'Saudi Arabia · 2023 — Present',
        stat: 'SAR 92M',
        statLabel: 'Combined CAPEX delivered',
        description:
          'Operational architect of the SAR 30.75M productive-asset RCL Riyadh build, the SAR 11M DCL Dammam build, and the operational case underpinning the planned SAR 46.4M MCL Makkah investment.',
      },
      {
        name: 'KEC Madinah MOU',
        meta: 'Saudi Arabia · 2026',
        stat: '18.9%',
        statLabel: 'Projected IRR',
        description:
          'Operational input into the JV laundry MOU with King Abdullah Economic City. SAR 53M projected mature revenue, IRR 18.9%. Mick built the operational platform that gave the partnership credibility.',
      },
      {
        name: 'MCL Qatar Turnaround',
        meta: 'Qatar · 2020 — 2023',
        stat: '20K → 78K',
        statLabel: 'kg/day capacity expansion',
        description:
          'Operational turnaround that took a loss-making business to bottom-line profit in 18 months while scaling capacity 4x for FIFA. The classic case of operational reality determining the investment outcome.',
      },
    ],
    formPrompt:
      'Tell me about the opportunity — investment thesis, stage (pre-feasibility / DD / build / acquisition), geography, and what you need an independent operational view on.',
  },
  {
    slug: 'entertainment',
    number: '06',
    name: 'Entertainment & Destinations',
    shortName: 'Entertainment',
    heroTagline: 'Peak load can be ten times daily average.',
    heroSubline:
      "Qiddiya, Six Flags, water parks, mega-resorts. Standard hospitality assumptions fail at theme-park scale. I have built the laundry side of mega-events and helped design the platform behind one of the largest entertainment laundry contracts in Saudi Arabia.",
    imageUrl:
      'https://images.unsplash.com/photo-1646207683942-971653b6f6c2?w=1600&q=80&auto=format&fit=crop',
    meta: {
      title: 'Entertainment & Destinations · Mega-Project Laundry Advisory — First Wave',
      description:
        'Laundry strategy for theme parks, water parks, entertainment cities, and mega-resorts. Peak-load capacity modeling, uniform programs at scale, phased build-out plans. By Mick Connor — operational architect behind Lavndry-Qiddiya 5-year exclusive.',
    },
    understanding: [
      "Entertainment laundry is its own category. Standard hospitality benchmarks do not apply. A theme park may have 5,000-15,000 employees in costumes and uniforms, daily guest interactions producing F&B and accommodation linen, retail with branded items, and a water park where towel rotation can hit 25,000-30,000 pieces in a single peak weekend.",
      "I built the operational platform at Lavndry that secured the Qiddiya 5-year exclusive — Six Flags at 25,000 garments per day and Aqua Arabia at 6,500 pieces per day at design capacity. I also delivered London 2012, which is the closest precedent to a Saudi mega-event in laundry terms. Peak vs average matters more than any other variable.",
      "Phasing is everything. A mega-destination does not open at full capacity on day one. Laundry sized for day-one demand will be inadequate by year three; laundry sized for year-five demand will hemorrhage cash through year one. The right answer is a phased build-out plan tied to phased revenue.",
    ],
    painPoints: [
      {
        title: 'Capacity sized to day-one or to year-five.',
        description:
          'Mega-development opens phased over 5-7 years. Laundry capacity sized to a single point in that curve is wrong. Either CAPEX is wasted on idle capacity or capacity bottlenecks limit guest experience exactly when revenue is ramping.',
      },
      {
        title: 'Uniform program for 10,000+ employees unplanned.',
        description:
          'Operations director knows uniforms are coming. HR is sizing the workforce. Procurement is sourcing the uniforms. Nobody is responsible for the laundry-side operational reality at that scale.',
      },
      {
        title: 'Theme park textile categories missed.',
        description:
          "Costumes, plush characters, performance wear, character laundry, retail items, F&B linen. Each has different processing requirements. Most laundry contracts get this wrong on category-pricing and on operational handling.",
      },
      {
        title: 'Water park peak rotation underestimated.',
        description:
          'Saturday peak at a water park is 5-8x weekday average for towels. The laundry partner needs to either ramp staff and capacity for peaks or absorb stockouts. Neither happens by accident.',
      },
    ],
    helps: [
      {
        title: 'Mega-project laundry strategy',
        description:
          'Master plan for laundry across an entertainment destination. Own/contract/hybrid model, build-vs-buy, phasing tied to development phasing. I have done this at Lavndry-Qiddiya scale.',
      },
      {
        title: 'Peak-load capacity modeling',
        description:
          'Real peak vs average analysis. Theme park weekly cycle, seasonal cycle, event spikes. Capacity sized to handle the peak without ruinous off-peak idle time.',
      },
      {
        title: 'Uniform program at theme-park scale',
        description:
          'Sizing, rotation, damage logistics, replacement, character/costume handling. Operational integration with HR and procurement.',
      },
      {
        title: 'Water park towel rotation strategy',
        description:
          'High-volume turnaround within a single park day. Staffing, processing flow, peak vs off-peak rotation models.',
      },
      {
        title: 'Phased build-out plans',
        description:
          'Laundry CAPEX phased to match development phasing. Modular capacity additions, equipment selection that scales, manning ramp aligned to revenue ramp.',
      },
    ],
    projects: [
      {
        name: 'Lavndry — Qiddiya 5-Year Exclusive',
        meta: 'Saudi Arabia · 2024 — 2029',
        stat: '31,500',
        statLabel: 'Pieces/day at full capacity',
        description:
          'Operational architect of the platform that secured the Qiddiya exclusive laundry agreement — Six Flags at 25,000 garments/day and Aqua Arabia at 6,500 pieces/day. Five-year contract.',
      },
      {
        name: 'London 2012 Olympics',
        meta: 'London · 2012',
        stat: '30,000',
        statLabel: 'Garments/day peak',
        description:
          'Operations Director through the London 2012 Olympic Games. The mega-event laundry precedent — peak operations of 30,000 garments daily plus 76,000 kg linen daily on 6-24 hour turnarounds.',
      },
      {
        name: 'Lavndry — Amaala (Red Sea Global)',
        meta: 'Saudi Arabia · 2023 — Present',
        stat: 'Active',
        statLabel: 'Mega-project operating contract',
        description:
          'Operating contract on Red Sea Global flagship development. Profitable from operational year one under no-CAPEX operating contract model.',
      },
    ],
    formPrompt:
      'Tell me about the destination — type (theme park, water park, mega-resort, mixed-use), phasing plan, anticipated guest volume, and what stage you are at.',
  },
];

export const getIndustryBySlug = (slug: string): Industry | undefined =>
  industries.find((i) => i.slug === slug);
