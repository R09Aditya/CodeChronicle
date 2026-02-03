const db = {
    events: [
        { id: 1, year: 1804, title: "Jacquard Loom", category: "tool", desc: "Joseph Marie Jacquard invents a loom controlled by punched cards, an early ancestor of programmable machines.", detail: "Its punch cards inspired later data storage ideas and influenced early computing pioneers.", importance: "major" },
        { id: 2, year: 1843, title: "The First Algorithm", category: "person", desc: "Ada Lovelace writes the first algorithm intended for Charles Babbage's Analytical Engine.", detail: "Her notes also imagined machines creating art and music, expanding the idea of computation.", importance: "major" },
        { id: 3, year: 1936, title: "Turing Machine", category: "concept", desc: "Alan Turing defines the theoretical limit of computation.", detail: "The model became a foundation for computer science, separating the computable from the impossible.", importance: "major" },
        { id: 4, year: 1945, title: "ENIAC", category: "tool", desc: "First electronic general-purpose computer. It was Turing-complete and digital.", detail: "ENIAC proved electronic speedups were possible and ushered in the era of large-scale computing hardware.", importance: "major" },
        { id: 5, year: 1947, title: "The Transistor", category: "tool", desc: "Bell Labs invents the transistor, replacing vacuum tubes and shrinking computers.", detail: "Smaller, cooler components made reliable machines and later consumer electronics feasible.", importance: "major" },
        { id: 6, year: 1949, title: "Assembly Language", category: "language", desc: "Low-level symbolic code makes programming slightly easier than binary.", detail: "Mnemonics and labels let humans manage complex machine instructions at scale.", importance: "normal" },
        { id: 7, year: 1952, title: "The Linker", category: "tool", desc: "Grace Hopper develops the first linker/compiler (A-0 System).", detail: "Reusable routines and automated linking opened the door to higher-level programming.", importance: "major" },
        { id: 8, year: 1957, title: "Fortran", category: "language", desc: "Formula Translation. The first widely used high-level programming language.", detail: "It made scientific computing practical and proved high-level code could be efficient.", importance: "major" },
        { id: 9, year: 1958, title: "LISP", category: "language", desc: "John McCarthy invents LISP for AI research. Introduced garbage collection.", detail: "Its list processing and functional ideas still influence AI and language design.", importance: "major" },
        { id: 10, year: 1959, title: "COBOL", category: "language", desc: "Common Business Oriented Language. Designed for business use.", detail: "Readable syntax helped enterprises adopt software for data processing and reports.", importance: "normal" },
        { id: 11, year: 1965, title: "Moore's Law", category: "concept", desc: "Gordon Moore predicts the doubling of transistors on microchips every two years.", detail: "The prediction became an industry planning target and benchmark for progress.", importance: "major" },
        { id: 12, year: 1969, title: "ARPANET", category: "concept", desc: "The precursor to the Internet, connecting four universities.", detail: "Packet switching showed resilient, decentralized networking at scale.", importance: "major" },
        { id: 13, year: 1970, title: "Unix Epoch", category: "tool", desc: "Unix development begins at Bell Labs. Time starts counting from Jan 1.", detail: "Unix tooling and philosophy went on to shape modern operating systems.", importance: "major" },
        { id: 14, year: 1972, title: "C Language", category: "language", desc: "Dennis Ritchie creates C. It becomes the foundation of modern software.", detail: "Its portability let systems code move across hardware with minimal changes.", importance: "major" },
        { id: 15, year: 1974, title: "SQL", category: "language", desc: "Structured Query Language appears, revolutionizing database management.", detail: "It standardized how humans query and manage relational data.", importance: "major" },
        { id: 16, year: 1976, title: "Apple I", category: "tool", desc: "Steve Wozniak designs the Apple I, kickstarting the personal computer revolution.", detail: "Hobbyist kits turned personal computing into a consumer movement.", importance: "normal" },
        { id: 17, year: 1983, title: "C++", category: "language", desc: "Bjarne Stroustrup adds classes to C.", detail: "Object-oriented features helped manage growing software complexity.", importance: "major" },
        { id: 18, year: 1983, title: "TCP/IP Standard", category: "concept", desc: "ARPANET switches to TCP/IP, birth of the modern Internet.", detail: "A universal protocol stack allowed disparate networks to interconnect.", importance: "major" },
        { id: 19, year: 1985, title: "Windows 1.0", category: "tool", desc: "Microsoft releases its first graphical operating system.", detail: "Graphical interfaces broadened computing beyond command lines.", importance: "normal" },
        { id: 20, year: 1989, title: "World Wide Web", category: "tool", desc: "Tim Berners-Lee proposes the WWW at CERN.", detail: "Hypertext on the Internet opened the door to global information sharing.", importance: "major" },
        { id: 21, year: 1991, title: "Python & Linux", category: "language", desc: "Guido van Rossum releases Python. Linus Torvalds releases Linux kernel.", detail: "Open-source culture accelerated collaboration and rapid iteration.", importance: "major" },
        { id: 22, year: 1995, title: "Java, JS, PHP", category: "language", desc: "Massive year: Java, JavaScript, and PHP are all released.", detail: "The web gained portable apps, interactive pages, and server-side scripting.", importance: "major" },
        { id: 23, year: 1998, title: "Google Search", category: "tool", desc: "Larry Page and Sergey Brin launch Google, indexing the web.", detail: "PageRank improved relevance and reshaped how information is discovered.", importance: "major" },
        { id: 24, year: 2001, title: "Agile Manifesto", category: "concept", desc: "A new philosophy for software development focusing on iteration.", detail: "Teams embraced adaptive planning, collaboration, and continuous feedback.", importance: "normal" },
        { id: 25, year: 2004, title: "Gmail & Ajax", category: "tool", desc: "Google shows the world that web apps can be fast and interactive.", detail: "Rich client interactions made the browser a viable app platform.", importance: "normal" },
        { id: 26, year: 2006, title: "AWS Cloud", category: "concept", desc: "Amazon launches EC2/S3, starting the Cloud Computing era.", detail: "On-demand infrastructure shifted costs from capital to usage-based.", importance: "major" },
        { id: 27, year: 2007, title: "The iPhone", category: "tool", desc: "Mobile computing goes mainstream, changing software interfaces forever.", detail: "Touch-first design and app ecosystems redefined user expectations.", importance: "major" },
        { id: 28, year: 2008, title: "GitHub", category: "tool", desc: "Social coding and knowledge sharing become centralized.", detail: "Pull requests and social workflows made open collaboration mainstream.", importance: "major" },
        { id: 29, year: 2009, title: "Bitcoin", category: "concept", desc: "Satoshi Nakamoto releases the first blockchain implementation.", detail: "It introduced decentralized consensus and digital scarcity.", importance: "major" },
        { id: 30, year: 2009, title: "Go Language", category: "language", desc: "Google releases Go to solve concurrency and scale issues.", detail: "Designed for simplicity and concurrency in large systems.", importance: "normal" },
        { id: 31, year: 2010, title: "Rust", category: "language", desc: "Mozilla introduces Rust for memory safety.", detail: "Borrowing and ownership models target safety without garbage collection.", importance: "normal" },
        { id: 32, year: 2013, title: "Docker", category: "tool", desc: "Containerization standardizes deployment.", detail: "Lightweight containers made environments reproducible across machines.", importance: "major" },
        { id: 33, year: 2014, title: "Swift", category: "language", desc: "Apple releases Swift to replace Objective-C.", detail: "A modern syntax and safety features improved Apple platform development.", importance: "normal" },
        { id: 34, year: 2015, title: "TensorFlow", category: "tool", desc: "Google open-sources TensorFlow, democratizing AI development.", detail: "It standardized model building with dataflow graphs and large-scale training.", importance: "normal" },
        { id: 35, year: 2017, title: "Transformers", category: "concept", desc: "Google introduces the Transformer architecture, paving way for LLMs.", detail: "Attention-based models enabled scaling and major NLP breakthroughs.", importance: "major" },
        { id: 36, year: 2022, title: "ChatGPT", category: "concept", desc: "OpenAI releases ChatGPT. Generative AI becomes mainstream.", detail: "Conversational AI reached mass adoption and changed expectations of software assistants.", importance: "major" },
        { id: 37, year: 2024, title: "AI Agents", category: "tool", desc: "Autonomous coding agents begin handling end-to-end tasks.", detail: "Tool-using systems started automating multi-step workflows.", importance: "major" },
        { id: 38, year: 2025, title: "Quantum API", category: "tool", desc: "First standardized cloud APIs for commercial quantum processors gain traction.", detail: "Early standards aimed to make quantum services interoperable.", importance: "normal" },
        { id: 39, year: 2026, title: "Neural IDEs", category: "concept", desc: "Experimental IDEs allow coding via intent-based neural inputs.", detail: "Research prototypes explore direct intent capture and adaptive tooling.", importance: "major" }
    ],
    coders: [
        { name: "Ada Lovelace", role: "The Prophet", quote: "The engine might compose elaborate and scientific pieces of music.", knownFor: "First Algorithm" },
        { name: "Alan Turing", role: "Father of CS", quote: "We can only see a short distance ahead, but we can see plenty there that needs to be done.", knownFor: "Turing Machine" },
        { name: "Grace Hopper", role: "Queen of Code", quote: "It is easier to ask forgiveness than it is to get permission.", knownFor: "COBOL, Linker" },
        { name: "Dennis Ritchie", role: "Unix Creator", quote: "C is quirky, flawed, and an enormous success.", knownFor: "C, Unix" },
        { name: "Tim Berners-Lee", role: "Web Inventor", quote: "This is for everyone.", knownFor: "WWW, HTTP, HTML" },
        { name: "Margaret Hamilton", role: "Apollo Engineer", quote: "There was no choice but to be pioneers.", knownFor: "Software Engineering" },
        { name: "Ken Thompson", role: "Unix Architect", quote: "When in doubt, use brute force.", knownFor: "Unix, B, Go, UTF-8" },
        { name: "Bjarne Stroustrup", role: "C++ Creator", quote: "There are only two kinds of languages: the ones people complain about and the ones nobody uses.", knownFor: "C++" },
        { name: "Linus Torvalds", role: "Linux Dictator", quote: "Talk is cheap. Show me the code.", knownFor: "Linux, Git" },
        { name: "Guido van Rossum", role: "Python BDFL", quote: "There should be one-- and preferably only one --obvious way to do it.", knownFor: "Python" },
        { name: "Brendan Eich", role: "JS Creator", quote: "Always bet on JavaScript.", knownFor: "JavaScript, Mozilla" },
        { name: "James Gosling", role: "Java Father", quote: "Java is C++ without the guns, knives, and clubs.", knownFor: "Java" },
        { name: "Satoshi Nakamoto", role: "The Ghost", quote: "The nature of Bitcoin is such that once version 0.1 was released, the core design was set in stone.", knownFor: "Bitcoin" },
        { name: "John Carmack", role: "Game God", quote: "Programming is not a zero-sum game.", knownFor: "Doom, Quake" },
        { name: "Demis Hassabis", role: "AI Visionary", quote: "We are building a machine that can learn to solve any problem.", knownFor: "DeepMind, AlphaGo" }
    ],
    languages: [
        { id: "assembly", name: "Assembly", x: 50, y: 5, children: ["c", "fortran", "cobol"] },
        { id: "fortran", name: "Fortran", x: 30, y: 15, children: ["basic"] },
        { id: "cobol", name: "COBOL", x: 70, y: 15, children: ["sql"] },
        { id: "lisp", name: "Lisp", x: 90, y: 10, children: ["scheme", "clojure", "python"] },
        { id: "c", name: "C", x: 50, y: 25, children: ["cpp", "objectivec", "perl", "php", "python", "go"] },
        { id: "basic", name: "BASIC", x: 20, y: 25, children: ["vb"] },
        { id: "cpp", name: "C++", x: 40, y: 40, children: ["java", "csharp", "rust"] },
        { id: "objectivec", name: "Obj-C", x: 20, y: 40, children: ["swift"] },
        { id: "perl", name: "Perl", x: 60, y: 35, children: ["ruby", "php"] },
        { id: "python", name: "Python", x: 80, y: 45, children: ["mojo", "julia"] },
        { id: "java", name: "Java", x: 30, y: 55, children: ["kotlin", "scala", "js"] },
        { id: "csharp", name: "C#", x: 45, y: 55, children: ["ts"] },
        { id: "js", name: "JavaScript", x: 65, y: 55, children: ["ts", "coffee"] },
        { id: "php", name: "PHP", x: 60, y: 45, children: [] },
        { id: "ruby", name: "Ruby", x: 70, y: 40, children: [] },
        { id: "sql", name: "SQL", x: 85, y: 25, children: [] },
        { id: "go", name: "Go", x: 55, y: 70, children: [] },
        { id: "rust", name: "Rust", x: 35, y: 70, children: [] },
        { id: "swift", name: "Swift", x: 15, y: 60, children: [] },
        { id: "kotlin", name: "Kotlin", x: 25, y: 70, children: [] },
        { id: "ts", name: "TypeScript", x: 65, y: 70, children: [] },
        { id: "scheme", name: "Scheme", x: 90, y: 25, children: ["lua"] },
        { id: "clojure", name: "Clojure", x: 95, y: 55, children: [] },
        { id: "mojo", name: "Mojo", x: 85, y: 65, children: [] },
        { id: "vb", name: "Visual Basic", x: 10, y: 35, children: [] },
        { id: "lua", name: "Lua", x: 95, y: 40, children: [] },
        { id: "julia", name: "Julia", x: 85, y: 55, children: [] },
        { id: "scala", name: "Scala", x: 30, y: 70, children: [] },
        { id: "coffee", name: "CoffeeScript", x: 75, y: 65, children: [] }
    ],
    quiz: [
        { q: "Who is considered the first computer programmer?", a: ["Alan Turing", "Ada Lovelace", "Charles Babbage"], c: 1 },
        { q: "Which year marks the 'Unix Epoch'?", a: ["1970", "1980", "1969"], c: 0 },
        { q: "What does 'HTTP' stand for?", a: ["Hyper Text Transfer Protocol", "High Transfer Tech Protocol", "Hyper Tool Transfer Program"], c: 0 },
        { q: "Which language introduced the concept of 'Write Once, Run Anywhere'?", a: ["C++", "Java", "Python"], c: 1 },
        { q: "What is the primary language of the web browser?", a: ["Java", "C#", "JavaScript"], c: 2 },
        { q: "Who created Linux?", a: ["Steve Jobs", "Linus Torvalds", "Bill Gates"], c: 1 },
        { q: "Which company invented the Transistor?", a: ["IBM", "Bell Labs", "Intel"], c: 1 },
        { q: "What was the first widely used high-level programming language?", a: ["C", "Fortran", "Assembly"], c: 1 },
        { q: "Who invented the World Wide Web?", a: ["Al Gore", "Tim Berners-Lee", "Vint Cerf"], c: 1 },
        { q: "Which concept is associated with Gordon Moore?", a: ["Quantum Computing", "Moore's Law", "Cloud Computing"], c: 1 }
    ]
};
const dom = {
    timeline: document.getElementById('timeline-container'),
    search: document.getElementById('search-input'),
    filters: document.querySelectorAll('.filter-btn[data-filter]'),
    modal: document.getElementById('modal'),
    modalBody: document.getElementById('modal-body'),
    closeModal: document.getElementById('close-modal'),
    subtitle: document.getElementById('typewriter'),
    fameGrid: document.getElementById('fame-grid'),
    mapCanvas: document.getElementById('map-canvas'),
    comp1: document.getElementById('comp-1'),
    comp2: document.getElementById('comp-2'),
    res1: document.getElementById('res-1'),
    res2: document.getElementById('res-2'),
    quizQ: document.getElementById('quiz-question'),
    quizO: document.getElementById('quiz-options'),
    quizR: document.getElementById('quiz-result'),
    quizReset: document.getElementById('quiz-reset')
};
let currentFilter = 'all';
let searchQuery = '';
function getTitleSlug(title) {
    return title
        .trim()
        .toLowerCase()
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9]+/g, '_')
        .replace(/^_+|_+$/g, '');
}
function typeWriter(text, i) {
    if (i < text.length) {
        dom.subtitle.innerHTML += text.charAt(i);
        setTimeout(() => typeWriter(text, i + 1), 40);
    }
}
function renderTimeline() {
    dom.timeline.innerHTML = '<div class="timeline-line"></div>';
    const sortedEvents = db.events.sort((a, b) => a.year - b.year);
    const filtered = sortedEvents.filter(e => {
        const matchesFilter = currentFilter === 'all' || e.category === currentFilter;
        const matchesSearch = e.title.toLowerCase().includes(searchQuery) || e.year.toString().includes(searchQuery);
        return matchesFilter && matchesSearch;
    });
    if (filtered.length === 0) {
        dom.timeline.innerHTML += '<div style="text-align:center; padding:2rem; color:var(--text-secondary)">No time points found.</div>';
        return;
    }
    filtered.forEach((e, index) => {
        const el = document.createElement('div');
        el.className = `timeline-event ${e.importance === 'major' ? 'major' : ''}`;
        el.style.animationDelay = `${index * 0.05}s`;
        el.classList.add('animate-in');
        let tagClass = `tag-${e.category}`;
        const imageName = getTitleSlug(e.title);
        el.innerHTML = `
            <div class="timeline-node"></div>
            <div class="event-media">
                <img class="event-image" src="timeline/${imageName}.jpg" alt="${e.title}" loading="lazy" decoding="async">
            </div>
            <span class="event-year">${e.year}</span>
            <div class="event-title">${e.title}</div>
            <span class="event-tag ${tagClass}">${e.category}</span>
            <div class="event-desc">${e.desc}</div>
            <div class="event-detail">${e.detail}</div>
        `;
        el.onclick = () => openModal(e);
        dom.timeline.appendChild(el);
    });
}
function openModal(e) {
    const imageName = getTitleSlug(e.title);
    dom.modalBody.innerHTML = `
        <h2 style="color: var(--accent); margin-bottom: 0.5rem; font-size: 2rem;">${e.title}</h2>
        <h3 style="margin-bottom: 1.5rem; font-family: var(--font-mono); font-size: 1.5rem; color: var(--text-secondary);">${e.year}</h3>
        <img class="modal-image" src="timeline/${imageName}.jpg" alt="${e.title}">
        <p class="modal-desc">${e.desc}</p>
        <p class="modal-detail">${e.detail}</p>
        <div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid var(--border); display: flex; gap: 10px;">
            <span class="event-tag tag-${e.category}">${e.category.toUpperCase()}</span>
            <span class="event-tag" style="background:#21262d; border: 1px solid var(--border);">${e.importance.toUpperCase()} IMPACT</span>
        </div>
    `;
    dom.modal.classList.add('active');
}
function renderFame() {
    dom.fameGrid.innerHTML = db.coders.map(c => {
        const firstName = c.name.split(" ")[0];

        return `
        <div class="coder-card">
            <div class="coder-header">
                <div class="coder-avatar">
                    <img src="images/${firstName}.jpg" alt="${c.name}">
                </div>
                <div class="coder-info">
                    <h3>${c.name}</h3>
                    <span>${c.role}</span>
                </div>
            </div>
            <div style="margin-bottom: 1rem; font-size: 0.9rem; color: var(--accent);">
                Known for: ${c.knownFor}
            </div>
            <div class="coder-quote">"${c.quote}"</div>
        </div>
        `;
    }).join('');
}

let mapState = {
    zoom: 1,
    posX: 0,
    posY: 0,
    isDragging: false,
    startX: 0,
    startY: 0
};

function renderMap() {
    dom.mapCanvas.innerHTML = '<div id="map-inner" class="map-inner"></div>';
    const inner = document.getElementById('map-inner');
    
    const w = dom.mapCanvas.offsetWidth;
    const h = dom.mapCanvas.offsetHeight;

    db.languages.forEach(l => {
        if (l.children && l.children.length > 0) {
            l.children.forEach(childId => {
                const childObj = db.languages.find(x => x.id === childId);
                if (childObj) {
                    const line = document.createElement('div');
                    line.className = `connection-line line-${l.id}-${childId}`;
                    const x1 = l.x, y1 = l.y;
                    const x2 = childObj.x, y2 = childObj.y;
                    const length = Math.sqrt(Math.pow((x2 - x1) * (w / 100), 2) + Math.pow((y2 - y1) * (h / 100), 2));
                    const angle = Math.atan2((y2 - y1) * (h / 100), (x2 - x1) * (w / 100)) * 180 / Math.PI;
                    line.style.width = `${length}px`;
                    line.style.left = `${l.x}%`;
                    line.style.top = `${l.y + 1.5}%`;
                    line.style.transform = `rotate(${angle}deg)`;
                    inner.appendChild(line);
                }
            });
        }
    });

    db.languages.forEach(l => {
        const node = document.createElement('div');
        node.className = 'lang-node';
        node.textContent = l.name;
        node.style.left = `${l.x}%`;
        node.style.top = `${l.y}%`;
        node.dataset.id = l.id;
        node.onclick = (e) => {
            e.stopPropagation();
            highlightPath(l.id);
        };
        inner.appendChild(node);
    });

    setupMapInteractions();
}

function setupMapInteractions() {
    const container = dom.mapCanvas;
    const inner = document.getElementById('map-inner');

    const updateTransform = () => {
        inner.style.transform = `translate(${mapState.posX}px, ${mapState.posY}px) scale(${mapState.zoom})`;
    };

    container.onwheel = (e) => {
        e.preventDefault();
        const zoomSpeed = 0.001;
        const delta = -e.deltaY;
        const newZoom = Math.min(Math.max(0.5, mapState.zoom + delta * zoomSpeed), 3);
        
        mapState.zoom = newZoom;
        updateTransform();
    };

    container.onmousedown = (e) => {
        mapState.isDragging = true;
        container.style.cursor = 'grabbing';
        mapState.startX = e.clientX - mapState.posX;
        mapState.startY = e.clientY - mapState.posY;
    };

    window.onmousemove = (e) => {
        if (!mapState.isDragging) return;
        mapState.posX = e.clientX - mapState.startX;
        mapState.posY = e.clientY - mapState.startY;
        updateTransform();
    };

    window.onmouseup = () => {
        mapState.isDragging = false;
        container.style.cursor = 'grab';
    };
}
function highlightPath(rootId) {
    document.querySelectorAll('.lang-node').forEach(n => n.classList.remove('active'));
    document.querySelectorAll('.connection-line').forEach(l => l.classList.remove('active'));
    const activate = (id) => {
        const node = document.querySelector(`.lang-node[data-id="${id}"]`);
        if (node) node.classList.add('active');
        const obj = db.languages.find(l => l.id === id);
        if (obj && obj.children) {
            obj.children.forEach(childId => {
                const line = document.querySelector(`.line-${id}-${childId}`);
                if (line) line.classList.add('active');
                activate(childId);
            });
        }
    };
    activate(rootId);
}
function initCompare() {
    const opts = db.events.map(e => `<option value="${e.id}">${e.year} - ${e.title}</option>`).join('');
    dom.comp1.innerHTML = opts;
    dom.comp2.innerHTML = opts;
    dom.comp2.selectedIndex = 10;
    const renderComp = (id, target) => {
        const item = db.events.find(e => e.id == id);
        const detailLine = item.detail ? `<br><span style="color:var(--text-secondary)">${item.detail}</span>` : '';
        target.innerHTML = `
            <h3 style="margin-bottom:1rem; color:var(--accent)">${item.title}</h3>
            <p><label>Category</label> ${item.category.toUpperCase()}</p>
            <p><label>Year</label> ${item.year}</p>
            <p><label>Impact</label> ${item.importance.toUpperCase()}</p>
            <p style="border:none; display:block;"><label>Summary</label><br><span style="color:var(--text-primary)">${item.desc}</span>${detailLine}</p>
        `;
    };
    dom.comp1.addEventListener('change', (e) => renderComp(e.target.value, dom.res1));
    dom.comp2.addEventListener('change', (e) => renderComp(e.target.value, dom.res2));
    renderComp(dom.comp1.value, dom.res1);
    renderComp(dom.comp2.value, dom.res2);
}
let qIdx = 0;
let score = 0;
function renderQuiz() {
    if (qIdx >= db.quiz.length) {
        dom.quizQ.innerText = "Assessment Complete";
        dom.quizO.innerHTML = "";
        let msg = score === db.quiz.length ? "Perfect Score! You are a coding historian." : `You scored ${score} out of ${db.quiz.length}.`;
        dom.quizR.innerHTML = `<div style="color:var(--accent); margin-bottom:1rem;">${msg}</div>`;
        dom.quizReset.style.display = 'inline-block';
        return;
    }
    const q = db.quiz[qIdx];
    dom.quizQ.innerText = q.q;
    dom.quizO.innerHTML = q.a.map((opt, i) =>
        `<button class="quiz-btn" onclick="checkAnswer(${i})">${opt}</button>`
    ).join('');
    dom.quizR.innerText = "";
}
function checkAnswer(i) {
    if (i === db.quiz[qIdx].c) {
        score++;
        dom.quizR.innerHTML = "<span style='color:var(--concept-color)'>Correct!</span>";
    } else {
        dom.quizR.innerHTML = "<span style='color:var(--person-color)'>Incorrect.</span>";
    }
    setTimeout(() => {
        qIdx++;
        renderQuiz();
    }, 800);
}
window.checkAnswer = checkAnswer;
dom.quizReset.onclick = () => {
    qIdx = 0; score = 0;
    dom.quizReset.style.display = 'none';
    renderQuiz();
};
dom.search.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase();
    renderTimeline();
});
dom.filters.forEach(btn => {
    btn.addEventListener('click', () => {
        dom.filters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderTimeline();
    });
});
dom.closeModal.addEventListener('click', () => dom.modal.classList.remove('active'));
dom.modal.addEventListener('click', (e) => {
    if (e.target === dom.modal) dom.modal.classList.remove('active');
});
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');
let matrixInterval;
let isMatrixRunning = false;
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
const fontSize = 16;
let columns = 0;
let drops = [];
function initMatrix() {
    resizeCanvas();
    columns = Math.floor(canvas.width / fontSize);
    drops = [];
    for (let i = 0; i < columns; i++) { drops[i] = 1; }
}
function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px monospace";
    for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) { drops[i] = 0; }
        drops[i]++;
    }
}
function toggleMatrix(enable) {
    if (enable) {
        if (!isMatrixRunning) {
            initMatrix();
            matrixInterval = setInterval(drawMatrix, 33);
            isMatrixRunning = true;
        }
    } else {
        clearInterval(matrixInterval);
        isMatrixRunning = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}
function toggleSecretMode() {
    const isActive = document.body.classList.toggle('terminal-mode');
    toggleMatrix(isActive);
    
    if (isActive) {
        alert("System Hack Detected: Matrix Mode Activated");
    } else {
        alert("System Restored");
    }
}
const secretBtn = document.getElementById('secret-trigger');
if (secretBtn) {
    secretBtn.addEventListener('click', () => {
        toggleSecretMode();
    });
}
window.addEventListener('resize', () => { if (isMatrixRunning) initMatrix(); });
const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let kPos = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konami[kPos]) {
        kPos++;
        if (kPos === konami.length) {
            toggleSecretMode();
            kPos = 0;
        }
    } else {
        kPos = 0;
    }
});
window.onload = () => {
    typeWriter("From Punch Cards to Neural Interfaces...", 0);
    renderTimeline();
    renderFame();
    renderMap();
    initCompare();
    renderQuiz();
};
