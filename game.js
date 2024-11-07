class TreasureMap {
    static getInitialClue() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("在古老的图书馆里找到了第一个线索...");
        }, 1000);
      });
    }
  
    static decodeAncientScript(clue) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (!clue) {
            reject("没有线索可以解码!");
          }
          resolve("解码成功!宝藏在一座古老的神庙中...");
        }, 1500);
      });
    }
  
    static searchTemple(location) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const random = Math.random();
          if (random < 0.5) {
            reject("糟糕!遇到了神庙守卫!");
          }
          resolve("找到了一个神秘的箱子...");
        }, 2000);
      });
    }
  
    static openTreasureBox() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("恭喜!你找到了传说中的宝藏!");
        }, 1000);
      });
    }
  }
  
  async function findTreasure() {
    const storyDiv = document.getElementById("story");
    const resultImage = document.getElementById("resultImage");
  
    try {
      storyDiv.innerText = await TreasureMap.getInitialClue();
      const location = await TreasureMap.decodeAncientScript(storyDiv.innerText);
      storyDiv.innerText += "\n" + location;
  
      const box = await TreasureMap.searchTemple(location);
      storyDiv.innerText += "\n" + box;
  
      const treasure = await TreasureMap.openTreasureBox();
      storyDiv.innerText += "\n" + treasure;
  
      resultImage.src = "C:/Users/123/Desktop/my-website/treasure/R-C.png"; // 胜利图片
      resultImage.style.display = "block";
    } catch (error) {
      storyDiv.innerText += "\n任务失败: " + error;
      resultImage.src = "C:/Users/123/Desktop/my-website/treasure/9c31f3a0cbcd0406629729ada2310a14.jpg"; // 失败图片
      resultImage.style.display = "block";
    }
  }
  
  document.getElementById("startButton").addEventListener("click", () => {
    document.getElementById("story").innerText = "游戏开始...";
    document.getElementById("resultImage").style.display = "none";
    findTreasure();
  });
  