// ラッキーカラーのデータ
const colors = [
  {
    name: "情熱の赤",
    color: "#FF6B6B",
    message:
      "今年はパワフルで積極的な年！新しいことにチャレンジする絶好のチャンスです★",
  },
  {
    name: "希望の青",
    color: "#4ECDC4",
    message: "心穏やかに過ごせる年。直感を信じて行動すると良いことがありそう♪",
  },
  {
    name: "癒しの緑",
    color: "#45B7D1",
    message:
      "自然体でいることが一番！リラックスして過ごすことで運気がアップします◆",
  },
  {
    name: "笑顔の黄色",
    color: "#F9CA24",
    message: "明るく前向きな気持ちが幸運を呼び込みます。笑顔を忘れずに☆",
  },
  {
    name: "神秘の紫",
    color: "#6C5CE7",
    message: "直感力が高まる年。芸術的な分野で才能を発揮できるかも♦",
  },
  {
    name: "愛情のピンク",
    color: "#FD79A8",
    message: "人間関係が充実する年！周りの人との絆が深まりそうです♡",
  },
  {
    name: "堅実の茶色",
    color: "#8B4513",
    message: "堅実に歩むことで確実に成果が得られる年。焦らずじっくりと■",
  },
  {
    name: "純真の白",
    color: "#F8F9FA",
    message: "新しいスタートを切るのに最適な年！清らかな心で進みましょう◇",
  },
];

// フォームの送信イベントを設定
const form = document.getElementById("luckyColorForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    diagnoseColor();
  });
}

// 診断機能
function diagnoseColor() {
  const nameInput = document.getElementById("name");
  const birthdayInput = document.getElementById("birthday");

  if (!nameInput || !birthdayInput) {
    alert("入力欄が見つかりません");
    return;
  }

  const name = nameInput.value.trim();
  const birthday = birthdayInput.value;

  if (!name || !birthday) {
    alert("名前と誕生日を両方入力してください！");
    return;
  }

  // 名前の文字数を取得
  const nameLength = name.length;

  // 誕生日から数字だけを抜き出して合計
  const birthdayNumbers = birthday.replace(/\D/g, ""); // 数字以外を削除
  let birthdaySum = 0;
  for (let i = 0; i < birthdayNumbers.length; i++) {
    birthdaySum += parseInt(birthdayNumbers[i]);
  }

  // 名前の文字数と誕生日の数字の合計を足す
  const totalScore = nameLength + birthdaySum;

  // 8で割った余りでカラーを決定
  const colorIndex = totalScore % colors.length;
  const selectedColor = colors[colorIndex];

  // 結果を表示
  displayResult(name, selectedColor);
}

// 結果表示機能
function displayResult(name, selectedColor) {
  const colorCircle = document.getElementById("colorCircle");
  const resultText = document.getElementById("resultText");
  const colorMessage = document.getElementById("colorMessage");
  const result = document.getElementById("result");

  // 色の円を設定
  colorCircle.style.backgroundColor = selectedColor.color;

  // 結果テキストを設定
  resultText.textContent = name + "さんの今年のラッキーカラーは...";

  // メッセージを設定
  colorMessage.innerHTML =
    '<h4 style="color: ' +
    selectedColor.color +
    ';">' +
    selectedColor.name +
    "</h4>" +
    "<p>" +
    selectedColor.message +
    "</p>";

  // 結果を表示（同一画面内）
  result.style.display = "block";
}
