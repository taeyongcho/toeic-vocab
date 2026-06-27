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
  {w:"dearth",p:"n.",m:"부족, 결핍",e:"There is a dearth of qualified candidates in this field.",et:"이 분야에서는 적격 지원자가 부족하다."},{w:"deference",p:"n.",m:"존경, 경의",e:"The junior staff showed deference to the senior executives.",et:"junior 직원들은 senior 경영진에 대한 경의를 보였다."},{w:"detritus",p:"n.",m:"파편, 잔해",e:"The company had to clear detritus from the construction site.",et:"회사는 건설 현장의 잔해를 치워야 했다."},{w:"diffident",p:"adj.",m:"겸손한, 자신 없는",e:"Despite his talent, he remained diffident about his abilities.",et:"그의 재능에도 불구하고 그는 자신의 능력에 대해 겸손했다."},{w:"dilatory",p:"adj.",m:"미루는, 지연하는",e:"The dilatory response delayed the project by several weeks.",et:"지연 반응으로 인해 프로젝트가 몇 주 늦어졌다."},{w:"disabuse",p:"v.",m:"오해를 풀다, 깨우치다",e:"We must disabuse clients of the false assumption immediately.",et:"우리는 즉시 고객들의 잘못된 가정을 바로잡아야 한다."},{w:"dissemble",p:"v.",m:"속이다, 감추다",e:"The executive refused to dissemble about the financial losses.",et:"경영진은 재무 손실에 대해 거짓말을 거부했다."},{w:"downstream",p:"adj.",m:"하류의, 후속의",e:"Downstream effects of the policy became apparent later.",et:"정책의 후속 효과는 나중에 명백해졌다."},{w:"effusive",p:"adj.",m:"감정적인, 수다스러운",e:"The client gave effusive praise for the completed work.",et:"고객은 완료된 작업에 대해 극도로 칭찬했다."},{w:"expurgate",p:"v.",m:"삭제하다, 정화하다",e:"The editor decided to expurgate sensitive information from the report.",et:"편집자는 보고서에서 민감한 정보를 삭제하기로 결정했다."}
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
