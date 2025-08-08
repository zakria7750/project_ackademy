// Pages content for Academy Website

// Home Page
function getHomePageHTML() {
    return `
        <!-- Hero Section -->
        <section class="hero-gradient text-white py-20">
            <div class="container mx-auto px-4 text-center">
                <div class="max-w-4xl mx-auto">
                    <!-- Logo -->
                    <div class="mb-8">
                        <div class="bg-golden text-primary p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                            <i class="fas fa-graduation-cap text-4xl"></i>
                        </div>
                        <h1 class="text-5xl font-bold mb-4">أكاديمية المعرفة الدولية</h1>
                        <p class="text-xl mb-8">أكاديمية رائدة... نبني العقول ونطور المستقبل</p>
                    </div>
                    
                    <!-- CTA Button -->
                    <button onclick="showPage('admission')" class="bg-golden text-primary px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-500 transition-colors transform hover:scale-105">
                        ابدأ رحلتك التعليمية
                    </button>
                </div>
            </div>
        </section>

        <!-- Statistics Section -->
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <!-- Students Count -->
                    <div class="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                        <div class="bg-primary text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <i class="fas fa-users text-2xl"></i>
                        </div>
                        <h3 class="text-3xl font-bold text-primary mb-2">
                            <span class="counter" data-target="15000">0</span>+
                        </h3>
                        <p class="text-gray-600">عدد الطلاب</p>
                    </div>
                    
                    <!-- Departments Count -->
                    <div class="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                        <div class="bg-golden text-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <i class="fas fa-building text-2xl"></i>
                        </div>
                        <h3 class="text-3xl font-bold text-primary mb-2">
                            <span class="counter" data-target="21">0</span>
                        </h3>
                        <p class="text-gray-600">عدد الأقسام</p>
                    </div>
                    
                    <!-- Programs Count -->
                    <div class="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                        <div class="bg-primary text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <i class="fas fa-book text-2xl"></i>
                        </div>
                        <h3 class="text-3xl font-bold text-primary mb-2">
                            <span class="counter" data-target="85">0</span>+
                        </h3>
                        <p class="text-gray-600">عدد البرامج</p>
                    </div>
                    
                    <!-- Countries Count -->
                    <div class="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                        <div class="bg-golden text-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <i class="fas fa-globe text-2xl"></i>
                        </div>
                        <h3 class="text-3xl font-bold text-primary mb-2">
                            <span class="counter" data-target="50">0</span>+
                        </h3>
                        <p class="text-gray-600">عدد الدول المشاركة</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="py-16 bg-gray-50">
            <div class="container mx-auto px-4">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-primary mb-4">لماذا أكاديمية المعرفة؟</h2>
                    <p class="text-xl text-gray-600">نقدم أفضل البرامج التعليمية والتدريبية</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-white p-8 rounded-lg shadow-lg text-center hover:transform hover:-translate-y-2 transition-all">
                        <div class="bg-primary text-white p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                            <i class="fas fa-certificate text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-primary mb-4">شهادات معتمدة</h3>
                        <p class="text-gray-600">شهادات معتمدة دولياً ومعترف بها في جميع أنحاء العالم</p>
                    </div>
                    
                    <div class="bg-white p-8 rounded-lg shadow-lg text-center hover:transform hover:-translate-y-2 transition-all">
                        <div class="bg-golden text-primary p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                            <i class="fas fa-chalkboard-teacher text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-primary mb-4">أساتذة متميزون</h3>
                        <p class="text-gray-600">نخبة من أفضل الأساتذة والمدربين المعتمدين</p>
                    </div>
                    
                    <div class="bg-white p-8 rounded-lg shadow-lg text-center hover:transform hover:-translate-y-2 transition-all">
                        <div class="bg-primary text-white p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                            <i class="fas fa-laptop text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-primary mb-4">تعليم إلكتروني</h3>
                        <p class="text-gray-600">منصة تعليمية متطورة تدعم التعليم الإلكتروني والتفاعلي</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// About Page
function loadAboutPage() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4">
                <!-- Page Header -->
                <div class="text-center mb-12">
                    <h1 class="text-4xl font-bold text-primary mb-4">من نحن</h1>
                    <div class="w-24 h-1 bg-golden mx-auto"></div>
                </div>

                <!-- Academy Introduction -->
                <div class="max-w-4xl mx-auto mb-16">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 class="text-3xl font-bold text-primary mb-6">أكاديمية المعرفة الدولية</h2>
                            <p class="text-lg text-gray-700 leading-relaxed mb-6">
                                أكاديمية المعرفة الدولية للتنمية البشرية والتطوير المعرفي هي مؤسسة تعليمية رائدة تأسست بهدف تطوير القدرات البشرية وبناء المعرفة في مختلف المجالات العلمية والعملية.
                            </p>
                            <p class="text-lg text-gray-700 leading-relaxed">
                                نسعى إلى تقديم برامج تعليمية متميزة في 21 تخصصاً مختلفاً، ونهدف إلى إعداد كوادر مؤهلة قادرة على المساهمة في التنمية المستدامة والتطوير المعرفي.
                            </p>
                        </div>
                        <div class="text-center">
                            <div class="bg-golden text-primary p-12 rounded-full w-48 h-48 mx-auto flex items-center justify-center">
                                <i class="fas fa-graduation-cap text-6xl"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Vision, Mission, Values -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <!-- Vision -->
                    <div class="bg-primary text-white p-8 rounded-lg text-center">
                        <div class="bg-golden text-primary p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                            <i class="fas fa-eye text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-4">رؤيتنا</h3>
                        <p class="leading-relaxed">
                            أن نكون الأكاديمية الرائدة في التنمية البشرية والتطوير المعرفي على مستوى المنطقة والعالم.
                        </p>
                    </div>

                    <!-- Mission -->
                    <div class="bg-golden text-primary p-8 rounded-lg text-center">
                        <div class="bg-primary text-white p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                            <i class="fas fa-bullseye text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-4">رسالتنا</h3>
                        <p class="leading-relaxed">
                            تقديم برامج تعليمية وتدريبية متميزة تساهم في بناء الكوادر المؤهلة وتطوير المجتمعات.
                        </p>
                    </div>

                    <!-- Values -->
                    <div class="bg-gray-100 text-primary p-8 rounded-lg text-center">
                        <div class="bg-primary text-white p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                            <i class="fas fa-heart text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold mb-4">قيمنا</h3>
                        <p class="leading-relaxed">
                            التميز، الجودة، الابتكار، والمسؤولية المجتمعية في كافة خدماتنا التعليمية.
                        </p>
                    </div>
                </div>

                <!-- Achievements -->
                <div class="bg-gray-50 rounded-lg p-8">
                    <h3 class="text-3xl font-bold text-primary text-center mb-8">إنجازاتنا</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="text-center">
                            <div class="text-4xl font-bold text-primary mb-2">15+</div>
                            <p class="text-gray-600">سنوات من الخبرة</p>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl font-bold text-primary mb-2">15,000+</div>
                            <p class="text-gray-600">خريج</p>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl font-bold text-primary mb-2">50+</div>
                            <p class="text-gray-600">دولة حول العالم</p>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl font-bold text-primary mb-2">98%</div>
                            <p class="text-gray-600">معدل رضا الطلاب</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Board Page
function loadBoardPage() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4">
                <!-- Page Header -->
                <div class="text-center mb-12">
                    <h1 class="text-4xl font-bold text-primary mb-4">مجلس الإدارة</h1>
                    <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        يضم مجلس إدارة الأكاديمية نخبة من القيادات الأكاديمية والمهنية المتميزة
                    </p>
                </div>

                <!-- Board Members -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <!-- Chairman -->
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden text-center hover:transform hover:-translate-y-2 transition-all">
                        <div class="bg-primary text-white p-6">
                            <div class="bg-golden text-primary p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                <i class="fas fa-user-tie text-3xl"></i>
                            </div>
                            <h3 class="text-xl font-bold">د. محمد أحمد الأمين</h3>
                            <p class="text-golden">رئيس مجلس الإدارة</p>
                        </div>
                        <div class="p-6">
                            <p class="text-gray-600 mb-4">دكتوراه في إدارة الأعمال من جامعة هارفارد</p>
                            <p class="text-gray-600">خبرة أكثر من 25 عاماً في القيادة الأكاديمية</p>
                        </div>
                    </div>

                    <!-- Vice Chairman -->
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden text-center hover:transform hover:-translate-y-2 transition-all">
                        <div class="bg-golden text-primary p-6">
                            <div class="bg-primary text-white p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                <i class="fas fa-user-graduate text-3xl"></i>
                            </div>
                            <h3 class="text-xl font-bold">د. فاطمة علي السالم</h3>
                            <p class="text-primary">نائب رئيس المجلس</p>
                        </div>
                        <div class="p-6">
                            <p class="text-gray-600 mb-4">دكتوراه في التربية وعلم النفس</p>
                            <p class="text-gray-600">متخصصة في تطوير المناهج والبرامج التعليمية</p>
                        </div>
                    </div>

                    <!-- Academic Affairs Director -->
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden text-center hover:transform hover:-translate-y-2 transition-all">
                        <div class="bg-primary text-white p-6">
                            <div class="bg-golden text-primary p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                <i class="fas fa-chalkboard-teacher text-3xl"></i>
                            </div>
                            <h3 class="text-xl font-bold">د. عبدالله محمد النجار</h3>
                            <p class="text-golden">مدير الشؤون الأكاديمية</p>
                        </div>
                        <div class="p-6">
                            <p class="text-gray-600 mb-4">دكتوراه في الهندسة الصناعية</p>
                            <p class="text-gray-600">خبير في تطوير نظم الجودة الأكاديمية</p>
                        </div>
                    </div>

                    <!-- Finance Director -->
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden text-center hover:transform hover:-translate-y-2 transition-all">
                        <div class="bg-golden text-primary p-6">
                            <div class="bg-primary text-white p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                <i class="fas fa-calculator text-3xl"></i>
                            </div>
                            <h3 class="text-xl font-bold">أ. سارة خالد المطيري</h3>
                            <p class="text-primary">مدير الشؤون المالية</p>
                        </div>
                        <div class="p-6">
                            <p class="text-gray-600 mb-4">ماجستير في المحاسبة والمالية</p>
                            <p class="text-gray-600">محاسب قانوني معتمد مع خبرة 15 عاماً</p>
                        </div>
                    </div>

                    <!-- IT Director -->
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden text-center hover:transform hover:-translate-y-2 transition-all">
                        <div class="bg-primary text-white p-6">
                            <div class="bg-golden text-primary p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                <i class="fas fa-laptop-code text-3xl"></i>
                            </div>
                            <h3 class="text-xl font-bold">م. أحمد عبدالله العتيبي</h3>
                            <p class="text-golden">مدير تقنية المعلومات</p>
                        </div>
                        <div class="p-6">
                            <p class="text-gray-600 mb-4">ماجستير في علوم الحاسب</p>
                            <p class="text-gray-600">متخصص في تطوير المنصات التعليمية الرقمية</p>
                        </div>
                    </div>

                    <!-- Student Affairs Director -->
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden text-center hover:transform hover:-translate-y-2 transition-all">
                        <div class="bg-golden text-primary p-6">
                            <div class="bg-primary text-white p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                <i class="fas fa-users text-3xl"></i>
                            </div>
                            <h3 class="text-xl font-bold">د. نورا فهد الشمري</h3>
                            <p class="text-primary">مدير شؤون الطلاب</p>
                        </div>
                        <div class="p-6">
                            <p class="text-gray-600 mb-4">دكتوراه في علم النفس التربوي</p>
                            <p class="text-gray-600">متخصصة في الإرشاد الأكاديمي والمهني</p>
                        </div>
                    </div>
                </div>

                <!-- Board Message -->
                <div class="bg-gray-50 rounded-lg p-8">
                    <h3 class="text-3xl font-bold text-primary text-center mb-6">رسالة مجلس الإدارة</h3>
                    <div class="max-w-4xl mx-auto text-center">
                        <p class="text-lg text-gray-700 leading-relaxed mb-6">
                            يسعدنا في مجلس إدارة أكاديمية المعرفة الدولية أن نرحب بكم في رحلة التعلم والتطوير المستمر. 
                            نحن ملتزمون بتقديم أفضل الخدمات التعليمية والتدريبية التي تلبي احتياجات العصر الحديث.
                        </p>
                        <p class="text-lg text-gray-700 leading-relaxed">
                            نؤمن بأن الاستثمار في التعليم هو الاستثمار الأمثل لبناء مستقبل أفضل، ونعمل جاهدين على توفير 
                            بيئة تعليمية متميزة تساعد طلابنا على تحقيق أهدافهم المهنية والأكاديمية.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Faculty Page  
function loadFacultyPage() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4">
                <!-- Page Header -->
                <div class="text-center mb-12">
                    <h1 class="text-4xl font-bold text-primary mb-4">هيئة التدريس</h1>
                    <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        نخبة من أفضل الأساتذة والباحثين المتخصصين في مختلف المجالات العلمية
                    </p>
                </div>

                <!-- Faculty Members Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Professor 1 -->
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all">
                        <div class="bg-primary text-white p-6 text-center">
                            <div class="bg-golden text-primary p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                <i class="fas fa-user-graduate text-3xl"></i>
                            </div>
                            <h3 class="text-xl font-bold">د. أميرة محمد حسن</h3>
                            <p class="text-golden">أستاذ علم النفس</p>
                        </div>
                        <div class="p-6">
                            <div class="space-y-3">
                                <div class="flex items-center">
                                    <i class="fas fa-graduation-cap text-primary ml-2"></i>
                                    <span class="text-gray-600">دكتوراه في علم النفس - جامعة القاهرة</span>
                                </div>
                                <div class="flex items-center">
                                    <i class="fas fa-briefcase text-primary ml-2"></i>
                                    <span class="text-gray-600">20 سنة خبرة</span>
                                </div>
                                <div class="flex items-center">
                                    <i class="fas fa-book text-primary ml-2"></i>
                                    <span class="text-gray-600">45 بحث منشور</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Professor 2 -->
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all">
                        <div class="bg-golden text-primary p-6 text-center">
                            <div class="bg-primary text-white p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                <i class="fas fa-user-tie text-3xl"></i>
                            </div>
                            <h3 class="text-xl font-bold">د. خالد عبدالله النجار</h3>
                            <p class="text-primary">أستاذ إدارة الأعمال</p>
                        </div>
                        <div class="p-6">
                            <div class="space-y-3">
                                <div class="flex items-center">
                                    <i class="fas fa-graduation-cap text-primary ml-2"></i>
                                    <span class="text-gray-600">دكتوراه في إدارة الأعمال - جامعة الملك سعود</span>
                                </div>
                                <div class="flex items-center">
                                    <i class="fas fa-briefcase text-primary ml-2"></i>
                                    <span class="text-gray-600">18 سنة خبرة</span>
                                </div>
                                <div class="flex items-center">
                                    <i class="fas fa-book text-primary ml-2"></i>
                                    <span class="text-gray-600">38 بحث منشور</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Professor 3 -->
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all">
                        <div class="bg-primary text-white p-6 text-center">
                            <div class="bg-golden text-primary p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                <i class="fas fa-female text-3xl"></i>
                            </div>
                            <h3 class="text-xl font-bold">د. سلمى أحمد الفهد</h3>
                            <p class="text-golden">أستاذ التربية الخاصة</p>
                        </div>
                        <div class="p-6">
                            <div class="space-y-3">
                                <div class="flex items-center">
                                    <i class="fas fa-graduation-cap text-primary ml-2"></i>
                                    <span class="text-gray-600">دكتوراه في التربية الخاصة - جامعة أم القرى</span>
                                </div>
                                <div class="flex items-center">
                                    <i class="fas fa-briefcase text-primary ml-2"></i>
                                    <span class="text-gray-600">15 سنة خبرة</span>
                                </div>
                                <div class="flex items-center">
                                    <i class="fas fa-book text-primary ml-2"></i>
                                    <span class="text-gray-600">32 بحث منشور</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Professor 4 -->
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all">
                        <div class="bg-golden text-primary p-6 text-center">
                            <div class="bg-primary text-white p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                <i class="fas fa-user-md text-3xl"></i>
                            </div>
                            <h3 class="text-xl font-bold">د. محمد علي الشمري</h3>
                            <p class="text-primary">أستاذ الطب النفسي</p>
                        </div>
                        <div class="p-6">
                            <div class="space-y-3">
                                <div class="flex items-center">
                                    <i class="fas fa-graduation-cap text-primary ml-2"></i>
                                    <span class="text-gray-600">دكتوراه في الطب النفسي - جامعة الملك فيصل</span>
                                </div>
                                <div class="flex items-center">
                                    <i class="fas fa-briefcase text-primary ml-2"></i>
                                    <span class="text-gray-600">22 سنة خبرة</span>
                                </div>
                                <div class="flex items-center">
                                    <i class="fas fa-book text-primary ml-2"></i>
                                    <span class="text-gray-600">52 بحث منشور</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Professor 5 -->
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all">
                        <div class="bg-primary text-white p-6 text-center">
                            <div class="bg-golden text-primary p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                <i class="fas fa-laptop-code text-3xl"></i>
                            </div>
                            <h3 class="text-xl font-bold">د. فهد سعد العتيبي</h3>
                            <p class="text-golden">أستاذ تقنية المعلومات</p>
                        </div>
                        <div class="p-6">
                            <div class="space-y-3">
                                <div class="flex items-center">
                                    <i class="fas fa-graduation-cap text-primary ml-2"></i>
                                    <span class="text-gray-600">دكتوراه في علوم الحاسب - جامعة الملك عبدالعزيز</span>
                                </div>
                                <div class="flex items-center">
                                    <i class="fas fa-briefcase text-primary ml-2"></i>
                                    <span class="text-gray-600">16 سنة خبرة</span>
                                </div>
                                <div class="flex items-center">
                                    <i class="fas fa-book text-primary ml-2"></i>
                                    <span class="text-gray-600">29 بحث منشور</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Professor 6 -->
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all">
                        <div class="bg-golden text-primary p-6 text-center">
                            <div class="bg-primary text-white p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                <i class="fas fa-balance-scale text-3xl"></i>
                            </div>
                            <h3 class="text-xl font-bold">د. نورا خالد المطيري</h3>
                            <p class="text-primary">أستاذ القانون</p>
                        </div>
                        <div class="p-6">
                            <div class="space-y-3">
                                <div class="flex items-center">
                                    <i class="fas fa-graduation-cap text-primary ml-2"></i>
                                    <span class="text-gray-600">دكتوراه في القانون - جامعة الإمام محمد بن سعود</span>
                                </div>
                                <div class="flex items-center">
                                    <i class="fas fa-briefcase text-primary ml-2"></i>
                                    <span class="text-gray-600">14 سنة خبرة</span>
                                </div>
                                <div class="flex items-center">
                                    <i class="fas fa-book text-primary ml-2"></i>
                                    <span class="text-gray-600">26 بحث منشور</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Faculty Stats -->
                <div class="mt-16 bg-gray-50 rounded-lg p-8">
                    <h3 class="text-3xl font-bold text-primary text-center mb-8">إحصائيات هيئة التدريس</h3>
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div class="text-center">
                            <div class="text-4xl font-bold text-primary mb-2">85+</div>
                            <p class="text-gray-600">عضو هيئة تدريس</p>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl font-bold text-primary mb-2">95%</div>
                            <p class="text-gray-600">حاملو درجة الدكتوراه</p>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl font-bold text-primary mb-2">400+</div>
                            <p class="text-gray-600">بحث علمي منشور</p>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl font-bold text-primary mb-2">18</div>
                            <p class="text-gray-600">متوسط سنوات الخبرة</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Add other page functions here (Trainers, Graduates, Departments, etc.)
// For brevity, I'll add the main structure. More pages can be added similarly.

function loadTrainersPage() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4">
                <!-- Page Header -->
                <div class="text-center mb-12">
                    <h1 class="text-4xl font-bold text-primary mb-4">المدربون المعتمدون</h1>
                    <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        نخبة من المدربين المعتمدين دولياً في مختلف التخصصات، يقدمون أفضل البرامج التدريبية المتطورة
                    </p>
                </div>

                <!-- Trainers by Category -->
                
                <!-- Human Development Trainers -->
                <div class="mb-16">
                    <div class="bg-primary text-white p-6 rounded-t-lg">
                        <div class="flex items-center justify-center space-x-4 space-x-reverse">
                            <div class="bg-golden text-primary p-3 rounded-full">
                                <i class="fas fa-users text-2xl"></i>
                            </div>
                            <h2 class="text-3xl font-bold">مدربو التنمية البشرية</h2>
                        </div>
                    </div>
                    <div class="bg-gray-50 p-6 rounded-b-lg">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <!-- Trainer 1 -->
                            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all">
                                <div class="bg-golden text-primary p-6 text-center">
                                    <div class="bg-primary text-white p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                        <i class="fas fa-chalkboard-teacher text-3xl"></i>
                                    </div>
                                    <h3 class="text-xl font-bold">أ. سامي محمد العنزي</h3>
                                    <p class="text-primary opacity-90">مدرب معتمد في التنمية البشرية</p>
                                </div>
                                <div class="p-6">
                                    <div class="space-y-3 mb-4">
                                        <div class="flex items-center">
                                            <i class="fas fa-certificate text-primary ml-2"></i>
                                            <span class="text-gray-600 text-sm">معتمد من ICF الدولية</span>
                                        </div>
                                        <div class="flex items-center">
                                            <i class="fas fa-clock text-primary ml-2"></i>
                                            <span class="text-gray-600 text-sm">خبرة 15 سنة</span>
                                        </div>
                                        <div class="flex items-center">
                                            <i class="fas fa-users text-primary ml-2"></i>
                                            <span class="text-gray-600 text-sm">درب أكثر من 5000 متدرب</span>
                                        </div>
                                    </div>
                                    <div class="text-center mb-4">
                                        <div class="text-golden text-lg">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <span class="text-gray-600 text-sm mr-2">(4.9/5)</span>
                                        </div>
                                    </div>
                                    <button class="w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-800 transition-colors">
                                        عرض الملف الشخصي
                                    </button>
                                </div>
                            </div>

                            <!-- Trainer 2 -->
                            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all">
                                <div class="bg-primary text-white p-6 text-center">
                                    <div class="bg-golden text-primary p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                        <i class="fas fa-brain text-3xl"></i>
                                    </div>
                                    <h3 class="text-xl font-bold">د. منى أحمد الفهد</h3>
                                    <p class="text-gray-200">مدربة معتمدة في علم النفس التطبيقي</p>
                                </div>
                                <div class="p-6">
                                    <div class="space-y-3 mb-4">
                                        <div class="flex items-center">
                                            <i class="fas fa-certificate text-primary ml-2"></i>
                                            <span class="text-gray-600 text-sm">دكتوراه في علم النفس</span>
                                        </div>
                                        <div class="flex items-center">
                                            <i class="fas fa-clock text-primary ml-2"></i>
                                            <span class="text-gray-600 text-sm">خبرة 12 سنة</span>
                                        </div>
                                        <div class="flex items-center">
                                            <i class="fas fa-users text-primary ml-2"></i>
                                            <span class="text-gray-600 text-sm">درست أكثر من 3000 متدرب</span>
                                        </div>
                                    </div>
                                    <div class="text-center mb-4">
                                        <div class="text-golden text-lg">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <span class="text-gray-600 text-sm mr-2">(4.8/5)</span>
                                        </div>
                                    </div>
                                    <button class="w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-800 transition-colors">
                                        عرض الملف الشخصي
                                    </button>
                                </div>
                            </div>

                            <!-- Trainer 3 -->
                            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all">
                                <div class="bg-golden text-primary p-6 text-center">
                                    <div class="bg-primary text-white p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                        <i class="fas fa-lightbulb text-3xl"></i>
                                    </div>
                                    <h3 class="text-xl font-bold">أ. خالد عبدالله النجار</h3>
                                    <p class="text-primary opacity-90">مدرب معتمد في الإبداع والابتكار</p>
                                </div>
                                <div class="p-6">
                                    <div class="space-y-3 mb-4">
                                        <div class="flex items-center">
                                            <i class="fas fa-certificate text-primary ml-2"></i>
                                            <span class="text-gray-600 text-sm">معتمد من CTI الأمريكية</span>
                                        </div>
                                        <div class="flex items-center">
                                            <i class="fas fa-clock text-primary ml-2"></i>
                                            <span class="text-gray-600 text-sm">خبرة 18 سنة</span>
                                        </div>
                                        <div class="flex items-center">
                                            <i class="fas fa-users text-primary ml-2"></i>
                                            <span class="text-gray-600 text-sm">درب أكثر من 7000 متدرب</span>
                                        </div>
                                    </div>
                                    <div class="text-center mb-4">
                                        <div class="text-golden text-lg">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <span class="text-gray-600 text-sm mr-2">(5.0/5)</span>
                                        </div>
                                    </div>
                                    <button class="w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-800 transition-colors">
                                        عرض الملف الشخصي
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Business Trainers -->
                <div class="mb-16">
                    <div class="bg-golden text-primary p-6 rounded-t-lg">
                        <div class="flex items-center justify-center space-x-4 space-x-reverse">
                            <div class="bg-primary text-white p-3 rounded-full">
                                <i class="fas fa-chart-line text-2xl"></i>
                            </div>
                            <h2 class="text-3xl font-bold">مدربو الأعمال والإدارة</h2>
                        </div>
                    </div>
                    <div class="bg-gray-50 p-6 rounded-b-lg">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <!-- Business Trainer 1 -->
                            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all">
                                <div class="bg-primary text-white p-6 text-center">
                                    <div class="bg-golden text-primary p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                        <i class="fas fa-briefcase text-3xl"></i>
                                    </div>
                                    <h3 class="text-xl font-bold">أ. فهد سعد المطيري</h3>
                                    <p class="text-gray-200">مدرب معتمد في إدارة الأعمال</p>
                                </div>
                                <div class="p-6">
                                    <div class="space-y-3 mb-4">
                                        <div class="flex items-center">
                                            <i class="fas fa-certificate text-primary ml-2"></i>
                                            <span class="text-gray-600 text-sm">MBA من جامعة هارفارد</span>
                                        </div>
                                        <div class="flex items-center">
                                            <i class="fas fa-clock text-primary ml-2"></i>
                                            <span class="text-gray-600 text-sm">خبرة 20 سنة</span>
                                        </div>
                                        <div class="flex items-center">
                                            <i class="fas fa-building text-primary ml-2"></i>
                                            <span class="text-gray-600 text-sm">استشاري لأكثر من 100 شركة</span>
                                        </div>
                                    </div>
                                    <div class="text-center mb-4">
                                        <div class="text-golden text-lg">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <span class="text-gray-600 text-sm mr-2">(4.9/5)</span>
                                        </div>
                                    </div>
                                    <button class="w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-800 transition-colors">
                                        عرض الملف الشخصي
                                    </button>
                                </div>
                            </div>

                            <!-- Business Trainer 2 -->
                            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all">
                                <div class="bg-golden text-primary p-6 text-center">
                                    <div class="bg-primary text-white p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                        <i class="fas fa-bullhorn text-3xl"></i>
                                    </div>
                                    <h3 class="text-xl font-bold">أ. نورا خالد الشمري</h3>
                                    <p class="text-primary opacity-90">مدربة معتمدة في التسويق الرقمي</p>
                                </div>
                                <div class="p-6">
                                    <div class="space-y-3 mb-4">
                                        <div class="flex items-center">
                                            <i class="fas fa-certificate text-primary ml-2"></i>
                                            <span class="text-gray-600 text-sm">معتمدة من Google و Facebook</span>
                                        </div>
                                        <div class="flex items-center">
                                            <i class="fas fa-clock text-primary ml-2"></i>
                                            <span class="text-gray-600 text-sm">خبرة 10 سنوات</span>
                                        </div>
                                        <div class="flex items-center">
                                            <i class="fas fa-rocket text-primary ml-2"></i>
                                            <span class="text-gray-600 text-sm">أطلقت 50+ حملة ناجحة</span>
                                        </div>
                                    </div>
                                    <div class="text-center mb-4">
                                        <div class="text-golden text-lg">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <span class="text-gray-600 text-sm mr-2">(4.8/5)</span>
                                        </div>
                                    </div>
                                    <button class="w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-800 transition-colors">
                                        عرض الملف الشخصي
                                    </button>
                                </div>
                            </div>

                            <!-- Business Trainer 3 -->
                            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all">
                                <div class="bg-primary text-white p-6 text-center">
                                    <div class="bg-golden text-primary p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                        <i class="fas fa-users-cog text-3xl"></i>
                                    </div>
                                    <h3 class="text-xl font-bold">د. أحمد محمد العتيبي</h3>
                                    <p class="text-gray-200">مدرب معتمد في إدارة الموارد البشرية</p>
                                </div>
                                <div class="p-6">
                                    <div class="space-y-3 mb-4">
                                        <div class="flex items-center">
                                            <i class="fas fa-certificate text-primary ml-2"></i>
                                            <span class="text-gray-600 text-sm">معتمد من SHRM الدولية</span>
                                        </div>
                                        <div class="flex items-center">
                                            <i class="fas fa-clock text-primary ml-2"></i>
                                            <span class="text-gray-600 text-sm">خبرة 16 سنة</span>
                                        </div>
                                        <div class="flex items-center">
                                            <i class="fas fa-award text-primary ml-2"></i>
                                            <span class="text-gray-600 text-sm">حاصل على 5 جوائز دولية</span>
                                        </div>
                                    </div>
                                    <div class="text-center mb-4">
                                        <div class="text-golden text-lg">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <span class="text-gray-600 text-sm mr-2">(4.9/5)</span>
                                        </div>
                                    </div>
                                    <button class="w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-800 transition-colors">
                                        عرض الملف الشخصي
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Statistics -->
                <div class="bg-gray-50 rounded-lg p-8 text-center mb-16">
                    <h3 class="text-3xl font-bold text-primary mb-8">إحصائيات المدربين</h3>
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div>
                            <div class="text-4xl font-bold text-primary mb-2">50+</div>
                            <p class="text-gray-600">مدرب معتمد</p>
                        </div>
                        <div>
                            <div class="text-4xl font-bold text-primary mb-2">25,000+</div>
                            <p class="text-gray-600">متدرب تخرج</p>
                        </div>
                        <div>
                            <div class="text-4xl font-bold text-primary mb-2">15</div>
                            <p class="text-gray-600">تخصص تدريبي</p>
                        </div>
                        <div>
                            <div class="text-4xl font-bold text-primary mb-2">4.9/5</div>
                            <p class="text-gray-600">متوسط التقييم</p>
                        </div>
                    </div>
                </div>

                <!-- CTA Section -->
                <div class="bg-primary text-white rounded-lg p-8 text-center">
                    <h3 class="text-2xl font-bold mb-4">هل تريد أن تصبح مدرباً معتمداً؟</h3>
                    <p class="text-lg mb-6">انضم إلى فريق المدربين المعتمدين في أكاديمية المعرفة الدولية</p>
                    <button onclick="showPage('contact')" class="bg-golden text-primary px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                        <i class="fas fa-user-plus ml-2"></i>
                        تقدم للانضمام
                    </button>
                </div>
            </div>
        </section>
    `;
}

// Load other page functions
function loadGraduatesPage() { 
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4">
                <!-- Page Header -->
                <div class="text-center mb-12">
                    <h1 class="text-4xl font-bold text-primary mb-4">الخريجون</h1>
                    <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        قصص نجاح ملهمة لخريجي أكاديمية المعرفة الدولية الذين يقودون التغيير في مختلف المجالات
                    </p>
                </div>

                <!-- Success Stories -->
                <div class="mb-16">
                    <h2 class="text-3xl font-bold text-primary text-center mb-12">قصص النجاح</h2>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <!-- Graduate 1 -->
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all">
                            <div class="bg-gradient-to-r from-primary to-blue-600 text-white p-6 text-center">
                                <div class="bg-golden text-primary p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-user-graduate text-3xl"></i>
                                </div>
                                <h3 class="text-xl font-bold">د. سارة محمد الأحمد</h3>
                                <p class="text-gray-200">دكتوراه في علم النفس - 2023</p>
                            </div>
                            <div class="p-6">
                                <div class="mb-4">
                                    <span class="bg-golden text-primary px-3 py-1 rounded-full text-sm font-semibold">مديرة مركز استشاري</span>
                                </div>
                                <p class="text-gray-600 mb-4">
                                    "تمكنت من افتتاح مركز استشاري متخصص يخدم أكثر من 500 عائلة. الأكاديمية غيرت مسار حياتي المهنية بالكامل."
                                </p>
                                <div class="flex items-center justify-between text-sm text-gray-500">
                                    <span><i class="fas fa-building text-primary ml-1"></i>الرياض، السعودية</span>
                                    <span><i class="fas fa-calendar text-primary ml-1"></i>خريجة 2023</span>
                                </div>
                            </div>
                        </div>

                        <!-- Graduate 2 -->
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all">
                            <div class="bg-gradient-to-r from-golden to-yellow-600 text-primary p-6 text-center">
                                <div class="bg-primary text-white p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-chart-line text-3xl"></i>
                                </div>
                                <h3 class="text-xl font-bold">أ. خالد عبدالعزيز النجار</h3>
                                <p class="text-primary opacity-90">ماجستير إدارة الأعمال - 2022</p>
                            </div>
                            <div class="p-6">
                                <div class="mb-4">
                                    <span class="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">مدير تنفيذي</span>
                                </div>
                                <p class="text-gray-600 mb-4">
                                    "حصلت على ترقية لمنصب المدير التنفيذي خلال 6 أشهر من التخرج. المعرفة التي اكتسبتها كانت الفارق الحقيقي."
                                </p>
                                <div class="flex items-center justify-between text-sm text-gray-500">
                                    <span><i class="fas fa-building text-primary ml-1"></i>جدة، السعودية</span>
                                    <span><i class="fas fa-calendar text-primary ml-1"></i>خريج 2022</span>
                                </div>
                            </div>
                        </div>

                        <!-- Graduate 3 -->
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all">
                            <div class="bg-gradient-to-r from-primary to-blue-600 text-white p-6 text-center">
                                <div class="bg-golden text-primary p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-chalkboard-teacher text-3xl"></i>
                                </div>
                                <h3 class="text-xl font-bold">د. فاطمة أحمد العتيبي</h3>
                                <p class="text-gray-200">دكتوراه في التربية - 2021</p>
                            </div>
                            <div class="p-6">
                                <div class="mb-4">
                                    <span class="bg-golden text-primary px-3 py-1 rounded-full text-sm font-semibold">عميدة كلية</span>
                                </div>
                                <p class="text-gray-600 mb-4">
                                    "أصبحت عميدة كلية التربية وأقوم بتطوير مناهج تعليمية مبتكرة تخدم الجيل القادم من المعلمين."
                                </p>
                                <div class="flex items-center justify-between text-sm text-gray-500">
                                    <span><i class="fas fa-building text-primary ml-1"></i>الدمام، السعودية</span>
                                    <span><i class="fas fa-calendar text-primary ml-1"></i>خريجة 2021</span>
                                </div>
                            </div>
                        </div>

                        <!-- Graduate 4 -->
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all">
                            <div class="bg-gradient-to-r from-golden to-yellow-600 text-primary p-6 text-center">
                                <div class="bg-primary text-white p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-lightbulb text-3xl"></i>
                                </div>
                                <h3 class="text-xl font-bold">م. عبدالله سعد المطيري</h3>
                                <p class="text-primary opacity-90">دبلوم إدارة الابتكار - 2023</p>
                            </div>
                            <div class="p-6">
                                <div class="mb-4">
                                    <span class="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">رائد أعمال</span>
                                </div>
                                <p class="text-gray-600 mb-4">
                                    "أسست شركة تقنية ناشئة حصلت على تمويل بـ 5 مليون ريال. الدبلوم علمني كيف أحول الأفكار إلى واقع."
                                </p>
                                <div class="flex items-center justify-between text-sm text-gray-500">
                                    <span><i class="fas fa-building text-primary ml-1"></i>الخبر، السعودية</span>
                                    <span><i class="fas fa-calendar text-primary ml-1"></i>خريج 2023</span>
                                </div>
                            </div>
                        </div>

                        <!-- Graduate 5 -->
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all">
                            <div class="bg-gradient-to-r from-primary to-blue-600 text-white p-6 text-center">
                                <div class="bg-golden text-primary p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-globe text-3xl"></i>
                                </div>
                                <h3 class="text-xl font-bold">أ. ليلى محمد الشمري</h3>
                                <p class="text-gray-200">ماجستير التسويق الرقمي - 2022</p>
                            </div>
                            <div class="p-6">
                                <div class="mb-4">
                                    <span class="bg-golden text-primary px-3 py-1 rounded-full text-sm font-semibold">خبيرة تسويق دولية</span>
                                </div>
                                <p class="text-gray-600 mb-4">
                                    "أعمل الآن مع شركات عالمية في دبي ولندن. تخصصي من الأكاديمية فتح لي أبواب العالم."
                                </p>
                                <div class="flex items-center justify-between text-sm text-gray-500">
                                    <span><i class="fas fa-building text-primary ml-1"></i>دبي، الإمارات</span>
                                    <span><i class="fas fa-calendar text-primary ml-1"></i>خريجة 2022</span>
                                </div>
                            </div>
                        </div>

                        <!-- Graduate 6 -->
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all">
                            <div class="bg-gradient-to-r from-golden to-yellow-600 text-primary p-6 text-center">
                                <div class="bg-primary text-white p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-heart text-3xl"></i>
                                </div>
                                <h3 class="text-xl font-bold">د. نورا خالد العنزي</h3>
                                <p class="text-primary opacity-90">دكتوراه الإرشاد الأسري - 2021</p>
                            </div>
                            <div class="p-6">
                                <div class="mb-4">
                                    <span class="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">مستشارة أسرية</span>
                                </div>
                                <p class="text-gray-600 mb-4">
                                    "ساعدت أكثر من 1000 أسرة في حل مشاكلهم وبناء علاقات صحية. عملي أصبح رسالة حياة."
                                </p>
                                <div class="flex items-center justify-between text-sm text-gray-500">
                                    <span><i class="fas fa-building text-primary ml-1"></i>مكة، السعودية</span>
                                    <span><i class="fas fa-calendar text-primary ml-1"></i>خريجة 2021</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Testimonials -->
                <div class="mb-16">
                    <h2 class="text-3xl font-bold text-primary text-center mb-12">شهادات الخريجين</h2>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="bg-gray-50 p-8 rounded-lg">
                            <div class="flex items-center mb-4">
                                <div class="bg-primary text-white p-3 rounded-full ml-4">
                                    <i class="fas fa-quote-right text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-primary">أ. محمد عبدالله الفهد</h4>
                                    <p class="text-gray-600 text-sm">ماجستير إدارة الموارد البشرية</p>
                                </div>
                            </div>
                            <p class="text-gray-700 leading-relaxed">
                                "الأكاديمية لم تعلمني فقط المفاهيم النظرية، بل طورت مهاراتي العملية وثقتي بنفسي. 
                                أصبحت قادراً على قيادة فرق عمل كبيرة بكفاءة عالية."
                            </p>
                            <div class="text-golden mt-4">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>

                        <div class="bg-gray-50 p-8 rounded-lg">
                            <div class="flex items-center mb-4">
                                <div class="bg-golden text-primary p-3 rounded-full ml-4">
                                    <i class="fas fa-quote-right text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-primary">د. رانيا أحمد السالم</h4>
                                    <p class="text-gray-600 text-sm">دكتوراه في التنمية البشرية</p>
                                </div>
                            </div>
                            <p class="text-gray-700 leading-relaxed">
                                "كانت رحلة تعليمية استثنائية غيرت نظرتي للحياة والعمل. الآن أدرب المئات من المديرين 
                                في كبرى الشركات وأساهم في تطوير الكوادر البشرية."
                            </p>
                            <div class="text-golden mt-4">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Statistics -->
                <div class="bg-primary text-white rounded-lg p-8 mb-16">
                    <h3 class="text-3xl font-bold text-center mb-8">إحصائيات الخريجين</h3>
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div class="text-4xl font-bold text-golden mb-2">15,000+</div>
                            <p>إجمالي الخريجين</p>
                        </div>
                        <div>
                            <div class="text-4xl font-bold text-golden mb-2">95%</div>
                            <p>معدل توظيف الخريجين</p>
                        </div>
                        <div>
                            <div class="text-4xl font-bold text-golden mb-2">85%</div>
                            <p>حصلوا على ترقيات</p>
                        </div>
                        <div>
                            <div class="text-4xl font-bold text-golden mb-2">50+</div>
                            <p>دولة حول العالم</p>
                        </div>
                    </div>
                </div>

                <!-- Graduate Application Form -->
                <div class="bg-gray-50 rounded-lg p-8">
                    <h3 class="text-3xl font-bold text-primary text-center mb-8">انضم إلى شبكة خريجي الأكاديمية</h3>
                    
                    <div class="max-w-2xl mx-auto">
                        <div class="bg-white rounded-lg p-8 shadow-lg">
                            <form id="graduateForm" class="space-y-6">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">الاسم الكامل</label>
                                        <input type="text" required
                                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                               placeholder="الاسم الكامل">
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">سنة التخرج</label>
                                        <select required
                                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                                            <option value="">اختر السنة</option>
                                            <option value="2024">2024</option>
                                            <option value="2023">2023</option>
                                            <option value="2022">2022</option>
                                            <option value="2021">2021</option>
                                            <option value="2020">2020</option>
                                            <option value="اخرى">أخرى</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">التخصص</label>
                                    <input type="text" required
                                           class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                           placeholder="التخصص الذي تخرجت منه">
                                </div>
                                
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">المنصب الحالي</label>
                                    <input type="text" required
                                           class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                           placeholder="منصبك الحالي">
                                </div>
                                
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">قصة نجاحك (اختياري)</label>
                                    <textarea rows="4"
                                              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                                              placeholder="شاركنا قصة نجاحك وكيف ساهمت الأكاديمية في تحقيق أهدافك..."></textarea>
                                </div>
                                
                                <button type="submit" class="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                                    <i class="fas fa-user-plus ml-2"></i>
                                    انضم إلى شبكة الخريجين
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <script>
            document.getElementById('graduateForm').addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Show loading state
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin ml-2"></i>جاري الإرسال...';
                submitBtn.disabled = true;
                
                // Simulate form submission
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    
                    // Reset form
                    this.reset();
                    
                    // Show success message
                    showNotification('تم تسجيلك بنجاح في شبكة خريجي الأكاديمية!', 'success');
                }, 2000);
            });
        </script>
    `;
}

function loadDepartmentsPage() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4">
                <!-- Page Header -->
                <div class="text-center mb-12">
                    <h1 class="text-4xl font-bold text-primary mb-4">الأقسام الأكاديمية</h1>
                    <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        21 قسماً أكاديمياً متخصصاً موزعة على 5 كليات رئيسية تغطي مختلف المجالات العلمية والتطبيقية
                    </p>
                </div>

                <!-- Departments by Faculty -->
                
                <!-- Faculty of Human Development -->
                <div class="mb-16">
                    <div class="bg-primary text-white p-6 rounded-t-lg">
                        <div class="flex items-center justify-center space-x-4 space-x-reverse">
                            <div class="bg-golden text-primary p-3 rounded-full">
                                <i class="fas fa-users text-2xl"></i>
                            </div>
                            <h2 class="text-3xl font-bold">كلية التنمية البشرية</h2>
                        </div>
                    </div>
                    <div class="bg-gray-50 p-6 rounded-b-lg">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                                <div class="bg-primary text-white p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-brain text-lg"></i>
                                </div>
                                <h3 class="text-lg font-bold text-primary mb-2">علم النفس</h3>
                                <p class="text-gray-600 text-sm">علم النفس التطبيقي والسريري</p>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                                <div class="bg-golden text-primary p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-handshake text-lg"></i>
                                </div>
                                <h3 class="text-lg font-bold text-primary mb-2">التنمية البشرية</h3>
                                <p class="text-gray-600 text-sm">تطوير المهارات الشخصية والمهنية</p>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                                <div class="bg-primary text-white p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-comments text-lg"></i>
                                </div>
                                <h3 class="text-lg font-bold text-primary mb-2">الإرشاد النفسي</h3>
                                <p class="text-gray-600 text-sm">الإرشاد الأسري والزواجي</p>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                                <div class="bg-golden text-primary p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-child text-lg"></i>
                                </div>
                                <h3 class="text-lg font-bold text-primary mb-2">تربية الطفل</h3>
                                <p class="text-gray-600 text-sm">التربية والتنمية المبكرة</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Faculty of Education -->
                <div class="mb-16">
                    <div class="bg-golden text-primary p-6 rounded-t-lg">
                        <div class="flex items-center justify-center space-x-4 space-x-reverse">
                            <div class="bg-primary text-white p-3 rounded-full">
                                <i class="fas fa-graduation-cap text-2xl"></i>
                            </div>
                            <h2 class="text-3xl font-bold">كلية التربية والتعليم</h2>
                        </div>
                    </div>
                    <div class="bg-gray-50 p-6 rounded-b-lg">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                                <div class="bg-primary text-white p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-chalkboard-teacher text-lg"></i>
                                </div>
                                <h3 class="text-lg font-bold text-primary mb-2">أصول التربية</h3>
                                <p class="text-gray-600 text-sm">فلسفة وتاريخ التربية</p>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                                <div class="bg-golden text-primary p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-book-reader text-lg"></i>
                                </div>
                                <h3 class="text-lg font-bold text-primary mb-2">المناهج وطرق التدريس</h3>
                                <p class="text-gray-600 text-sm">تطوير المناهج والطرق الحديثة</p>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                                <div class="bg-primary text-white p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-user-friends text-lg"></i>
                                </div>
                                <h3 class="text-lg font-bold text-primary mb-2">التربية الخاصة</h3>
                                <p class="text-gray-600 text-sm">تعليم ذوي الاحتياجات الخاصة</p>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                                <div class="bg-golden text-primary p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-language text-lg"></i>
                                </div>
                                <h3 class="text-lg font-bold text-primary mb-2">تعليم اللغة العربية</h3>
                                <p class="text-gray-600 text-sm">تعليم العربية للناطقين بغيرها</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Faculty of Business Administration -->
                <div class="mb-16">
                    <div class="bg-primary text-white p-6 rounded-t-lg">
                        <div class="flex items-center justify-center space-x-4 space-x-reverse">
                            <div class="bg-golden text-primary p-3 rounded-full">
                                <i class="fas fa-chart-line text-2xl"></i>
                            </div>
                            <h2 class="text-3xl font-bold">كلية إدارة الأعمال</h2>
                        </div>
                    </div>
                    <div class="bg-gray-50 p-6 rounded-b-lg">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                                <div class="bg-primary text-white p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-briefcase text-lg"></i>
                                </div>
                                <h3 class="text-lg font-bold text-primary mb-2">إدارة الأعمال</h3>
                                <p class="text-gray-600 text-sm">الإدارة الاستراتيجية والتنفيذية</p>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                                <div class="bg-golden text-primary p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-users-cog text-lg"></i>
                                </div>
                                <h3 class="text-lg font-bold text-primary mb-2">إدارة الموارد البشرية</h3>
                                <p class="text-gray-600 text-sm">تطوير وإدارة رأس المال البشري</p>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                                <div class="bg-primary text-white p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-bullhorn text-lg"></i>
                                </div>
                                <h3 class="text-lg font-bold text-primary mb-2">التسويق</h3>
                                <p class="text-gray-600 text-sm">التسويق الرقمي والتقليدي</p>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                                <div class="bg-golden text-primary p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-calculator text-lg"></i>
                                </div>
                                <h3 class="text-lg font-bold text-primary mb-2">المحاسبة</h3>
                                <p class="text-gray-600 text-sm">المحاسبة المالية والإدارية</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Faculty of Law and Political Science -->
                <div class="mb-16">
                    <div class="bg-golden text-primary p-6 rounded-t-lg">
                        <div class="flex items-center justify-center space-x-4 space-x-reverse">
                            <div class="bg-primary text-white p-3 rounded-full">
                                <i class="fas fa-balance-scale text-2xl"></i>
                            </div>
                            <h2 class="text-3xl font-bold">كلية القانون والعلوم السياسية</h2>
                        </div>
                    </div>
                    <div class="bg-gray-50 p-6 rounded-b-lg">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                                <div class="bg-primary text-white p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-gavel text-lg"></i>
                                </div>
                                <h3 class="text-lg font-bold text-primary mb-2">القانون المدني</h3>
                                <p class="text-gray-600 text-sm">القانون المدني والتجاري</p>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                                <div class="bg-golden text-primary p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-shield-alt text-lg"></i>
                                </div>
                                <h3 class="text-lg font-bold text-primary mb-2">القانون الجنائي</h3>
                                <p class="text-gray-600 text-sm">القانون الجنائي والإجراءات</p>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                                <div class="bg-primary text-white p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-flag text-lg"></i>
                                </div>
                                <h3 class="text-lg font-bold text-primary mb-2">العلوم السياسية</h3>
                                <p class="text-gray-600 text-sm">النظم السياسية والعلاقات الدولية</p>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                                <div class="bg-golden text-primary p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-handshake text-lg"></i>
                                </div>
                                <h3 class="text-lg font-bold text-primary mb-2">القانون الدولي</h3>
                                <p class="text-gray-600 text-sm">القانون الدولي العام والخاص</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Faculty of Technology and Innovation -->
                <div class="mb-16">
                    <div class="bg-primary text-white p-6 rounded-t-lg">
                        <div class="flex items-center justify-center space-x-4 space-x-reverse">
                            <div class="bg-golden text-primary p-3 rounded-full">
                                <i class="fas fa-laptop-code text-2xl"></i>
                            </div>
                            <h2 class="text-3xl font-bold">كلية التقنية والابتكار</h2>
                        </div>
                    </div>
                    <div class="bg-gray-50 p-6 rounded-b-lg">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                                <div class="bg-primary text-white p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-code text-lg"></i>
                                </div>
                                <h3 class="text-lg font-bold text-primary mb-2">علوم الحاسب</h3>
                                <p class="text-gray-600 text-sm">البرمجة وتطوير الأنظمة</p>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                                <div class="bg-golden text-primary p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-robot text-lg"></i>
                                </div>
                                <h3 class="text-lg font-bold text-primary mb-2">الذكاء الاصطناعي</h3>
                                <p class="text-gray-600 text-sm">تعلم الآلة والذكاء الاصطناعي</p>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                                <div class="bg-primary text-white p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-shield-alt text-lg"></i>
                                </div>
                                <h3 class="text-lg font-bold text-primary mb-2">الأمن السيبراني</h3>
                                <p class="text-gray-600 text-sm">حماية الأنظمة والبيانات</p>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                                <div class="bg-golden text-primary p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-lightbulb text-lg"></i>
                                </div>
                                <h3 class="text-lg font-bold text-primary mb-2">إدارة الابتكار</h3>
                                <p class="text-gray-600 text-sm">ريادة الأعمال والابتكار</p>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                                <div class="bg-primary text-white p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-database text-lg"></i>
                                </div>
                                <h3 class="text-lg font-bold text-primary mb-2">نظم المعلومات</h3>
                                <p class="text-gray-600 text-sm">تحليل وتصميم نظم المعلومات</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Statistics -->
                <div class="bg-gray-50 rounded-lg p-8 text-center">
                    <h3 class="text-3xl font-bold text-primary mb-8">إحصائيات الأقسام</h3>
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div>
                            <div class="text-4xl font-bold text-primary mb-2">21</div>
                            <p class="text-gray-600">قسم أكاديمي</p>
                        </div>
                        <div>
                            <div class="text-4xl font-bold text-primary mb-2">5</div>
                            <p class="text-gray-600">كليات متخصصة</p>
                        </div>
                        <div>
                            <div class="text-4xl font-bold text-primary mb-2">85+</div>
                            <p class="text-gray-600">برنامج دراسي</p>
                        </div>
                        <div>
                            <div class="text-4xl font-bold text-primary mb-2">15,000+</div>
                            <p class="text-gray-600">طالب مسجل</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function loadProgramsPage() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4">
                <!-- Page Header -->
                <div class="text-center mb-12">
                    <h1 class="text-4xl font-bold text-primary mb-4">البرامج التعليمية</h1>
                    <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        برامج أكاديمية متنوعة تشمل الماجستير والدكتوراه والدبلومات والدورات التدريبية
                    </p>
                </div>

                <!-- Programs Categories -->
                
                <!-- Master's Programs -->
                <div class="mb-16">
                    <div class="bg-primary text-white p-6 rounded-t-lg">
                        <div class="flex items-center justify-center space-x-4 space-x-reverse">
                            <div class="bg-golden text-primary p-3 rounded-full">
                                <i class="fas fa-graduation-cap text-2xl"></i>
                            </div>
                            <h2 class="text-3xl font-bold">برامج الماجستير المهني</h2>
                        </div>
                    </div>
                    <div class="bg-gray-50 p-6 rounded-b-lg">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                <div class="flex items-center mb-4">
                                    <div class="bg-primary text-white p-3 rounded-full ml-4">
                                        <i class="fas fa-brain text-lg"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-bold text-primary">ماجستير علم النفس</h3>
                                        <p class="text-gray-600 text-sm">علم النفس التطبيقي</p>
                                    </div>
                                </div>
                                <div class="space-y-2 text-sm text-gray-600">
                                    <div class="flex items-center">
                                        <i class="fas fa-clock text-primary ml-2"></i>
                                        <span>مدة البرنامج: سنتان</span>
                                    </div>
                                    <div class="flex items-center">
                                        <i class="fas fa-book text-primary ml-2"></i>
                                        <span>عدد الساعات: 36 ساعة معتمدة</span>
                                    </div>
                                    <div class="flex items-center">
                                        <i class="fas fa-laptop text-primary ml-2"></i>
                                        <span>نظام التعلم: إلكتروني وحضوري</span>
                                    </div>
                                </div>
                                <button class="w-full mt-4 bg-golden text-primary py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                                    تفاصيل البرنامج
                                </button>
                            </div>

                            <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                <div class="flex items-center mb-4">
                                    <div class="bg-golden text-primary p-3 rounded-full ml-4">
                                        <i class="fas fa-chart-line text-lg"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-bold text-primary">ماجستير إدارة الأعمال</h3>
                                        <p class="text-gray-600 text-sm">MBA التنفيذي</p>
                                    </div>
                                </div>
                                <div class="space-y-2 text-sm text-gray-600">
                                    <div class="flex items-center">
                                        <i class="fas fa-clock text-primary ml-2"></i>
                                        <span>مدة البرنامج: سنتان</span>
                                    </div>
                                    <div class="flex items-center">
                                        <i class="fas fa-book text-primary ml-2"></i>
                                        <span>عدد الساعات: 42 ساعة معتمدة</span>
                                    </div>
                                    <div class="flex items-center">
                                        <i class="fas fa-laptop text-primary ml-2"></i>
                                        <span>نظام التعلم: مختلط</span>
                                    </div>
                                </div>
                                <button class="w-full mt-4 bg-golden text-primary py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                                    تفاصيل البرنامج
                                </button>
                            </div>

                            <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                <div class="flex items-center mb-4">
                                    <div class="bg-primary text-white p-3 rounded-full ml-4">
                                        <i class="fas fa-chalkboard-teacher text-lg"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-bold text-primary">ماجستير التربية</h3>
                                        <p class="text-gray-600 text-sm">المناهج وطرق التدريس</p>
                                    </div>
                                </div>
                                <div class="space-y-2 text-sm text-gray-600">
                                    <div class="flex items-center">
                                        <i class="fas fa-clock text-primary ml-2"></i>
                                        <span>مدة البرنامج: سنتان</span>
                                    </div>
                                    <div class="flex items-center">
                                        <i class="fas fa-book text-primary ml-2"></i>
                                        <span>عدد الساعات: 36 ساعة معتمدة</span>
                                    </div>
                                    <div class="flex items-center">
                                        <i class="fas fa-laptop text-primary ml-2"></i>
                                        <span>نظام التعلم: إلكتروني</span>
                                    </div>
                                </div>
                                <button class="w-full mt-4 bg-golden text-primary py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                                    تفاصيل البرنامج
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- PhD Programs -->
                <div class="mb-16">
                    <div class="bg-golden text-primary p-6 rounded-t-lg">
                        <div class="flex items-center justify-center space-x-4 space-x-reverse">
                            <div class="bg-primary text-white p-3 rounded-full">
                                <i class="fas fa-user-graduate text-2xl"></i>
                            </div>
                            <h2 class="text-3xl font-bold">برامج الدكتوراه المهنية</h2>
                        </div>
                    </div>
                    <div class="bg-gray-50 p-6 rounded-b-lg">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                <div class="flex items-center mb-4">
                                    <div class="bg-primary text-white p-3 rounded-full ml-4">
                                        <i class="fas fa-brain text-lg"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-bold text-primary">دكتوراه علم النفس</h3>
                                        <p class="text-gray-600 text-sm">تخصص متقدم</p>
                                    </div>
                                </div>
                                <div class="space-y-2 text-sm text-gray-600">
                                    <div class="flex items-center">
                                        <i class="fas fa-clock text-primary ml-2"></i>
                                        <span>مدة البرنامج: 3-4 سنوات</span>
                                    </div>
                                    <div class="flex items-center">
                                        <i class="fas fa-book text-primary ml-2"></i>
                                        <span>عدد الساعات: 54 ساعة معتمدة</span>
                                    </div>
                                    <div class="flex items-center">
                                        <i class="fas fa-search text-primary ml-2"></i>
                                        <span>أطروحة بحثية مطلوبة</span>
                                    </div>
                                </div>
                                <button class="w-full mt-4 bg-golden text-primary py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                                    تفاصيل البرنامج
                                </button>
                            </div>

                            <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                <div class="flex items-center mb-4">
                                    <div class="bg-golden text-primary p-3 rounded-full ml-4">
                                        <i class="fas fa-chart-line text-lg"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-bold text-primary">دكتوراه إدارة الأعمال</h3>
                                        <p class="text-gray-600 text-sm">DBA التنفيذية</p>
                                    </div>
                                </div>
                                <div class="space-y-2 text-sm text-gray-600">
                                    <div class="flex items-center">
                                        <i class="fas fa-clock text-primary ml-2"></i>
                                        <span>مدة البرنامج: 3-4 سنوات</span>
                                    </div>
                                    <div class="flex items-center">
                                        <i class="fas fa-book text-primary ml-2"></i>
                                        <span>عدد الساعات: 60 ساعة معتمدة</span>
                                    </div>
                                    <div class="flex items-center">
                                        <i class="fas fa-search text-primary ml-2"></i>
                                        <span>مشروع تطبيقي مطلوب</span>
                                    </div>
                                </div>
                                <button class="w-full mt-4 bg-golden text-primary py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                                    تفاصيل البرنامج
                                </button>
                            </div>

                            <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                <div class="flex items-center mb-4">
                                    <div class="bg-primary text-white p-3 rounded-full ml-4">
                                        <i class="fas fa-graduation-cap text-lg"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-bold text-primary">دكتوراه التربية</h3>
                                        <p class="text-gray-600 text-sm">القيادة التربوية</p>
                                    </div>
                                </div>
                                <div class="space-y-2 text-sm text-gray-600">
                                    <div class="flex items-center">
                                        <i class="fas fa-clock text-primary ml-2"></i>
                                        <span>مدة البرنامج: 3-4 سنوات</span>
                                    </div>
                                    <div class="flex items-center">
                                        <i class="fas fa-book text-primary ml-2"></i>
                                        <span>عدد الساعات: 54 ساعة معتمدة</span>
                                    </div>
                                    <div class="flex items-center">
                                        <i class="fas fa-search text-primary ml-2"></i>
                                        <span>بحث علمي متقدم</span>
                                    </div>
                                </div>
                                <button class="w-full mt-4 bg-golden text-primary py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                                    تفاصيل البرنامج
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Professional Diplomas -->
                <div class="mb-16">
                    <div class="bg-primary text-white p-6 rounded-t-lg">
                        <div class="flex items-center justify-center space-x-4 space-x-reverse">
                            <div class="bg-golden text-primary p-3 rounded-full">
                                <i class="fas fa-certificate text-2xl"></i>
                            </div>
                            <h2 class="text-3xl font-bold">الدبلومات المهنية</h2>
                        </div>
                    </div>
                    <div class="bg-gray-50 p-6 rounded-b-lg">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div class="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                                <div class="bg-primary text-white p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                                    <i class="fas fa-users text-lg"></i>
                                </div>
                                <h3 class="text-lg font-bold text-primary mb-2">دبلوم التنمية البشرية</h3>
                                <p class="text-gray-600 text-sm mb-3">6 أشهر - 24 ساعة</p>
                                <button class="w-full bg-golden text-primary py-2 rounded font-semibold text-sm hover:bg-yellow-500 transition-colors">
                                    التسجيل
                                </button>
                            </div>

                            <div class="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                                <div class="bg-golden text-primary p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                                    <i class="fas fa-handshake text-lg"></i>
                                </div>
                                <h3 class="text-lg font-bold text-primary mb-2">دبلوم الإرشاد الأسري</h3>
                                <p class="text-gray-600 text-sm mb-3">4 أشهر - 18 ساعة</p>
                                <button class="w-full bg-golden text-primary py-2 rounded font-semibold text-sm hover:bg-yellow-500 transition-colors">
                                    التسجيل
                                </button>
                            </div>

                            <div class="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                                <div class="bg-primary text-white p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                                    <i class="fas fa-chart-bar text-lg"></i>
                                </div>
                                <h3 class="text-lg font-bold text-primary mb-2">دبلوم إدارة المشاريع</h3>
                                <p class="text-gray-600 text-sm mb-3">5 أشهر - 20 ساعة</p>
                                <button class="w-full bg-golden text-primary py-2 rounded font-semibold text-sm hover:bg-yellow-500 transition-colors">
                                    التسجيل
                                </button>
                            </div>

                            <div class="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                                <div class="bg-golden text-primary p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                                    <i class="fas fa-laptop-code text-lg"></i>
                                </div>
                                <h3 class="text-lg font-bold text-primary mb-2">دبلوم التحول الرقمي</h3>
                                <p class="text-gray-600 text-sm mb-3">6 أشهر - 30 ساعة</p>
                                <button class="w-full bg-golden text-primary py-2 rounded font-semibold text-sm hover:bg-yellow-500 transition-colors">
                                    التسجيل
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Training Courses -->
                <div class="mb-16">
                    <div class="bg-golden text-primary p-6 rounded-t-lg">
                        <div class="flex items-center justify-center space-x-4 space-x-reverse">
                            <div class="bg-primary text-white p-3 rounded-full">
                                <i class="fas fa-chalkboard text-2xl"></i>
                            </div>
                            <h2 class="text-3xl font-bold">الدورات التدريبية</h2>
                        </div>
                    </div>
                    <div class="bg-gray-50 p-6 rounded-b-lg">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                                <h3 class="text-lg font-bold text-primary mb-3">برامج القيادة والإدارة</h3>
                                <ul class="space-y-2 text-gray-600 text-sm">
                                    <li>• القيادة الإستراتيجية (40 ساعة)</li>
                                    <li>• إدارة الفرق الفعالة (30 ساعة)</li>
                                    <li>• التفكير الإبداعي (25 ساعة)</li>
                                    <li>• إدارة الوقت والأولويات (20 ساعة)</li>
                                </ul>
                            </div>

                            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                                <h3 class="text-lg font-bold text-primary mb-3">برامج التطوير الشخصي</h3>
                                <ul class="space-y-2 text-gray-600 text-sm">
                                    <li>• مهارات التواصل الفعال (35 ساعة)</li>
                                    <li>• بناء الثقة بالنفس (25 ساعة)</li>
                                    <li>• إدارة الضغوط النفسية (30 ساعة)</li>
                                    <li>• مهارات العرض والتقديم (20 ساعة)</li>
                                </ul>
                            </div>

                            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                                <h3 class="text-lg font-bold text-primary mb-3">برامج التقنية والرقمنة</h3>
                                <ul class="space-y-2 text-gray-600 text-sm">
                                    <li>• أساسيات الذكاء الاصطناعي (45 ساعة)</li>
                                    <li>• التسويق الرقمي (40 ساعة)</li>
                                    <li>• إدارة وسائل التواصل (30 ساعة)</li>
                                    <li>• الأمن السيبراني (35 ساعة)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Program Benefits -->
                <div class="bg-gray-50 rounded-lg p-8">
                    <h3 class="text-3xl font-bold text-primary text-center mb-8">مزايا البرامج</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="text-center">
                            <div class="bg-primary text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <i class="fas fa-award text-2xl"></i>
                            </div>
                            <h4 class="font-bold text-primary mb-2">شهادات معتمدة</h4>
                            <p class="text-gray-600 text-sm">شهادات معترف بها دولياً</p>
                        </div>
                        <div class="text-center">
                            <div class="bg-golden text-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <i class="fas fa-users text-2xl"></i>
                            </div>
                            <h4 class="font-bold text-primary mb-2">أساتذة متميزون</h4>
                            <p class="text-gray-600 text-sm">نخبة من الخبراء والمتخصصين</p>
                        </div>
                        <div class="text-center">
                            <div class="bg-primary text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <i class="fas fa-laptop text-2xl"></i>
                            </div>
                            <h4 class="font-bold text-primary mb-2">تعلم مرن</h4>
                            <p class="text-gray-600 text-sm">نظام تعلم إلكتروني متطور</p>
                        </div>
                        <div class="text-center">
                            <div class="bg-golden text-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <i class="fas fa-handshake text-2xl"></i>
                            </div>
                            <h4 class="font-bold text-primary mb-2">دعم مستمر</h4>
                            <p class="text-gray-600 text-sm">متابعة وإرشاد أكاديمي</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function loadEducationSystemPage() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4">
                <!-- Page Header -->
                <div class="text-center mb-12">
                    <h1 class="text-4xl font-bold text-primary mb-4">نظام التعليم</h1>
                    <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        نظام تعليمي متطور يجمع بين الأصالة والحداثة، مصمم لتلبية احتياجات العصر ومتطلبات سوق العمل
                    </p>
                </div>

                <!-- Education Methods -->
                <div class="mb-16">
                    <h2 class="text-3xl font-bold text-primary text-center mb-12">أساليب التعليم</h2>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <!-- Traditional Learning -->
                        <div class="bg-primary text-white rounded-lg p-8 text-center hover:transform hover:-translate-y-2 transition-all">
                            <div class="bg-golden text-primary p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                                <i class="fas fa-chalkboard-teacher text-3xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold mb-4">التعليم الحضوري</h3>
                            <p class="leading-relaxed">
                                محاضرات وجلسات تفاعلية في بيئة تعليمية متطورة مع أحدث التقنيات التعليمية
                            </p>
                            <ul class="mt-6 space-y-2 text-left text-golden">
                                <li>• قاعات مجهزة بأحدث التقنيات</li>
                                <li>• ورش عمل تطبيقية</li>
                                <li>• نقاشات جماعية</li>
                                <li>• مشاريع تعاونية</li>
                            </ul>
                        </div>

                        <!-- Online Learning -->
                        <div class="bg-golden text-primary rounded-lg p-8 text-center hover:transform hover:-translate-y-2 transition-all">
                            <div class="bg-primary text-white p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                                <i class="fas fa-laptop text-3xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold mb-4">التعليم الإلكتروني</h3>
                            <p class="leading-relaxed">
                                منصة تعليمية متقدمة تتيح التعلم من أي مكان وفي أي وقت مع أدوات تفاعلية متطورة
                            </p>
                            <ul class="mt-6 space-y-2 text-left text-primary">
                                <li>• محاضرات مسجلة ومباشرة</li>
                                <li>• منتديات نقاش تفاعلية</li>
                                <li>• اختبارات إلكترونية</li>
                                <li>• متابعة الأداء الفوري</li>
                            </ul>
                        </div>

                        <!-- Blended Learning -->
                        <div class="bg-gray-100 text-primary rounded-lg p-8 text-center hover:transform hover:-translate-y-2 transition-all">
                            <div class="bg-primary text-white p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                                <i class="fas fa-sync-alt text-3xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold mb-4">التعليم المختلط</h3>
                            <p class="leading-relaxed">
                                دمج مثالي بين التعليم الحضوري والإلكتروني لتحقيق أقصى استفادة تعليمية
                            </p>
                            <ul class="mt-6 space-y-2 text-left text-primary">
                                <li>• مرونة في المواعيد</li>
                                <li>• تعلم تفاعلي</li>
                                <li>• دعم مستمر</li>
                                <li>• تقييم شامل</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Learning Platform Features -->
                <div class="mb-16">
                    <h2 class="text-3xl font-bold text-primary text-center mb-12">مميزات المنصة التعليمية</h2>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div class="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                            <div class="bg-primary text-white p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <i class="fas fa-video text-2xl"></i>
                            </div>
                            <h4 class="text-lg font-bold text-primary mb-2">محاضرات فيديو</h4>
                            <p class="text-gray-600 text-sm">محاضرات عالية الجودة مع إمكانية التشغيل المتكرر</p>
                        </div>

                        <div class="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                            <div class="bg-golden text-primary p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <i class="fas fa-book-open text-2xl"></i>
                            </div>
                            <h4 class="text-lg font-bold text-primary mb-2">مكتبة رقمية</h4>
                            <p class="text-gray-600 text-sm">آلاف الكتب والمراجع العلمية المتاحة دائماً</p>
                        </div>

                        <div class="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                            <div class="bg-primary text-white p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <i class="fas fa-comments text-2xl"></i>
                            </div>
                            <h4 class="text-lg font-bold text-primary mb-2">منتديات نقاش</h4>
                            <p class="text-gray-600 text-sm">تفاعل مستمر مع الأساتذة والزملاء</p>
                        </div>

                        <div class="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                            <div class="bg-golden text-primary p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <i class="fas fa-chart-bar text-2xl"></i>
                            </div>
                            <h4 class="text-lg font-bold text-primary mb-2">تتبع التقدم</h4>
                            <p class="text-gray-600 text-sm">متابعة دقيقة لمستوى الأداء والتحسن</p>
                        </div>
                    </div>
                </div>

                <!-- Academic Calendar -->
                <div class="mb-16">
                    <h2 class="text-3xl font-bold text-primary text-center mb-12">التقويم الأكاديمي</h2>
                    
                    <div class="bg-gray-50 rounded-lg p-8">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <!-- Semester System -->
                            <div>
                                <h3 class="text-2xl font-bold text-primary mb-6">نظام الفصول الدراسية</h3>
                                <div class="space-y-4">
                                    <div class="bg-white p-4 rounded-lg border-r-4 border-primary">
                                        <h4 class="font-bold text-primary mb-2">الفصل الأول</h4>
                                        <p class="text-gray-600">سبتمبر - ديسمبر (16 أسبوع)</p>
                                    </div>
                                    <div class="bg-white p-4 rounded-lg border-r-4 border-golden">
                                        <h4 class="font-bold text-primary mb-2">الفصل الثاني</h4>
                                        <p class="text-gray-600">فبراير - مايو (16 أسبوع)</p>
                                    </div>
                                    <div class="bg-white p-4 rounded-lg border-r-4 border-primary">
                                        <h4 class="font-bold text-primary mb-2">الفصل الصيفي</h4>
                                        <p class="text-gray-600">يونيو - أغسطس (8 أسابيع)</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Study Schedule -->
                            <div>
                                <h3 class="text-2xl font-bold text-primary mb-6">جدولة الدراسة</h3>
                                <div class="space-y-4">
                                    <div class="bg-white p-4 rounded-lg">
                                        <h4 class="font-bold text-primary mb-2">المحاضرات الحضورية</h4>
                                        <p class="text-gray-600">السبت - الأربعاء (2-3 محاضرات أسبوعياً)</p>
                                    </div>
                                    <div class="bg-white p-4 rounded-lg">
                                        <h4 class="font-bold text-primary mb-2">الجلسات الإلكترونية</h4>
                                        <p class="text-gray-600">مسائية (7:00 - 9:00 م) 3 مرات أسبوعياً</p>
                                    </div>
                                    <div class="bg-white p-4 rounded-lg">
                                        <h4 class="font-bold text-primary mb-2">ورش العمل</h4>
                                        <p class="text-gray-600">نهاية الأسبوع (ورشة واحدة شهرياً)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Assessment Methods -->
                <div class="mb-16">
                    <h2 class="text-3xl font-bold text-primary text-center mb-12">أساليب التقييم</h2>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div class="bg-white p-6 rounded-lg shadow-lg border-t-4 border-primary">
                            <div class="text-center mb-4">
                                <div class="bg-primary text-white p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                                    <i class="fas fa-clipboard-check text-2xl"></i>
                                </div>
                                <h4 class="text-xl font-bold text-primary">التقييم المستمر</h4>
                            </div>
                            <ul class="space-y-2 text-gray-600">
                                <li>• واجبات أسبوعية (20%)</li>
                                <li>• مشاركة في النقاشات (15%)</li>
                                <li>• مشاريع عملية (25%)</li>
                                <li>• حضور والمشاركة (10%)</li>
                            </ul>
                        </div>

                        <div class="bg-white p-6 rounded-lg shadow-lg border-t-4 border-golden">
                            <div class="text-center mb-4">
                                <div class="bg-golden text-primary p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                                    <i class="fas fa-pen-fancy text-2xl"></i>
                                </div>
                                <h4 class="text-xl font-bold text-primary">الاختبارات</h4>
                            </div>
                            <ul class="space-y-2 text-gray-600">
                                <li>• اختبار منتصف الفصل (15%)</li>
                                <li>• الاختبار النهائي (30%)</li>
                                <li>• اختبارات عملية (10%)</li>
                                <li>• عروض تقديمية (15%)</li>
                            </ul>
                        </div>

                        <div class="bg-white p-6 rounded-lg shadow-lg border-t-4 border-primary">
                            <div class="text-center mb-4">
                                <div class="bg-primary text-white p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                                    <i class="fas fa-graduation-cap text-2xl"></i>
                                </div>
                                <h4 class="text-xl font-bold text-primary">مشروع التخرج</h4>
                            </div>
                            <ul class="space-y-2 text-gray-600">
                                <li>• بحث علمي متقدم</li>
                                <li>• مشروع تطبيقي</li>
                                <li>• عرض ومناقشة</li>
                                <li>• تقييم لجنة متخصصة</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Academic Support -->
                <div class="mb-16">
                    <h2 class="text-3xl font-bold text-primary text-center mb-12">الدعم الأكاديمي</h2>
                    
                    <div class="bg-primary text-white rounded-lg p-8">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                            <div>
                                <div class="bg-golden text-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-user-tie text-2xl"></i>
                                </div>
                                <h4 class="text-lg font-bold mb-2">مرشد أكاديمي</h4>
                                <p class="text-gray-200 text-sm">إرشاد شخصي طوال فترة الدراسة</p>
                            </div>

                            <div>
                                <div class="bg-golden text-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-headset text-2xl"></i>
                                </div>
                                <h4 class="text-lg font-bold mb-2">دعم تقني</h4>
                                <p class="text-gray-200 text-sm">مساعدة فنية على مدار الساعة</p>
                            </div>

                            <div>
                                <div class="bg-golden text-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-book text-2xl"></i>
                                </div>
                                <h4 class="text-lg font-bold mb-2">مكتبة شاملة</h4>
                                <p class="text-gray-200 text-sm">وصول لأحدث المصادر العلمية</p>
                            </div>

                            <div>
                                <div class="bg-golden text-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-users text-2xl"></i>
                                </div>
                                <h4 class="text-lg font-bold mb-2">مجموعات دراسية</h4>
                                <p class="text-gray-200 text-sm">تعلم تعاوني مع الزملاء</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- CTA Section -->
                <div class="text-center">
                    <div class="bg-gray-50 rounded-lg p-8">
                        <h3 class="text-3xl font-bold text-primary mb-4">ابدأ رحلتك التعليمية اليوم</h3>
                        <p class="text-xl text-gray-600 mb-8">اكتشف نظام تعليمي متطور يؤهلك لمستقبل مهني متميز</p>
                        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
                            <button onclick="showPage('programs')" class="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                                <i class="fas fa-book ml-2"></i>
                                تصفح البرامج التعليمية
                            </button>
                            <button onclick="showPage('admission')" class="bg-golden text-primary px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                                <i class="fas fa-file-alt ml-2"></i>
                                تقدم للالتحاق
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function loadAdmissionPage() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4">
                <!-- Page Header -->
                <div class="text-center mb-12">
                    <h1 class="text-4xl font-bold text-primary mb-4">القبول والتسجيل</h1>
                    <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        ابدأ رحلتك التعليمية معنا واحصل على أفضل التخصصات الأكاديمية المتقدمة
                    </p>
                </div>

                <!-- Admission Steps -->
                <div class="mb-16">
                    <h2 class="text-3xl font-bold text-primary text-center mb-12">خطوات التقديم</h2>
                    
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div class="text-center relative">
                            <div class="bg-primary text-white p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">1</div>
                            <h3 class="text-xl font-bold text-primary mb-2">املأ الطلب</h3>
                            <p class="text-gray-600">قم بملء استمارة التقديم الإلكترونية</p>
                        </div>
                        
                        <div class="text-center relative">
                            <div class="bg-golden text-primary p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">2</div>
                            <h3 class="text-xl font-bold text-primary mb-2">أرفق المستندات</h3>
                            <p class="text-gray-600">رفع الشهادات والمستندات المطلوبة</p>
                        </div>
                        
                        <div class="text-center relative">
                            <div class="bg-primary text-white p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">3</div>
                            <h3 class="text-xl font-bold text-primary mb-2">المراجعة</h3>
                            <p class="text-gray-600">مراجعة الطلب من قبل لجنة القبول</p>
                        </div>
                        
                        <div class="text-center relative">
                            <div class="bg-golden text-primary p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">4</div>
                            <h3 class="text-xl font-bold text-primary mb-2">القبول</h3>
                            <p class="text-gray-600">إخطار القبول وبدء الدراسة</p>
                        </div>
                    </div>
                </div>

                <!-- Application Form -->
                <div class="mb-16">
                    <div class="bg-gray-50 rounded-lg p-8">
                        <h2 class="text-3xl font-bold text-primary text-center mb-8">استمارة التقديم</h2>
                        
                        <div class="max-w-4xl mx-auto">
                            <form id="admissionForm" class="bg-white rounded-lg p-8 shadow-lg space-y-6">
                                <!-- Personal Information -->
                                <div class="mb-8">
                                    <h3 class="text-2xl font-bold text-primary mb-6 border-b border-gray-200 pb-2">المعلومات الشخصية</h3>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">الاسم الأول</label>
                                            <input type="text" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="الاسم الأول">
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">اسم العائلة</label>
                                            <input type="text" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="اسم العائلة">
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
                                            <input type="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="example@email.com">
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف</label>
                                            <input type="tel" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="+966 5X XXX XXXX">
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">تاريخ الميلاد</label>
                                            <input type="date" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">الجنسية</label>
                                            <select required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                                                <option value="">اختر الجنسية</option>
                                                <option value="saudi">السعودية</option>
                                                <option value="emirates">الإمارات</option>
                                                <option value="kuwait">الكويت</option>
                                                <option value="qatar">قطر</option>
                                                <option value="bahrain">البحرين</option>
                                                <option value="oman">عُمان</option>
                                                <option value="other">أخرى</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <!-- Academic Information -->
                                <div class="mb-8">
                                    <h3 class="text-2xl font-bold text-primary mb-6 border-b border-gray-200 pb-2">المعلومات الأكاديمية</h3>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">البرنامج المرغوب</label>
                                            <select required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                                                <option value="">اختر البرنامج</option>
                                                <option value="psychology-masters">ماجستير علم النفس</option>
                                                <option value="business-masters">ماجستير إدارة الأعمال</option>
                                                <option value="education-masters">ماجستير التربية</option>
                                                <option value="psychology-phd">دكتوراه علم النفس</option>
                                                <option value="business-phd">دكتوراه إدارة الأعمال</option>
                                                <option value="education-phd">دكتوراه التربية</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">المؤهل الأكاديمي الحالي</label>
                                            <select required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                                                <option value="">اختر المؤهل</option>
                                                <option value="bachelor">بكالوريوس</option>
                                                <option value="masters">ماجستير</option>
                                                <option value="phd">دكتوراه</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">الجامعة السابقة</label>
                                            <input type="text" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="اسم الجامعة">
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">سنة التخرج</label>
                                            <input type="number" required min="1980" max="2024" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="2023">
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">المعدل التراكمي (GPA)</label>
                                            <input type="number" step="0.01" min="0" max="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="3.75">
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">سنوات الخبرة المهنية</label>
                                            <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                                                <option value="">اختر سنوات الخبرة</option>
                                                <option value="none">بدون خبرة</option>
                                                <option value="1-3">1-3 سنوات</option>
                                                <option value="4-7">4-7 سنوات</option>
                                                <option value="8-15">8-15 سنة</option>
                                                <option value="15+">أكثر من 15 سنة</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <!-- Documents Upload -->
                                <div class="mb-8">
                                    <h3 class="text-2xl font-bold text-primary mb-6 border-b border-gray-200 pb-2">المستندات المطلوبة</h3>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">نسخة من الهوية</label>
                                            <input type="file" accept=".pdf,.jpg,.png" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">آخر شهادة أكاديمية</label>
                                            <input type="file" accept=".pdf,.jpg,.png" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">كشف الدرجات</label>
                                            <input type="file" accept=".pdf,.jpg,.png" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">خطاب التوصية (اختياري)</label>
                                            <input type="file" accept=".pdf,.jpg,.png" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                                        </div>
                                    </div>
                                </div>

                                <!-- Personal Statement -->
                                <div class="mb-8">
                                    <h3 class="text-2xl font-bold text-primary mb-6 border-b border-gray-200 pb-2">البيان الشخصي</h3>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">لماذا تريد الالتحاق بهذا البرنامج؟</label>
                                        <textarea rows="6" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none" placeholder="اكتب بياناً شخصياً يوضح دوافعك للالتحاق بالبرنامج وأهدافك المهنية..."></textarea>
                                    </div>
                                </div>

                                <!-- Terms and Conditions -->
                                <div class="mb-8">
                                    <div class="flex items-start">
                                        <input type="checkbox" required class="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded">
                                        <div class="mr-3">
                                            <label class="text-sm text-gray-700">
                                                أوافق على <a href="#" class="text-primary hover:underline">الشروط والأحكام</a> و<a href="#" class="text-primary hover:underline">سياسة الخصوصية</a>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <!-- Submit Button -->
                                <div class="text-center">
                                    <button type="submit" class="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors">
                                        <i class="fas fa-paper-plane ml-2"></i>
                                        تقديم الطلب
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <!-- Admission Requirements -->
                <div class="mb-16">
                    <h2 class="text-3xl font-bold text-primary text-center mb-12">شروط القبول</h2>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <!-- Bachelor Requirements -->
                        <div class="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary">
                            <h3 class="text-2xl font-bold text-primary mb-6 text-center">برامج الماجستير</h3>
                            <ul class="space-y-3 text-gray-700">
                                <li class="flex items-start">
                                    <i class="fas fa-check text-golden mt-1 ml-2"></i>
                                    <span>شهادة البكالوريوس بتقدير لا يقل عن جيد</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-golden mt-1 ml-2"></i>
                                    <span>معدل تراكمي لا يقل عن 3.0 من 4.0</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-golden mt-1 ml-2"></i>
                                    <span>شهادة إجادة اللغة الإنجليزية (IELTS/TOEFL)</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-golden mt-1 ml-2"></i>
                                    <span>خطابا توصية من أساتذة جامعيين</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-golden mt-1 ml-2"></i>
                                    <span>بيان شخصي مكتوب</span>
                                </li>
                            </ul>
                        </div>

                        <!-- Master Requirements -->
                        <div class="bg-white p-8 rounded-lg shadow-lg border-t-4 border-golden">
                            <h3 class="text-2xl font-bold text-primary mb-6 text-center">برامج الدكتوراه</h3>
                            <ul class="space-y-3 text-gray-700">
                                <li class="flex items-start">
                                    <i class="fas fa-check text-primary mt-1 ml-2"></i>
                                    <span>شهادة الماجستير بتقدير لا يقل عن جيد جداً</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-primary mt-1 ml-2"></i>
                                    <span>معدل تراكمي لا يقل عن 3.5 من 4.0</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-primary mt-1 ml-2"></i>
                                    <span>خبرة مهنية لا تقل عن 3 سنوات</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-primary mt-1 ml-2"></i>
                                    <span>اجتياز اختبار القدرات الأكاديمية</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-primary mt-1 ml-2"></i>
                                    <span>مقترح بحثي أولي</span>
                                </li>
                            </ul>
                        </div>

                        <!-- General Requirements -->
                        <div class="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary">
                            <h3 class="text-2xl font-bold text-primary mb-6 text-center">الشروط العامة</h3>
                            <ul class="space-y-3 text-gray-700">
                                <li class="flex items-start">
                                    <i class="fas fa-check text-golden mt-1 ml-2"></i>
                                    <span>إجادة استخدام الحاسوب والإنترنت</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-golden mt-1 ml-2"></i>
                                    <span>الالتزام بحضور 80% من المحاضرات</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-golden mt-1 ml-2"></i>
                                    <span>دفع الرسوم الدراسية في المواعيد</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-golden mt-1 ml-2"></i>
                                    <span>الالتزام بالقوانين واللوائح</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check text-golden mt-1 ml-2"></i>
                                    <span>إجراء مقابلة شخصية (للبعض)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Contact Information -->
                <div class="bg-primary text-white rounded-lg p-8 text-center">
                    <h3 class="text-2xl font-bold mb-4">هل تحتاج مساعدة في التقديم؟</h3>
                    <p class="text-lg mb-6">فريق القبول متاح لمساعدتك في جميع خطوات التقديم</p>
                    <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
                        <button onclick="showPage('contact')" class="bg-golden text-primary px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                            <i class="fas fa-phone ml-2"></i>
                            تواصل معنا
                        </button>
                        <button onclick="showPage('faq')" class="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            <i class="fas fa-question-circle ml-2"></i>
                            الأسئلة الشائعة
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <script>
            document.getElementById('admissionForm').addEventListener('submit', function(e) {
                e.preventDefault();
                
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin ml-2"></i>جاري الإرسال...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                    showNotification('تم تقديم طلبك بنجاح! سيتم التواصل معك خلال 48 ساعة.', 'success');
                }, 3000);
            });
        </script>
    `;
}

function loadVerificationPage() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4">
                <!-- Page Header -->
                <div class="text-center mb-12">
                    <h1 class="text-4xl font-bold text-primary mb-4">التحقق من الشهادات</h1>
                    <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        يمكنك التحقق من صحة الشهادات الصادرة من أكاديمية المعرفة الدولية باستخدام رقم التحقق
                    </p>
                </div>

                <!-- Verification Form -->
                <div class="max-w-2xl mx-auto mb-16">
                    <div class="bg-white rounded-lg shadow-lg p-8">
                        <div class="text-center mb-8">
                            <div class="bg-primary text-white p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                <i class="fas fa-certificate text-3xl"></i>
                            </div>
                            <h2 class="text-2xl font-bold text-primary mb-2">نموذج التحقق من الشهادات</h2>
                            <p class="text-gray-600">أدخل رقم التحقق المكتوب على الشهادة</p>
                        </div>
                        
                        <form id="verificationForm" class="space-y-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">رقم التحقق</label>
                                <input type="text" id="verificationCode" 
                                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-center text-lg font-mono tracking-widest"
                                       placeholder="مثال: KA-2024-001234" maxlength="15" required>
                                <p class="text-sm text-gray-500 mt-1">الرقم موجود في أسفل الشهادة</p>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">الاسم الكامل (اختياري)</label>
                                <input type="text" id="holderName" 
                                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                       placeholder="اسم حامل الشهادة">
                            </div>
                            
                            <button type="submit" class="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                                <i class="fas fa-search ml-2"></i>
                                التحقق من الشهادة
                            </button>
                        </form>
                    </div>
                </div>

                <!-- Result Section (Hidden by default) -->
                <div id="verificationResult" class="max-w-4xl mx-auto hidden">
                    <!-- Valid Certificate Template -->
                    <div id="validResult" class="bg-green-50 border border-green-200 rounded-lg p-8 mb-8 hidden">
                        <div class="flex items-start space-x-4 space-x-reverse">
                            <div class="bg-green-500 text-white p-3 rounded-full">
                                <i class="fas fa-check-circle text-2xl"></i>
                            </div>
                            <div class="flex-1">
                                <h3 class="text-2xl font-bold text-green-800 mb-4">شهادة صحيحة ومعتمدة</h3>
                                
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div class="space-y-3">
                                        <div>
                                            <span class="font-semibold text-gray-700">اسم الحاصل على الشهادة:</span>
                                            <p class="text-gray-900" id="certificateHolder">محمد أحمد علي</p>
                                        </div>
                                        <div>
                                            <span class="font-semibold text-gray-700">نوع الشهادة:</span>
                                            <p class="text-gray-900" id="certificateType">ماجستير علم النفس التطبيقي</p>
                                        </div>
                                        <div>
                                            <span class="font-semibold text-gray-700">تاريخ الإصدار:</span>
                                            <p class="text-gray-900" id="issueDate">15 ديسمبر 2023</p>
                                        </div>
                                    </div>
                                    <div class="space-y-3">
                                        <div>
                                            <span class="font-semibold text-gray-700">رقم التحقق:</span>
                                            <p class="text-gray-900 font-mono" id="verifiedCode">KA-2024-001234</p>
                                        </div>
                                        <div>
                                            <span class="font-semibold text-gray-700">المعدل التراكمي:</span>
                                            <p class="text-gray-900" id="gpa">3.85 من 4.00</p>
                                        </div>
                                        <div>
                                            <span class="font-semibold text-gray-700">التقدير:</span>
                                            <p class="text-gray-900" id="grade">ممتاز</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="mt-6 pt-6 border-t border-green-200">
                                    <button onclick="downloadCertificate()" class="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                                        <i class="fas fa-download ml-2"></i>
                                        تحميل نسخة PDF
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Invalid Certificate Template -->
                    <div id="invalidResult" class="bg-red-50 border border-red-200 rounded-lg p-8 mb-8 hidden">
                        <div class="flex items-start space-x-4 space-x-reverse">
                            <div class="bg-red-500 text-white p-3 rounded-full">
                                <i class="fas fa-times-circle text-2xl"></i>
                            </div>
                            <div class="flex-1">
                                <h3 class="text-2xl font-bold text-red-800 mb-4">الشهادة غير موجودة أو غير صحيحة</h3>
                                <p class="text-red-700 mb-4">
                                    رقم التحقق المدخل غير موجود في قاعدة بياناتنا. يرجى التأكد من صحة الرقم أو التواصل معنا.
                                </p>
                                <div class="space-y-2">
                                    <p class="text-sm text-red-600">• تأكد من إدخال الرقم بشكل صحيح</p>
                                    <p class="text-sm text-red-600">• الرقم يتكون من حروف وأرقام مفصولة بشرطات</p>
                                    <p class="text-sm text-red-600">• في حالة استمرار المشكلة، يرجى التواصل معنا</p>
                                </div>
                                
                                <div class="mt-6 pt-6 border-t border-red-200">
                                    <button onclick="showPage('contact')" class="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                                        <i class="fas fa-phone ml-2"></i>
                                        تواصل معنا
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Information Section -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- How to Verify -->
                    <div class="bg-gray-50 rounded-lg p-8">
                        <h3 class="text-2xl font-bold text-primary mb-6">كيفية التحقق</h3>
                        <div class="space-y-4">
                            <div class="flex items-start space-x-3 space-x-reverse">
                                <div class="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                                <p class="text-gray-700">ابحث عن رقم التحقق في أسفل الشهادة</p>
                            </div>
                            <div class="flex items-start space-x-3 space-x-reverse">
                                <div class="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                                <p class="text-gray-700">أدخل الرقم في الحقل المخصص أعلاه</p>
                            </div>
                            <div class="flex items-start space-x-3 space-x-reverse">
                                <div class="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                                <p class="text-gray-700">اضغط على زر "التحقق من الشهادة"</p>
                            </div>
                            <div class="flex items-start space-x-3 space-x-reverse">
                                <div class="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                                <p class="text-gray-700">ستظهر لك تفاصيل الشهادة إذا كانت صحيحة</p>
                            </div>
                        </div>
                    </div>

                    <!-- Contact Info -->
                    <div class="bg-primary text-white rounded-lg p-8">
                        <h3 class="text-2xl font-bold mb-6">هل تحتاج مساعدة؟</h3>
                        <div class="space-y-4">
                            <div class="flex items-center space-x-3 space-x-reverse">
                                <i class="fas fa-phone text-golden"></i>
                                <span>+966 11 234 5678</span>
                            </div>
                            <div class="flex items-center space-x-3 space-x-reverse">
                                <i class="fas fa-envelope text-golden"></i>
                                <span>verification@knowledge-academy.edu</span>
                            </div>
                            <div class="flex items-center space-x-3 space-x-reverse">
                                <i class="fas fa-clock text-golden"></i>
                                <span>أوقات العمل: الأحد - الخميس (8:00 - 17:00)</span>
                            </div>
                            <div class="mt-6">
                                <button onclick="showPage('contact')" class="bg-golden text-primary px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                                    تواصل معنا الآن
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <script>
            document.getElementById('verificationForm').addEventListener('submit', function(e) {
                e.preventDefault();
                handleVerification();
            });
            
            function handleVerification() {
                const code = document.getElementById('verificationCode').value.trim();
                const name = document.getElementById('holderName').value.trim();
                
                if (!code) {
                    showNotification('يرجى إدخال رقم التحقق', 'error');
                    return;
                }
                
                // Simulate verification process
                setTimeout(() => {
                    const resultDiv = document.getElementById('verificationResult');
                    resultDiv.classList.remove('hidden');
                    
                    // Simulate random result (in real app, this would be an API call)
                    const isValid = Math.random() > 0.3; // 70% chance of valid
                    
                    if (isValid) {
                        showValidResult(code, name);
                    } else {
                        showInvalidResult();
                    }
                    
                    // Scroll to result
                    resultDiv.scrollIntoView({ behavior: 'smooth' });
                }, 1500);
                
                // Show loading state
                const submitBtn = document.querySelector('#verificationForm button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin ml-2"></i>جاري التحقق...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 1500);
            }
            
            function showValidResult(code, name) {
                document.getElementById('validResult').classList.remove('hidden');
                document.getElementById('invalidResult').classList.add('hidden');
                
                // Update certificate details
                document.getElementById('verifiedCode').textContent = code;
                if (name) {
                    document.getElementById('certificateHolder').textContent = name;
                }
            }
            
            function showInvalidResult() {
                document.getElementById('invalidResult').classList.remove('hidden');
                document.getElementById('validResult').classList.add('hidden');
            }
            
            function downloadCertificate() {
                // Simulate PDF download
                showNotification('جاري تحضير ملف PDF...', 'success');
                
                setTimeout(() => {
                    const link = document.createElement('a');
                    link.href = '#'; // In real app, this would be the PDF URL
                    link.download = 'certificate-verification.pdf';
                    link.click();
                    showNotification('تم تحميل الملف بنجاح', 'success');
                }, 2000);
            }
        </script>
    `;
}

function loadAccreditationsPage() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4">
                <div class="text-center mb-12">
                    <h1 class="text-4xl font-bold text-primary mb-4">الاعتمادات والشراكات</h1>
                    <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        شراكات استراتيجية واعتمادات دولية تضمن جودة التعليم ومعادلة الشهادات عالمياً
                    </p>
                </div>

                <!-- International Accreditations -->
                <div class="mb-16">
                    <h2 class="text-3xl font-bold text-primary text-center mb-12">الاعتمادات الدولية</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div class="bg-white p-8 rounded-lg shadow-lg border-2 border-primary hover:shadow-xl transition-shadow">
                            <div class="text-center mb-6">
                                <div class="bg-primary text-white p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-certificate text-3xl"></i>
                                </div>
                                <h3 class="text-xl font-bold text-primary">اعتماد دولي من IACBE</h3>
                                <p class="text-gray-600 mt-2">المجلس الدولي لاعتماد كليات الأعمال والتعليم</p>
                            </div>
                        </div>

                        <div class="bg-white p-8 rounded-lg shadow-lg border-2 border-golden hover:shadow-xl transition-shadow">
                            <div class="text-center mb-6">
                                <div class="bg-golden text-primary p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-award text-3xl"></i>
                                </div>
                                <h3 class="text-xl font-bold text-primary">شهادة الجودة ISO 9001</h3>
                                <p class="text-gray-600 mt-2">معيار دولي لأنظمة إدارة الجودة</p>
                            </div>
                        </div>

                        <div class="bg-white p-8 rounded-lg shadow-lg border-2 border-primary hover:shadow-xl transition-shadow">
                            <div class="text-center mb-6">
                                <div class="bg-primary text-white p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-globe text-3xl"></i>
                                </div>
                                <h3 class="text-xl font-bold text-primary">عضوية CHEA الأمريكية</h3>
                                <p class="text-gray-600 mt-2">مجلس اعتماد التعليم العالي الأمريكي</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- University Partnerships -->
                <div class="mb-16">
                    <h2 class="text-3xl font-bold text-primary text-center mb-12">الشراكات الجامعية</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="bg-gray-50 p-8 rounded-lg">
                            <h3 class="text-2xl font-bold text-primary mb-6">الجامعات الشريكة</h3>
                            <div class="space-y-4">
                                <div class="flex items-center p-4 bg-white rounded-lg">
                                    <div class="bg-primary text-white p-3 rounded-full ml-4">
                                        <i class="fas fa-university"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-primary">جامعة هارفارد</h4>
                                        <p class="text-gray-600 text-sm">برامج التبادل الأكاديمي</p>
                                    </div>
                                </div>
                                <div class="flex items-center p-4 bg-white rounded-lg">
                                    <div class="bg-golden text-primary p-3 rounded-full ml-4">
                                        <i class="fas fa-university"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-primary">جامعة أكسفورد</h4>
                                        <p class="text-gray-600 text-sm">برامج البحث المشتركة</p>
                                    </div>
                                </div>
                                <div class="flex items-center p-4 bg-white rounded-lg">
                                    <div class="bg-primary text-white p-3 rounded-full ml-4">
                                        <i class="fas fa-university"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-primary">معهد MIT</h4>
                                        <p class="text-gray-600 text-sm">التعاون في التكنولوجيا</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="bg-gray-50 p-8 rounded-lg">
                            <h3 class="text-2xl font-bold text-primary mb-6">المؤسسات المحلية</h3>
                            <div class="space-y-4">
                                <div class="flex items-center p-4 bg-white rounded-lg">
                                    <div class="bg-primary text-white p-3 rounded-full ml-4">
                                        <i class="fas fa-building"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-primary">جامعة الملك سعود</h4>
                                        <p class="text-gray-600 text-sm">التعاون الأكاديمي والبحثي</p>
                                    </div>
                                </div>
                                <div class="flex items-center p-4 bg-white rounded-lg">
                                    <div class="bg-golden text-primary p-3 rounded-full ml-4">
                                        <i class="fas fa-building"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-primary">جامعة الملك عبدالعزيز</h4>
                                        <p class="text-gray-600 text-sm">برامج التطوير المهني</p>
                                    </div>
                                </div>
                                <div class="flex items-center p-4 bg-white rounded-lg">
                                    <div class="bg-primary text-white p-3 rounded-full ml-4">
                                        <i class="fas fa-building"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-primary">جامعة الإمام محمد</h4>
                                        <p class="text-gray-600 text-sm">الشراكة في البحوث الإسلامية</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Professional Organizations -->
                <div class="mb-16">
                    <h2 class="text-3xl font-bold text-primary text-center mb-12">الشراكات المهنية</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                            <div class="bg-primary text-white p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <i class="fas fa-handshake text-2xl"></i>
                            </div>
                            <h4 class="font-bold text-primary mb-2">الهيئة السعودية للمحاسبين</h4>
                            <p class="text-gray-600 text-sm">اعتماد برامج المحاسبة</p>
                        </div>

                        <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                            <div class="bg-golden text-primary p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <i class="fas fa-brain text-2xl"></i>
                            </div>
                            <h4 class="font-bold text-primary mb-2">الجمعية الأمريكية لعلم النفس</h4>
                            <p class="text-gray-600 text-sm">شراكة في برامج علم النفس</p>
                        </div>

                        <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                            <div class="bg-primary text-white p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <i class="fas fa-chart-line text-2xl"></i>
                            </div>
                            <h4 class="font-bold text-primary mb-2">معهد إدارة المشاريع</h4>
                            <p class="text-gray-600 text-sm">اعتماد PMP</p>
                        </div>

                        <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                            <div class="bg-golden text-primary p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <i class="fas fa-users text-2xl"></i>
                            </div>
                            <h4 class="font-bold text-primary mb-2">الجمعية الدولية للموارد البشرية</h4>
                            <p class="text-gray-600 text-sm">شهادات HRCI</p>
                        </div>
                    </div>
                </div>

                <!-- Recognition Section -->
                <div class="bg-primary text-white rounded-lg p-8 text-center">
                    <h3 class="text-3xl font-bold mb-4">اعتراف دولي بالتميز</h3>
                    <p class="text-lg mb-6">شهاداتنا معترف بها في أكثر من 50 دولة حول العالم</p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <div class="text-4xl font-bold text-golden mb-2">50+</div>
                            <p>دولة معترفة</p>
                        </div>
                        <div>
                            <div class="text-4xl font-bold text-golden mb-2">15</div>
                            <p>اعتماد دولي</p>
                        </div>
                        <div>
                            <div class="text-4xl font-bold text-golden mb-2">25</div>
                            <p>شراكة استراتيجية</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function loadMagazinePage() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4">
                <div class="text-center mb-12">
                    <h1 class="text-4xl font-bold text-primary mb-4">مجلة الأكاديمية</h1>
                    <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        مجلة علمية محكمة تنشر أحدث البحوث والدراسات في مجالات التنمية البشرية والتطوير المعرفي
                    </p>
                </div>

                <!-- Latest Issue -->
                <div class="mb-16">
                    <h2 class="text-3xl font-bold text-primary text-center mb-12">العدد الأحدث</h2>
                    <div class="bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg p-8">
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <div class="bg-golden text-primary p-3 rounded-lg inline-block mb-4">
                                    <span class="font-bold">العدد 45 - ديسمبر 2024</span>
                                </div>
                                <h3 class="text-3xl font-bold mb-4">التعليم الرقمي: الواقع والمستقبل</h3>
                                <p class="text-lg mb-6 leading-relaxed">
                                    يستكشف هذا العدد تحديات وفرص التعليم الرقمي في العصر الحديث، ويقدم رؤى متقدمة 
                                    لتطوير استراتيجيات التعلم الإلكتروني الفعال.
                                </p>
                                <div class="flex space-x-4 space-x-reverse">
                                    <button class="bg-golden text-primary px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                                        <i class="fas fa-download ml-2"></i>
                                        تحميل العدد PDF
                                    </button>
                                    <button class="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                        <i class="fas fa-eye ml-2"></i>
                                        تصفح العدد
                                    </button>
                                </div>
                            </div>
                            <div class="text-center">
                                <div class="bg-white p-6 rounded-lg shadow-lg inline-block">
                                    <div class="bg-gray-200 w-48 h-64 rounded-lg flex items-center justify-center">
                                        <div class="text-center text-gray-600">
                                            <i class="fas fa-book text-6xl mb-4"></i>
                                            <p class="text-lg font-semibold">غلاف المجلة</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Research Articles -->
                <div class="mb-16">
                    <h2 class="text-3xl font-bold text-primary text-center mb-12">المقالات البحثية</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div class="bg-primary text-white p-6">
                                <h3 class="text-xl font-bold mb-2">أثر التكنولوجيا على التعلم</h3>
                                <p class="text-gray-200 text-sm">د. أحمد محمد السالم</p>
                            </div>
                            <div class="p-6">
                                <p class="text-gray-600 mb-4">دراسة تحليلية لتأثير التقنيات الحديثة على فعالية العملية التعليمية...</p>
                                <div class="flex justify-between items-center">
                                    <span class="text-sm text-gray-500">15 صفحة</span>
                                    <button class="text-primary hover:text-blue-800 font-semibold">قراءة المزيد</button>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div class="bg-golden text-primary p-6">
                                <h3 class="text-xl font-bold mb-2">استراتيجيات التنمية البشرية</h3>
                                <p class="text-primary opacity-90 text-sm">د. فاطمة عبدالله النجار</p>
                            </div>
                            <div class="p-6">
                                <p class="text-gray-600 mb-4">نظرة معاصرة على أساليب تطوير المهارات البشرية في بيئة العمل...</p>
                                <div class="flex justify-between items-center">
                                    <span class="text-sm text-gray-500">22 صفحة</span>
                                    <button class="text-primary hover:text-blue-800 font-semibold">قراءة المزيد</button>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div class="bg-primary text-white p-6">
                                <h3 class="text-xl font-bold mb-2">القيادة في العصر الرقمي</h3>
                                <p class="text-gray-200 text-sm">أ. خالد سعد المطيري</p>
                            </div>
                            <div class="p-6">
                                <p class="text-gray-600 mb-4">تحليل لمتطلبات القيادة الفعالة في ظل التحول الرقمي المعاصر...</p>
                                <div class="flex justify-between items-center">
                                    <span class="text-sm text-gray-500">18 صفحة</span>
                                    <button class="text-primary hover:text-blue-800 font-semibold">قراءة المزيد</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Previous Issues -->
                <div class="mb-16">
                    <h2 class="text-3xl font-bold text-primary text-center mb-12">الأعداد السابقة</h2>
                    <div class="bg-gray-50 rounded-lg p-8">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                                <h4 class="font-bold text-primary mb-2">العدد 44</h4>
                                <p class="text-gray-600 text-sm mb-4">الذكاء الاصطناعي في التعليم</p>
                                <button class="text-primary hover:underline text-sm">تحميل PDF</button>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                                <h4 class="font-bold text-primary mb-2">العدد 43</h4>
                                <p class="text-gray-600 text-sm mb-4">إدارة المعرفة المؤسسية</p>
                                <button class="text-primary hover:underline text-sm">تحميل PDF</button>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                                <h4 class="font-bold text-primary mb-2">العدد 42</h4>
                                <p class="text-gray-600 text-sm mb-4">التطوير المهني المستمر</p>
                                <button class="text-primary hover:underline text-sm">تحميل PDF</button>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                                <h4 class="font-bold text-primary mb-2">العدد 41</h4>
                                <p class="text-gray-600 text-sm mb-4">ريادة الأعمال والابتكار</p>
                                <button class="text-primary hover:underline text-sm">تحميل PDF</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Submission Guidelines -->
                <div class="bg-primary text-white rounded-lg p-8">
                    <h3 class="text-3xl font-bold text-center mb-8">للباحثين والأكاديميين</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 class="text-xl font-bold mb-4">شروط النشر</h4>
                            <ul class="space-y-2">
                                <li>• أصالة البحث وعدم نشره سابقاً</li>
                                <li>• اتباع المنهجية العلمية السليمة</li>
                                <li>• التوثيق الصحيح للمراجع</li>
                                <li>• مراجعة لغوية دقيقة</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-xl font-bold mb-4">عملية التحكيم</h4>
                            <ul class="space-y-2">
                                <li>• مراجعة أولية للمحتوى</li>
                                <li>• تحكيم مزدوج من خبراء</li>
                                <li>• إتاحة فترة للتعديلات</li>
                                <li>• قرار النشر النهائي</li>
                            </ul>
                        </div>
                    </div>
                    <div class="text-center mt-8">
                        <button class="bg-golden text-primary px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                            <i class="fas fa-upload ml-2"></i>
                            إرسال بحث للنشر
                        </button>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function loadNewsPage() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4">
                <div class="text-center mb-12">
                    <h1 class="text-4xl font-bold text-primary mb-4">المدونة والأخبار</h1>
                    <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        آخر الأخبار والمستجدات في عالم التعليم والتطوير البشري من أكاديمية المعرفة الدولية
                    </p>
                </div>

                <!-- Featured News -->
                <div class="mb-16">
                    <div class="bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg p-8 mb-8">
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <span class="bg-golden text-primary px-3 py-1 rounded-full text-sm font-semibold">خبر عاجل</span>
                                <h2 class="text-3xl font-bold mt-4 mb-4">افتتاح مركز جديد للتعليم الإلكتروني</h2>
                                <p class="text-lg mb-6">
                                    تعلن أكاديمية المعرفة الدولية عن افتتاح مركز متطور للتعليم الإلكتروني بأحدث التقنيات 
                                    لخدمة الطلاب في جميع أنحاء العالم.
                                </p>
                                <p class="text-gray-200 mb-4">
                                    <i class="fas fa-calendar ml-2"></i>15 ديسمبر 2024
                                </p>
                                <button class="bg-golden text-primary px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                                    اقرأ المزيد
                                </button>
                            </div>
                            <div class="text-center">
                                <div class="bg-white p-4 rounded-lg shadow-lg">
                                    <div class="bg-gray-200 w-full h-48 rounded-lg flex items-center justify-center">
                                        <i class="fas fa-laptop text-6xl text-gray-500"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Latest News -->
                <div class="mb-16">
                    <h2 class="text-3xl font-bold text-primary text-center mb-12">آخر الأخبار</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div class="bg-gray-200 h-48 flex items-center justify-center">
                                <i class="fas fa-award text-6xl text-gray-500"></i>
                            </div>
                            <div class="p-6">
                                <span class="bg-primary text-white px-2 py-1 rounded text-xs">جوائز</span>
                                <h3 class="text-xl font-bold text-primary mt-3 mb-2">الأكاديمية تحصل على جائزة التميز</h3>
                                <p class="text-gray-600 mb-4">حصلت أكاديمية المعرفة على جائزة التميز في التعليم العالي لعام 2024...</p>
                                <div class="flex justify-between items-center">
                                    <span class="text-sm text-gray-500">10 ديسمبر 2024</span>
                                    <button class="text-primary hover:underline font-semibold">اقرأ المزيد</button>
                                </div>
                            </div>
                        </article>

                        <article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div class="bg-gray-200 h-48 flex items-center justify-center">
                                <i class="fas fa-users text-6xl text-gray-500"></i>
                            </div>
                            <div class="p-6">
                                <span class="bg-golden text-primary px-2 py-1 rounded text-xs">فعاليات</span>
                                <h3 class="text-xl font-bold text-primary mt-3 mb-2">مؤتمر التعليم الرقمي 2024</h3>
                                <p class="text-gray-600 mb-4">تنظم الأكاديمية مؤتمراً دولياً حول مستقبل التعليم الرقمي والذكاء الاصطناعي...</p>
                                <div class="flex justify-between items-center">
                                    <span class="text-sm text-gray-500">8 ديسمبر 2024</span>
                                    <button class="text-primary hover:underline font-semibold">اقرأ المزيد</button>
                                </div>
                            </div>
                        </article>

                        <article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div class="bg-gray-200 h-48 flex items-center justify-center">
                                <i class="fas fa-graduation-cap text-6xl text-gray-500"></i>
                            </div>
                            <div class="p-6">
                                <span class="bg-green-500 text-white px-2 py-1 rounded text-xs">برامج جديدة</span>
                                <h3 class="text-xl font-bold text-primary mt-3 mb-2">إطلاق برنامج ماجستير الذكاء الاصطناعي</h3>
                                <p class="text-gray-600 mb-4">برنامج متطور يركز على تطبيقات الذكاء الاصطناعي في مختلف المجالات...</p>
                                <div class="flex justify-between items-center">
                                    <span class="text-sm text-gray-500">5 ديسمبر 2024</span>
                                    <button class="text-primary hover:underline font-semibold">اقرأ المزيد</button>
                                </div>
                            </div>
                        </article>

                        <article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div class="bg-gray-200 h-48 flex items-center justify-center">
                                <i class="fas fa-handshake text-6xl text-gray-500"></i>
                            </div>
                            <div class="p-6">
                                <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs">شراكات</span>
                                <h3 class="text-xl font-bold text-primary mt-3 mb-2">شراكة جديدة مع جامعة ستانفورد</h3>
                                <p class="text-gray-600 mb-4">توقيع اتفاقية تعاون أكاديمي مع جامعة ستانفورد لتبادل الخبرات والبحوث...</p>
                                <div class="flex justify-between items-center">
                                    <span class="text-sm text-gray-500">2 ديسمبر 2024</span>
                                    <button class="text-primary hover:underline font-semibold">اقرأ المزيد</button>
                                </div>
                            </div>
                        </article>

                        <article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div class="bg-gray-200 h-48 flex items-center justify-center">
                                <i class="fas fa-rocket text-6xl text-gray-500"></i>
                            </div>
                            <div class="p-6">
                                <span class="bg-purple-500 text-white px-2 py-1 rounded text-xs">ابتكار</span>
                                <h3 class="text-xl font-bold text-primary mt-3 mb-2">منصة تعليمية ذكية جديدة</h3>
                                <p class="text-gray-600 mb-4">إطلاق منصة تعليمية مدعومة بالذكاء الاصطناعي لتحسين تجربة التعلم...</p>
                                <div class="flex justify-between items-center">
                                    <span class="text-sm text-gray-500">28 نوفمبر 2024</span>
                                    <button class="text-primary hover:underline font-semibold">اقرأ المزيد</button>
                                </div>
                            </div>
                        </article>

                        <article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div class="bg-gray-200 h-48 flex items-center justify-center">
                                <i class="fas fa-trophy text-6xl text-gray-500"></i>
                            </div>
                            <div class="p-6">
                                <span class="bg-red-500 text-white px-2 py-1 rounded text-xs">إنجازات</span>
                                <h3 class="text-xl font-bold text-primary mt-3 mb-2">طلابنا يحققون المركز الأول</h3>
                                <p class="text-gray-600 mb-4">فريق من طلاب الأكاديمية يحقق المركز الأول في مسابقة الابتكار العربية...</p>
                                <div class="flex justify-between items-center">
                                    <span class="text-sm text-gray-500">25 نوفمبر 2024</span>
                                    <button class="text-primary hover:underline font-semibold">اقرأ المزيد</button>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

                <!-- Blog Categories -->
                <div class="mb-16">
                    <h2 class="text-3xl font-bold text-primary text-center mb-12">تصفح حسب الفئة</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="bg-primary text-white p-6 rounded-lg text-center hover:bg-blue-800 transition-colors cursor-pointer">
                            <i class="fas fa-book text-3xl mb-3"></i>
                            <h4 class="font-bold">التعليم والتطوير</h4>
                            <p class="text-sm mt-2 opacity-90">45 مقال</p>
                        </div>
                        <div class="bg-golden text-primary p-6 rounded-lg text-center hover:bg-yellow-500 transition-colors cursor-pointer">
                            <i class="fas fa-users text-3xl mb-3"></i>
                            <h4 class="font-bold">التنمية البشرية</h4>
                            <p class="text-sm mt-2 opacity-90">32 مقال</p>
                        </div>
                        <div class="bg-green-500 text-white p-6 rounded-lg text-center hover:bg-green-600 transition-colors cursor-pointer">
                            <i class="fas fa-lightbulb text-3xl mb-3"></i>
                            <h4 class="font-bold">الابتكار والإبداع</h4>
                            <p class="text-sm mt-2 opacity-90">28 مقال</p>
                        </div>
                        <div class="bg-purple-500 text-white p-6 rounded-lg text-center hover:bg-purple-600 transition-colors cursor-pointer">
                            <i class="fas fa-chart-line text-3xl mb-3"></i>
                            <h4 class="font-bold">ريادة الأعمال</h4>
                            <p class="text-sm mt-2 opacity-90">21 مقال</p>
                        </div>
                    </div>
                </div>

                <!-- Newsletter Subscription -->
                <div class="bg-gray-50 rounded-lg p-8 text-center">
                    <h3 class="text-3xl font-bold text-primary mb-4">اشترك في النشرة الإخبارية</h3>
                    <p class="text-lg text-gray-600 mb-8">احصل على آخر الأخبار والمقالات التعليمية مباشرة في بريدك الإلكتروني</p>
                    <div class="max-w-md mx-auto">
                        <div class="flex">
                            <input type="email" placeholder="بريدك الإلكتروني" class="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                            <button class="bg-primary text-white px-6 py-3 rounded-l-lg hover:bg-blue-800 transition-colors">
                                اشتراك
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function loadFAQPage() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4">
                <!-- Page Header -->
                <div class="text-center mb-12">
                    <h1 class="text-4xl font-bold text-primary mb-4">الأسئلة الشائعة</h1>
                    <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        إجابات على أكثر الأسئلة تكراراً حول أكاديمية المعرفة الدولية وبرامجها التعليمية
                    </p>
                </div>

                <!-- FAQ Categories -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    <!-- General Questions -->
                    <div class="bg-gray-50 rounded-lg p-8">
                        <h2 class="text-2xl font-bold text-primary mb-6">أسئلة عامة</h2>
                        
                        <div class="space-y-4">
                            <div class="faq-item">
                                <button class="faq-question w-full text-right p-4 bg-white rounded-lg border-r-4 border-primary hover:shadow-md transition-all" onclick="toggleFAQ(this)">
                                    <div class="flex justify-between items-center">
                                        <span class="font-semibold">ما هي أكاديمية المعرفة الدولية؟</span>
                                        <i class="fas fa-plus text-primary transition-transform"></i>
                                    </div>
                                </button>
                                <div class="faq-answer hidden p-4 bg-white rounded-lg mt-2 border-r-4 border-golden">
                                    <p class="text-gray-700">
                                        أكاديمية المعرفة الدولية للتنمية البشرية والتطوير المعرفي هي مؤسسة تعليمية رائدة تقدم برامج تعليمية متميزة في 21 تخصصاً مختلفاً، تهدف إلى إعداد كوادر مؤهلة قادرة على المساهمة في التنمية المستدامة.
                                    </p>
                                </div>
                            </div>

                            <div class="faq-item">
                                <button class="faq-question w-full text-right p-4 bg-white rounded-lg border-r-4 border-primary hover:shadow-md transition-all" onclick="toggleFAQ(this)">
                                    <div class="flex justify-between items-center">
                                        <span class="font-semibold">هل الأكاديمية معتمدة رسمياً؟</span>
                                        <i class="fas fa-plus text-primary transition-transform"></i>
                                    </div>
                                </button>
                                <div class="faq-answer hidden p-4 bg-white rounded-lg mt-2 border-r-4 border-golden">
                                    <p class="text-gray-700">
                                        نعم، الأكاديمية معتمدة من وزارة التعليم ولها شراكات مع جامعات دولية مرموقة. جميع شهاداتنا معترف بها محلياً ودولياً.
                                    </p>
                                </div>
                            </div>

                            <div class="faq-item">
                                <button class="faq-question w-full text-right p-4 bg-white rounded-lg border-r-4 border-primary hover:shadow-md transition-all" onclick="toggleFAQ(this)">
                                    <div class="flex justify-between items-center">
                                        <span class="font-semibold">ما هي لغة التدريس؟</span>
                                        <i class="fas fa-plus text-primary transition-transform"></i>
                                    </div>
                                </button>
                                <div class="faq-answer hidden p-4 bg-white rounded-lg mt-2 border-r-4 border-golden">
                                    <p class="text-gray-700">
                                        التدريس يتم باللغة العربية بشكل أساسي، مع إتاحة بعض البرامج باللغة الإنجليزية حسب طبيعة التخصص ومتطلبات السوق.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Admission Questions -->
                    <div class="bg-gray-50 rounded-lg p-8">
                        <h2 class="text-2xl font-bold text-primary mb-6">القبول والتسجيل</h2>
                        
                        <div class="space-y-4">
                            <div class="faq-item">
                                <button class="faq-question w-full text-right p-4 bg-white rounded-lg border-r-4 border-primary hover:shadow-md transition-all" onclick="toggleFAQ(this)">
                                    <div class="flex justify-between items-center">
                                        <span class="font-semibold">ما هي شروط القبول؟</span>
                                        <i class="fas fa-plus text-primary transition-transform"></i>
                                    </div>
                                </button>
                                <div class="faq-answer hidden p-4 bg-white rounded-lg mt-2 border-r-4 border-golden">
                                    <p class="text-gray-700">
                                        للماجستير: درجة البكالوريوس بتقدير جيد كحد أدنى، شهادة لغة إنجليزية، خبرة عملية (حسب التخصص). للدكتوراه: درجة الماجستير بتقدير جيد جداً، مقترح بحثي، خبرة عملية لا تقل عن 3 سنوات.
                                    </p>
                                </div>
                            </div>

                            <div class="faq-item">
                                <button class="faq-question w-full text-right p-4 bg-white rounded-lg border-r-4 border-primary hover:shadow-md transition-all" onclick="toggleFAQ(this)">
                                    <div class="flex justify-between items-center">
                                        <span class="font-semibold">متى تبدأ فترات التسجيل؟</span>
                                        <i class="fas fa-plus text-primary transition-transform"></i>
                                    </div>
                                </button>
                                <div class="faq-answer hidden p-4 bg-white rounded-lg mt-2 border-r-4 border-golden">
                                    <p class="text-gray-700">
                                        التسجيل مفتوح على مدار السنة للدبلومات والدورات. بينما للماجستير والدكتوراه، هناك فصلين دراسيين: سبتمبر وفبراير من كل عام.
                                    </p>
                                </div>
                            </div>

                            <div class="faq-item">
                                <button class="faq-question w-full text-right p-4 bg-white rounded-lg border-r-4 border-primary hover:shadow-md transition-all" onclick="toggleFAQ(this)">
                                    <div class="flex justify-between items-center">
                                        <span class="font-semibold">هل يمكن التسجيل من خارج السعودية؟</span>
                                        <i class="fas fa-plus text-primary transition-transform"></i>
                                    </div>
                                </button>
                                <div class="faq-answer hidden p-4 bg-white rounded-lg mt-2 border-r-4 border-golden">
                                    <p class="text-gray-700">
                                        نعم، نرحب بالطلاب من جميع أنحاء العالم. لدينا برامج تعليم إلكتروني متطورة تتيح الدراسة من أي مكان.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Academic Questions -->
                    <div class="bg-gray-50 rounded-lg p-8">
                        <h2 class="text-2xl font-bold text-primary mb-6">الأسئلة الأكاديمية</h2>
                        
                        <div class="space-y-4">
                            <div class="faq-item">
                                <button class="faq-question w-full text-right p-4 bg-white rounded-lg border-r-4 border-primary hover:shadow-md transition-all" onclick="toggleFAQ(this)">
                                    <div class="flex justify-between items-center">
                                        <span class="font-semibold">ما هي مدة الدراسة؟</span>
                                        <i class="fas fa-plus text-primary transition-transform"></i>
                                    </div>
                                </button>
                                <div class="faq-answer hidden p-4 bg-white rounded-lg mt-2 border-r-4 border-golden">
                                    <p class="text-gray-700">
                                        الماجستير: سنتان (4 فصول دراسية). الدكتوراه: 3-4 سنوات. الدبلومات: 4-6 أشهر. الدورات التدريبية: من أسبوعين إلى 3 أشهر.
                                    </p>
                                </div>
                            </div>

                            <div class="faq-item">
                                <button class="faq-question w-full text-right p-4 bg-white rounded-lg border-r-4 border-primary hover:shadow-md transition-all" onclick="toggleFAQ(this)">
                                    <div class="flex justify-between items-center">
                                        <span class="font-semibold">هل التعليم حضوري أم إلكتروني؟</span>
                                        <i class="fas fa-plus text-primary transition-transform"></i>
                                    </div>
                                </button>
                                <div class="faq-answer hidden p-4 bg-white rounded-lg mt-2 border-r-4 border-golden">
                                    <p class="text-gray-700">
                                        نوفر نظام تعليم مختلط يجمع بين التعليم الحضوري والإلكتروني، مما يتيح مرونة أكبر للطلاب العاملين والمقيمين خارج المملكة.
                                    </p>
                                </div>
                            </div>

                            <div class="faq-item">
                                <button class="faq-question w-full text-right p-4 bg-white rounded-lg border-r-4 border-primary hover:shadow-md transition-all" onclick="toggleFAQ(this)">
                                    <div class="flex justify-between items-center">
                                        <span class="font-semibold">هل توجد منح دراسية؟</span>
                                        <i class="fas fa-plus text-primary transition-transform"></i>
                                    </div>
                                </button>
                                <div class="faq-answer hidden p-4 bg-white rounded-lg mt-2 border-r-4 border-golden">
                                    <p class="text-gray-700">
                                        نعم، نقدم منح جزئية للطلاب المتفوقين وخصومات للخريجين المتميزين. كما تتوفر تسهيلات دفع مرنة.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Additional FAQ Section -->
                <div class="bg-gray-50 rounded-lg p-8">
                    <h2 class="text-3xl font-bold text-primary text-center mb-8">أسئلة إضافية</h2>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-4">
                            <div class="faq-item">
                                <button class="faq-question w-full text-right p-4 bg-white rounded-lg border-r-4 border-primary hover:shadow-md transition-all" onclick="toggleFAQ(this)">
                                    <div class="flex justify-between items-center">
                                        <span class="font-semibold">كيف يمكنني التحقق من صحة الشهادة؟</span>
                                        <i class="fas fa-plus text-primary transition-transform"></i>
                                    </div>
                                </button>
                                <div class="faq-answer hidden p-4 bg-white rounded-lg mt-2 border-r-4 border-golden">
                                    <p class="text-gray-700">
                                        يمكنك التحقق من صحة الشهادة من خلال صفحة "التحقق من الشهادات" على موقعنا الإلكتروني باستخدام رقم التحقق المكتوب على الشهادة.
                                    </p>
                                </div>
                            </div>

                            <div class="faq-item">
                                <button class="faq-question w-full text-right p-4 bg-white rounded-lg border-r-4 border-primary hover:shadow-md transition-all" onclick="toggleFAQ(this)">
                                    <div class="flex justify-between items-center">
                                        <span class="font-semibold">هل يمكن تحويل من تخصص لآخر؟</span>
                                        <i class="fas fa-plus text-primary transition-transform"></i>
                                    </div>
                                </button>
                                <div class="faq-answer hidden p-4 bg-white rounded-lg mt-2 border-r-4 border-golden">
                                    <p class="text-gray-700">
                                        نعم، يمكن التحويل خلال الفصل الأول شريطة توفر مقاعد واستيفاء شروط التخصص الجديد والحصول على موافقة إدارية.
                                    </p>
                                </div>
                            </div>

                            <div class="faq-item">
                                <button class="faq-question w-full text-right p-4 bg-white rounded-lg border-r-4 border-primary hover:shadow-md transition-all" onclick="toggleFAQ(this)">
                                    <div class="flex justify-between items-center">
                                        <span class="font-semibold">ما هي طرق الدفع المتاحة؟</span>
                                        <i class="fas fa-plus text-primary transition-transform"></i>
                                    </div>
                                </button>
                                <div class="faq-answer hidden p-4 bg-white rounded-lg mt-2 border-r-4 border-golden">
                                    <p class="text-gray-700">
                                        نقبل الدفع بالتحويل البنكي، البطاقات الائتمانية، وخدمات الدفع الإلكتروني. كما نوفر إمكانية التقسيط على دفعات شهرية.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="space-y-4">
                            <div class="faq-item">
                                <button class="faq-question w-full text-right p-4 bg-white rounded-lg border-r-4 border-primary hover:shadow-md transition-all" onclick="toggleFAQ(this)">
                                    <div class="flex justify-between items-center">
                                        <span class="font-semibold">هل توجد مكتبة إلكترونية؟</span>
                                        <i class="fas fa-plus text-primary transition-transform"></i>
                                    </div>
                                </button>
                                <div class="faq-answer hidden p-4 bg-white rounded-lg mt-2 border-r-4 border-golden">
                                    <p class="text-gray-700">
                                        نعم، لدينا مكتبة إلكترونية شاملة تحتوي على آلاف المراجع والكتب والأبحاث العلمية المتاحة للطلاب على مدار الساعة.
                                    </p>
                                </div>
                            </div>

                            <div class="faq-item">
                                <button class="faq-question w-full text-right p-4 bg-white rounded-lg border-r-4 border-primary hover:shadow-md transition-all" onclick="toggleFAQ(this)">
                                    <div class="flex justify-between items-center">
                                        <span class="font-semibold">كيف يمكنني التواصل مع المرشد الأكاديمي؟</span>
                                        <i class="fas fa-plus text-primary transition-transform"></i>
                                    </div>
                                </button>
                                <div class="faq-answer hidden p-4 bg-white rounded-lg mt-2 border-r-4 border-golden">
                                    <p class="text-gray-700">
                                        يتم تعيين مرشد أكاديمي لكل طالب، ويمكن التواصل معه عبر المنصة الإلكترونية، البريد الإلكتروني، أو خلال الساعات المكتبية المحددة.
                                    </p>
                                </div>
                            </div>

                            <div class="faq-item">
                                <button class="faq-question w-full text-right p-4 bg-white rounded-lg border-r-4 border-primary hover:shadow-md transition-all" onclick="toggleFAQ(this)">
                                    <div class="flex justify-between items-center">
                                        <span class="font-semibold">هل يمكن الحصول على شهادة خبرة؟</span>
                                        <i class="fas fa-plus text-primary transition-transform"></i>
                                    </div>
                                </button>
                                <div class="faq-answer hidden p-4 bg-white rounded-lg mt-2 border-r-4 border-golden">
                                    <p class="text-gray-700">
                                        نعم، نصدر شهادات خبرة للطلاب المتدربين والمشاركين في البرامج التطبيقية، بالإضافة إلى خطابات توصية من أعضاء هيئة التدريس.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact Section -->
                <div class="mt-16 text-center">
                    <div class="bg-primary text-white rounded-lg p-8">
                        <h3 class="text-2xl font-bold mb-4">لم تجد إجابة لسؤالك؟</h3>
                        <p class="text-lg mb-6">تواصل معنا وسنكون سعداء لمساعدتك</p>
                        <div class="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 md:space-x-reverse">
                            <button onclick="showPage('contact')" class="bg-golden text-primary px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                                <i class="fas fa-envelope ml-2"></i>
                                أرسل استفسارك
                            </button>
                            <a href="tel:+966112345678" class="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                <i class="fas fa-phone ml-2"></i>
                                اتصل بنا الآن
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <script>
            function toggleFAQ(button) {
                const faqItem = button.parentElement;
                const answer = faqItem.querySelector('.faq-answer');
                const icon = button.querySelector('i');
                
                // Close all other FAQ items
                document.querySelectorAll('.faq-item').forEach(item => {
                    if (item !== faqItem) {
                        const otherAnswer = item.querySelector('.faq-answer');
                        const otherIcon = item.querySelector('.faq-question i');
                        otherAnswer.classList.add('hidden');
                        otherIcon.classList.remove('fa-minus', 'rotate-180');
                        otherIcon.classList.add('fa-plus');
                    }
                });
                
                // Toggle current FAQ item
                if (answer.classList.contains('hidden')) {
                    answer.classList.remove('hidden');
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus', 'rotate-180');
                } else {
                    answer.classList.add('hidden');
                    icon.classList.remove('fa-minus', 'rotate-180');
                    icon.classList.add('fa-plus');
                }
            }
        </script>
    `;
}

function loadContactPage() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4">
                <!-- Page Header -->
                <div class="text-center mb-12">
                    <h1 class="text-4xl font-bold text-primary mb-4">تواصل معنا</h1>
                    <div class="w-24 h-1 bg-golden mx-auto mb-6"></div>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        نحن هنا لمساعدتك. تواصل معنا عبر أي من الطرق التالية وسنعود إليك في أقرب وقت ممكن
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <!-- Contact Form -->
                    <div class="bg-white rounded-lg shadow-lg p-8">
                        <h2 class="text-2xl font-bold text-primary mb-6">أرسل لنا رسالة</h2>
                        
                        <form id="contactForm" class="space-y-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">الاسم الأول</label>
                                    <input type="text" id="firstName" required
                                           class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                           placeholder="الاسم الأول">
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">الاسم الأخير</label>
                                    <input type="text" id="lastName" required
                                           class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                           placeholder="الاسم الأخير">
                                </div>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
                                <input type="email" id="email" required
                                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                       placeholder="example@email.com">
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف</label>
                                <input type="tel" id="phone" required
                                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                       placeholder="+966 50 123 4567">
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">موضوع الرسالة</label>
                                <select id="subject" required
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                                    <option value="">اختر الموضوع</option>
                                    <option value="admission">استفسار عن القبول والتسجيل</option>
                                    <option value="programs">استفسار عن البرامج التعليمية</option>
                                    <option value="verification">التحقق من الشهادات</option>
                                    <option value="technical">مشكلة تقنية</option>
                                    <option value="general">استفسار عام</option>
                                    <option value="complaint">شكوى</option>
                                    <option value="suggestion">اقتراح</option>
                                </select>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">الرسالة</label>
                                <textarea id="message" required rows="5"
                                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                                          placeholder="اكتب رسالتك هنا..."></textarea>
                            </div>
                            
                            <div class="flex items-start space-x-3 space-x-reverse">
                                <input type="checkbox" id="privacy" required
                                       class="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded">
                                <label for="privacy" class="text-sm text-gray-600">
                                    أوافق على 
                                    <a href="#" class="text-primary hover:underline">سياسة الخصوصية</a>
                                    و
                                    <a href="#" class="text-primary hover:underline">شروط الاستخدام</a>
                                </label>
                            </div>
                            
                            <button type="submit" class="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                                <i class="fas fa-paper-plane ml-2"></i>
                                إرسال الرسالة
                            </button>
                        </form>
                    </div>

                    <!-- Contact Information -->
                    <div class="space-y-8">
                        <!-- Main Contact Info -->
                        <div class="bg-primary text-white rounded-lg p-8">
                            <h3 class="text-2xl font-bold mb-6">معلومات التواصل</h3>
                            
                            <div class="space-y-6">
                                <div class="flex items-start space-x-4 space-x-reverse">
                                    <div class="bg-golden text-primary p-3 rounded-full">
                                        <i class="fas fa-map-marker-alt text-lg"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold mb-2">العنوان</h4>
                                        <p class="text-gray-100">
                                            شارع الملك فهد، حي الصحافة<br>
                                            صندوق بريد 12345<br>
                                            الرياض 11564، المملكة العربية السعودية
                                        </p>
                                    </div>
                                </div>

                                <div class="flex items-start space-x-4 space-x-reverse">
                                    <div class="bg-golden text-primary p-3 rounded-full">
                                        <i class="fas fa-phone text-lg"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold mb-2">أرقام الهاتف</h4>
                                        <p class="text-gray-100">
                                            هاتف رئيسي: +966 11 234 5678<br>
                                            فاكس: +966 11 234 5679<br>
                                            خط طوارئ: +966 50 123 4567
                                        </p>
                                    </div>
                                </div>

                                <div class="flex items-start space-x-4 space-x-reverse">
                                    <div class="bg-golden text-primary p-3 rounded-full">
                                        <i class="fas fa-envelope text-lg"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold mb-2">البريد الإلكتروني</h4>
                                        <p class="text-gray-100">
                                            عام: info@knowledge-academy.edu<br>
                                            القبول: admission@knowledge-academy.edu<br>
                                            الدعم: support@knowledge-academy.edu
                                        </p>
                                    </div>
                                </div>

                                <div class="flex items-start space-x-4 space-x-reverse">
                                    <div class="bg-golden text-primary p-3 rounded-full">
                                        <i class="fas fa-clock text-lg"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold mb-2">أوقات العمل</h4>
                                        <p class="text-gray-100">
                                            الأحد - الخميس: 8:00 - 17:00<br>
                                            الجمعة: 8:00 - 12:00<br>
                                            السبت: مغلق
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Social Media -->
                        <div class="bg-golden text-primary rounded-lg p-8">
                            <h3 class="text-2xl font-bold mb-6">تابعنا على</h3>
                            
                            <div class="grid grid-cols-2 gap-4">
                                <a href="#" class="flex items-center space-x-3 space-x-reverse bg-white p-4 rounded-lg hover:shadow-lg transition-shadow">
                                    <i class="fab fa-facebook text-blue-600 text-2xl"></i>
                                    <span class="font-semibold">Facebook</span>
                                </a>
                                
                                <a href="#" class="flex items-center space-x-3 space-x-reverse bg-white p-4 rounded-lg hover:shadow-lg transition-shadow">
                                    <i class="fab fa-twitter text-blue-400 text-2xl"></i>
                                    <span class="font-semibold">Twitter</span>
                                </a>
                                
                                <a href="#" class="flex items-center space-x-3 space-x-reverse bg-white p-4 rounded-lg hover:shadow-lg transition-shadow">
                                    <i class="fab fa-linkedin text-blue-700 text-2xl"></i>
                                    <span class="font-semibold">LinkedIn</span>
                                </a>
                                
                                <a href="#" class="flex items-center space-x-3 space-x-reverse bg-white p-4 rounded-lg hover:shadow-lg transition-shadow">
                                    <i class="fab fa-youtube text-red-600 text-2xl"></i>
                                    <span class="font-semibold">YouTube</span>
                                </a>
                                
                                <a href="#" class="flex items-center space-x-3 space-x-reverse bg-white p-4 rounded-lg hover:shadow-lg transition-shadow">
                                    <i class="fab fa-instagram text-pink-600 text-2xl"></i>
                                    <span class="font-semibold">Instagram</span>
                                </a>
                                
                                <a href="#" class="flex items-center space-x-3 space-x-reverse bg-white p-4 rounded-lg hover:shadow-lg transition-shadow">
                                    <i class="fab fa-whatsapp text-green-600 text-2xl"></i>
                                    <span class="font-semibold">WhatsApp</span>
                                </a>
                            </div>
                        </div>

                        <!-- Quick Actions -->
                        <div class="bg-gray-50 rounded-lg p-8">
                            <h3 class="text-2xl font-bold text-primary mb-6">روابط سريعة</h3>
                            
                            <div class="space-y-3">
                                <button onclick="showPage('admission')" class="w-full text-right p-3 bg-white rounded-lg hover:shadow-md transition-shadow border-r-4 border-primary">
                                    <i class="fas fa-file-alt text-primary ml-3"></i>
                                    <span class="font-semibold">تقديم طلب التحاق</span>
                                </button>
                                
                                <button onclick="showPage('verification')" class="w-full text-right p-3 bg-white rounded-lg hover:shadow-md transition-shadow border-r-4 border-golden">
                                    <i class="fas fa-certificate text-golden ml-3"></i>
                                    <span class="font-semibold">التحقق من الشهادات</span>
                                </button>
                                
                                <button onclick="showPage('programs')" class="w-full text-right p-3 bg-white rounded-lg hover:shadow-md transition-shadow border-r-4 border-primary">
                                    <i class="fas fa-graduation-cap text-primary ml-3"></i>
                                    <span class="font-semibold">تصفح البرامج التعليمية</span>
                                </button>
                                
                                <button onclick="showPage('faq')" class="w-full text-right p-3 bg-white rounded-lg hover:shadow-md transition-shadow border-r-4 border-golden">
                                    <i class="fas fa-question-circle text-golden ml-3"></i>
                                    <span class="font-semibold">الأسئلة الشائعة</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Map Section -->
                <div class="mt-16">
                    <h3 class="text-3xl font-bold text-primary text-center mb-8">موقعنا على الخريطة</h3>
                    <div class="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                        <div class="text-center">
                            <i class="fas fa-map text-6xl text-gray-400 mb-4"></i>
                            <p class="text-gray-600 text-lg">خريطة تفاعلية</p>
                            <p class="text-gray-500">شارع الملك فهد، حي الصحافة، الرياض</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <script>
            document.getElementById('contactForm').addEventListener('submit', function(e) {
                e.preventDefault();
                handleContactForm();
            });
            
            function handleContactForm() {
                const formData = {
                    firstName: document.getElementById('firstName').value,
                    lastName: document.getElementById('lastName').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value,
                    subject: document.getElementById('subject').value,
                    message: document.getElementById('message').value
                };
                
                // Validate form
                const errors = validateForm(formData);
                if (errors.length > 0) {
                    showNotification(errors[0], 'error');
                    return;
                }
                
                // Show loading state
                const submitBtn = document.querySelector('#contactForm button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin ml-2"></i>جاري الإرسال...';
                submitBtn.disabled = true;
                
                // Simulate form submission
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    
                    // Reset form
                    document.getElementById('contactForm').reset();
                    
                    // Show success message
                    showNotification('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.', 'success');
                }, 2000);
            }
        </script>
    `;
}