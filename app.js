const WORDS = [
  {w:"abandon",p:"v.",m:"버리다, 포기하다",e:"The company decided to abandon its unprofitable subsidiary last year.",et:"그 회사는 작년에 수익성이 낮은 자회사를 포기하기로 결정했다."},{w:"abide",p:"v.",m:"따르다, 지키다",e:"All employees must abide by the company's code of conduct.",et:"모든 직원은 회사의 행동 강령을 준수해야 한다."},{w:"abolish",p:"v.",m:"폐지하다",e:"The new management decided to abolish outdated policies immediately.",et:"새로운 경영진은 구식 정책을 즉시 폐지하기로 결정했다."},{w:"abundant",p:"adj.",m:"풍부한",e:"The region has abundant natural resources for industrial development.",et:"그 지역은 산업 발전을 위한 풍부한 천연 자원을 보유하고 있다."},{w:"accelerate",p:"v.",m:"가속하다, 촉진하다",e:"Digital transformation will accelerate business growth significantly this quarter.",et:"디지털 전환은 이번 분기 사업 성장을 크게 촉진할 것이다."},
  {w:"accommodate",p:"v.",m:"수용하다, 제공하다",e:"The new office building can accommodate up to five hundred employees.",et:"새 사무실 건물은 최대 500명의 직원을 수용할 수 있다."},{w:"accomplish",p:"v.",m:"성취하다, 완수하다",e:"The project team accomplished all objectives within the budget deadline.",et:"프로젝트 팀은 예산 마감 내에 모든 목표를 달성했다."},{w:"accountable",p:"adj.",m:"책임이 있는",e:"Department heads are accountable for their team's quarterly performance metrics.",et:"부서장은 팀의 분기별 성과에 책임이 있다."},{w:"accurate",p:"adj.",m:"정확한",e:"Accurate financial reporting is essential for investor confidence and compliance.",et:"정확한 재무 보고는 투자자 신뢰와 규정 준수에 필수적이다."},{w:"acquire",p:"v.",m:"획득하다, 습득하다",e:"The firm plans to acquire three competing companies by next year.",et:"그 회사는 내년까지 경쟁사 3개를 인수할 계획이다."},
  {w:"adequate",p:"adj.",m:"적절한, 충분한",e:"Adequate training resources must be provided for all new hires immediately.",et:"모든 신입 직원에게 충분한 교육 자료를 제공해야 한다."},{w:"adjacent",p:"adj.",m:"인접한",e:"Our distribution center is adjacent to the major transportation hub.",et:"우리 배송 센터는 주요 교통 허브에 인접해 있다."},{w:"administrative",p:"adj.",m:"행정의, 관리의",e:"Administrative tasks have been streamlined through the new software system.",et:"행정 업무는 새로운 소프트웨어 시스템으로 간소화되었다."},{w:"advance",p:"v./n.",m:"전진하다, 발전; 진보",e:"Technological advances in automation will improve production efficiency significantly.",et:"자동화 기술의 발전은 생산 효율성을 크게 향상시킬 것이다."},{w:"adversely",p:"adv.",m:"불리하게, 역으로",e:"Supply chain disruptions adversely affected our quarterly sales performance.",et:"공급망 차질은 우리의 분기별 판매 실적에 부정적인 영향을 미쳤다."},
  {w:"affordable",p:"adj.",m:"감당할 수 있는, 저렴한",e:"We offer affordable pricing without compromising product quality standards.",et:"우리는 제품 품질 기준을 떨어뜨리지 않으면서 저렴한 가격을 제공한다."},{w:"aggregate",p:"v./n.",m:"합산하다; 총계",e:"The aggregate revenue from all divisions exceeded projections by ten percent.",et:"모든 부서의 합계 매출은 전망을 10% 초과했다."},{w:"allocate",p:"v.",m:"배분하다, 할당하다",e:"Management must allocate sufficient budget for research and development initiatives.",et:"경영진은 연구 개발 사업에 충분한 예산을 할당해야 한다."},{w:"alternative",p:"n./adj.",m:"대안; 대체적인",e:"We explored alternative suppliers to reduce procurement costs substantially.",et:"우리는 구매 비용을 대폭 줄이기 위해 대체 공급업체를 검토했다."},{w:"amenity",p:"n.",m:"편의시설, 쾌적함",e:"The new office amenities include fitness centers and break room facilities.",et:"새로운 사무실 편의시설에는 피트니스 센터와 휴게실이 포함되어 있다."},
  {w:"analyze",p:"v.",m:"분석하다",e:"We need to analyze the quarterly sales data carefully.",et:"우리는 분기별 판매 데이터를 신중하게 분석해야 합니다."},{w:"announce",p:"v.",m:"발표하다, 공지하다",e:"The CEO will announce the new product launch next week.",et:"CEO가 다음 주에 새 제품 출시를 발표할 것입니다."},{w:"anticipate",p:"v.",m:"예상하다, 기대하다",e:"We anticipate increased demand for our services this quarter.",et:"우리는 이번 분기에 서비스 수요가 증가할 것으로 예상합니다."},{w:"apply",p:"v.",m:"지원하다, 적용하다",e:"Please apply these changes to all customer accounts immediately.",et:"이 변경사항을 모든 고객 계정에 즉시 적용해 주세요."},{w:"appoint",p:"v.",m:"임명하다, 지정하다",e:"The board will appoint a new director at tomorrow's meeting.",et:"이사회는 내일 회의에서 새로운 이사를 임명할 것입니다."},
  {w:"appreciate",p:"v.",m:"감사하다, 감상하다",e:"We truly appreciate your continued support and partnership.",et:"귀사의 지속적인 지원과 협력에 진심으로 감사합니다."},{w:"approach",p:"n./v.",m:"접근법; 접근하다",e:"Our new approach to marketing has proven very effective.",et:"마케팅에 대한 우리의 새로운 접근법이 매우 효과적임이 입증되었습니다."},{w:"approve",p:"v.",m:"승인하다",e:"The manager must approve all expense reports before submission.",et:"관리자는 제출 전에 모든 경비 보고서를 승인해야 합니다."},{w:"arrange",p:"v.",m:"준비하다, 배열하다",e:"Please arrange the meeting with our Tokyo office for next month.",et:"내달을 위해 도쿄 사무소와의 회의를 준비해 주세요."},{w:"assess",p:"v.",m:"평가하다, 산정하다",e:"We need to assess the financial impact of this project carefully.",et:"이 프로젝트의 재정적 영향을 신중하게 평가해야 합니다."},
  {w:"assist",p:"v.",m:"돕다, 지원하다",e:"Our team will assist you with the implementation process.",et:"우리 팀이 구현 프로세스를 지원해 드리겠습니다."},{w:"assume",p:"v.",m:"가정하다, 맡다",e:"We assume the project will be completed by the deadline.",et:"우리는 프로젝트가 기한 내에 완료될 것으로 가정합니다."},{w:"assure",p:"v.",m:"확신시키다, 보증하다",e:"I can assure you that your data is completely secure.",et:"당신의 데이터가 완전히 안전하다는 것을 확신시켜 드립니다."},{w:"attain",p:"v.",m:"달성하다, 획득하다",e:"Our goal is to attain 20% growth in market share this year.",et:"우리의 목표는 올해 시장 점유율 20% 성장을 달성하는 것입니다."},{w:"authorize",p:"v.",m:"권한을 주다, 인가하다",e:"Only the director can authorize purchases over one million won.",et:"100만 원 이상의 구매는 이사만 인가할 수 있습니다."},
  {w:"available",p:"adj.",m:"이용 가능한, 구할 수 있는",e:"These premium features are available to all registered members.",et:"이 프리미엄 기능은 모든 등록 회원이 이용할 수 있습니다."},{w:"benefit",p:"n./v.",m:"이익, 혜택; 이득이 되다",e:"Employees benefit significantly from our comprehensive training programs.",et:"직원들은 우리의 포괄적인 교육 프로그램으로부터 크게 혜택을 받습니다."},{w:"budget",p:"n./v.",m:"예산; 예산을 세우다",e:"We need to budget more resources for research and development.",et:"우리는 연구 개발에 더 많은 자원을 배치해야 합니다."},{w:"candidate",p:"n.",m:"후보자, 지원자",e:"Three candidates are competing for the marketing director position.",et:"마케팅 이사 직무를 놓고 세 명의 지원자가 경쟁하고 있습니다."},{w:"capacity",p:"n.",m:"수용력, 능력, 용량",e:"Our production capacity will increase by 30% next quarter.",et:"우리의 생산 능력은 다음 분기에 30% 증가할 것입니다."},
  {w:"clarify",p:"v.",m:"명확히 하다",e:"Please clarify the project requirements during tomorrow's team meeting.",et:"내일 팀 회의에서 프로젝트 요구사항을 명확히 해주세요."},{w:"collaborate",p:"v.",m:"협력하다",e:"We need to collaborate with other departments to complete this project successfully.",et:"이 프로젝트를 성공적으로 완료하기 위해 다른 부서와 협력해야 합니다."},{w:"compensate",p:"v.",m:"보상하다",e:"The company will compensate employees for their overtime work during the quarter.",et:"회사는 분기 중 직원들의 초과 근무에 대해 보상할 것입니다."},{w:"compete",p:"v.",m:"경쟁하다",e:"Our firm must compete aggressively in the global market to increase market share.",et:"우리 회사는 시장 점유율을 높이기 위해 글로벌 시장에서 적극적으로 경쟁해야 합니다."},{w:"comply",p:"v.",m:"따르다, 준수하다",e:"All employees must comply with the new data protection regulations immediately.",et:"모든 직원은 새로운 데이터 보호 규정을 즉시 준수해야 합니다."},
  {w:"conduct",p:"v./n.",m:"수행하다; 행동",e:"We will conduct a comprehensive audit of the financial statements this month.",et:"이번 달에 재무제표에 대한 포괄적인 감사를 수행할 것입니다."},{w:"confirm",p:"v.",m:"확인하다",e:"Please confirm your attendance at the annual conference by Friday afternoon.",et:"금요일 오후까지 연례 컨퍼런스 참석 여부를 확인해주세요."},{w:"consult",p:"v.",m:"상담하다, 참고하다",e:"We should consult with legal experts before signing any international business agreements.",et:"국제 비즈니스 계약에 서명하기 전에 법률 전문가와 상담해야 합니다."},{w:"contract",p:"n./v.",m:"계약서; 계약하다",e:"The two companies signed a contract worth five million dollars for the project.",et:"두 회사는 이 프로젝트를 위해 500만 달러 규모의 계약을 체결했습니다."},{w:"contribute",p:"v.",m:"기여하다, 공헌하다",e:"Each team member should contribute their expertise to achieve our strategic objectives.",et:"각 팀 구성원은 전략적 목표 달성을 위해 자신의 전문 지식을 기여해야 합니다."},
  {w:"deadline",p:"n.",m:"마감 기한",e:"The project deadline has been extended to the end of next quarter.",et:"프로젝트 마감 기한이 다음 분기 말까지 연장되었습니다."},{w:"decline",p:"v./n.",m:"거절하다, 감소하다; 감소",e:"Sales have declined significantly due to increased competition in the market.",et:"시장의 치열한 경쟁으로 인해 판매가 크게 감소했습니다."},{w:"dedicate",p:"v.",m:"헌신하다, 바치다",e:"Our team is dedicated to delivering high-quality customer service daily.",et:"우리 팀은 매일 높은 품질의 고객 서비스를 제공하는 데 헌신하고 있습니다."},{w:"delay",p:"v./n.",m:"지연하다; 지연",e:"We must avoid any delays in shipping products to maintain client satisfaction.",et:"고객 만족도를 유지하기 위해 제품 배송 지연을 피해야 합니다."},{w:"deliver",p:"v.",m:"배달하다, 전달하다",e:"The logistics company will deliver the shipment by the agreed date tomorrow.",et:"물류 회사는 합의된 날짜인 내일까지 배송품을 배달할 것입니다."},
  {w:"demand",p:"n./v.",m:"수요; 요구하다",e:"Customers increasingly demand sustainable products from major corporations worldwide.",et:"고객들은 전 세계의 주요 기업에 지속 가능한 제품을 요구하고 있습니다."},{w:"demonstrate",p:"v.",m:"보여주다, 시연하다",e:"The vendor will demonstrate the new software features at next week's presentation.",et:"공급업체는 다음 주 프레젠테이션에서 새로운 소프트웨어 기능을 시연할 것입니다."},{w:"department",p:"n.",m:"부서, 학과",e:"Our marketing department is responsible for developing the quarterly promotional campaign.",et:"우리 마케팅 부서는 분기별 판촉 캠페인 개발을 담당하고 있습니다."},{w:"designate",p:"v.",m:"지정하다, 임명하다",e:"Management will designate a new project leader for the upcoming international expansion.",et:"경영진은 예정된 국제 확장 사업의 새로운 프로젝트 리더를 임명할 것입니다."},{w:"determine",p:"v.",m:"결정하다, 알아내다",e:"We need to determine the root cause of the quality issues in manufacturing.",et:"제조 과정의 품질 문제의 근본 원인을 파악해야 합니다."},
  {w:"distribute",p:"v.",m:"배포하다, 유통하다",e:"We need to distribute the new product catalog to all regional offices immediately.",et:"우리는 새로운 제품 카탈로그를 모든 지역 사무소에 즉시 배포해야 합니다."},{w:"draft",p:"n./v.",m:"초안; 초안을 작성하다",e:"Please draft a comprehensive proposal for the upcoming marketing campaign.",et:"다가오는 마케팅 캠페인을 위해 종합적인 제안서를 작성해 주세요."},{w:"effective",p:"adj.",m:"효과적인, 시행 중인",e:"The new cost-reduction strategy became effective starting from last month.",et:"새로운 비용 절감 전략은 지난달부터 시행되었습니다."},{w:"efficient",p:"adj.",m:"효율적인",e:"Our company implemented an efficient inventory management system recently.",et:"우리 회사는 최근에 효율적인 재고 관리 시스템을 도입했습니다."},{w:"eliminate",p:"v.",m:"제거하다, 없애다",e:"We should eliminate unnecessary processes to improve overall productivity.",et:"전반적인 생산성을 높이기 위해 불필요한 프로세스를 제거해야 합니다."},
  {w:"emerge",p:"v.",m:"나타나다, 부상하다",e:"Several promising startups have emerged in the technology sector this year.",et:"올해 기술 부문에서 여러 유망한 스타트업이 부상했습니다."},{w:"emphasize",p:"v.",m:"강조하다",e:"The CEO emphasized the importance of customer satisfaction in the meeting.",et:"CEO는 회의에서 고객 만족의 중요성을 강조했습니다."},{w:"employ",p:"v.",m:"고용하다, 사용하다",e:"The company plans to employ fifty new staff members next quarter.",et:"회사는 다음 분기에 50명의 신규 직원을 고용할 계획입니다."},{w:"enhance",p:"v.",m:"향상시키다",e:"We enhanced our customer service by implementing a new support system.",et:"우리는 새로운 지원 시스템을 도입하여 고객 서비스를 향상시켰습니다."},{w:"establish",p:"v.",m:"설립하다, 확립하다",e:"The company established a new branch office in the Asia-Pacific region.",et:"회사는 아시아태평양 지역에 새로운 지점을 설립했습니다."},
  {w:"evaluate",p:"v.",m:"평가하다",e:"Management will evaluate employee performance at the end of the fiscal year.",et:"경영진은 회계연도 말에 직원 성과를 평가할 것입니다."},{w:"exceed",p:"v.",m:"초과하다, 능가하다",e:"Our sales figures exceeded the projected targets by twenty percent this quarter.",et:"우리의 판매 실적은 이번 분기에 예상 목표를 20퍼센트 초과했습니다."},{w:"execute",p:"v.",m:"실행하다, 수행하다",e:"The project team will execute the implementation plan according to the schedule.",et:"프로젝트 팀은 일정에 따라 실행 계획을 수행할 것입니다."},{w:"expand",p:"v.",m:"확장하다",e:"The organization is planning to expand its operations into three new markets.",et:"조직은 세 개의 새로운 시장으로 사업 확장을 계획하고 있습니다."},{w:"expense",p:"n.",m:"비용, 경비",e:"All business travel expenses must be documented and submitted for reimbursement.",et:"모든 출장 비용은 기록하고 환급을 위해 제출해야 합니다."},
  {w:"facilitate",p:"v.",m:"용이하게 하다, 촉진하다",e:"The new software platform facilitates better communication between departments.",et:"새로운 소프트웨어 플랫폼은 부서 간 커뮤니케이션을 촉진합니다."},{w:"fluctuate",p:"v.",m:"변동하다",e:"Market prices fluctuate daily depending on supply and demand conditions.",et:"시장 가격은 수급 상황에 따라 매일 변동합니다."},{w:"forecast",p:"n./v.",m:"예측, 예보; 예측하다",e:"The financial analyst forecast significant growth for the next fiscal year.",et:"재무 분석가는 다음 회계연도에 상당한 성장을 예측했습니다."},{w:"fulfill",p:"v.",m:"이행하다, 충족시키다",e:"We must fulfill our contractual obligations to maintain the client relationship.",et:"우리는 고객 관계를 유지하기 위해 계약상 의무를 이행해야 합니다."},{w:"generate",p:"v.",m:"생성하다, 발생시키다",e:"The marketing campaign generated significant interest among potential customers.",et:"마케팅 캠페인은 잠재 고객들 사이에서 상당한 관심을 불러일으켰습니다."},
  {w:"guarantee",p:"n./v.",m:"보증; 보장하다",e:"We guarantee that all products meet the highest quality standards.",et:"우리는 모든 제품이 최고 품질 기준을 충족함을 보증합니다."},{w:"implement",p:"v.",m:"시행하다, 구현하다",e:"The company will implement new software systems next quarter.",et:"회사는 다음 분기에 새로운 소프트웨어 시스템을 시행할 것입니다."},{w:"improve",p:"v.",m:"개선하다, 향상시키다",e:"We need to improve our customer service response time immediately.",et:"우리는 고객 서비스 응답 시간을 즉시 개선해야 합니다."},{w:"incentive",p:"n.",m:"장려책, 인센티브",e:"Performance bonuses serve as incentives for employee productivity.",et:"성과급은 직원 생산성을 장려하는 인센티브로 작용합니다."},{w:"indicate",p:"v.",m:"나타내다, 표시하다",e:"Sales data indicates a significant increase in market demand.",et:"판매 데이터는 시장 수요의 상당한 증가를 나타냅니다."},
  {w:"initiate",p:"v.",m:"시작하다, 착수하다",e:"The manager will initiate a new project with the team tomorrow.",et:"매니저는 내일 팀과 함께 새로운 프로젝트를 착수할 것입니다."},{w:"inspect",p:"v.",m:"검사하다, 점검하다",e:"Quality control staff inspect every product before shipment.",et:"품질관리 직원들은 배송 전에 모든 제품을 검사합니다."},{w:"integrate",p:"v.",m:"통합하다",e:"We must integrate the two departments to streamline operations.",et:"업무를 간소화하기 위해 두 부서를 통합해야 합니다."},{w:"inventory",p:"n.",m:"재고, 목록",e:"The warehouse conducted a complete inventory count last week.",et:"창고에서 지난주에 완전한 재고 조사를 실시했습니다."},{w:"invest",p:"v.",m:"투자하다",e:"The company plans to invest heavily in research and development.",et:"회사는 연구 개발에 적극적으로 투자할 계획입니다."},
  {w:"maintain",p:"v.",m:"유지하다",e:"We must maintain high standards to retain our valued clients.",et:"고객을 유지하기 위해 높은 기준을 유지해야 합니다."},{w:"mandatory",p:"adj.",m:"의무적인",e:"Attendance at the annual conference is mandatory for all staff.",et:"연례 회의 참석은 모든 직원에게 의무적입니다."},{w:"negotiate",p:"v.",m:"협상하다",e:"Our sales team will negotiate better contract terms with suppliers.",et:"우리 영업팀은 공급업체와 더 나은 계약 조건을 협상할 것입니다."},{w:"obtain",p:"v.",m:"얻다, 획득하다",e:"You must obtain approval from the director before proceeding.",et:"진행하기 전에 이사로부터 승인을 얻어야 합니다."},{w:"optimize",p:"v.",m:"최적화하다",e:"We need to optimize our production process to reduce costs.",et:"비용을 줄이기 위해 생산 공정을 최적화해야 합니다."},
  {w:"outstanding",p:"adj.",m:"뛰어난, 미결의",e:"Her outstanding performance earned her a promotion this year.",et:"그녀의 뛰어난 성과가 올해 승진을 가져왔습니다."},{w:"oversee",p:"v.",m:"감독하다",e:"The project manager will oversee all aspects of the development.",et:"프로젝트 매니저가 개발의 모든 측면을 감독할 것입니다."},{w:"participate",p:"v.",m:"참여하다",e:"All employees are encouraged to participate in the training program.",et:"모든 직원들은 훈련 프로그램에 참여하도록 권장됩니다."},{w:"postpone",p:"v.",m:"연기하다",e:"The board decided to postpone the merger announcement until next month.",et:"이사회는 합병 발표를 다음 달로 연기하기로 결정했습니다."},{w:"procedure",p:"n.",m:"절차, 과정",e:"Please follow the standard procedure for submitting expense reports.",et:"경비 보고서 제출을 위한 표준 절차를 따르시기 바랍니다."},
  {w:"productive",p:"adj.",m:"생산적인",e:"We implemented new strategies to maintain productive workflow throughout the quarter.",et:"우리는 분기 동안 생산적인 업무 흐름을 유지하기 위해 새로운 전략을 시행했다."},{w:"propose",p:"v.",m:"제안하다",e:"The manager proposed a cost-reduction plan at the board meeting.",et:"그 관리자는 이사회 회의에서 비용 감축 계획을 제안했다."},{w:"qualify",p:"v.",m:"자격을 갖추다",e:"Candidates must qualify for the advanced position with relevant experience.",et:"지원자들은 관련 경험으로 고급 직책에 자격을 가져야 한다."},{w:"recommend",p:"v.",m:"추천하다, 권고하다",e:"I recommend approving the budget proposal before the fiscal year ends.",et:"나는 회계 연도가 끝나기 전에 예산안을 승인할 것을 권고한다."},{w:"reduce",p:"v.",m:"줄이다, 감소시키다",e:"The company aims to reduce operating costs by fifteen percent next year.",et:"그 회사는 내년에 운영 비용을 15% 줄이는 것을 목표로 한다."},
  {w:"reimburse",p:"v.",m:"환급하다, 상환하다",e:"We will reimburse your travel expenses within two business days.",et:"우리는 업무일 기준 이틀 안에 출장 비용을 환급해드릴 것입니다."},{w:"require",p:"v.",m:"필요로 하다, 요구하다",e:"The new position requires strong communication and analytical skills.",et:"그 새로운 직책은 뛰어난 의사소통 능력과 분석 능력이 필요하다."},{w:"resolve",p:"v.",m:"해결하다, 결심하다",e:"Our team resolved the system issue by conducting a thorough technical review.",et:"우리 팀은 철저한 기술 검토를 통해 시스템 문제를 해결했다."},{w:"responsibility",p:"n.",m:"책임",e:"Taking responsibility for project outcomes is essential for team success.",et:"프로젝트 결과에 대한 책임을 지는 것은 팀의 성공에 필수적이다."},{w:"revenue",p:"n.",m:"수익, 수입",e:"The company reported a twenty percent increase in quarterly revenue.",et:"그 회사는 분기 수익이 20% 증가했다고 보고했다."},
  {w:"revise",p:"v.",m:"수정하다, 개정하다",e:"Please revise the contract terms according to the client's feedback.",et:"고객의 피드백에 따라 계약 조건을 수정해주세요."},{w:"schedule",p:"n./v.",m:"일정; 일정을 잡다",e:"Let me schedule a meeting with the department heads next Monday.",et:"다음 월요일에 부서장들과의 회의 일정을 잡겠습니다."},{w:"submit",p:"v.",m:"제출하다",e:"All project proposals must be submitted by the end of this week.",et:"모든 프로젝트 제안은 이번 주 말까지 제출되어야 한다."},{w:"supervise",p:"v.",m:"감독하다",e:"The senior manager will supervise the implementation of the new system.",et:"그 선임 관리자가 새로운 시스템 도입을 감독할 것입니다."},{w:"supply",p:"n./v.",m:"공급; 공급하다",e:"We need to ensure adequate supply of materials for production.",et:"우리는 생산을 위한 충분한 자재 공급을 보장해야 한다."},
  {w:"terminate",p:"v.",m:"종료하다, 해고하다",e:"The contract will terminate automatically at the end of the fiscal period.",et:"그 계약은 회계 기간 말에 자동으로 종료될 것입니다."},{w:"transaction",p:"n.",m:"거래",e:"Each transaction must be documented and verified by the finance department.",et:"각 거래는 재무 부서가 기록하고 확인해야 한다."},{w:"transition",p:"n./v.",m:"전환; 전환하다",e:"The transition to the new software system will take approximately three months.",et:"새로운 소프트웨어 시스템으로의 전환에는 약 3개월이 소요될 것입니다."},{w:"update",p:"v./n.",m:"업데이트하다; 최신 정보",e:"Please update your contact information in the company database today.",et:"오늘 회사 데이터베이스에서 연락처 정보를 업데이트해주세요."},{w:"utilize",p:"v.",m:"활용하다, 이용하다",e:"We utilize advanced analytics tools to improve our business decisions.",et:"우리는 업무 의사결정을 개선하기 위해 고급 분석 도구를 활용한다."}
];

function speak(text) {
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'en-US';
  utter.rate = 0.9;
  speechSynthesis.cancel();
  speechSynthesis.speak(utter);
}

let quiz = { mode:'', list:[], idx:0, score:0, answered:false };
let wrongWords = JSON.parse(localStorage.getItem('toeic_wrong') || '{}');

function saveWrong(word) {
  wrongWords[word.w] = wrongWords[word.w] || {w:word.w, p:word.p, m:word.m, count:0};
  wrongWords[word.w].count++;
  localStorage.setItem('toeic_wrong', JSON.stringify(wrongWords));
  updateWrongBadge();
}

function updateWrongBadge() {
  const count = Object.keys(wrongWords).length;
  const badge = document.getElementById('wrong-badge');
  badge.textContent = count > 0 ? ` (${count})` : '';
}

function clearWrong() {
  if (!confirm('오답 노트를 모두 삭제할까요?')) return;
  wrongWords = {};
  localStorage.removeItem('toeic_wrong');
  updateWrongBadge();
  renderWrongList();
}

function switchTab(name) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav button').forEach(el => el.classList.remove('active'));
  document.getElementById('tab-'+name).classList.add('active');
  const idx = ['quiz1','quiz2','wrong'].indexOf(name);
  document.querySelectorAll('.nav button')[idx].classList.add('active');
  if (name === 'wrong') renderWrongList();
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length-1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

function startQuiz(mode) {
  const selectId = mode === 'q1' ? 'q1-count' : 'q2-count';
  const countVal = document.getElementById(selectId).value;
  let list = shuffle(WORDS);
  if (countVal !== 'all') list = list.slice(0, parseInt(countVal));
  quiz = { mode, list, idx:0, score:0, answered:false };
  renderQuestion();
}

function renderQuestion() {
  const area = document.getElementById(quiz.mode+'-area');
  if (quiz.idx >= quiz.list.length) { renderResult(area); return; }

  const word = quiz.list[quiz.idx];
  const pct = Math.round((quiz.idx / quiz.list.length) * 100);

  if (quiz.mode === 'q1') {
    const wrongPool = WORDS.filter(w => w.w !== word.w);
    const choices = shuffle([word, ...shuffle(wrongPool).slice(0, 3)]);

    area.innerHTML = `
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
      <div class="progress-text">${quiz.idx+1} / ${quiz.list.length}  ·  맞춤: ${quiz.score}</div>
      <div class="card">
        <div class="part-of-speech">${word.p}</div>
        <div class="word">${word.w} <button class="speak-btn" onclick="speak('${word.w}')" title="발음 듣기">🔊</button></div>
        <div class="hint">뜻을 고르세요</div>
        <div class="options">
          ${choices.map(c => `<button class="option-btn" onclick="checkQ1(this,'${c.w}','${word.w}')">${c.m}</button>`).join('')}
        </div>
        <div class="feedback" id="fb"></div>
        <button class="next-btn" id="next-btn" onclick="nextQ()">다음 →</button>
      </div>`;
  } else {
    area.innerHTML = `
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
      <div class="progress-text">${quiz.idx+1} / ${quiz.list.length}  ·  맞춤: ${quiz.score}</div>
      <div class="card">
        <div class="hint" style="font-size:1rem; color:#374151; font-weight:600; margin-bottom:4px;">${word.m}</div>
        <div class="hint">[${word.p}] 영단어를 입력하세요</div>
        <div class="type-input-wrap">
          <input class="type-input" id="type-input" placeholder="영어로 입력..." onkeydown="if(event.key==='Enter')checkQ2()">
          <button class="submit-btn" onclick="checkQ2()">확인</button>
        </div>
        <div class="feedback" id="fb"></div>
        <button class="next-btn" id="next-btn" onclick="nextQ()">다음 →</button>
      </div>`;
    setTimeout(() => document.getElementById('type-input')?.focus(), 50);
  }
}

function checkQ1(btn, chosen, correct) {
  if (quiz.answered) return;
  quiz.answered = true;
  const word = quiz.list[quiz.idx];
  const btns = btn.parentElement.querySelectorAll('.option-btn');
  btns.forEach(b => b.disabled = true);

  if (chosen === correct) {
    btn.classList.add('correct');
    quiz.score++;
    showFeedback(true, '정답!', word);
  } else {
    btn.classList.add('wrong');
    btns.forEach(b => { if (b.textContent === word.m) b.classList.add('correct'); });
    saveWrong(word);
    showFeedback(false, '오답 — 정답: ' + word.m, word);
  }
  document.getElementById('next-btn').classList.add('show');
}

function checkQ2() {
  if (quiz.answered) return;
  const input = document.getElementById('type-input');
  if (!input) return;
  const val = input.value.trim().toLowerCase();
  if (!val) return;
  quiz.answered = true;
  input.disabled = true;
  document.querySelector('.submit-btn').disabled = true;

  const word = quiz.list[quiz.idx];
  if (val === word.w.toLowerCase()) {
    quiz.score++;
    showFeedback(true, '정답!', word);
  } else {
    saveWrong(word);
    showFeedback(false, '오답 — 정답: ' + word.w, word);
  }
  speak(word.w);
  document.getElementById('next-btn').classList.add('show');
}

function showFeedback(ok, msg, word) {
  const fb = document.getElementById('fb');
  let html = '<div class="fb-result">' + (ok ? '✅' : '❌') + ' ' + msg + '</div>';
  if (word && word.e) {
    html += '<div class="fb-example"><span class="fb-ex-en">' + word.e + ' <button class="speak-btn" onclick="speak('' + word.e.replace(/'/g, "'") + '')">🔊</button></span><span class="fb-ex-ko">' + (word.et || '') + '</span></div>';
  }
  fb.innerHTML = html;
  fb.className = 'feedback show ' + (ok ? 'correct' : 'wrong');
}

function nextQ() {
  quiz.idx++;
  quiz.answered = false;
  renderQuestion();
}

function renderResult(area) {
  const pct = Math.round((quiz.score / quiz.list.length) * 100);
  const emoji = pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📖';
  area.innerHTML = `
    <div class="result-card">
      <div style="font-size:3rem;">${emoji}</div>
      <div class="score">${quiz.score} / ${quiz.list.length}</div>
      <p>정답률 ${pct}%</p>
      <button onclick="startQuiz('${quiz.mode}')">다시 하기</button>
    </div>`;
}

function renderWrongList() {
  const list = document.getElementById('wrong-list');
  const items = Object.values(wrongWords).sort((a,b) => b.count - a.count);
  if (items.length === 0) {
    list.innerHTML = `<div class="empty-state"><div class="icon">🎯</div><div>오답 단어가 없어요!<br>퀴즈를 풀면 틀린 단어가 여기 쌓여요.</div></div>`;
    return;
  }
  list.innerHTML = items.map(it => `
    <div class="wrong-item">
      <div>
        <div class="wword">${it.w} <span style="font-size:0.75rem;color:#9ca3af;">${it.p}</span> <button class="speak-btn" onclick="speak('${it.w}')" title="발음 듣기">🔊</button></div>
        <div class="wmean">${it.m}</div>
      </div>
      <span class="wcount">틀림 ${it.count}회</span>
    </div>`).join('');
}

updateWrongBadge();
