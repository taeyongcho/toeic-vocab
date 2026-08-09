const WORDS = [
  {w:"abandon",p:"v.",m:"버리다, 포기하다",e:"The company decided to abandon its unprofitable subsidiary last year.",et:"그 회사는 작년에 수익성이 낮은 자회사를 포기하기로 결정했다."},{w:"abide",p:"v.",m:"따르다, 지키다",e:"All employees must abide by the company's code of conduct.",et:"모든 직원은 회사의 행동 강령을 준수해야 한다."},{w:"abolish",p:"v.",m:"폐지하다",e:"The new management decided to abolish outdated policies immediately.",et:"새로운 경영진은 구식 정책을 즉시 폐지하기로 결정했다."},{w:"abundant",p:"adj.",m:"풍부한",e:"The region has abundant natural resources for industrial development.",et:"그 지역은 산업 발전을 위한 풍부한 천연 자원을 보유하고 있다."},{w:"accelerate",p:"v.",m:"가속하다, 촉진하다",e:"Digital transformation will accelerate business growth significantly this quarter.",et:"디지털 전환은 이번 분기 사업 성장을 크게 촉진할 것이다."},{w:"accommodate",p:"v.",m:"수용하다, 제공하다",e:"The new office building can accommodate up to five hundred employees.",et:"새 사무실 건물은 최대 500명의 직원을 수용할 수 있다."},{w:"accomplish",p:"v.",m:"성취하다, 완수하다",e:"The project team accomplished all objectives within the budget deadline.",et:"프로젝트 팀은 예산 마감 내에 모든 목표를 달성했다."},{w:"accountable",p:"adj.",m:"책임이 있는",e:"Department heads are accountable for their team's quarterly performance metrics.",et:"부서장은 팀의 분기별 성과에 책임이 있다."},{w:"accurate",p:"adj.",m:"정확한",e:"Accurate financial reporting is essential for investor confidence and compliance.",et:"정확한 재무 보고는 투자자 신뢰와 규정 준수에 필수적이다."},{w:"acquire",p:"v.",m:"획득하다, 습득하다",e:"The firm plans to acquire three competing companies by next year.",et:"그 회사는 내년까지 경쟁사 3개를 인수할 계획이다."},
  {w:"adequate",p:"adj.",m:"적절한, 충분한",e:"Adequate training resources must be provided for all new hires immediately.",et:"모든 신입 직원에게 충분한 교육 자료를 제공해야 한다."},{w:"adjacent",p:"adj.",m:"인접한",e:"Our distribution center is adjacent to the major transportation hub.",et:"우리 배송 센터는 주요 교통 허브에 인접해 있다."},{w:"administrative",p:"adj.",m:"행정의, 관리의",e:"Administrative tasks have been streamlined through the new software system.",et:"행정 업무는 새로운 소프트웨어 시스템으로 간소화되었다."},{w:"advance",p:"v./n.",m:"전진하다, 발전; 진보",e:"Technological advances in automation will improve production efficiency significantly.",et:"자동화 기술의 발전은 생산 효율성을 크게 향상시킬 것이다."},{w:"adversely",p:"adv.",m:"불리하게, 역으로",e:"Supply chain disruptions adversely affected our quarterly sales performance.",et:"공급망 차질은 우리의 분기별 판매 실적에 부정적인 영향을 미쳤다."},{w:"affordable",p:"adj.",m:"감당할 수 있는, 저렴한",e:"We offer affordable pricing without compromising product quality standards.",et:"우리는 제품 품질 기준을 떨어뜨리지 않으면서 저렴한 가격을 제공한다."},{w:"aggregate",p:"v./n.",m:"합산하다; 총계",e:"The aggregate revenue from all divisions exceeded projections by ten percent.",et:"모든 부서의 합계 매출은 전망을 10% 초과했다."},{w:"allocate",p:"v.",m:"배분하다, 할당하다",e:"Management must allocate sufficient budget for research and development initiatives.",et:"경영진은 연구 개발 사업에 충분한 예산을 할당해야 한다."},{w:"alternative",p:"n./adj.",m:"대안; 대체적인",e:"We explored alternative suppliers to reduce procurement costs substantially.",et:"우리는 구매 비용을 대폭 줄이기 위해 대체 공급업체를 검토했다."},{w:"amenity",p:"n.",m:"편의시설, 쾌적함",e:"The new office amenities include fitness centers and break room facilities.",et:"새로운 사무실 편의시설에는 피트니스 센터와 휴게실이 포함되어 있다."},
  {w:"analyze",p:"v.",m:"분석하다",e:"We need to analyze the quarterly sales data carefully.",et:"우리는 분기별 판매 데이터를 신중하게 분석해야 합니다."},{w:"announce",p:"v.",m:"발표하다, 공지하다",e:"The CEO will announce the new product launch next week.",et:"CEO가 다음 주에 새 제품 출시를 발표할 것입니다."},{w:"anticipate",p:"v.",m:"예상하다, 기대하다",e:"We anticipate increased demand for our services this quarter.",et:"우리는 이번 분기에 서비스 수요가 증가할 것으로 예상합니다."},{w:"apply",p:"v.",m:"지원하다, 적용하다",e:"Please apply these changes to all customer accounts immediately.",et:"이 변경사항을 모든 고객 계정에 즉시 적용해 주세요."},{w:"appoint",p:"v.",m:"임명하다, 지정하다",e:"The board will appoint a new director at tomorrow's meeting.",et:"이사회는 내일 회의에서 새로운 이사를 임명할 것입니다."},{w:"appreciate",p:"v.",m:"감사하다, 감상하다",e:"We truly appreciate your continued support and partnership.",et:"귀사의 지속적인 지원과 협력에 진심으로 감사합니다."},{w:"approach",p:"n./v.",m:"접근법; 접근하다",e:"Our new approach to marketing has proven very effective.",et:"마케팅에 대한 우리의 새로운 접근법이 매우 효과적임이 입증되었습니다."},{w:"approve",p:"v.",m:"승인하다",e:"The manager must approve all expense reports before submission.",et:"관리자는 제출 전에 모든 경비 보고서를 승인해야 합니다."},{w:"arrange",p:"v.",m:"준비하다, 배열하다",e:"Please arrange the meeting with our Tokyo office for next month.",et:"내달을 위해 도쿄 사무소와의 회의를 준비해 주세요."},{w:"assess",p:"v.",m:"평가하다, 산정하다",e:"We need to assess the financial impact of this project carefully.",et:"이 프로젝트의 재정적 영향을 신중하게 평가해야 합니다."},
  {w:"assist",p:"v.",m:"돕다, 지원하다",e:"Our team will assist you with the implementation process.",et:"우리 팀이 구현 프로세스를 지원해 드리겠습니다."},{w:"assume",p:"v.",m:"가정하다, 맡다",e:"We assume the project will be completed by the deadline.",et:"우리는 프로젝트가 기한 내에 완료될 것으로 가정합니다."},{w:"assure",p:"v.",m:"확신시키다, 보증하다",e:"I can assure you that your data is completely secure.",et:"당신의 데이터가 완전히 안전하다는 것을 확신시켜 드립니다."},{w:"attain",p:"v.",m:"달성하다, 획득하다",e:"Our goal is to attain 20% growth in market share this year.",et:"우리의 목표는 올해 시장 점유율 20% 성장을 달성하는 것입니다."},{w:"authorize",p:"v.",m:"권한을 주다, 인가하다",e:"Only the director can authorize purchases over one million won.",et:"100만 원 이상의 구매는 이사만 인가할 수 있습니다."},{w:"available",p:"adj.",m:"이용 가능한, 구할 수 있는",e:"These premium features are available to all registered members.",et:"이 프리미엄 기능은 모든 등록 회원이 이용할 수 있습니다."},{w:"benefit",p:"n./v.",m:"이익, 혜택; 이득이 되다",e:"Employees benefit significantly from our comprehensive training programs.",et:"직원들은 우리의 포괄적인 교육 프로그램으로부터 크게 혜택을 받습니다."},{w:"budget",p:"n./v.",m:"예산; 예산을 세우다",e:"We need to budget more resources for research and development.",et:"우리는 연구 개발에 더 많은 자원을 배치해야 합니다."},{w:"candidate",p:"n.",m:"후보자, 지원자",e:"Three candidates are competing for the marketing director position.",et:"마케팅 이사 직무를 놓고 세 명의 지원자가 경쟁하고 있습니다."},{w:"capacity",p:"n.",m:"수용력, 능력, 용량",e:"Our production capacity will increase by 30% next quarter.",et:"우리의 생산 능력은 다음 분기에 30% 증가할 것입니다."},
  {w:"clarify",p:"v.",m:"명확히 하다",e:"Please clarify the project requirements during tomorrow's team meeting.",et:"내일 팀 회의에서 프로젝트 요구사항을 명확히 해주세요."},{w:"collaborate",p:"v.",m:"협력하다",e:"We need to collaborate with other departments to complete this project successfully.",et:"이 프로젝트를 성공적으로 완료하기 위해 다른 부서와 협력해야 합니다."},{w:"compensate",p:"v.",m:"보상하다",e:"The company will compensate employees for their overtime work during the quarter.",et:"회사는 분기 중 직원들의 초과 근무에 대해 보상할 것입니다."},{w:"compete",p:"v.",m:"경쟁하다",e:"Our firm must compete aggressively in the global market to increase market share.",et:"우리 회사는 시장 점유율을 높이기 위해 글로벌 시장에서 적극적으로 경쟁해야 합니다."},{w:"comply",p:"v.",m:"따르다, 준수하다",e:"All employees must comply with the new data protection regulations immediately.",et:"모든 직원은 새로운 데이터 보호 규정을 즉시 준수해야 합니다."},{w:"conduct",p:"v./n.",m:"수행하다; 행동",e:"We will conduct a comprehensive audit of the financial statements this month.",et:"이번 달에 재무제표에 대한 포괄적인 감사를 수행할 것입니다."},{w:"confirm",p:"v.",m:"확인하다",e:"Please confirm your attendance at the annual conference by Friday afternoon.",et:"금요일 오후까지 연례 컨퍼런스 참석 여부를 확인해주세요."},{w:"consult",p:"v.",m:"상담하다, 참고하다",e:"We should consult with legal experts before signing any international business agreements.",et:"국제 비즈니스 계약에 서명하기 전에 법률 전문가와 상담해야 합니다."},{w:"contract",p:"n./v.",m:"계약서; 계약하다",e:"The two companies signed a contract worth five million dollars for the project.",et:"두 회사는 이 프로젝트를 위해 500만 달러 규모의 계약을 체결했습니다."},{w:"contribute",p:"v.",m:"기여하다, 공헌하다",e:"Each team member should contribute their expertise to achieve our strategic objectives.",et:"각 팀 구성원은 전략적 목표 달성을 위해 자신의 전문 지식을 기여해야 합니다."},
  {w:"deadline",p:"n.",m:"마감 기한",e:"The project deadline has been extended to the end of next quarter.",et:"프로젝트 마감 기한이 다음 분기 말까지 연장되었습니다."},{w:"decline",p:"v./n.",m:"거절하다, 감소하다; 감소",e:"Sales have declined significantly due to increased competition in the market.",et:"시장의 치열한 경쟁으로 인해 판매가 크게 감소했습니다."},{w:"dedicate",p:"v.",m:"헌신하다, 바치다",e:"Our team is dedicated to delivering high-quality customer service daily.",et:"우리 팀은 매일 높은 품질의 고객 서비스를 제공하는 데 헌신하고 있습니다."},{w:"delay",p:"v./n.",m:"지연하다; 지연",e:"We must avoid any delays in shipping products to maintain client satisfaction.",et:"고객 만족도를 유지하기 위해 제품 배송 지연을 피해야 합니다."},{w:"deliver",p:"v.",m:"배달하다, 전달하다",e:"The logistics company will deliver the shipment by the agreed date tomorrow.",et:"물류 회사는 합의된 날짜인 내일까지 배송품을 배달할 것입니다."},{w:"demand",p:"n./v.",m:"수요; 요구하다",e:"Customers increasingly demand sustainable products from major corporations worldwide.",et:"고객들은 전 세계의 주요 기업에 지속 가능한 제품을 요구하고 있습니다."},{w:"demonstrate",p:"v.",m:"보여주다, 시연하다",e:"The vendor will demonstrate the new software features at next week's presentation.",et:"공급업체는 다음 주 프레젠테이션에서 새로운 소프트웨어 기능을 시연할 것입니다."},{w:"department",p:"n.",m:"부서, 학과",e:"Our marketing department is responsible for developing the quarterly promotional campaign.",et:"우리 마케팅 부서는 분기별 판촉 캠페인 개발을 담당하고 있습니다."},{w:"designate",p:"v.",m:"지정하다, 임명하다",e:"Management will designate a new project leader for the upcoming international expansion.",et:"경영진은 예정된 국제 확장 사업의 새로운 프로젝트 리더를 임명할 것입니다."},{w:"determine",p:"v.",m:"결정하다, 알아내다",e:"We need to determine the root cause of the quality issues in manufacturing.",et:"제조 과정의 품질 문제의 근본 원인을 파악해야 합니다."},
  {w:"distribute",p:"v.",m:"배포하다, 유통하다",e:"We need to distribute the new product catalog to all regional offices immediately.",et:"우리는 새로운 제품 카탈로그를 모든 지역 사무소에 즉시 배포해야 합니다."},{w:"draft",p:"n./v.",m:"초안; 초안을 작성하다",e:"Please draft a comprehensive proposal for the upcoming marketing campaign.",et:"다가오는 마케팅 캠페인을 위해 종합적인 제안서를 작성해 주세요."},{w:"effective",p:"adj.",m:"효과적인, 시행 중인",e:"The new cost-reduction strategy became effective starting from last month.",et:"새로운 비용 절감 전략은 지난달부터 시행되었습니다."},{w:"efficient",p:"adj.",m:"효율적인",e:"Our company implemented an efficient inventory management system recently.",et:"우리 회사는 최근에 효율적인 재고 관리 시스템을 도입했습니다."},{w:"eliminate",p:"v.",m:"제거하다, 없애다",e:"We should eliminate unnecessary processes to improve overall productivity.",et:"전반적인 생산성을 높이기 위해 불필요한 프로세스를 제거해야 합니다."},{w:"emerge",p:"v.",m:"나타나다, 부상하다",e:"Several promising startups have emerged in the technology sector this year.",et:"올해 기술 부문에서 여러 유망한 스타트업이 부상했습니다."},{w:"emphasize",p:"v.",m:"강조하다",e:"The CEO emphasized the importance of customer satisfaction in the meeting.",et:"CEO는 회의에서 고객 만족의 중요성을 강조했습니다."},{w:"employ",p:"v.",m:"고용하다, 사용하다",e:"The company plans to employ fifty new staff members next quarter.",et:"회사는 다음 분기에 50명의 신규 직원을 고용할 계획입니다."},{w:"enhance",p:"v.",m:"향상시키다",e:"We enhanced our customer service by implementing a new support system.",et:"우리는 새로운 지원 시스템을 도입하여 고객 서비스를 향상시켰습니다."},{w:"establish",p:"v.",m:"설립하다, 확립하다",e:"The company established a new branch office in the Asia-Pacific region.",et:"회사는 아시아태평양 지역에 새로운 지점을 설립했습니다."},
  {w:"evaluate",p:"v.",m:"평가하다",e:"Management will evaluate employee performance at the end of the fiscal year.",et:"경영진은 회계연도 말에 직원 성과를 평가할 것입니다."},{w:"exceed",p:"v.",m:"초과하다, 능가하다",e:"Our sales figures exceeded the projected targets by twenty percent this quarter.",et:"우리의 판매 실적은 이번 분기에 예상 목표를 20퍼센트 초과했습니다."},{w:"execute",p:"v.",m:"실행하다, 수행하다",e:"The project team will execute the implementation plan according to the schedule.",et:"프로젝트 팀은 일정에 따라 실행 계획을 수행할 것입니다."},{w:"expand",p:"v.",m:"확장하다",e:"The organization is planning to expand its operations into three new markets.",et:"조직은 세 개의 새로운 시장으로 사업 확장을 계획하고 있습니다."},{w:"expense",p:"n.",m:"비용, 경비",e:"All business travel expenses must be documented and submitted for reimbursement.",et:"모든 출장 비용은 기록하고 환급을 위해 제출해야 합니다."},{w:"facilitate",p:"v.",m:"용이하게 하다, 촉진하다",e:"The new software platform facilitates better communication between departments.",et:"새로운 소프트웨어 플랫폼은 부서 간 커뮤니케이션을 촉진합니다."},{w:"fluctuate",p:"v.",m:"변동하다",e:"Market prices fluctuate daily depending on supply and demand conditions.",et:"시장 가격은 수급 상황에 따라 매일 변동합니다."},{w:"forecast",p:"n./v.",m:"예측, 예보; 예측하다",e:"The financial analyst forecast significant growth for the next fiscal year.",et:"재무 분석가는 다음 회계연도에 상당한 성장을 예측했습니다."},{w:"fulfill",p:"v.",m:"이행하다, 충족시키다",e:"We must fulfill our contractual obligations to maintain the client relationship.",et:"우리는 고객 관계를 유지하기 위해 계약상 의무를 이행해야 합니다."},{w:"generate",p:"v.",m:"생성하다, 발생시키다",e:"The marketing campaign generated significant interest among potential customers.",et:"마케팅 캠페인은 잠재 고객들 사이에서 상당한 관심을 불러일으켰습니다."},
  {w:"guarantee",p:"n./v.",m:"보증; 보장하다",e:"We guarantee that all products meet the highest quality standards.",et:"우리는 모든 제품이 최고 품질 기준을 충족함을 보증합니다."},{w:"implement",p:"v.",m:"시행하다, 구현하다",e:"The company will implement new software systems next quarter.",et:"회사는 다음 분기에 새로운 소프트웨어 시스템을 시행할 것입니다."},{w:"improve",p:"v.",m:"개선하다, 향상시키다",e:"We need to improve our customer service response time immediately.",et:"우리는 고객 서비스 응답 시간을 즉시 개선해야 합니다."},{w:"incentive",p:"n.",m:"장려책, 인센티브",e:"Performance bonuses serve as incentives for employee productivity.",et:"성과급은 직원 생산성을 장려하는 인센티브로 작용합니다."},{w:"indicate",p:"v.",m:"나타내다, 표시하다",e:"Sales data indicates a significant increase in market demand.",et:"판매 데이터는 시장 수요의 상당한 증가를 나타냅니다."},{w:"initiate",p:"v.",m:"시작하다, 착수하다",e:"The manager will initiate a new project with the team tomorrow.",et:"매니저는 내일 팀과 함께 새로운 프로젝트를 착수할 것입니다."},{w:"inspect",p:"v.",m:"검사하다, 점검하다",e:"Quality control staff inspect every product before shipment.",et:"품질관리 직원들은 배송 전에 모든 제품을 검사합니다."},{w:"integrate",p:"v.",m:"통합하다",e:"We must integrate the two departments to streamline operations.",et:"업무를 간소화하기 위해 두 부서를 통합해야 합니다."},{w:"inventory",p:"n.",m:"재고, 목록",e:"The warehouse conducted a complete inventory count last week.",et:"창고에서 지난주에 완전한 재고 조사를 실시했습니다."},{w:"invest",p:"v.",m:"투자하다",e:"The company plans to invest heavily in research and development.",et:"회사는 연구 개발에 적극적으로 투자할 계획입니다."},
  {w:"maintain",p:"v.",m:"유지하다",e:"We must maintain high standards to retain our valued clients.",et:"고객을 유지하기 위해 높은 기준을 유지해야 합니다."},{w:"mandatory",p:"adj.",m:"의무적인",e:"Attendance at the annual conference is mandatory for all staff.",et:"연례 회의 참석은 모든 직원에게 의무적입니다."},{w:"negotiate",p:"v.",m:"협상하다",e:"Our sales team will negotiate better contract terms with suppliers.",et:"우리 영업팀은 공급업체와 더 나은 계약 조건을 협상할 것입니다."},{w:"obtain",p:"v.",m:"얻다, 획득하다",e:"You must obtain approval from the director before proceeding.",et:"진행하기 전에 이사로부터 승인을 얻어야 합니다."},{w:"optimize",p:"v.",m:"최적화하다",e:"We need to optimize our production process to reduce costs.",et:"비용을 줄이기 위해 생산 공정을 최적화해야 합니다."},{w:"outstanding",p:"adj.",m:"뛰어난, 미결의",e:"Her outstanding performance earned her a promotion this year.",et:"그녀의 뛰어난 성과가 올해 승진을 가져왔습니다."},{w:"oversee",p:"v.",m:"감독하다",e:"The project manager will oversee all aspects of the development.",et:"프로젝트 매니저가 개발의 모든 측면을 감독할 것입니다."},{w:"participate",p:"v.",m:"참여하다",e:"All employees are encouraged to participate in the training program.",et:"모든 직원들은 훈련 프로그램에 참여하도록 권장됩니다."},{w:"postpone",p:"v.",m:"연기하다",e:"The board decided to postpone the merger announcement until next month.",et:"이사회는 합병 발표를 다음 달로 연기하기로 결정했습니다."},{w:"procedure",p:"n.",m:"절차, 과정",e:"Please follow the standard procedure for submitting expense reports.",et:"경비 보고서 제출을 위한 표준 절차를 따르시기 바랍니다."},
  {w:"productive",p:"adj.",m:"생산적인",e:"We implemented new strategies to maintain productive workflow throughout the quarter.",et:"우리는 분기 동안 생산적인 업무 흐름을 유지하기 위해 새로운 전략을 시행했다."},{w:"propose",p:"v.",m:"제안하다",e:"The manager proposed a cost-reduction plan at the board meeting.",et:"그 관리자는 이사회 회의에서 비용 감축 계획을 제안했다."},{w:"qualify",p:"v.",m:"자격을 갖추다",e:"Candidates must qualify for the advanced position with relevant experience.",et:"지원자들은 관련 경험으로 고급 직책에 자격을 가져야 한다."},{w:"recommend",p:"v.",m:"추천하다, 권고하다",e:"I recommend approving the budget proposal before the fiscal year ends.",et:"나는 회계 연도가 끝나기 전에 예산안을 승인할 것을 권고한다."},{w:"reduce",p:"v.",m:"줄이다, 감소시키다",e:"The company aims to reduce operating costs by fifteen percent next year.",et:"그 회사는 내년에 운영 비용을 15% 줄이는 것을 목표로 한다."},{w:"reimburse",p:"v.",m:"환급하다, 상환하다",e:"We will reimburse your travel expenses within two business days.",et:"우리는 업무일 기준 이틀 안에 출장 비용을 환급해드릴 것입니다."},{w:"require",p:"v.",m:"필요로 하다, 요구하다",e:"The new position requires strong communication and analytical skills.",et:"그 새로운 직책은 뛰어난 의사소통 능력과 분석 능력이 필요하다."},{w:"resolve",p:"v.",m:"해결하다, 결심하다",e:"Our team resolved the system issue by conducting a thorough technical review.",et:"우리 팀은 철저한 기술 검토를 통해 시스템 문제를 해결했다."},{w:"responsibility",p:"n.",m:"책임",e:"Taking responsibility for project outcomes is essential for team success.",et:"프로젝트 결과에 대한 책임을 지는 것은 팀의 성공에 필수적이다."},{w:"revenue",p:"n.",m:"수익, 수입",e:"The company reported a twenty percent increase in quarterly revenue.",et:"그 회사는 분기 수익이 20% 증가했다고 보고했다."},
  {w:"revise",p:"v.",m:"수정하다, 개정하다",e:"Please revise the contract terms according to the client's feedback.",et:"고객의 피드백에 따라 계약 조건을 수정해주세요."},{w:"schedule",p:"n./v.",m:"일정; 일정을 잡다",e:"Let me schedule a meeting with the department heads next Monday.",et:"다음 월요일에 부서장들과의 회의 일정을 잡겠습니다."},{w:"submit",p:"v.",m:"제출하다",e:"All project proposals must be submitted by the end of this week.",et:"모든 프로젝트 제안은 이번 주 말까지 제출되어야 한다."},{w:"supervise",p:"v.",m:"감독하다",e:"The senior manager will supervise the implementation of the new system.",et:"그 선임 관리자가 새로운 시스템 도입을 감독할 것입니다."},{w:"supply",p:"n./v.",m:"공급; 공급하다",e:"We need to ensure adequate supply of materials for production.",et:"우리는 생산을 위한 충분한 자재 공급을 보장해야 한다."},{w:"terminate",p:"v.",m:"종료하다, 해고하다",e:"The contract will terminate automatically at the end of the fiscal period.",et:"그 계약은 회계 기간 말에 자동으로 종료될 것입니다."},{w:"transaction",p:"n.",m:"거래",e:"Each transaction must be documented and verified by the finance department.",et:"각 거래는 재무 부서가 기록하고 확인해야 한다."},{w:"transition",p:"n./v.",m:"전환; 전환하다",e:"The transition to the new software system will take approximately three months.",et:"새로운 소프트웨어 시스템으로의 전환에는 약 3개월이 소요될 것입니다."},{w:"update",p:"v./n.",m:"업데이트하다; 최신 정보",e:"Please update your contact information in the company database today.",et:"오늘 회사 데이터베이스에서 연락처 정보를 업데이트해주세요."},{w:"utilize",p:"v.",m:"활용하다, 이용하다",e:"We utilize advanced analytics tools to improve our business decisions.",et:"우리는 업무 의사결정을 개선하기 위해 고급 분석 도구를 활용한다."},
  {w:"substantiate",p:"v.",m:"입증하다, 확실하게 하다",e:"The auditor required documentation to substantiate the company's financial claims.",et:"감사인은 회사의 재무 주장을 입증할 문서를 요구했다."},{w:"proliferate",p:"v.",m:"급증하다, 번식하다",e:"Mobile payment options have proliferated in the retail sector over the past decade.",et:"지난 10년간 소매 부문에서 모바일 결제 옵션이 급증했다."},{w:"mitigate",p:"v.",m:"완화하다, 경감하다",e:"The company implemented new safety protocols to mitigate potential workplace risks.",et:"회사는 잠재적 직장 위험을 완화하기 위해 새로운 안전 프로토콜을 시행했다."},{w:"fortuitous",p:"adj.",m:"우연의, 행운의",e:"The fortuitous discovery of the error prevented significant financial losses.",et:"그 오류의 우연한 발견이 큰 재정적 손실을 방지했다."},{w:"exacerbate",p:"v.",m:"악화시키다, 심하게 하다",e:"Rising interest rates exacerbated the company's debt situation considerably.",et:"금리 인상이 회사의 부채 상황을 크게 악화시켰다."},{w:"pragmatic",p:"adj.",m:"실용적인, 현실적인",e:"The manager took a pragmatic approach to solving the production bottleneck.",et:"관리자는 생산 병목 현상을 해결하기 위해 실용적인 접근 방식을 취했다."},{w:"delineate",p:"v.",m:"명확히 나타내다, 그리다",e:"The contract clearly delineates the responsibilities of each party involved.",et:"계약은 관련된 각 당사자의 책임을 명확히 나타낸다."},{w:"circumvent",p:"v.",m:"우회하다, 피하다",e:"The new regulations prevent companies from circumventing tax obligations.",et:"새로운 규정은 회사들이 세금 의무를 우회하는 것을 방지한다."},{w:"egregious",p:"adj.",m:"심각한, 명백한",e:"The audit discovered egregious accounting errors in the quarterly reports.",et:"감사는 분기별 보고서에서 명백한 회계 오류를 발견했다."},{w:"stipulate",p:"v.",m:"명시하다, 규정하다",e:"The agreement stipulates that payment must be made within thirty days.",et:"계약은 30일 내에 결제가 이루어져야 한다고 명시한다."},
  {w:"nebulous",p:"adj.",m:"모호한, 불명확한",e:"The project timeline was nebulous until the director provided specific deadlines.",et:"이사가 구체적인 기한을 제시할 때까지 프로젝트 일정은 모호했다."},{w:"juxtapose",p:"v.",m:"나란히 놓다, 대조하다",e:"The presentation juxtaposed the company's old and new strategic approaches.",et:"발표는 회사의 이전과 새로운 전략적 접근법을 대조했다."},{w:"meticulous",p:"adj.",m:"세심한, 꼼꼼한",e:"The financial analyst's meticulous examination revealed discrepancies in the records.",et:"재무 분석가의 세심한 검토가 기록의 불일치를 드러냈다."},{w:"incisive",p:"adj.",m:"예리한, 통찰력 있는",e:"The manager's incisive comments during the meeting prompted significant strategic changes.",et:"회의 중 관리자의 예리한 의견이 중대한 전략적 변화를 촉발했다."},{w:"pertinent",p:"adj.",m:"관련된, 적절한",e:"Only pertinent documents should be included in the regulatory submission.",et:"규제 제출에는 관련된 문서만 포함되어야 한다."},{w:"obfuscate",p:"v.",m:"불명확하게 하다, 혼동시키다",e:"The financial report should not obfuscate the actual operating costs from investors.",et:"재무 보고서는 투자자들에게 실제 운영 비용을 불명확하게 해서는 안 된다."},{w:"candid",p:"adj.",m:"솔직한, 허심탄회한",e:"The CEO gave a candid assessment of the company's current market position.",et:"CEO는 회사의 현재 시장 위치에 대해 솔직한 평가를 했다."},{w:"salient",p:"adj.",m:"두드러진, 중요한",e:"The most salient features of the proposal were discussed in detail.",et:"제안의 가장 두드러진 특징들이 자세히 논의되었다."},{w:"latent",p:"adj.",m:"잠재된, 숨겨진",e:"The company identified latent demand for its services in emerging markets.",et:"회사는 신흥 시장에서 자신의 서비스에 대한 잠재된 수요를 확인했다."},{w:"reconcile",p:"v.",m:"조정하다, 일치시키다",e:"The accountant needs to reconcile the discrepancies between the two financial statements.",et:"회계사는 두 재무제표 간의 불일치를 조정해야 한다."},
  {w:"augment",p:"v.",m:"증가시키다, 확대하다",e:"The company decided to augment its workforce to meet growing demands.",et:"회사는 증가하는 수요에 대응하기 위해 인력을 증강하기로 결정했다."},{w:"bolster",p:"v.",m:"강화하다, 지지하다",e:"Strong quarterly earnings bolstered investor confidence in the firm.",et:"강한 분기별 실적이 기업에 대한 투자자의 신뢰를 강화했다."},{w:"constituency",p:"n.",m:"이해관계자 집단, 지지층",e:"The CEO must balance the needs of all stakeholders and constituencies.",et:"CEO는 모든 이해관계자와 지지층의 필요를 균형있게 맞춰야 한다."},{w:"deteriorate",p:"v.",m:"악화되다, 하락하다",e:"Working conditions deteriorated significantly after the budget cuts were implemented.",et:"예산 삭감이 실행된 후 근무 환경이 크게 악화되었다."},{w:"disparate",p:"adj.",m:"서로 다른, 불일치하는",e:"The disparate interests of team members made consensus difficult to achieve.",et:"팀 구성원의 서로 다른 이해관계로 인해 합의에 도달하기 어려웠다."},{w:"envisage",p:"v.",m:"예상하다, 생각하다",e:"Industry experts envisage significant growth in the digital sector next year.",et:"업계 전문가들은 내년 디지털 부문의 상당한 성장을 예상한다."},{w:"exorbitant",p:"adj.",m:"과도한, 터무니없는",e:"The vendor quoted an exorbitant price for the consulting services.",et:"공급업체는 컨설팅 서비스에 대해 과도한 가격을 제시했다."},{w:"feasible",p:"adj.",m:"가능한, 실행 가능한",e:"Our team determined that the proposal is feasible within the given timeframe.",et:"우리 팀은 제안이 주어진 기간 내에 실행 가능하다고 판단했다."},{w:"fidelity",p:"n.",m:"충실성, 정확성",e:"The report maintains high fidelity to the original data collected during research.",et:"보고서는 연구 중 수집된 원본 데이터에 대한 높은 충실성을 유지한다."},{w:"fungible",p:"adj.",m:"대체 가능한, 호환성 있는",e:"Unlike real estate, stocks are highly fungible assets in the market.",et:"부동산과 달리 주식은 시장에서 대체 가능성이 높은 자산이다."},
  {w:"gravitas",p:"n.",m:"무게감, 중요성",e:"The executive director brought considerable gravitas to the negotiation table.",et:"경영 이사는 협상 테이블에 상당한 무게감을 가져왔다."},{w:"hegemony",p:"n.",m:"패권, 지배력",e:"The company's market hegemony was challenged by several emerging competitors.",et:"회사의 시장 패권은 여러 신생 경쟁사에 의해 도전받았다."},{w:"impede",p:"v.",m:"방해하다, 저해하다",e:"Regulatory delays continue to impede the expansion project significantly.",et:"규제 지연은 계속해서 확장 프로젝트를 심각하게 방해하고 있다."},{w:"indolent",p:"adj.",m:"게으른, 나태한",e:"Management cannot tolerate indolent behavior from key personnel in critical roles.",et:"경영진은 중요한 직책의 핵심 인원의 나태한 행동을 용납할 수 없다."},{w:"infrastructure",p:"n.",m:"기반시설, 인프라",e:"Investing in robust infrastructure is essential for long-term organizational success.",et:"견고한 기반시설에 투자하는 것은 장기적 조직 성공을 위해 필수적이다."},{w:"jeopardize",p:"v.",m:"위태롭게 하다, 위험에 빠뜨리다",e:"Any breach of confidentiality could jeopardize the entire merger agreement.",et:"기밀 유지 위반은 전체 합병 협정을 위태롭게 할 수 있다."},{w:"laconic",p:"adj.",m:"간결한, 말이 적은",e:"The CFO's laconic presentation style proved highly effective in boardroom settings.",et:"CFO의 간결한 발표 스타일은 이사회 회의에서 매우 효과적이었다."},{w:"nostalgia",p:"n.",m:"향수, 그리움",e:"Nostalgia for the company's founding principles influenced the recent strategic decision.",et:"회사의 창립 원칙에 대한 향수가 최근 전략적 결정에 영향을 미쳤다."},{w:"obsequious",p:"adj.",m:"아첨하는, 과도하게 공손한",e:"His obsequious behavior toward senior executives raised concerns among peers.",et:"상급자에 대한 그의 아첨하는 행동은 동료들 사이에서 우려를 낳았다."},{w:"recalcitrant",p:"adj.",m:"말을 안 듣는, 완고한",e:"The recalcitrant department heads refused to adopt the new organizational structure.",et:"말을 안 듣는 부서장들은 새로운 조직 구조 채택을 거부했다."},
  {w:"pervasive",p:"adj.",m:"널리 퍼진, 만연한",e:"The pervasive influence of digital technology has transformed modern business practices.",et:"디지털 기술의 광범위한 영향은 현대 비즈니스 관행을 변화시켰다."},{w:"burgeon",p:"v.",m:"급속히 성장하다",e:"The company's revenue began to burgeon after launching the new product line.",et:"회사의 매출은 새로운 제품라인 출시 후 급속히 성장하기 시작했다."},{w:"confluence",p:"n.",m:"합류, 일치",e:"The confluence of market trends and consumer demand created unprecedented opportunities.",et:"시장 동향과 소비자 수요의 일치는 전례 없는 기회를 창출했다."},{w:"attrition",p:"n.",m:"감소, 이탈",e:"The HR department is working to reduce employee attrition through improved benefits.",et:"인사부서는 향상된 복리후생으로 직원 이탈을 줄이기 위해 노력 중이다."},{w:"vindicate",p:"v.",m:"입증하다, 옹호하다",e:"Recent sales figures vindicated the marketing team's aggressive strategy completely.",et:"최근 판매 수치는 마케팅팀의 적극적 전략을 완전히 입증했다."},{w:"cogent",p:"adj.",m:"설득력 있는",e:"The consultant presented cogent arguments for restructuring the company's operations.",et:"컨설턴트는 회사 운영 재구조화에 대해 설득력 있는 주장을 제시했다."},{w:"ameliorate",p:"v.",m:"개선하다",e:"The new software system will ameliorate workflow efficiency across all divisions.",et:"새로운 소프트웨어 시스템은 모든 부서의 업무 흐름 효율을 개선할 것이다."},{w:"propitious",p:"adj.",m:"호의적인, 유리한",e:"Market conditions appear propitious for expanding into new geographic regions.",et:"시장 조건이 새로운 지역으로의 확장에 유리해 보인다."},{w:"tangible",p:"adj.",m:"구체적인, 만질 수 있는",e:"The project delivered tangible results that exceeded management expectations significantly.",et:"프로젝트는 경영진 기대치를 크게 초과하는 구체적인 결과물을 제공했다."},{w:"sanguine",p:"adj.",m:"낙관적인",e:"Despite current challenges, the board remains sanguine about future growth prospects.",et:"현재의 어려움에도 불구하고 이사회는 향후 성장 전망에 낙관적이다."},
  {w:"exigent",p:"adj.",m:"긴급한, 절실한",e:"The exigent circumstances required immediate action from the executive leadership team.",et:"긴급한 상황은 경영진 팀의 즉각적인 조치를 필요로 했다."},{w:"engender",p:"v.",m:"야기하다, 초래하다",e:"The policy changes engendered significant concerns among the workforce.",et:"정책 변화는 근로자들 사이에 상당한 우려를 야기했다."},{w:"rectify",p:"v.",m:"바로잡다, 시정하다",e:"Management immediately took steps to rectify the accounting errors discovered.",et:"경영진은 발견된 회계 오류를 즉시 시정하기 위한 조치를 취했다."},{w:"nascent",p:"adj.",m:"초기의, 발생 중인",e:"The company invested heavily in nascent technologies to gain competitive advantage.",et:"회사는 경쟁 우위를 확보하기 위해 초기 기술에 대량 투자했다."},{w:"bifurcate",p:"v.",m:"양분하다, 갈라지다",e:"The organization decided to bifurcate its operations into two independent divisions.",et:"조직은 사업을 두 개의 독립적인 부서로 양분하기로 결정했다."},{w:"homogeneous",p:"adj.",m:"동질의, 균일한",e:"The company sought to develop a homogeneous corporate culture across all offices.",et:"회사는 모든 사무실에서 균일한 기업 문화를 형성하려고 했다."},{w:"efficacious",p:"adj.",m:"효과적인, 유능한",e:"The training program proved efficacious in improving employee performance metrics.",et:"교육 프로그램은 직원 성과 지표 개선에 효과적임이 입증되었다."},{w:"incur",p:"v.",m:"초래하다, 부담하다",e:"The company will incur significant expenses by upgrading its technology infrastructure.",et:"회사는 기술 인프라 업그레이드로 상당한 비용을 부담하게 될 것이다."},{w:"repercussion",p:"n.",m:"파급 효과, 반향",e:"The scandal had significant repercussions throughout the financial sector.",et:"그 스캔들은 금융 부문 전역에 큰 파급 효과를 미쳤다."},{w:"pragmatism",p:"n.",m:"현실주의, 실용주의",e:"The CEO's pragmatism enabled the company to navigate through economic uncertainty.",et:"CEO의 실용주의는 회사가 경제적 불확실성을 헤쳐나가도록 했다."},
  {w:"ambiguous",p:"adj.",m:"모호한, 애매한",e:"The contract contained ambiguous language that required clarification before signing.",et:"그 계약서는 서명 전에 명확히 해야 할 모호한 표현을 포함하고 있었다."},{w:"circumscribe",p:"v.",m:"제한하다, 범위를 정하다",e:"New regulations circumscribe the company's ability to expand into foreign markets.",et:"새로운 규정이 회사의 해외 시장 진출 능력을 제한한다."},{w:"contiguous",p:"adj.",m:"인접한, 연속된",e:"The firm acquired contiguous office spaces to create a larger headquarters.",et:"그 회사는 더 큰 본사를 만들기 위해 인접한 사무실 공간들을 인수했다."},{w:"detriment",p:"n.",m:"손해, 해로움",e:"The scandal caused significant detriment to the corporation's reputation.",et:"그 스캔들은 회사의 평판에 심각한 손해를 입혔다."},{w:"diligence",p:"n.",m:"부지런함, 성실함",e:"Through careful diligence, the audit team discovered accounting irregularities.",et:"신중한 성실함을 통해 감사팀은 회계 부정을 발견했다."},{w:"discrepancy",p:"n.",m:"불일치, 차이",e:"There was a significant discrepancy between the reported figures and actual inventory.",et:"보고된 수치와 실제 재고 사이에 큰 불일치가 있었다."},{w:"extemporaneous",p:"adj.",m:"즉흥적인, 미리 준비 없는",e:"The executive delivered an extemporaneous speech that impressed the board members.",et:"그 경영진은 이사회 멤버들을 감동시킨 즉흥적인 연설을 했다."},{w:"facetious",p:"adj.",m:"익살스러운, 경박한",e:"His facetious remarks during the serious meeting were inappropriate and unprofessional.",et:"진지한 회의 중 그의 경박한 발언은 부적절하고 비전문적이었다."},{w:"felicitous",p:"adj.",m:"적절한, 잘 맞는",e:"The consultant made a felicitous suggestion that resolved the ongoing dispute.",et:"그 컨설턴트는 지속되는 분쟁을 해결한 적절한 제안을 했다."},{w:"fiscal",p:"adj.",m:"재정의, 회계의",e:"The fiscal year ended with improved profitability across all business units.",et:"회계 연도는 모든 사업 부문에서 개선된 수익성으로 끝났다."},
  {w:"fortified",p:"adj.",m:"강화된, 견고한",e:"The company fortified its market position through strategic acquisitions.",et:"그 회사는 전략적 인수를 통해 시장 지위를 강화했다."},{w:"gregarious",p:"adj.",m:"사교적인, 무리를 지어 다니는",e:"The gregarious nature of the team enhanced collaboration and communication.",et:"그 팀의 사교적 성질이 협업과 소통을 향상시켰다."},{w:"inchoate",p:"adj.",m:"미완성의, 초기 단계의",e:"The project remained inchoate due to insufficient funding and unclear objectives.",et:"그 프로젝트는 부족한 자금과 불명확한 목표로 인해 미완성 상태였다."},{w:"inculcate",p:"v.",m:"주입하다, 교육하다",e:"Management strives to inculcate ethical values throughout the organization.",et:"경영진은 조직 전체에 윤리적 가치를 주입하기 위해 노력한다."},{w:"insouciant",p:"adj.",m:"무심한, 태연한",e:"Despite the crisis, his insouciant attitude worried the stakeholders considerably.",et:"위기에도 불구하고 그의 태연한 태도가 이해관계자들을 상당히 걱정하게 했다."},{w:"inveterate",p:"adj.",m:"고질적인, 뿌리 깊은",e:"The inveterate problem of supply chain delays finally received executive attention.",et:"공급망 지연의 고질적인 문제가 마침내 경영진의 주목을 받았다."},{w:"pellucid",p:"adj.",m:"명확한, 투명한",e:"The CEO's pellucid explanation of the strategy convinced skeptical investors.",et:"CEO의 전략에 대한 명확한 설명이 회의적인 투자자들을 확신시켰다."},{w:"perspicacious",p:"adj.",m:"통찰력 있는, 명민한",e:"Her perspicacious analysis of market trends proved invaluable to the company.",et:"시장 트렌드에 대한 그녀의 통찰력 있는 분석이 회사에 매우 귀중했다."},{w:"quotidian",p:"adj.",m:"일상적인, 평범한",e:"The quotidian operations of the department required systematic improvement.",et:"그 부서의 일상적인 운영은 체계적인 개선이 필요했다."},{w:"recondite",p:"adj.",m:"난해한, 깊이 있는",e:"The financial analyst presented recondite theories that only experts could fully understand.",et:"그 재무 분석가는 전문가만이 완전히 이해할 수 있는 난해한 이론을 제시했다."},
  {w:"abrogate",p:"v.",m:"폐기하다, 무효화하다",e:"The company decided to abrogate the outdated contract.",et:"회사는 구식 계약을 폐기하기로 결정했다."},{w:"accrue",p:"v.",m:"누적되다, 발생하다",e:"Interest will accrue on your investment over time.",et:"시간이 지남에 따라 투자 이익이 누적될 것이다."},{w:"adipose",p:"adj.",m:"지방질의, 뚱뚱한",e:"The healthcare initiative addresses adipose-related conditions.",et:"보건 계획은 지방질 관련 질환을 다룬다."},{w:"auspicious",p:"adj.",m:"길한, 호의적인",e:"The auspicious timing of the merger benefited all stakeholders.",et:"인수합병의 길한 시기는 모든 이해관계자에게 이득이 되었다."},{w:"blandishment",p:"n.",m:"달콤한 말, 회유",e:"Without blandishment, the negotiation reached a fair agreement.",et:"달콤한 말 없이 협상은 공정한 합의에 도달했다."},{w:"bungle",p:"v.",m:"서툴게 다루다, 망치다",e:"The team must not bungle this critical project deadline.",et:"팀은 이 중요한 프로젝트 마감을 망쳐서는 안 된다."},{w:"cogency",p:"n.",m:"설득력, 타당성",e:"The proposal lacked cogency in its financial projections.",et:"제안은 재무 전망에서 설득력이 부족했다."},{w:"concatenate",p:"v.",m:"연결하다, 이어붙이다",e:"We need to concatenate these data files for analysis.",et:"우리는 분석을 위해 이들 데이터 파일을 연결해야 한다."},{w:"contravene",p:"v.",m:"위반하다, 모순되다",e:"The new policy contravenes existing regulations.",et:"새 정책은 기존 규정을 위반한다."},{w:"copious",p:"adj.",m:"풍부한, 많은",e:"The report contained copious evidence supporting the conclusion.",et:"보고서는 결론을 뒷받침하는 풍부한 증거를 포함했다."},
  {w:"dearth",p:"n.",m:"부족, 결핍",e:"There is a dearth of qualified candidates in this field.",et:"이 분야에서는 적격 지원자가 부족하다."},{w:"deference",p:"n.",m:"존경, 경의",e:"The junior staff showed deference to the senior executives.",et:"junior 직원들은 senior 경영진에 대한 경의를 보였다."},{w:"detritus",p:"n.",m:"파편, 잔해",e:"The company had to clear detritus from the construction site.",et:"회사는 건설 현장의 잔해를 치워야 했다."},{w:"diffident",p:"adj.",m:"겸손한, 자신 없는",e:"Despite his talent, he remained diffident about his abilities.",et:"그의 재능에도 불구하고 그는 자신의 능력에 대해 겸손했다."},{w:"dilatory",p:"adj.",m:"미루는, 지연하는",e:"The dilatory response delayed the project by several weeks.",et:"지연 반응으로 인해 프로젝트가 몇 주 늦어졌다."},{w:"disabuse",p:"v.",m:"오해를 풀다, 깨우치다",e:"We must disabuse clients of the false assumption immediately.",et:"우리는 즉시 고객들의 잘못된 가정을 바로잡아야 한다."},{w:"dissemble",p:"v.",m:"속이다, 감추다",e:"The executive refused to dissemble about the financial losses.",et:"경영진은 재무 손실에 대해 거짓말을 거부했다."},{w:"downstream",p:"adj.",m:"하류의, 후속의",e:"Downstream effects of the policy became apparent later.",et:"정책의 후속 효과는 나중에 명백해졌다."},{w:"effusive",p:"adj.",m:"감정적인, 수다스러운",e:"The client gave effusive praise for the completed work.",et:"고객은 완료된 작업에 대해 극도로 칭찬했다."},{w:"expurgate",p:"v.",m:"삭제하다, 정화하다",e:"The editor decided to expurgate sensitive information from the report.",et:"편집자는 보고서에서 민감한 정보를 삭제하기로 결정했다."},
  {w:"sagacious",p:"adj.",m:"현명한, 지혜로운",e:"The sagacious CEO made decisions that ensured long-term company success.",et:"그 현명한 최고경영자는 회사의 장기적 성공을 보장하는 결정을 내렸다."},{w:"ephemeral",p:"adj.",m:"일시적인, 순간적인",e:"The promotional offer was ephemeral, lasting only one week.",et:"그 프로모션은 일시적이어서 단 일주일만 지속되었다."},{w:"enervate",p:"v.",m:"약화시키다, 기력을 빼다",e:"Prolonged disputes can enervate team morale and productivity.",et:"장기적인 분쟁은 팀의 사기와 생산성을 약화시킬 수 있다."},{w:"sedulous",p:"adj.",m:"근면한, 성실한",e:"The sedulous employee's attention to detail earned her a promotion.",et:"그 성실한 직원의 세심한 주의는 그녀의 승진을 얻게 했다."},{w:"intransigent",p:"adj.",m:"타협하지 않는, 강경한",e:"The intransigent approach to negotiations hindered the deal's progress.",et:"협상에 대한 강경한 입장은 거래 진행을 방해했다."},{w:"perspicacity",p:"n.",m:"통찰력, 예리함",e:"Her perspicacity in financial analysis made her invaluable to the firm.",et:"재무 분석에서 그녀의 통찰력은 그녀를 회사에 귀중하게 만들었다."},{w:"lacuna",p:"n.",m:"공백, 빈틈",e:"There was a significant lacuna in the company's disaster recovery plan.",et:"회사의 재해 복구 계획에는 중대한 공백이 있었다."},{w:"exiguity",p:"n.",m:"부족, 적음",e:"The exiguity of resources limited our ability to expand operations.",et:"자원의 부족은 우리의 운영 확장 능력을 제한했다."},{w:"propensity",p:"n.",m:"경향, 기질",e:"The market has shown a propensity toward mobile-first solutions recently.",et:"시장은 최근 모바일 우선 솔루션에 대한 경향을 보여왔다."},{w:"contingency",p:"n.",m:"불확실한 사건, 긴급 상황",e:"The company maintains a contingency fund for unexpected expenses.",et:"그 회사는 예상치 못한 비용에 대비하여 긴급기금을 유지한다."},
  {w:"lucrative",p:"adj.",m:"수익성 높은, 돈이 되는",e:"The merger created a lucrative opportunity for both organizations.",et:"그 합병은 양 조직에 수익성 높은 기회를 만들었다."},{w:"emulate",p:"v.",m:"모방하다, 따라하다",e:"Competitors seek to emulate the successful business model developed here.",et:"경쟁사들은 여기서 개발한 성공적인 비즈니스 모델을 모방하려고 한다."},{w:"oblige",p:"v.",m:"의무화하다, 호의를 베풀다",e:"Company policy obliges all employees to attend mandatory training sessions.",et:"회사 정책은 모든 직원이 필수 교육에 참석할 의무가 있다."},{w:"ostensibly",p:"adv.",m:"겉으로는, 표면상으로는",e:"The restructuring was ostensibly designed to improve efficiency.",et:"그 구조조정은 겉으로는 효율성 개선을 위해 설계되었다."},{w:"assuage",p:"v.",m:"진정시키다, 완화하다",e:"The CEO's statement helped assuage concerns about job security.",et:"최고경영자의 성명은 고용 보장에 대한 우려를 완화하는 데 도움이 되었다."},{w:"curtail",p:"v.",m:"단축하다, 제한하다",e:"The organization decided to curtail spending on non-essential projects.",et:"그 조직은 비필수 프로젝트에 대한 지출을 제한하기로 결정했다."},{w:"coherent",p:"adj.",m:"일관된, 논리적인",e:"The strategic plan presented a coherent vision for future growth.",et:"그 전략 계획은 미래 성장에 대해 일관된 비전을 제시했다."},{w:"surreptitious",p:"adj.",m:"몰래 하는, 비밀스러운",e:"The surreptitious acquisition of the rival firm shocked the market.",et:"경쟁사의 몰래 인수는 시장을 놀라게 했다."},{w:"amenable",p:"adj.",m:"응하기 쉬운, 순응적인",e:"Management was amenable to suggestions from the employee focus group.",et:"경영진은 직원 포커스그룹의 제안에 응하기 쉬웠다."},{w:"expedite",p:"v.",m:"신속히 처리하다, 촉진하다",e:"We can expedite the approval process by submitting documents electronically.",et:"전자 문서 제출로 승인 절차를 신속히 처리할 수 있다."},
  {w:"zealous",p:"adj.",m:"열정적인, 열심인",e:"The zealous sales team exceeded quarterly targets by significant margins.",et:"열정적인 판매팀은 분기별 목표를 크게 초과 달성했다."},{w:"errant",p:"adj.",m:"잘못된, 방황하는",e:"The errant financial projections led to unexpected budget deficits.",et:"잘못된 재정 예측은 예상치 못한 예산 부족을 초래했다."},{w:"insipid",p:"adj.",m:"무미건조한, 흥미 없는",e:"The presentation was criticized for being insipid and lacking originality.",et:"그 발표는 무미건조하고 독창성이 부족하다는 비판을 받았다."},{w:"augur",p:"v.",m:"예시하다, 징조하다",e:"Strong sales in Q1 augur well for the company's annual performance.",et:"1분기의 강한 판매는 회사의 연간 실적을 좋게 예시한다."},{w:"preempt",p:"v.",m:"선제하다, 미리 차지하다",e:"The firm sought to preempt competitors by launching the product early.",et:"그 회사는 제품을 조기 출시하여 경쟁사를 선제하려고 했다."},{w:"ostracize",p:"v.",m:"따돌리다, 추방하다",e:"Employees who violate ethics codes may be ostracized by the organization.",et:"윤리규범을 위반한 직원들은 조직에서 따돌림을 받을 수 있다."},{w:"perspicuous",p:"adj.",m:"명확한, 쉽게 이해되는",e:"The manager provided perspicuous instructions to ensure all team members understood their roles.",et:"관리자는 모든 팀원이 자신의 역할을 이해하도록 명확한 지침을 제공했다."},{w:"propinquity",p:"n.",m:"근접성, 가까움",e:"The propinquity of our office to major transportation hubs makes it an ideal location.",et:"우리 사무실이 주요 교통 허브에 가깝다는 것이 이상적인 위치를 만든다."},{w:"sedition",p:"n.",m:"반란, 선동",e:"The employee's inflammatory remarks were considered sedition against company policies.",et:"그 직원의 선동적인 발언은 회사 정책에 대한 반란으로 간주되었다."},{w:"pellucidity",p:"n.",m:"명확성, 투명성",e:"The pellucidity of the contract terms left no room for misinterpretation.",et:"계약 조건의 명확성은 오해의 여지를 남기지 않았다."},
  {w:"insouciance",p:"n.",m:"무관심, 태평스러움",e:"His insouciance toward the looming deadline concerned senior management considerably.",et:"다가오는 마감일에 대한 그의 무관심은 경영진을 상당히 우려하게 했다."},{w:"probity",p:"n.",m:"정직, 청렴",e:"The audit committee commended the CFO for her probity in financial reporting.",et:"감사 위원회는 재무 보고에서의 CFO의 정직함을 칭찬했다."},{w:"turpitude",p:"n.",m:"부도덕, 악행",e:"The director's involvement in the scandal was considered moral turpitude.",et:"그 이사의 스캔들 연루는 도덕적 악행으로 간주되었다."},{w:"prescience",p:"n.",m:"선견지명, 예지력",e:"The analyst demonstrated prescience in predicting the market downturn three months early.",et:"그 분석가는 시장 침체를 3개월 먼저 예측하는 선견지명을 보여주었다."},{w:"asperity",p:"n.",m:"엄격함, 거칠음",e:"The manager's asperity in handling the complaint was noted in the HR review.",et:"불만을 처리할 때 관리자의 엄격함이 인사 검토에 기록되었다."},{w:"tendentious",p:"adj.",m:"편향된, 주관적인",e:"The report was criticized for being tendentious rather than presenting objective analysis.",et:"그 보고서는 객관적 분석을 제시하기보다는 편향되었다고 비판받았다."},{w:"sesquipedalian",p:"adj.",m:"장황한, 어려운 단어를 많이 쓰는",e:"His sesquipedalian presentation confused most of the audience members.",et:"그의 장황한 발표는 대부분의 청중을 혼란스럽게 했다."},{w:"verisimilitude",p:"n.",m:"그럴듯함, 사실성",e:"The marketing campaign lacked verisimilitude and failed to resonate with customers.",et:"그 마케팅 캠페인은 그럴듯함이 부족했고 고객들에게 반응하지 못했다."},{w:"officious",p:"adj.",m:"참견 좋아하는, 자의적인",e:"The compliance officer's officious behavior disrupted team collaboration significantly.",et:"준법 감시자의 참견 좋아하는 태도가 팀 협업을 크게 방해했다."},{w:"collusion",p:"n.",m:"담합, 공모",e:"An investigation revealed collusion between competing companies in bid rigging.",et:"조사 결과 경쟁사들 간의 입찰 담합이 드러났다."},
  {w:"ubiquitous",p:"adj.",m:"어디에나 있는, 편재하는",e:"Mobile devices have become ubiquitous in modern workplaces.",et:"모바일 기기는 현대 직장에서 어디에나 있게 되었다."},{w:"obstreperous",p:"adj.",m:"시끄럽고 성가신, 난폭한",e:"The obstreperous client demanded immediate compensation for the error.",et:"성가신 그 고객은 오류에 대한 즉각적인 보상을 요구했다."},{w:"equanimity",p:"n.",m:"침착함, 평정심",e:"The executive faced the crisis with remarkable equanimity.",et:"그 경영진은 위기에 놀라운 침착함으로 대응했다."},{w:"obtrusive",p:"adj.",m:"튀어나온, 거슬리는, 방해가 되는",e:"The obtrusive advertising banners distracted users from the content.",et:"거슬리는 광고 배너는 사용자들을 콘텐츠에서 산만하게 했다."},{w:"perfunctory",p:"adj.",m:"형식적인, 대충 한",e:"The auditor's perfunctory review failed to detect the accounting error.",et:"감시자의 형식적인 검토는 회계 오류를 발견하지 못했다."},{w:"pernicious",p:"adj.",m:"해로운, 치명적인",e:"The pernicious rumor damaged the company's reputation significantly.",et:"해로운 그 소문은 회사의 평판에 큰 손상을 입혔다."},{w:"punctilious",p:"adj.",m:"꼼꼼한, 세심한",e:"The punctilious auditor examined every transaction with meticulous care.",et:"꼼꼼한 감시자는 모든 거래를 세심하게 검토했다."},{w:"profligate",p:"adj.",m:"낭비하는, 방탕한",e:"The company's profligate spending on office renovations alarmed investors.",et:"회사의 사무실 개선에 대한 낭비적 지출은 투자자들을 놀라게 했다."},{w:"inimical",p:"adj.",m:"적대적인, 해로운",e:"The change in leadership was inimical to the department's long-term goals.",et:"리더십의 변화는 부서의 장기 목표에 해로웠다."},{w:"vituperative",p:"adj.",m:"모욕적인, 욕설적인",e:"The executive's vituperative remarks during the meeting offended several staff members.",et:"회의 중 그 경영진의 욕설적인 발언은 여러 직원을 불쾌하게 했다."},
  {w:"moribund",p:"adj.",m:"죽어가는, 쇠퇴하는",e:"The moribund product line finally ceased operations last quarter.",et:"쇠퇴하는 그 제품 라인은 마지막 분기에 마침내 운영을 중단했다."},{w:"sycophant",p:"n.",m:"아첨꾼, 야비한 자",e:"The manager surrounded himself with sycophants who never questioned decisions.",et:"그 관리자는 결정에 의문을 제기하지 않는 아첨꾼들로 자신을 둘러쌌다."},{w:"remunerative",p:"adj.",m:"수익성 있는, 보수가 좋은",e:"The company offered a highly remunerative position to attract top talent.",et:"회사는 우수 인재를 유치하기 위해 보수가 매우 좋은 직책을 제시했다."},{w:"assuetude",p:"n.",m:"습관, 관습",e:"Breaking old assuetude in the workplace requires consistent effort and patience.",et:"직장에서 오랜 관습을 깨기 위해서는 지속적인 노력과 인내가 필요하다."},{w:"desultory",p:"adj.",m:"산만한, 일관성 없는",e:"The desultory approach to project management led to missed deadlines.",et:"산만한 프로젝트 관리 방식으로 인해 마감일을 놓쳤다."},{w:"tenacious",p:"adj.",m:"끈질긴, 결연한",e:"The tenacious negotiator secured favorable terms for the contract.",et:"끈질긴 협상가는 계약의 유리한 조건을 확보했다."},{w:"paucity",p:"n.",m:"부족, 적음",e:"The paucity of qualified candidates delayed the hiring process.",et:"적절한 후보자의 부족으로 채용 절차가 지연되었다."},{w:"loquacious",p:"adj.",m:"수다스러운, 말이 많은",e:"The loquacious manager's lengthy meetings tested employees' patience.",et:"말이 많은 관리자의 긴 회의는 직원들의 인내심을 시험했다."},{w:"fulsome",p:"adj.",m:"과장된, 지나친",e:"The fulsome praise from the board director seemed insincere to most employees.",et:"이사회 이사의 과장된 칭찬은 대부분의 직원에게 진심 없게 보였다."},{w:"tacit",p:"adj.",m:"암묵적인, 말하지 않은",e:"There was a tacit agreement among team members to prioritize quality over speed.",et:"팀 멤버들 사이에는 속도보다 품질을 우선하기로 하는 암묵적 합의가 있었다."},
  {w:"perspicuity",p:"n.",m:"명확성, 투명성",e:"The CEO's perspicuity in communication strengthened investor confidence in the company.",et:"CEO의 명확한 소통은 투자자들의 회사에 대한 신뢰를 강화했다."},{w:"acerbic",p:"adj.",m:"신랄한, 쓸쓸한",e:"The acerbic review from the auditor highlighted critical weaknesses in internal controls.",et:"감시인의 신랄한 평가는 내부 통제의 심각한 약점을 강조했다."},{w:"pellucidly",p:"adv.",m:"명확하게, 투명하게",e:"The financial statements were presented pellucidly, making data analysis straightforward.",et:"재무 제표는 명확하게 제시되어 데이터 분석이 직관적이었다."},{w:"ambivalent",p:"adj.",m:"양가적인, 상충하는",e:"The board expressed ambivalent feelings about the proposed merger.",et:"이사회는 제안된 합병에 대해 상충된 감정을 표현했다."},{w:"attestation",p:"n.",m:"증명, 인증",e:"We require written attestation from your previous employer.",et:"우리는 이전 고용주의 서면 증명서가 필요합니다."},{w:"caveat",p:"n.",m:"경고, 주의사항",e:"The contract includes several important caveats regarding liability.",et:"그 계약에는 책임과 관련한 몇 가지 중요한 주의사항이 포함되어 있다."},{w:"commensurate",p:"adj.",m:"상응하는, 균형잡힌",e:"Salaries should be commensurate with experience and qualifications.",et:"급여는 경력과 자격요건에 상응해야 한다."},{w:"contention",p:"n.",m:"주장, 논쟁",e:"Our main contention is that the current system lacks efficiency.",et:"우리의 주요 주장은 현재 시스템이 효율성이 부족하다는 것이다."},{w:"countervailing",p:"adj.",m:"상쇄하는, 대항하는",e:"Countervailing tariffs were imposed on imported goods last month.",et:"상쇄 관세가 지난달 수입 상품에 부과되었다."},{w:"diminution",p:"n.",m:"감소, 축소",e:"There has been a significant diminution in quarterly sales figures.",et:"분기별 매출 수치에서 상당한 감소가 있었다."},
  {w:"disparage",p:"v.",m:"폄하하다, 깎아내리다",e:"Management should never disparage employees in front of their peers.",et:"경영진은 동료 앞에서 직원을 폄하해서는 안 된다."},{w:"disseminate",p:"v.",m:"전파하다, 배포하다",e:"The marketing team will disseminate the new campaign across all platforms.",et:"마케팅 팀은 새로운 캠페인을 모든 플랫폼에 전파할 것이다."},{w:"divergent",p:"adj.",m:"상이한, 분기하는",e:"The two departments have divergent approaches to problem-solving.",et:"두 부서는 문제 해결에 있어 상이한 접근 방식을 가지고 있다."},{w:"efficacy",p:"n.",m:"효능, 효과",e:"The efficacy of the new software has been proven in field testing.",et:"그 새 소프트웨어의 효능은 현장 테스트에서 증명되었다."},{w:"equivocal",p:"adj.",m:"애매한, 모호한",e:"The CEO's response to the scandal was decidedly equivocal.",et:"그 CEO의 스캔들에 대한 응답은 분명히 애매했다."},{w:"exonerate",p:"v.",m:"면죄하다, 무죄를 증명하다",e:"New evidence will exonerate him from all previous accusations.",et:"새로운 증거는 그를 모든 이전 혐의에서 면죄할 것이다."},{w:"limpid",p:"adj.",m:"명확한, 투명한",e:"The financial report presented a limpid overview of our current position.",et:"그 재무 보고서는 우리의 현재 위치에 대한 명확한 개요를 제시했다."},{w:"ascertain",p:"v.",m:"확인하다, 파악하다",e:"The auditor needs to ascertain the accuracy of financial records.",et:"감사인은 재무 기록의 정확성을 확인해야 한다."},{w:"deleterious",p:"adj.",m:"해로운, 유해한",e:"Poor management practices had deleterious effects on employee morale.",et:"부실한 경영 관행은 직원 사기에 해로운 영향을 미쳤다."},{w:"despondency",p:"n.",m:"낙담, 의기소침",e:"The project delays caused widespread despondency among the team members.",et:"프로젝트 지연은 팀 구성원들 사이에 광범위한 낙담을 야기했다."},
  {w:"diligent",p:"adj.",m:"근면한, 성실한",e:"Her diligent approach to research earned her promotion.",et:"그녀의 성실한 연구 접근 방식이 승진을 가져왔다."},{w:"dissonance",p:"n.",m:"불일치, 불협화음",e:"There was dissonance between the marketing strategy and actual sales results.",et:"마케팅 전략과 실제 판매 결과 사이에 불일치가 있었다."},{w:"docile",p:"adj.",m:"순종적인, 유순한",e:"The docile workforce accepted the new management without resistance.",et:"순종적인 직원들은 새로운 경영진을 저항 없이 수용했다."},{w:"exiguous",p:"adj.",m:"부족한, 소량의",e:"The company provided only exiguous resources for the new initiative.",et:"회사는 새로운 사업에 부족한 자원만 제공했다."},{w:"extirpate",p:"v.",m:"근절하다, 제거하다",e:"Management sought to extirpate all inefficiencies from the process.",et:"경영진은 프로세스에서 모든 비효율을 근절하려고 했다."},{w:"felicity",p:"n.",m:"적절함, 행운",e:"The speaker expressed ideas with great felicity and eloquence.",et:"그 연설가는 훌륭한 적절함과 웅변으로 아이디어를 표현했다."},{w:"fecund",p:"adj.",m:"생산성 있는, 비옥한",e:"The research department proved to be fecund in generating new innovations.",et:"연구 부서는 새로운 혁신을 만드는 데 생산성이 높다는 것을 증명했다."},{w:"garnish",p:"v.",m:"지급에서 공제하다, 장식하다",e:"The court ordered them to garnish the defendant's wages immediately.",et:"법원은 그들이 피고인의 임금을 즉시 공제하도록 명령했다."},{w:"indefatigable",p:"adj.",m:"지칠 줄 모르는, 피로를 모르는",e:"Her indefatigable efforts led to the successful project completion.",et:"그녀의 끈질긴 노력이 프로젝트 성공적 완료를 이끌었다."},{w:"insidious",p:"adj.",m:"음흉한, 교활한",e:"The insidious decline in product quality went unnoticed for months.",et:"제품 품질의 교활한 저하가 몇 달 동안 눈에 띄지 않았다."},
  {w:"lachrymose",p:"adj.",m:"눈물을 흘리는, 슬픈",e:"His lachrymose presentation failed to persuade the investors.",et:"그의 눈물겨운 발표는 투자자들을 설득하는 데 실패했다."},{w:"magnanimous",p:"adj.",m:"관대한, 너그러운",e:"The CEO was magnanimous in accepting the critical feedback.",et:"그 최고경영자는 비판적 피드백을 수용하는 데 관대했다."},{w:"malign",p:"v.",m:"폄하하다, 악담하다",e:"Competitors tried to malign the company's reputation through false claims.",et:"경쟁사들은 거짓 주장으로 회사의 평판을 폄하하려 했다."},{w:"munificent",p:"adj.",m:"관대한, 후한",e:"The munificent bonus package attracted top talent to the organization.",et:"후한 보너스 패키지가 조직에 최고의 인재를 끌어들였다."},{w:"promulgate",p:"v.",m:"공포하다, 선포하다",e:"The government promulgated new regulations to ensure fair market competition.",et:"정부는 공정한 시장 경쟁을 보장하기 위해 새로운 규정을 공포했다."},{w:"coterie",p:"n.",m:"소그룹, 폐쇄적 집단",e:"An exclusive coterie of investors controls the major business decisions.",et:"투자자들의 배타적인 폐쇄 집단이 주요 경영 결정을 통제한다."},{w:"contumacious",p:"adj.",m:"거역하는, 완강한",e:"The contumacious employee repeatedly ignored management directives.",et:"그 완강한 직원은 경영진의 지시를 반복적으로 무시했다."},{w:"susurration",p:"n.",m:"속삭임, 윤삭",e:"The susurration of whispered conversations echoed through the office lobby.",et:"사무실 로비에는 속삭이는 대화의 윤삭이 울려 퍼졌다."},{w:"recusant",p:"adj.",m:"거부하는, 저항하는",e:"The recusant shareholders opposed the merger at the annual meeting.",et:"저항하는 주주들은 연례 회의에서 합병을 반대했다."},{w:"picayune",p:"adj.",m:"하찮은, 사소한",e:"Management dismissed the worker's picayune complaints about office supplies.",et:"경영진은 근로자의 사무용품에 대한 하찮은 불평을 무시했다."},
  {w:"feckless",p:"adj.",m:"무책임한, 무능한",e:"The feckless leadership failed to address the growing operational crisis.",et:"무책임한 리더십은 증가하는 운영 위기를 해결하지 못했다."},{w:"supplant",p:"v.",m:"대체하다, 몰아내다",e:"Automation will supplant manual labor in many manufacturing positions.",et:"자동화는 많은 제조업 직위에서 인력을 대체할 것이다."},{w:"encomium",p:"n.",m:"칭송, 찬사",e:"The board offered an encomium for the employee's exceptional service record.",et:"이사회는 직원의 탁월한 근무 기록에 대해 칭송을 표했다."},{w:"nugatory",p:"adj.",m:"무효의, 가치 없는",e:"The previous agreement became nugatory after the contract was officially terminated.",et:"계약이 공식적으로 종료된 후 이전 합의는 무효가 되었다."},{w:"acclivitous",p:"adj.",m:"가파른 오르막의, 상승하는",e:"The acclivitous growth in revenue exceeded all quarterly projections significantly.",et:"수익의 가파른 상승은 모든 분기 예측을 크게 초과했다."},{w:"opulent",p:"adj.",m:"호화로운, 풍부한",e:"The company's opulent office reflects its successful financial performance.",et:"그 회사의 호화로운 사무실은 재정적 성공을 반영한다."},{w:"lucid",p:"adj.",m:"명확한, 분명한",e:"The executive provided a lucid explanation of the new business strategy.",et:"그 임원은 새로운 사업 전략에 대해 명확한 설명을 제공했다."},{w:"expedient",p:"adj.",m:"편리한, 적절한",e:"The company found an expedient solution to reduce operational costs quickly.",et:"그 회사는 운영 비용을 빠르게 줄이는 편리한 해결책을 찾았다."},{w:"precipitate",p:"v.",m:"야기하다, 촉발하다",e:"The unfavorable market conditions precipitated a significant decline in sales.",et:"불리한 시장 상황이 판매량의 급격한 하락을 야기했다."},{w:"fortify",p:"v.",m:"강화하다, 견고하게 하다",e:"The company fortified its market position through strategic acquisitions.",et:"그 회사는 전략적 인수를 통해 시장 위치를 강화했다."},
  {w:"nonchalant",p:"adj.",m:"태연한, 무관심한",e:"Despite the crisis, the director maintained a nonchalant attitude in meetings.",et:"위기에도 불구하고 그 이사는 회의에서 태연한 태도를 유지했다."},{w:"circumlocution",p:"n.",m:"우회적 표현, 돌려 말하기",e:"The report avoided circumlocution and stated the problems directly.",et:"그 보고서는 우회적 표현을 피하고 문제를 직접 언급했다."},{w:"pragmatist",p:"n.",m:"실용주의자",e:"As a pragmatist, the CEO prioritized immediate profits over long-term vision.",et:"실용주의자인 그 CEO는 장기 비전보다 즉각적인 이익을 우선했다."},{w:"insipidity",p:"n.",m:"밋밋함, 무취미",e:"The marketing campaign's insipidity failed to attract target consumers.",et:"그 마케팅 캠페인의 밋밋함은 목표 소비자들을 매력하는 데 실패했다."},{w:"collateral",p:"n.",m:"담보",e:"The bank requires collateral before approving the business loan.",et:"은행은 사업 대출을 승인하기 전에 담보를 요구한다."},{w:"dereliction",p:"n.",m:"직무 태만",e:"The employee faced disciplinary action for dereliction of duty.",et:"그 직원은 직무 태만으로 징계 조치를 받았다."},{w:"intemperance",p:"n.",m:"절제의 부족, 과도함",e:"The company's intemperance in spending led to significant financial losses.",et:"그 회사의 과도한 지출은 심각한 재정 손실을 초래했다."},{w:"sagacity",p:"n.",m:"지혜, 명철함",e:"The founder's sagacity in business decisions built the company's reputation.",et:"그 창업자의 사업 결정에서의 지혜가 회사의 평판을 구축했다."},{w:"vitiate",p:"v.",m:"무효화하다, 손상시키다",e:"Errors in the financial report vitiate its credibility with investors.",et:"재무 보고서의 오류는 투자자들에게의 신뢰성을 손상시킨다."},{w:"conglomerate",p:"n.",m:"대기업, 복합 기업",e:"The multinational conglomerate operates in diverse industries worldwide.",et:"그 다국적 대기업은 세계적으로 다양한 산업에서 운영된다."},
  {w:"emolument",p:"n.",m:"보수, 급여",e:"The senior executives received substantial emoluments despite company losses.",et:"상급 경영진들은 회사 손실에도 불구하고 상당한 보수를 받았다."},{w:"dichotomy",p:"n.",m:"이분법, 분열",e:"A dichotomy exists between the company's stated values and actual practices.",et:"그 회사의 명시된 가치와 실제 관행 사이에 이분법이 존재한다."},{w:"sequester",p:"v.",m:"격리하다, 몰수하다",e:"The court ordered sequestration of company assets pending investigation.",et:"법원은 조사 대기 중 회사 자산의 몰수를 명령했다."},{w:"esoteric",p:"adj.",m:"비밀스러운, 난해한",e:"The financial analysis uses esoteric terminology unfamiliar to general investors.",et:"그 재무 분석은 일반 투자자들에게 낯선 난해한 용어를 사용한다."},{w:"assiduous",p:"adj.",m:"부지런한, 성실한",e:"Her assiduous efforts resulted in a significant increase in sales.",et:"그녀의 성실한 노력이 판매량의 상당한 증가를 가져왔다."},{w:"burgeoning",p:"adj.",m:"급속히 성장하는, 번창하는",e:"The company's burgeoning market share attracted investment from major firms.",et:"회사의 급속히 성장하는 시장 점유율은 대형 기업들의 투자를 끌어들였다."},{w:"cacophony",p:"n.",m:"불협화음, 귀에 거슬리는 소음",e:"The cacophony of competing voices made the meeting difficult to manage.",et:"상충하는 의견들의 불협화음이 회의를 관리하기 어렵게 만들었다."},{w:"chastened",p:"adj.",m:"훈계받은, 조심스러운",e:"The chastened executives promised stricter compliance measures going forward.",et:"훈계받은 임원진들은 향후 더 엄격한 준수 조치를 약속했다."},{w:"convoluted",p:"adj.",m:"복잡한, 난해한",e:"The convoluted contract terms required legal experts to interpret properly.",et:"복잡한 계약 조건들은 적절한 해석을 위해 법률 전문가가 필요했다."},{w:"enervating",p:"adj.",m:"기력을 빼는, 약화시키는",e:"The enervating effects of poor management were evident in declining productivity.",et:"열악한 관리의 약화 효과가 생산성 감소로 명확히 드러났다."},
  {w:"castigate",p:"v.",m:"엄하게 비난하다, 꾸짖다",e:"The board castigated management for the missed quarterly targets.",et:"이사회는 분기 목표 미달성에 대해 경영진을 엄하게 비난했다."},{w:"obviate",p:"v.",m:"제거하다, 불필요하게 만들다",e:"The new software obviated the need for manual data entry procedures.",et:"새로운 소프트웨어는 수동 데이터 입력 절차의 필요성을 제거했다."},{w:"abscond",p:"v.",m:"도주하다, 몰래 떠나다",e:"The accountant absconded with company funds before the audit.",et:"그 회계사는 감사 전에 회사 자금을 가지고 도주했다."},{w:"accolade",p:"n.",m:"칭찬, 영예",e:"The employee received accolades for her exceptional performance this quarter.",et:"그 직원은 이번 분기 뛰어난 성과로 칭찬을 받았다."},{w:"adherent",p:"n.",m:"추종자, 지지자",e:"The new policy has gained many adherents among senior management.",et:"새로운 정책은 경영진 사이에서 많은 지지자를 얻었다."},{w:"adjunct",p:"n.",m:"부속물, 보충자료",e:"The appendix serves as an adjunct to the main report.",et:"그 부록은 주요 보고서의 보충자료로 역할을 한다."},{w:"adulterate",p:"v.",m:"부정행위를 하다, 품질을 떨어뜨리다",e:"The company was fined for adulterating its product with inferior materials.",et:"그 회사는 제품에 저급 재료를 섞어 벌금을 받았다."},{w:"aesthetic",p:"adj.",m:"미적인, 예술적인",e:"The office redesign prioritized aesthetic appeal and employee comfort.",et:"사무실 재설계는 미적 매력과 직원 편의성을 우선했다."},{w:"affable",p:"adj.",m:"친절한, 다정한",e:"The new CEO is known for being affable and approachable to all staff.",et:"새 CEO는 모든 직원에게 친절하고 접근하기 쉬운 것으로 알려져 있다."},{w:"affinity",p:"n.",m:"친화성, 유사성",e:"There is a strong affinity between our company values and environmental sustainability.",et:"우리 회사의 가치와 환경 지속성 사이에 강한 친화성이 있다."},
  {w:"affluent",p:"adj.",m:"부유한, 풍부한",e:"The affluent demographic represents our primary target market.",et:"부유층 인구통계는 우리의 주요 목표 시장을 나타낸다."},{w:"alacrity",p:"n.",m:"민첩성, 열의",e:"She accepted the promotion with alacrity and enthusiasm.",et:"그녀는 열의를 가지고 승진을 받아들였다."},{w:"albatross",p:"n.",m:"장애물, 골칫거리",e:"The outdated system has become an albatross around the department.",et:"그 낡은 시스템은 부서의 골칫거리가 되었다."},{w:"alloy",p:"v.",m:"완화하다, 약화시키다",e:"The manager's words did little to alloy employee concerns about layoffs.",et:"관리자의 말은 정리해고에 대한 직원들의 우려를 거의 완화하지 못했다."},{w:"allure",p:"v.",m:"유혹하다, 끌어당기다",e:"The company allures customers with innovative features and competitive pricing.",et:"그 회사는 혁신적인 기능과 경쟁력 있는 가격으로 고객을 끌어당긴다."},{w:"altruism",p:"n.",m:"이타주의, 자선",e:"The CEO's altruism toward charitable causes earned widespread respect.",et:"CEO의 자선 활동에 대한 이타주의는 광범위한 존경을 얻었다."},{w:"ambition",p:"n.",m:"야망, 포부",e:"Her ambition to become CFO drives her professional development efforts.",et:"CFO가 되려는 그녀의 야망이 그녀의 전문성 개발 노력을 주도한다."},{w:"amortize",p:"v.",m:"상환하다, 상각하다",e:"The company will amortize the debt over a ten-year period.",et:"그 회사는 10년에 걸쳐 그 빚을 상환할 것이다."},{w:"anachronism",p:"n.",m:"시대착오, 부조화",e:"Using fax machines in 2024 seems like an anachronism in modern business.",et:"2024년에 팩스 기계를 사용하는 것은 현대 비즈니스에서 시대착오처럼 보인다."},{w:"anodyne",p:"n.",m:"진통제, 위로",e:"The bonus served as an anodyne to the employees' frustrations.",et:"그 보너스는 직원들의 불만을 달래주는 위로가 되었다."},
  {w:"anomaly",p:"n.",m:"이상현상, 예외",e:"The sudden drop in quarterly revenue was deemed an anomaly by analysts.",et:"분기 매출의 급격한 하락은 분석가들에 의해 이상현상으로 판단되었다."},{w:"germane",p:"adj.",m:"관련 있는, 적절한",e:"The consultant's recommendations were highly germane to our current business challenges.",et:"그 컨설턴트의 조언은 우리의 현재 비즈니스 문제와 매우 관련이 있었다."},{w:"incongruity",p:"n.",m:"불일치, 모순",e:"There was a clear incongruity between the company's stated values and actual practices.",et:"회사의 표명된 가치관과 실제 관행 사이에는 명백한 불일치가 있었다."},{w:"obfuscatory",p:"adj.",m:"혼란스럽게 하는, 불명확한",e:"The financial report's obfuscatory language made it difficult for investors to understand.",et:"그 재무 보고서의 불명확한 언어는 투자자들이 이해하기 어렵게 만들었다."},{w:"proscribe",p:"v.",m:"금지하다, 폐지하다",e:"The new regulations proscribe the use of outdated equipment in manufacturing.",et:"새로운 규정은 제조 과정에서 구식 장비의 사용을 금지한다."},{w:"solipsistic",p:"adj.",m:"자기중심적인, 독선적인",e:"The CEO's solipsistic approach to management alienated many talented employees.",et:"그 CEO의 자기중심적 관리 방식은 많은 유능한 직원들을 소외시켰다."},{w:"vociferous",p:"adj.",m:"목소리 큰, 성대한",e:"The vociferous complaints from stakeholders led to immediate policy review.",et:"이해관계자들의 강한 항의로 인해 정책 검토가 즉시 시작되었다."},{w:"asseverate",p:"v.",m:"단호히 주장하다, 확언하다",e:"The executive asseverated that the merger would not result in layoffs.",et:"그 임원은 합병이 감원을 초래하지 않을 것이라고 단호히 주장했다."},{w:"verisimilitudinous",p:"adj.",m:"사실 같은, 그럴듯한",e:"The consultant's projections seemed verisimilitudinous but lacked supporting data.",et:"그 컨설턴트의 예측은 그럴듯해 보였지만 뒷받침하는 데이터가 부족했다."},{w:"multifarious",p:"adj.",m:"다양한, 여러 종류의",e:"The company's multifarious business operations span across five continents.",et:"그 회사의 다양한 사업 운영은 5개 대륙에 걸쳐 있다."},
  {w:"prescient",p:"adj.",m:"선견지명이 있는, 예지하는",e:"The prescient decision to invest in technology positioned the firm ahead of competitors.",et:"기술에 투자하기로 한 선견지명 있는 결정이 회사를 경쟁사보다 앞서게 했다."},{w:"exigency",p:"n.",m:"급박함, 긴급한 필요",e:"The exigency of the situation demanded immediate executive decision-making.",et:"상황의 긴급함은 즉각적인 경영진 의사결정을 요구했다."}
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
  const tab = document.getElementById('tab-'+name);
  if (tab) tab.classList.add('active');
  const btn = document.querySelector('.nav button[data-tab="'+name+'"]');
  if (btn) { btn.classList.add('active'); btn.scrollIntoView({inline:'center', block:'nearest'}); }
  if (name === 'wrong') renderWrongList();
  if (name === 'home') renderDashboard();
  if (name === 'stats') renderStats();
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length-1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

function startWordQuiz() {
  const mode = document.getElementById('word-mode').value;
  const countVal = document.getElementById('word-count').value;
  let list = shuffle(WORDS);
  if (countVal !== 'all') list = list.slice(0, parseInt(countVal));
  quiz = { mode, list, idx:0, score:0, answered:false, area:'word-area' };
  renderQuestion();
}

// 대시보드/추천에서 특정 단어 목록으로 퀴즈 시작
function startQuiz(mode, list, area) {
  quiz = { mode, list: shuffle(list), idx:0, score:0, answered:false, area: area || 'word-area' };
  renderQuestion();
}

function renderQuestion() {
  const area = document.getElementById(quiz.area || (quiz.mode+'-area'));
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
    srsRecord(word, true);
    showFeedback(true, '정답!', word);
  } else {
    btn.classList.add('wrong');
    btns.forEach(b => { if (b.textContent === word.m) b.classList.add('correct'); });
    saveWrong(word);
    srsRecord(word, false);
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
    srsRecord(word, true);
    showFeedback(true, '정답!', word);
  } else {
    saveWrong(word);
    srsRecord(word, false);
    showFeedback(false, '오답 — 정답: ' + word.w, word);
  }
  speak(word.w);
  document.getElementById('next-btn').classList.add('show');
}

function showFeedback(ok, msg, word) {
  const fb = document.getElementById('fb');
  fb.innerHTML = '';
  fb.className = 'feedback show ' + (ok ? 'correct' : 'wrong');

  const result = document.createElement('div');
  result.className = 'fb-result';
  result.textContent = (ok ? '✅ ' : '❌ ') + msg;
  fb.appendChild(result);

  if (word && word.e) {
    const ex = document.createElement('div');
    ex.className = 'fb-example';

    const en = document.createElement('span');
    en.className = 'fb-ex-en';
    en.textContent = word.e + ' ';
    const btn = document.createElement('button');
    btn.className = 'speak-btn';
    btn.textContent = '🔊';
    btn.onclick = () => speak(word.e);
    en.appendChild(btn);

    const ko = document.createElement('span');
    ko.className = 'fb-ex-ko';
    ko.textContent = word.et || '';

    ex.appendChild(en);
    ex.appendChild(ko);
    fb.appendChild(ex);
  }
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
      <button onclick="switchTab('home')">홈으로</button>
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
    <div class="wrong-item-wrap">
      <div class="wrong-item">
        <div>
          <div class="wword">${it.w} <span style="font-size:0.75rem;color:#9ca3af;">${it.p}</span> <button class="speak-btn" onclick="speak('${it.w}')" title="발음 듣기">🔊</button></div>
          <div class="wmean">${it.m}</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <span class="wcount">틀림 ${it.count}회</span>
          <button class="tip-btn" onclick="showTipFor('${it.w}')" title="AI 암기 도우미">💡</button>
        </div>
      </div>
      <div class="tip-box" id="tip-${it.w}"></div>
    </div>`).join('');
}

// ===== AI 암기 도우미 =====
async function showTipFor(wKey) {
  if (typeof hasAIKey === 'function' && !hasAIKey()) { openSettings(); return; }
  const box = document.getElementById('tip-' + wKey);
  if (!box) return;
  if (box.classList.contains('show')) { box.classList.remove('show'); box.innerHTML = ''; return; }
  const word = WORDS.find(w => w.w === wKey) || wrongWords[wKey];
  box.classList.add('show');
  box.innerHTML = '<div class="tip-loading">AI가 암기 팁을 생각하는 중...</div>';
  try {
    const tip = await aiTip(word);
    let html = '';
    if (tip.origin)  html += `<div class="tip-row"><b>어원</b> ${tip.origin}</div>`;
    if (tip.memory)  html += `<div class="tip-row"><b>연상</b> ${tip.memory}</div>`;
    if (tip.confuse) html += `<div class="tip-row"><b>혼동</b> ${tip.confuse}</div>`;
    box.innerHTML = html || '팁을 가져오지 못했습니다.';
  } catch (e) {
    box.innerHTML = '<div class="tip-error">' + e.message + '</div>';
  }
}

// ===== AI 약점 분석 =====
async function runAnalyze() {
  if (typeof hasAIKey === 'function' && !hasAIKey()) { openSettings(); return; }
  const out = document.getElementById('ai-result');
  const items = Object.values(wrongWords);
  if (items.length < 3) {
    out.innerHTML = '<div class="ai-empty">분석하려면 오답이 최소 3개 필요해요. 퀴즈를 더 풀어보세요!</div>';
    return;
  }
  out.innerHTML = '<div class="tip-loading">AI가 오답을 분석하는 중...</div>';
  try {
    const wrong = items.map(it => ({ w: it.w, p: it.p, m: it.m, count: it.count }));
    const res = await aiAnalyze(wrong, WORDS);
    let html = `<div class="analyze-card">
      <div class="analyze-summary">${res.summary || ''}</div>`;
    if (res.weaknesses && res.weaknesses.length)
      html += `<div class="weak-tags">${res.weaknesses.map(w => `<span class="weak-tag">${w}</span>`).join('')}</div>`;
    if (res.advice) html += `<div class="analyze-advice">💬 ${res.advice}</div>`;
    html += `</div>`;
    if (res.recommend && res.recommend.length) {
      const recWords = res.recommend.map(w => WORDS.find(x => x.w.toLowerCase() === String(w).toLowerCase())).filter(Boolean);
      window._recWords = recWords;
      html += `<div class="rec-card">
        <h3>📌 집중 복습 추천 (${recWords.length}개)</h3>
        <div class="rec-words">${recWords.map(w => w.w).join(', ')}</div>
        <button class="ai-btn" onclick="startRecQuiz()">추천 단어로 퀴즈 시작</button>
      </div>`;
    }
    out.innerHTML = html;
  } catch (e) {
    out.innerHTML = '<div class="tip-error">' + e.message + '</div>';
  }
}

function startRecQuiz() {
  const list = window._recWords;
  if (!list || !list.length) return;
  switchTab('word');
  startQuiz('q1', list, 'word-area');
}

// ===== AI 설정 모달 =====
let _selectedProvider = 'anthropic';

function openSettings() {
  const cfg = getAICfg();
  _selectedProvider = cfg.provider || 'anthropic';
  selectProvider(_selectedProvider);
  document.getElementById('api-key-input').value = cfg.key || '';
  document.getElementById('model-input').value = cfg.model || '';
  document.getElementById('settings-modal').classList.add('show');
}
function closeSettings() {
  document.getElementById('settings-modal').classList.remove('show');
}
function selectProvider(p) {
  _selectedProvider = p;
  document.getElementById('prov-anthropic').classList.toggle('active', p === 'anthropic');
  document.getElementById('prov-github').classList.toggle('active', p === 'github');
  const help = document.getElementById('provider-help');
  if (p === 'anthropic') {
    help.innerHTML = 'console.anthropic.com/settings/keys 에서 발급 (유료). 기본 모델: claude-haiku-4-5';
  } else {
    help.innerHTML = 'github.com/settings/tokens 에서 발급한 토큰 (무료, 호출 제한 있음). 기본 모델: openai/gpt-4o-mini';
  }
}
function saveSettings() {
  const key = document.getElementById('api-key-input').value.trim();
  const model = document.getElementById('model-input').value.trim();
  if (!key) { alert('API 키를 입력하세요.'); return; }
  saveAICfg({ provider: _selectedProvider, key, model });
  closeSettings();
  alert('저장됐어요! 이제 💡 암기 도우미와 🤖 AI 분석을 쓸 수 있습니다.');
}

// ===== 홈 대시보드 =====
function renderDashboard() {
  const el = document.getElementById('dashboard');
  const st = getStats();
  const sm = srsSummary();
  const done = todayCount();
  const goal = st.goal || 20;
  const goalPct = Math.min(100, Math.round(done / goal * 100));
  const masterPct = Math.round(sm.mastered / sm.total * 100);

  el.innerHTML = `
    <div class="dash-top">
      <div class="streak-box">
        <div class="streak-num">🔥 ${st.streak || 0}</div>
        <div class="streak-label">연속 학습일</div>
      </div>
      <div class="goal-ring" style="--pct:${goalPct}">
        <div class="goal-inner">
          <div class="goal-done">${done}/${goal}</div>
          <div class="goal-label">오늘 목표</div>
        </div>
      </div>
    </div>

    <div class="dash-review card-flat">
      <div>
        <div class="dr-title">📅 오늘 복습할 단어</div>
        <div class="dr-count">${sm.due}개 대기 중</div>
      </div>
      <button class="ai-btn" ${sm.due ? '' : 'disabled'} onclick="startReview()">복습 시작</button>
    </div>

    <div class="dash-actions">
      <button class="dash-card" onclick="startNewWords()">
        <div class="dc-emoji">🆕</div><div class="dc-t">새 단어 학습</div><div class="dc-s">${sm.fresh}개 남음</div>
      </button>
      <button class="dash-card" onclick="switchTab('grammar')">
        <div class="dc-emoji">📝</div><div class="dc-t">Part5 문법</div><div class="dc-s">AI 문제</div>
      </button>
      <button class="dash-card" onclick="switchTab('listen')">
        <div class="dc-emoji">🎧</div><div class="dc-t">듣기 받아쓰기</div><div class="dc-s">청해 훈련</div>
      </button>
      <button class="dash-card" onclick="switchTab('ai')">
        <div class="dc-emoji">🤖</div><div class="dc-t">AI 약점분석</div><div class="dc-s">맞춤 진단</div>
      </button>
    </div>

    <div class="mastery-bar-wrap card-flat">
      <div class="mb-top"><span>단어 숙달도</span><span>${sm.mastered} / ${sm.total} (${masterPct}%)</span></div>
      <div class="mb-track"><div class="mb-fill" style="width:${masterPct}%"></div></div>
      <div class="mb-sub">학습 시작 ${sm.studied}개 · 숙달 ${sm.mastered}개</div>
    </div>`;
}

function startReview() {
  const due = getDueWords();
  if (!due.length) return;
  switchTab('word');
  startQuiz('q1', due, 'word-area');
}
function startNewWords() {
  const fresh = getNewWords(20);
  if (!fresh.length) { alert('모든 단어를 학습했어요! 복습에 집중하세요 🎉'); return; }
  switchTab('word');
  startQuiz('q1', fresh, 'word-area');
}

// ===== 듣기(받아쓰기) =====
function startListen() {
  const n = parseInt(document.getElementById('listen-count').value);
  const list = shuffle(WORDS).slice(0, n);
  quiz = { mode: 'listen', list, idx:0, score:0, answered:false, area:'listen-area' };
  renderListen();
}
function renderListen() {
  const area = document.getElementById('listen-area');
  if (quiz.idx >= quiz.list.length) { renderResult(area); return; }
  const word = quiz.list[quiz.idx];
  const pct = Math.round((quiz.idx / quiz.list.length) * 100);
  area.innerHTML = `
    <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
    <div class="progress-text">${quiz.idx+1} / ${quiz.list.length}  ·  맞춤: ${quiz.score}</div>
    <div class="card">
      <button class="big-speak" onclick="speak('${word.w}')">🔊</button>
      <div class="hint">들리는 단어를 입력하세요</div>
      <div class="type-input-wrap">
        <input class="type-input" id="listen-input" placeholder="영어로 입력..." autocomplete="off" onkeydown="if(event.key==='Enter')checkListen()">
        <button class="submit-btn" onclick="checkListen()">확인</button>
      </div>
      <div class="feedback" id="fb"></div>
      <button class="next-btn" id="next-btn" onclick="nextListen()">다음 →</button>
    </div>`;
  setTimeout(() => { document.getElementById('listen-input')?.focus(); speak(word.w); }, 100);
}
function checkListen() {
  if (quiz.answered) return;
  const input = document.getElementById('listen-input');
  const val = input.value.trim().toLowerCase();
  if (!val) return;
  quiz.answered = true;
  input.disabled = true;
  const word = quiz.list[quiz.idx];
  const ok = val === word.w.toLowerCase();
  if (ok) { quiz.score++; srsRecord(word, true); showFeedback(true, '정답! ' + word.w + ' (' + word.m + ')', word); }
  else { saveWrong(word); srsRecord(word, false); showFeedback(false, '오답 — 정답: ' + word.w + ' (' + word.m + ')', word); }
  document.getElementById('next-btn').classList.add('show');
}
function nextListen() { quiz.idx++; quiz.answered = false; renderListen(); }

// ===== Part5 문법 =====
let grammarQuiz = { list:[], idx:0, score:0, answered:false };
async function startGrammar() {
  if (typeof hasAIKey === 'function' && !hasAIKey()) { openSettings(); return; }
  const area = document.getElementById('grammar-area');
  area.innerHTML = '<div class="tip-loading">AI가 Part5 문제를 만드는 중... (10초 정도)</div>';
  try {
    const targets = shuffle(WORDS).slice(0, 5).map(w => ({ w: w.w, p: w.p, m: w.m }));
    const qs = await aiGrammar(targets, 5);
    if (!qs.length) { area.innerHTML = '<div class="tip-error">문제를 생성하지 못했어요. 다시 시도해주세요.</div>'; return; }
    grammarQuiz = { list: qs, idx:0, score:0, answered:false };
    renderGrammar();
  } catch (e) {
    area.innerHTML = '<div class="tip-error">' + e.message + '</div>';
  }
}
function renderGrammar() {
  const area = document.getElementById('grammar-area');
  const q = grammarQuiz;
  if (q.idx >= q.list.length) {
    const pct = Math.round(q.score / q.list.length * 100);
    area.innerHTML = `<div class="result-card"><div style="font-size:3rem;">${pct>=80?'🎉':pct>=60?'👍':'📖'}</div>
      <div class="score">${q.score} / ${q.list.length}</div><p>정답률 ${pct}%</p>
      <button onclick="startGrammar()">새 문제 5개</button></div>`;
    return;
  }
  const item = q.list[q.idx];
  const choices = shuffle(item.choices || []);
  const sentence = (item.q || '').replace(/____+/, '<span class="blank">____</span>');
  area.innerHTML = `
    <div class="progress-text" style="margin-top:16px;">${q.idx+1} / ${q.list.length}  ·  맞춤: ${q.score}</div>
    <div class="card" style="min-height:auto;">
      <div class="gram-q">${sentence}</div>
      <div class="options">
        ${choices.map(c => `<button class="option-btn" onclick="checkGrammar(this,${JSON.stringify(c).replace(/"/g,'&quot;')})">${c}</button>`).join('')}
      </div>
      <div class="feedback" id="fb"></div>
      <button class="next-btn" id="next-btn" onclick="nextGrammar()">다음 →</button>
    </div>`;
}
function checkGrammar(btn, chosen) {
  const q = grammarQuiz;
  if (q.answered) return;
  q.answered = true;
  const item = q.list[q.idx];
  const btns = btn.parentElement.querySelectorAll('.option-btn');
  btns.forEach(b => b.disabled = true);
  const ok = String(chosen).trim() === String(item.answer).trim();
  if (ok) { btn.classList.add('correct'); q.score++; }
  else {
    btn.classList.add('wrong');
    btns.forEach(b => { if (b.textContent === String(item.answer)) b.classList.add('correct'); });
  }
  const fb = document.getElementById('fb');
  fb.className = 'feedback show ' + (ok ? 'correct' : 'wrong');
  fb.innerHTML = `<div class="fb-result">${ok?'✅ 정답!':'❌ 정답: '+item.answer}</div>
    <div class="fb-example"><span class="fb-ex-en">💡 ${item.point||''}</span><span class="fb-ex-ko">${item.trans||''}</span></div>`;
  document.getElementById('next-btn').classList.add('show');
}
function nextGrammar() { grammarQuiz.idx++; grammarQuiz.answered = false; renderGrammar(); }

// ===== 통계 =====
function renderStats() {
  const area = document.getElementById('stats-area');
  const st = getStats();
  const sm = srsSummary();
  const days = last7days();
  const maxC = Math.max(1, ...days.map(d => d.count));
  area.innerHTML = `
    <h2 style="font-size:1.1rem;font-weight:700;margin-bottom:16px;">📊 학습 통계</h2>
    <div class="stat-grid">
      <div class="stat-cell"><div class="sc-num">🔥 ${st.streak||0}</div><div class="sc-lbl">연속 학습일</div></div>
      <div class="stat-cell"><div class="sc-num">${sm.studied}</div><div class="sc-lbl">학습한 단어</div></div>
      <div class="stat-cell"><div class="sc-num">${sm.mastered}</div><div class="sc-lbl">숙달 단어</div></div>
      <div class="stat-cell"><div class="sc-num">${sm.due}</div><div class="sc-lbl">복습 대기</div></div>
    </div>
    <div class="card-flat" style="margin-top:16px;">
      <div class="mb-top"><span>최근 7일 학습량</span></div>
      <div class="bar-chart">
        ${days.map(d => `<div class="bar-col">
          <div class="bar" style="height:${Math.round(d.count/maxC*80)}px" title="${d.count}개"></div>
          <div class="bar-n">${d.count||''}</div>
          <div class="bar-l">${d.label}</div>
        </div>`).join('')}
      </div>
    </div>
    <div class="card-flat goal-setter">
      <span>일일 목표</span>
      <div>
        <button onclick="changeGoal(-5)">−</button>
        <b id="goal-val">${st.goal||20}</b>
        <button onclick="changeGoal(5)">＋</button>
      </div>
    </div>`;
}
function changeGoal(d) {
  const st = getStats();
  const g = Math.max(5, (st.goal||20) + d);
  setGoal(g);
  document.getElementById('goal-val').textContent = g;
  renderDashboard();
}

updateWrongBadge();
renderDashboard();
