document.getElementById("check-btn").addEventListener("click", function () {
    const input = document.getElementById("text-input").value;
    const resultEl = document.getElementById("result");
  
    if (input.trim() === "") {
      alert("Please input a value");
      return;
    }
  
    const original = input;
    const replaced = original.replace(/[^A-Za-z0-9]/g, "");
    const lower = replaced.toLowerCase();
    const split = lower.split("");
    const reversedArr = [...split].reverse(); // clone for clarity
    const joined = reversedArr.join("");
  
    const isPalindrome = lower === joined;
  
    resultEl.innerHTML = `
      <div class="step"><strong>Original:</strong> ${original}</div>
      <div class="step"><strong>After replace(/[^A-Za-z0-9]/g, ""):</strong> ${replaced}</div>
      <div class="step"><strong>After toLowerCase():</strong> ${lower}</div>
      <div class="step"><strong>After split(""):</strong> [ ${split.join(", ")} ]</div>
      <div class="step"><strong>After reverse():</strong> [ ${reversedArr.join(", ")} ]</div>
      <div class="step"><strong>After join(""):</strong> ${joined}</div>
      <hr />
      <div><strong>Result:</strong> ${original} ${isPalindrome ? "is" : "is not"} a palindrome.</div>
    `;
  });
  