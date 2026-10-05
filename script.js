/**
 * Portfolio Logic: Đào Duy Long · FTU Faculty of Law
 * Bilingual Engine (VI/EN), Theme Switcher, Dossier Modals, Copy Toast & Print CV
 */

document.addEventListener("DOMContentLoaded", () => {
    // -------------------------------------------------------------
    // 1. Translations Dictionary (VI & EN)
    // -------------------------------------------------------------
    const i18nData = {
        vi: {
            brandSub: "Khoa Luật · FTU K61",
            navAbout: "Giới thiệu",
            navEducation: "Học vấn",
            navAchievements: "Thành tích",
            navActivities: "Hoạt động",
            navSkills: "Kỹ năng",
            navContact: "Liên hệ",
            btnResume: "In / Tải CV",

            statusAvailable: "Sẵn sàng tiếp nhận cơ hội Thực tập Pháp lý (2025 – 2026)",
            heroSubtitle: "Cử nhân Luật Kinh tế tương lai",
            heroSubtitleTag: "FTU LAW K61",
            heroBio: "Sinh viên Khóa 61 Khoa Luật - Trường Đại học Ngoại thương (FTU). Theo đuổi chuyên sâu về Pháp luật Kinh tế, Tranh tụng thương mại và Nghiên cứu Pháp lý. Sở hữu tư duy phản biện logic rèn giũa qua các đấu trường Diễn án (Moot Court) cùng năng lực học thuật được khẳng định tại Hội nghị Khoa học Sinh viên.",
            btnExplore: "Xem Thành tích & Hồ sơ",
            btnContact: "Liên hệ Trực tiếp",

            statUniv: "FTU Hà Nội",
            statUnivLabel: "Khoa Luật Khóa 61",
            statGpa: "3.0 / 4.0",
            statGpaLabel: "GPA Tích lũy Hiện tại",
            statMoot: "Moot Court",
            statMootLabel: "Giải Khuyến khích Diễn án",
            statResearch: "NCKH 2026",
            statResearchLabel: "Báo cáo Hội nghị Khoa học",

            badgeMootTitle: "Tranh tụng Diễn án",
            badgeMootDesc: "Moot Court Honoree",
            badgeFtuTitle: "Đại học Ngoại thương",
            badgeFtuDesc: "Khoa Luật (2022 - 2026)",

            aboutLabel: "Tầm nhìn & Tôn chỉ",
            aboutTitle: "Tư duy Pháp lý Sắc bén & Giá trị Thực tiễn",
            aboutLead: "Kết hợp nền tảng lý luận pháp luật kinh tế vững vàng với tư duy thực tiễn trong thương mại và tranh tụng.",
            aboutQuote: "“Pháp luật không chỉ là hệ thống điều khoản, mà là công cụ kiến tạo giải pháp an toàn và hiệu quả cho hoạt động kinh doanh.”",
            aboutP1: "Mình là Đào Duy Long, sinh viên K61 Khoa Luật, Trường Đại học Ngoại thương (FTU). Trong suốt quá trình học tập, mình luôn tập trung đi sâu vào các lĩnh vực Pháp luật Kinh tế, Pháp chế Doanh nghiệp và Giải quyết Tranh chấp Thương mại.",
            aboutP2: "Được tôi luyện trong môi trường năng động của Ngoại thương và rèn luyện kỹ năng qua các phiên Diễn án (Moot Court), mình định hướng trở thành một chuyên viên pháp chế/luật sư nội bộ có khả năng nhìn nhận vấn đề đa chiều, bảo vệ quyền lợi hợp pháp và tối ưu hóa giải pháp cho doanh nghiệp.",

            pillar1Title: "Luật Kinh tế & Doanh nghiệp",
            pillar1Desc: "Nắm vững khung khổ pháp lý về quản trị công ty, gia nhập thị trường, hợp đồng thương mại và tái cấu trúc.",
            pillar2Title: "Tranh tụng & Trọng tài Thương mại",
            pillar2Desc: "Kỹ năng phân tích vụ việc, nghiên cứu án lệ, xây dựng lập luận pháp lý và tranh biện phản biện.",
            pillar3Title: "Nghiên cứu & Thẩm định Pháp lý",
            pillar3Desc: "Năng lực tra cứu, hệ thống hóa văn bản quy phạm pháp luật và đánh giá rủi ro pháp lý trong hoạt động thương mại.",

            eduLabel: "Quá trình Đào tạo",
            eduTitle: "Học vấn & Nền tảng Chuyên môn",
            eduLead: "Môi trường đào tạo pháp lý chất lượng cao tại trường đại học kinh tế hàng đầu Việt Nam.",
            eduInstitution: "Trường Đại học Ngoại thương (FTU Hà Nội)",
            eduProgram: "Chuyên ngành: Luật Kinh tế · Khoa Luật · Khóa K61",
            eduPeriod: "Niên khóa: 2022 – 2026 (Dự kiến tốt nghiệp 2026)",
            courseworkTitle: "Các học phần chuyên sâu tiêu biểu",
            c1: "Luật Doanh nghiệp & Đầu tư",
            c2: "Pháp luật Hợp đồng Thương mại",
            c3: "Tranh tụng Kinh doanh Thương mại",
            c4: "Luật Cạnh tranh & Chống độc quyền",
            c5: "Kỹ năng Diễn án & Tranh biện Pháp lý",
            c6: "Pháp luật Thương mại Quốc tế",

            achieveLabel: "Dấu ấn Nổi bật",
            achieveTitle: "Giải thưởng & Nghiên cứu Khoa học",
            achieveLead: "Những dấu mốc khẳng định năng lực phân tích thực tiễn và tư duy học thuật độc lập.",
            award1Seal: "Giải thưởng Tranh tụng",
            award1Title: "Giải Khuyến khích Cuộc thi Diễn án Luật (Moot Court)",
            award1Org: "Cuộc thi Diễn án Mô phỏng Tranh tụng Dành cho Sinh viên Luật",
            award1Desc: "Thể hiện xuất sắc vai trò người biện hộ (Counsel/Oralist), xây dựng bản đệ trình pháp lý (Memorials) bảo vệ thân chủ trong vụ việc tranh chấp hợp đồng thương mại và trả lời phản biện của Hội đồng Trọng tài.",
            tagMoot1: "Nghiên cứu Án lệ",
            tagMoot2: "Viết Bản biện hộ",
            tagMoot3: "Tranh biện tại Phiên xử",
            btnDossier1: "Xem Chi tiết Vụ án & Vai trò →",

            award2Seal: "Công trình Nghiên cứu",
            award2Title: "Bài Nghiên cứu tại Hội nghị Khoa học Sinh viên ngành Luật 2026",
            award2Org: "Hội nghị Khoa học Sinh viên · Khoa Luật FTU",
            award2Desc: "Đề tài nghiên cứu độc lập chuyên sâu về các vướng mắc pháp lý trong thực tiễn Luật Kinh tế, đề xuất các khuyến nghị hoàn thiện thể chế và nâng cao hiệu quả áp dụng pháp luật trong bối cảnh mới.",
            tagRes1: "Phương pháp Luận NCKH",
            tagRes2: "Phân tích Quy định Pháp luật",
            tagRes3: "Khuyến nghị Lập pháp",
            btnDossier2: "Xem Tóm tắt Nghiên cứu →",

            actLabel: "Đóng góp Xã hội & Kỹ năng",
            actTitle: "Hoạt động Ngoại khóa & Đoàn thể",
            actLead: "Tích cực tham gia các tổ chức sinh viên chuyên môn và rèn luyện kỹ năng mềm toàn diện.",
            actClub: "CLB Luật CLC - FTU",
            actRole: "Ban Truyền thông (Media & PR Department)",
            actTerm: "Nhiệm kỳ: 2022 – 2023",
            actB1: "Lên kế hoạch và triển khai nội dung truyền thông cho các chuỗi hội thảo, tọa đàm pháp lý và các cuộc thi học thuật do CLB và Khoa Luật tổ chức.",
            actB2: "Tham gia biên tập và lan tỏa các ấn phẩm phổ biến kiến thức pháp luật kinh tế, quyền và nghĩa vụ cho sinh viên.",
            actB3: "Nâng cao năng lực kết nối đối ngoại, làm việc nhóm dưới áp lực tiến độ và kỹ năng ứng biến linh hoạt trong tổ chức sự kiện.",

            skillLabel: "Hồ sơ Năng lực",
            skillTitle: "Kỹ năng & Chuyên môn",
            skillLead: "Sự kết hợp giữa chuyên môn pháp lý, ngoại ngữ hội nhập và công cụ hỗ trợ công việc hiện đại.",
            cat1Title: "Chuyên môn Pháp lý",
            s1: "Nghiên cứu & Tra cứu Pháp luật",
            s1Level: "Thành thạo",
            s2: "Soạn thảo Bản đệ trình / Diễn án",
            s2Level: "Thành thạo",
            s3: "Thẩm định Hợp đồng & Rủi ro",
            s3Level: "Nền tảng Tốt",
            s4: "Tư duy Phản biện & Tranh luận",
            s4Level: "Tốt",

            cat2Title: "Ngoại ngữ Giao tiếp & Pháp lý",
            s5: "Tiếng Anh (Legal & Academic)",
            s5Level: "Nghiên cứu & Giao tiếp",
            s6: "Tiếng Trung (Mandarin)",
            s6Level: "Giao tiếp & Đọc cơ bản",

            cat3Title: "Kỹ năng Bổ trợ & Công nghệ",
            s7: "Tin học Văn phòng (Word, Excel, PPT)",
            s7Level: "Nâng cao",
            s8: "Hệ thống CSDL (Thư viện Pháp luật)",
            s8Level: "Thành thạo",
            s9: "Truyền thông & Tổ chức Sự kiện",
            s9Level: "Tốt",

            contactLabel: "Kết nối & Hợp tác",
            contactTitle: "Sẵn sàng Đón nhận Cơ hội Mới",
            contactLead: "Rất mong được lắng nghe về các cơ hội thực tập, thực tế pháp lý tại các văn phòng luật sư, công ty luật và phòng pháp chế doanh nghiệp.",
            contactCardH3: "Thông tin Liên hệ Chính thức",
            contactCardP: "Bạn đang tìm kiếm một thực tập sinh pháp lý nhiệt huyết, tận tâm và có nền tảng học thuật vững vàng từ FTU? Đừng ngần ngại liên hệ với tôi.",
            chEmailTitle: "Email Sinh viên FTU",
            btnCopy: "Sao chép",
            btnCopied: "Đã chép!",
            chLocTitle: "Địa điểm Làm việc",
            chLocVal: "Hà Nội, Việt Nam",
            chUnivTitle: "Đơn vị Đào tạo",
            chUnivVal: "Khoa Luật, ĐH Ngoại thương",

            formTitle: "Gửi Lời nhắn Nhanh",
            formName: "Họ và tên của bạn",
            formOrg: "Cơ quan / Văn phòng Luật",
            formMsg: "Nội dung trao đổi / Lời mời thực tập",
            formSend: "Gửi Email Trực tiếp",

            toastCopied: "✓ Đã sao chép email vào bộ nhớ tạm!",
            footerText: "© 2026 Đào Duy Long · Khoa Luật, Trường Đại học Ngoại thương (FTU). Bản quyền được bảo lưu."
        },

        en: {
            brandSub: "Faculty of Law · FTU K61",
            navAbout: "About",
            navEducation: "Education",
            navAchievements: "Achievements",
            navActivities: "Activities",
            navSkills: "Skills",
            navContact: "Contact",
            btnResume: "Print / Save CV",

            statusAvailable: "Available for Legal Internship Opportunities (2025 – 2026)",
            heroSubtitle: "Aspiring Commercial & Corporate Lawyer",
            heroSubtitleTag: "FTU LAW K61",
            heroBio: "Cohort 61 Law student at Foreign Trade University (FTU). Passionate about Economic Law, Commercial Litigation, and Legal Research. Proven sharp analytical reasoning honed through Moot Court competitions and academic excellence showcased at the Law Student Scientific Conference.",
            btnExplore: "View Honors & Dossier",
            btnContact: "Get in Touch",

            statUniv: "FTU Hanoi",
            statUnivLabel: "Faculty of Law K61",
            statGpa: "3.0 / 4.0",
            statGpaLabel: "Cumulative GPA",
            statMoot: "Moot Court",
            statMootLabel: "Honorable Mention",
            statResearch: "Research 2026",
            statResearchLabel: "Conference Paper",

            badgeMootTitle: "Moot Court Litigation",
            badgeMootDesc: "Moot Court Honoree",
            badgeFtuTitle: "Foreign Trade University",
            badgeFtuDesc: "Faculty of Law (2022 - 2026)",

            aboutLabel: "Vision & Philosophy",
            aboutTitle: "Rigorous Legal Reasoning & Commercial Acumen",
            aboutLead: "Bridging foundational economic jurisprudence with practical commercial and litigation solutions.",
            aboutQuote: "“Law is not merely a collection of statutes, but a dynamic instrument engineered to safeguard and empower business ventures.”",
            aboutP1: "I am Dao Duy Long, a Cohort 61 student at the Faculty of Law, Foreign Trade University (FTU). Throughout my legal studies, I have dedicated myself to Economic Law, Corporate Governance, and Commercial Dispute Resolution.",
            aboutP2: "Trained within FTU's prestigious, commercially-driven environment and tested across mock courtroom proceedings, I aspire to become an in-house counsel and corporate litigator who provides nuanced, commercially sound, and defensible legal solutions.",

            pillar1Title: "Economic & Corporate Law",
            pillar1Desc: "Comprehensive grounding in corporate governance, market entry regulations, commercial contracts, and restructuring.",
            pillar2Title: "Litigation & Commercial Arbitration",
            pillar2Desc: "Case briefing, precedents analysis, legal memorial drafting, and persuasive courtroom advocacy.",
            pillar3Title: "Legal Research & Due Diligence",
            pillar3Desc: "Systematic statutory interpretation, regulatory compliance assessment, and commercial risk mitigation.",

            eduLabel: "Academic Background",
            eduTitle: "Education & Qualifications",
            eduLead: "High-caliber legal curriculum at Vietnam's premier foreign trade and economic university.",
            eduInstitution: "Foreign Trade University (FTU Hanoi)",
            eduProgram: "Major: Economic Law · Faculty of Law · Cohort K61",
            eduPeriod: "Duration: 2022 – 2026 (Expected Graduation: 2026)",
            courseworkTitle: "Core Academic Coursework",
            c1: "Enterprise & Investment Law",
            c2: "Commercial Contract Law",
            c3: "Commercial Dispute Resolution",
            c4: "Competition & Antitrust Law",
            c5: "Moot Court & Legal Advocacy",
            c6: "International Trade Law",

            achieveLabel: "Key Milestones",
            achieveTitle: "Honors & Scientific Research",
            achieveLead: "Demonstrating practical litigation acumen and rigorous scholarly inquiry.",
            award1Seal: "Litigation Award",
            award1Title: "Honorable Mention — Moot Court Competition",
            award1Org: "National Law Student Simulated Trial Competition",
            award1Desc: "Demonstrated superior advocacy as legal counsel/oralist, authored comprehensive legal memorials defending clients in complex commercial contract disputes, and fielded intense bench inquisitions.",
            tagMoot1: "Case Law Research",
            tagMoot2: "Memorial Drafting",
            tagMoot3: "Oral Advocacy",
            btnDossier1: "View Case Dossier & Details →",

            award2Seal: "Scholarly Publication",
            award2Title: "Published Paper at Law Student Scientific Conference 2026",
            award2Org: "Student Scientific Conference · FTU Faculty of Law",
            award2Desc: "Authored an independent legal treatise analyzing statutory bottlenecks in Vietnamese Economic Law, proposing actionable legislative reforms to strengthen the regulatory regime in the modern market.",
            tagRes1: "Legal Research Methodology",
            tagRes2: "Statutory Analysis",
            tagRes3: "Policy Recommendations",
            btnDossier2: "View Research Abstract →",

            actLabel: "Leadership & Community",
            actTitle: "Extracurricular & Organization",
            actLead: "Cultivating leadership, public relations acumen, and team coordination within law associations.",
            actClub: "FTU High Quality Law Club (CLC)",
            actRole: "Communications & PR Department",
            actTerm: "Tenure: 2022 – 2023",
            actB1: "Formulated and executed digital communications strategies for annual legal seminars, forums, and academic competitions organized by the Faculty of Law.",
            actB2: "Curated and disseminated public legal awareness publications, promoting legal literacy among the student body.",
            actB3: "Strengthened external public relations, cross-functional collaboration under strict deadlines, and agile event management.",

            skillLabel: "Core Competencies",
            skillTitle: "Skills & Proficiencies",
            skillLead: "A synergistic blend of statutory doctrine, foreign language agility, and modern productivity tools.",
            cat1Title: "Legal Competencies",
            s1: "Legal Research & Statutory Analysis",
            s1Level: "Proficient",
            s2: "Memorial Drafting & Pleading",
            s2Level: "Proficient",
            s3: "Contract Review & Due Diligence",
            s3Level: "Strong Foundation",
            s4: "Critical Reasoning & Advocacy",
            s4Level: "Advanced",

            cat2Title: "Languages",
            s5: "English (Legal & Academic)",
            s5Level: "Research & Professional",
            s6: "Chinese (Mandarin)",
            s6Level: "Basic & Conversational",

            cat3Title: "Technical & Professional",
            s7: "MS Office Suite (Word, Excel, PPT)",
            s7Level: "Advanced",
            s8: "Legal Databases (Thư viện Pháp luật)",
            s8Level: "Proficient",
            s9: "Media & Event Coordination",
            s9Level: "Skilled",

            contactLabel: "Get In Touch",
            contactTitle: "Open to New Legal Engagements",
            contactLead: "I welcome discussions regarding internships, legal assistantships, and corporate counsel opportunities at law firms and corporate legal departments.",
            contactCardH3: "Official Contact Details",
            contactCardP: "Seeking an enthusiastic, dedicated legal trainee equipped with rigorous academic training from FTU? Reach out directly below.",
            chEmailTitle: "Official Student Email",
            btnCopy: "Copy",
            btnCopied: "Copied!",
            chLocTitle: "Location",
            chLocVal: "Hanoi, Vietnam",
            chUnivTitle: "Institution",
            chUnivVal: "Faculty of Law, FTU",

            formTitle: "Quick Inquiry / Invitation",
            formName: "Your Full Name",
            formOrg: "Organization / Law Firm",
            formMsg: "Inquiry or Internship Opportunity",
            formSend: "Send Direct Email",

            toastCopied: "✓ Email copied to clipboard!",
            footerText: "© 2026 Dao Duy Long · Faculty of Law, Foreign Trade University (FTU). All rights reserved."
        }
    };

    // -------------------------------------------------------------
    // 2. Dossier Modal Content Data
    // -------------------------------------------------------------
    const dossierData = {
        moot: {
            vi: {
                badge: "Hồ sơ Vụ án · Diễn án Moot Court",
                title: "Giải Khuyến khích Cuộc thi Diễn án Luật (Moot Court)",
                content: `
          <h4 class="modal-section-title">Bối cảnh Vụ việc Giả định</h4>
          <p>Tranh chấp phát sinh từ hợp đồng mua bán hàng hóa thương mại quốc tế kết hợp nghĩa vụ bảo lãnh và điều khoản phạt vi phạm, bồi thường thiệt hại theo quy định của Luật Thương mại Việt Nam và thông lệ CISG.</p>
          
          <h4 class="modal-section-title">Vai trò & Nhiệm vụ Đảm trách</h4>
          <p>Đảm nhận vị trí <strong>Người biện hộ (Counsel / Oralist)</strong> và tham gia trực tiếp vào việc:</p>
          <ul style="padding-left: 20px; margin: 10px 0;">
            <li>Nghiên cứu hồ sơ chứng cứ, xác định các điểm then chốt trong hiệu lực hợp đồng và cơ sở giải trừ trách nhiệm bồi thường thiệt hại.</li>
            <li>Soạn thảo <strong>Bản đệ trình pháp lý (Memorial)</strong> phân tích viện dẫn luật thực định và án lệ tương đồng.</li>
            <li>Đại diện thân chủ tranh luận trực tiếp tại phiên xử mô phỏng trước Hội đồng Trọng tài, đối đáp các phản biện sắc sảo từ đội đối thủ.</li>
          </ul>

          <h4 class="modal-section-title">Kỹ năng Thực tiễn Thu nhận</h4>
          <p>Khả năng giữ vững sự bình tĩnh dưới áp lực chất vấn gắt gao của Ban Giám khảo, tư duy phản ứng tình huống nhanh chóng, và kỹ năng trình bày lập luận pháp lý cô đọng, chặt chẽ và thuyết phục.</p>
        `
            },
            en: {
                badge: "Case Dossier · Moot Court Competition",
                title: "Honorable Mention — Moot Court Competition",
                content: `
          <h4 class="modal-section-title">Simulated Dispute Background</h4>
          <p>Dispute arising out of an international cross-border sales contract involving performance guarantees, liquidated damages clauses, and dispute settlement under Vietnamese Commercial Law and the CISG.</p>
          
          <h4 class="modal-section-title">Role & Responsibilities</h4>
          <p>Acted as <strong>Legal Counsel / Oralist</strong> with direct responsibilities including:</p>
          <ul style="padding-left: 20px; margin: 10px 0;">
            <li>Scrutinizing evidence dossiers, pinpointing contentious contractual validity issues and statutory exemptions from liability.</li>
            <li>Authoring detailed <strong>Written Memorials</strong> synthesizing statutory provisions, doctrine, and judicial precedents.</li>
            <li>Delivering oral pleadings before a panel of arbitral judges, defending client interests and counter-arguing opponent objections.</li>
          </ul>

          <h4 class="modal-section-title">Key Competencies Acquired</h4>
          <p>Composure under judicial cross-examination, rapid contextual issue-spotting, and high-impact legal rhetoric grounded in statutory law.</p>
        `
            }
        },
        research: {
            vi: {
                badge: "Công trình Nghiên cứu Khoa học 2026",
                title: "Bài Nghiên cứu tại Hội nghị Khoa học Sinh viên ngành Luật",
                content: `
          <h4 class="modal-section-title">Định hướng Đề tài</h4>
          <p>Đề tài tập trung phân tích chuyên sâu các khía cạnh pháp lý trong <strong>Luật Kinh tế</strong>, đặc biệt là các quy định điều chỉnh hoạt động doanh nghiệp và các quan hệ hợp đồng thương mại trước bối cảnh kinh tế chuyển đổi số.</p>
          
          <h4 class="modal-section-title">Phương pháp Luận & Đóng góp</h4>
          <p>Công trình áp dụng phương pháp phân tích quy phạm, so sánh pháp luật và đánh giá thực tiễn thi hành:</p>
          <ul style="padding-left: 20px; margin: 10px 0;">
            <li>Làm rõ các khoảng trống pháp lý và xung đột giữa văn bản luật hiện hành với các mô hình giao dịch mới.</li>
            <li>Hệ thống hóa các bất cập thường gặp trong giải quyết tranh chấp kinh doanh thương mại.</li>
            <li>Đề xuất nhóm giải pháp hoàn thiện quy định pháp luật và định hướng áp dụng linh hoạt cho doanh nghiệp.</li>
          </ul>

          <h4 class="modal-section-title">Ý nghĩa Thực tiễn</h4>
          <p>Bài nghiên cứu được Hội đồng Khoa học Khoa Luật FTU đánh giá cao về tính thời sự, tư duy lập luận logic và thái độ nghiêm túc với học thuật pháp lý.</p>
        `
            },
            en: {
                badge: "Scientific Research 2026",
                title: "Conference Paper — Law Student Scientific Conference",
                content: `
          <h4 class="modal-section-title">Research Orientation</h4>
          <p>Focused on critical dimensions of <strong>Economic & Commercial Law</strong>, examining the regulation of modern corporate activities and commercial contractual frameworks within digitalized markets.</p>
          
          <h4 class="modal-section-title">Methodology & Scholarly Contributions</h4>
          <p>Employed norm-analytic, comparative legal methodologies and empirical implementation review:</p>
          <ul style="padding-left: 20px; margin: 10px 0;">
            <li>Identified regulatory lacunae and ambiguities between existing statutes and emerging business modalities.</li>
            <li>Systematized recurring friction points in commercial dispute enforcement.</li>
            <li>Proposed policy recommendations to harmonize economic legislation and empower sound compliance for enterprises.</li>
          </ul>

          <h4 class="modal-section-title">Practical Significance</h4>
          <p>Commended by the FTU Law Faculty Scientific Committee for rigorous academic methodology, contemporary relevance, and sound legislative proposals.</p>
        `
            }
        }
    };

    // -------------------------------------------------------------
    // 3. State Management
    // -------------------------------------------------------------
    let currentLang = localStorage.getItem("dao_lang") || "vi";
    let currentTheme = localStorage.getItem("dao_theme") || "dark";

    const langToggleBtn = document.getElementById("langToggleBtn");
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    const resumeBtn = document.getElementById("resumeBtn");
    const mobileNavToggle = document.getElementById("mobileNavToggle");
    const navLinks = document.getElementById("navLinks");
    const toast = document.getElementById("toast");

    // Modal elements
    const modalOverlay = document.getElementById("dossierModal");
    const modalClose = document.getElementById("modalClose");
    const modalBadge = document.getElementById("modalBadge");
    const modalTitle = document.getElementById("modalTitle");
    const modalBody = document.getElementById("modalBody");
    let activeModalKey = null;

    // -------------------------------------------------------------
    // 4. Language Rendering Engine
    // -------------------------------------------------------------
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem("dao_lang", lang);
        langToggleBtn.textContent = lang === "vi" ? "EN" : "VI";
        langToggleBtn.setAttribute("title", lang === "vi" ? "Switch to English" : "Chuyển sang Tiếng Việt");

        const dict = i18nData[lang];
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (dict[key]) {
                el.textContent = dict[key];
            }
        });

        document.querySelectorAll("[data-i18n-ph]").forEach(el => {
            const key = el.getAttribute("data-i18n-ph");
            if (dict[key]) {
                el.setAttribute("placeholder", dict[key]);
            }
        });

        // Update open modal if active
        if (activeModalKey && dossierData[activeModalKey]) {
            const data = dossierData[activeModalKey][lang];
            modalBadge.textContent = data.badge;
            modalTitle.textContent = data.title;
            modalBody.innerHTML = data.content;
        }
    }

    langToggleBtn.addEventListener("click", () => {
        setLanguage(currentLang === "vi" ? "en" : "vi");
        showToast(currentLang === "vi" ? "Đã chuyển sang Tiếng Việt" : "Switched to English");
    });

    // -------------------------------------------------------------
    // 5. Theme Switcher
    // -------------------------------------------------------------
    function setTheme(theme) {
        currentTheme = theme;
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("dao_theme", theme);
        themeToggleBtn.innerHTML = theme === "light" ? "🌙" : "☀️";
        themeToggleBtn.setAttribute("title", theme === "light" ? "Chuyển sang Giao diện Tối" : "Chuyển sang Giao diện Sáng");
    }

    themeToggleBtn.addEventListener("click", () => {
        setTheme(currentTheme === "light" ? "dark" : "light");
    });

    // -------------------------------------------------------------
    // 6. Print / Download CV Mode
    // -------------------------------------------------------------
    if (resumeBtn) {
        resumeBtn.addEventListener("click", () => {
            window.print();
        });
    }

    // -------------------------------------------------------------
    // 7. Modal Dossier Trigger Logic
    // -------------------------------------------------------------
    function openDossier(key) {
        activeModalKey = key;
        const data = dossierData[key][currentLang];
        modalBadge.textContent = data.badge;
        modalTitle.textContent = data.title;
        modalBody.innerHTML = data.content;
        modalOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeDossier() {
        modalOverlay.classList.remove("active");
        document.body.style.overflow = "";
        activeModalKey = null;
    }

    document.querySelectorAll("[data-dossier]").forEach(btn => {
        btn.addEventListener("click", () => {
            const key = btn.getAttribute("data-dossier");
            openDossier(key);
        });
    });

    if (modalClose) {
        modalClose.addEventListener("click", closeDossier);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener("click", (e) => {
            if (e.target === modalOverlay) {
                closeDossier();
            }
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
            closeDossier();
        }
    });

    // -------------------------------------------------------------
    // 8. Copy to Clipboard & Toast
    // -------------------------------------------------------------
    function showToast(msg) {
        if (!toast) return;
        toast.textContent = msg;
        toast.classList.add("show");
        setTimeout(() => {
            toast.classList.remove("show");
        }, 2800);
    }

    const copyEmailBtn = document.getElementById("copyEmailBtn");
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener("click", () => {
            const email = "k61.2213650028@ftu.edu.vn";
            navigator.clipboard.writeText(email).then(() => {
                const textKey = currentLang === "vi" ? "toastCopied" : "toastCopied";
                showToast(i18nData[currentLang][textKey]);
                copyEmailBtn.textContent = i18nData[currentLang].btnCopied;
                setTimeout(() => {
                    copyEmailBtn.textContent = i18nData[currentLang].btnCopy;
                }, 2000);
            });
        });
    }

    // -------------------------------------------------------------
    // 9. Quick Inquiry Form Handler (Direct Mailto Link)
    // -------------------------------------------------------------
    const inquiryForm = document.getElementById("inquiryForm");
    if (inquiryForm) {
        inquiryForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("senderName").value;
            const org = document.getElementById("senderOrg").value;
            const message = document.getElementById("senderMsg").value;

            const subject = encodeURIComponent(`[Liên hệ Hồ sơ Pháp lý] ${name} - ${org || "Cơ quan/Doanh nghiệp"}`);
            const body = encodeURIComponent(
                `Kính gửi bạn Đào Duy Long,\n\nTôi là: ${name}\nĐơn vị: ${org}\n\nNội dung trao đổi:\n${message}\n\nRất mong nhận được phản hồi từ bạn.\nTrân trọng.`
            );

            window.location.href = `mailto:k61.2213650028@ftu.edu.vn?subject=${subject}&body=${body}`;
        });
    }

    // -------------------------------------------------------------
    // 10. Mobile Navigation & Scrollspy
    // -------------------------------------------------------------
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener("click", () => {
            navLinks.classList.toggle("open");
        });
    }

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            if (navLinks.classList.contains("open")) {
                navLinks.classList.remove("open");
            }
        });
    });

    const sections = document.querySelectorAll("section[id]");
    window.addEventListener("scroll", () => {
        const scrollY = window.pageYOffset + 120;
        sections.forEach(sec => {
            const top = sec.offsetTop;
            const height = sec.offsetHeight;
            const id = sec.getAttribute("id");
            const navItem = document.querySelector(`.nav-link[href="#${id}"]`);
            if (scrollY >= top && scrollY < top + height) {
                if (navItem) navItem.classList.add("active");
            } else {
                if (navItem) navItem.classList.remove("active");
            }
        });
    });

    // Initial Boot
    setTheme(currentTheme);
    setLanguage(currentLang);
});
