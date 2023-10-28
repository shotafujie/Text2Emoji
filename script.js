const input = document.getElementById('input');
const output = document.getElementById('output');
let recognition;
let finalTranscript = '';

function startRecognition() {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.lang = 'ja-JP';
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.onresult = (event) => {
        let interimTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript + ".";
            if (event.results[i].isFinal) {
                finalTranscript += transcript;
            } else {
                interimTranscript += transcript;
            }
        }
        output.value = convertToEmoji(finalTranscript + interimTranscript);
    };
    recognition.start();
}

function stopRecognition() {
    recognition.stop();
}
function deleteText() {
    output.value = '';
    finalTranscript = '';
}
function updateEmoji() {
    const text = input.value;
    output.value = convertToEmoji(text);
}
function copyToClipboard() {
    output.select();
    document.execCommand('copy');
    alert('Text copied to clipboard!');
}

function convertToEmoji(text) {
    const emojiMap = {
            "音声": "🎙",
            "認識": "👂",
            "技術": "🔧",
            "人": "👤",
            "コンピュータ": "💻",
            "テキスト": "📜",
            "命令": "⚙️",
            "AI": "🤖",
            "ディープラーニング": "🧠",
            "モデル": "📊",
            "データ": "📈",
            "学習": "📚",
            "人間": "👥",
            "製品": "📦",
            "サービス": "🛎️",
            "スマートスピーカー": "🔊",
            "ユーザー": "👥",
            "音楽": "🎵",
            "天気": "⛅",
            "家電": "📺",
            "スマートフォン": "📱",
            "電話": "☎️",
            "スケジュール": "📅",
            "情報": "🔍",
            "業務": "💼",
            "医療": "🏥",
            "診断": "🩺",
            "倉庫": "🏢",
            "在庫": "📦",
            "手作業": "🖐️",
            "入力": "⌨️",
            "課題": "❗",
            "方言": "🗣️",
            "アクセント": "🎤",
            "雑音": "📢",
            "研究": "🔍",
            "開発": "👩‍💻",
            "生活": "🏡",
            "便利": "🎉",
            "ウォーターフォール": "📈",
            "スパイラル": "🌀",
            "アジャイル": "🔄",
            "ソフトウェア": "💻",
            "開発": "🛠",
            "フェーズ": "📅",
            "要件": "📝",
            "設計": "📐",
            "実装": "💡",
            "テスト": "🔍",
            "デプロイ": "🚢",
            "保守": "🔧",
            "リスク": "⚠️",
            "計画": "📋",
            "エンジニアリング": "🔧",
            "評価": "📊",
            "サイクル": "🔄",
            "フィードバック": "🗣",
            "スクラム": "🏉",
            "カンバン": "🪧",
            "聴覚障害": "👂",
            "耳": "👂",
            "聴覚経路": "🧠",
            "聴力": "🔉",
            "難聴": "🔇",
            "先天的": "👶",
            "外傷": "🤕",
            "感染症": "🦠",
            "老化": "👴",
            "高音量": "🔊",
            "困難": "❌",
            "コミュニケーション": "💬",
            "手話": "🤟",
            "筆談": "✍️",
            "補聴器": "🦻",
            "テクノロジー": "🔧",
            "スマートフォンアプリ": "📱",
            "デバイス": "📟"
    };
    for (let word in emojiMap) {
        text = text.replace(new RegExp(word, 'g'), emojiMap[word]);
    }
    return text;
    // for (let word in emojiMap) {
    //     text = text.replace(new RegExp(`\\b${word}\\b`, 'g'), word + emojiMap[word]);
    // }
    // return text;
}
