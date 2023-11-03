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
        "音声": "音声🎙",
        "認識": "認識👂",
        "技術": "技術🔧",
        "人": "人👤",
        "コンピュータ": "コンピュータ💻",
        "テキスト": "テキスト📜",
        "命令": "命令⚙️",
        "AI": "AI🤖",
        "ディープラーニング": "ディープラーニング🧠",
        "モデル": "モデル📊",
        "データ": "データ📈",
        "学習": "学習📚",
        "人間": "人間👥",
        "製品": "製品📦",
        "サービス": "サービス🛎️",
        "スマートスピーカー": "スマートスピーカー🔊",
        "ユーザー": "ユーザー👥",
        "音楽": "音楽🎵",
        "天気": "天気⛅",
        "家電": "家電📺",
        "スマートフォン": "スマートフォン📱",
        "電話": "電話☎️",
        "スケジュール": "スケジュール📅",
        "情報": "情報🔍",
        "業務": "業務💼",
        "医療": "医療🏥",
        "診断": "診断🩺",
        "倉庫": "倉庫🏢",
        "在庫": "在庫📦",
        "手作業": "手作業🖐️",
        "入力": "入力⌨️",
        "課題": "課題❗",
        "方言": "方言🗣️",
        "アクセント": "アクセント🎤",
        "雑音": "雑音📢",
        "研究": "研究🔍",
        "開発": "開発👩‍💻",
        "生活": "生活🏡",
        "便利": "便利🎉",
        "ウォーターフォール": "ウォーターフォール📈",
        "スパイラル": "スパイラル🌀",
        "アジャイル": "アジャイル🔄",
        "ソフトウェア": "ソフトウェア💻",
        "開発": "開発🛠",
        "フェーズ": "フェーズ📅",
        "要件": "要件📝",
        "設計": "設計📐",
        "実装": "実装💡",
        "テスト": "テスト🔍",
        "デプロイ": "デプロイ🚢",
        "保守": "保守🔧",
        "リスク": "リスク⚠️",
        "計画": "計画📋",
        "エンジニアリング": "エンジニアリング🔧",
        "評価": "評価📊",
        "サイクル": "サイクル🔄",
        "フィードバック": "フィードバック🗣",
        "スクラム": "スクラム🏉",
        "カンバン": "カンバン🪧",
        "聴覚障害": "聴覚障害👂",
        "耳": "耳👂",
        "聴覚経路": "聴覚経路🧠",
        "聴力": "聴力🔉",
        "難聴": "難聴🔇",
        "先天的": "先天的👶",
        "外傷": "外傷🤕",
        "感染症": "感染症🦠",
        "老化": "老化👴",
        "高音量": "高音量🔊",
        "困難": "困難❌",
        "コミュニケーション": "コミュニケーション💬",
        "手話": "手話🤟",
        "筆談": "筆談✍️",
        "補聴器": "補聴器🦻",
        "テクノロジー": "テクノロジー🔧",
        "スマートフォンアプリ": "スマートフォンアプリ📱",
        "デバイス": "デバイス📟",
        "リアルタイム処理": "リアルタイム処理⏱",
        "ノイズリダクション": "ノイズリダクション🔇",
        "エコーキャンセレーション": "エコーキャンセレーション🔊",
        "バイナラル音響": "バイナラル音響🎧",
        "音響モデル": "音響モデル📊",
        "スペクトログラム": "スペクトログラム📈",
        "波形": "波形🌊",
        "フーリエ変換": "フーリエ変換🔄",
        "フィルタバンク": "フィルタバンク🔍",
        "音素": "音素🎵",
        "音響信号": "音響信号🎶",
        "マイクロフォンアレイ": "マイクロフォンアレイ🎤",
        "自動スピーチ認識": "自動スピーチ認識🗣",
        "音声合成": "音声合成🗣",
        "スピーカー認証": "スピーカー認証👤",
        "スピーカー独立認識": "スピーカー独立認識👥",
        "言語モデル": "言語モデル📚",
        "深層学習": "深層学習🧠",
        "畳み込みニューラルネットワーク": "畳み込みニューラルネットワーク🔄",
        "再帰型ニューラルネットワーク": "再帰型ニューラルネットワーク🔁",
        "長短期記憶": "長短期記憶🧠",
        "トランスフォーマー": "トランスフォーマー🔄",
        "エンコーダー": "エンコーダー🔐",
        "デコーダー": "デコーダー🔓",
        "アテンションメカニズム": "アテンションメカニズム🔍",
        "トレーニングデータ": "トレーニングデータ📊",
        "テストデータ": "テストデータ📉",
        "バリデーションデータ": "バリデーションデータ📈",
        "過学習": "過学習⚠️",
        "未学習": "未学習❗",
        "正則化": "正則化✔️",
        "最適化": "最適化🔄",
        "損失関数": "損失関数❗",
        "勾配降下法": "勾配降下法⬇️",
        "バックプロパゲーション": "バックプロパゲーション⬅️",
        "学習率": "学習率🔄",
        "活性化関数": "活性化関数➡️",
        "隠れ層": "隠れ層🔍",
        "入力層": "入力層⬅️",
        "出力層": "出力層➡️",
        "バッチ学習": "バッチ学習📚",
        "オンライン学習": "オンライン学習💻",
        "転移学習": "転移学習🔄",
        "ドメイン適応": "ドメイン適応🔄",
        "多タスク学習": "多タスク学習📚",
        "メタ学習": "メタ学習🧠",
        "半教師あり学習": "半教師あり学習👥",
        "教師なし学習": "教師なし学習❓",
        "強化学習": "強化学習💪",
        "報酬": "報酬🎁",
        "状態": "状態🔄",
        "行動": "行動🏃",
        "ポリシー": "ポリシー📜",
        "絵": "絵🖼️"
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
