const fs = require('fs');
const path = require('path');

// 이미지를 Base64로 변환
function imageToBase64(imagePath) {
  try {
    const imageBuffer = fs.readFileSync(imagePath);
    const ext = path.extname(imagePath).toLowerCase();
    const mimeTypes = {
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',
      '.gif': 'image/gif'
    };
    const mimeType = mimeTypes[ext] || 'image/jpeg';
    return `data:${mimeType};base64,${imageBuffer.toString('base64')}`;
  } catch (err) {
    console.error(`Error converting ${imagePath}:`, err.message);
    return '';
  }
}

// 이미지 경로
const imagesDir = path.join(__dirname, '../public/images');
const images = {
  batang: imageToBase64(path.join(imagesDir, 'batang.jpg')),
  qrCode: imageToBase64(path.join(imagesDir, 'qr-code.jpg')),
  con03: imageToBase64(path.join(imagesDir, 'con-03.jpg')),
  con04: imageToBase64(path.join(imagesDir, 'con-04.jpg')),
  con05: imageToBase64(path.join(imagesDir, 'con-05.jpg'))
};

// 완전한 HTML 생성
const html = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>지상조업 안전사고예방 간담회</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Malgun Gothic', sans-serif; overflow: hidden; background: white; }
    .slide { display: none; width: 100vw; height: 100vh; padding: 3rem; position: relative; }
    .slide.active { display: flex; flex-direction: column; }
    .nav { position: fixed; bottom: 3rem; right: 3rem; display: flex; gap: 1rem; z-index: 100; }
    .nav button { width: 3rem; height: 3rem; border: 1px solid #ccc; background: white; cursor: pointer; font-size: 1.5rem; }
    .counter { position: fixed; bottom: 3rem; left: 50%; transform: translateX(-50%); font-family: monospace; font-weight: bold; font-size: 1.25rem; background: white; padding: 0.75rem 1.5rem; border-radius: 0.5rem; border: 2px solid #e2e8f0; }
    h1 { font-size: 4rem; font-weight: 900; margin-bottom: 2rem; }
    .title-slide { justify-content: center; align-items: center; text-align: center; }
    .blue { color: #3b82f6; }
  </style>
</head>
<body>
  <div class="slide active title-slide">
    <h1>지상조업 <span class="blue">안전사고예방</span> 간담회</h1>
    <p style="font-size: 1.5rem; color: #64748b;">국토교통부 공항운영과 | 2026.3.31.(화)</p>
  </div>
  
  <div class="slide">
    <h2 style="font-size: 3rem; margin-bottom: 2rem;">목차</h2>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem 3rem;">
      <div style="font-size: 1.5rem; padding: 1rem; border-left: 4px solid #3b82f6;">01. 간담회 개요</div>
      <div style="font-size: 1.5rem; padding: 1rem; border-left: 4px solid #3b82f6;">02. 추진체계</div>
      <div style="font-size: 1.5rem; padding: 1rem; border-left: 4px solid #3b82f6;">03. 지상안전사고란?</div>
      <div style="font-size: 1.5rem; padding: 1rem; border-left: 4px solid #3b82f6;">04. 사고 유형</div>
      <div style="font-size: 1.5rem; padding: 1rem; border-left: 4px solid #3b82f6;">05. 사고 신고</div>
      <div style="font-size: 1.5rem; padding: 1rem; border-left: 4px solid #3b82f6;">06. 행정처분 기준</div>
    </div>
  </div>

  <div class="slide">
    <h2 style="font-size: 3rem; margin-bottom: 2rem;">지상안전사고 예방 추진체계</h2>
    <img src="${images.con03}" style="max-width: 90%; max-height: 70vh; object-fit: contain; margin: auto;">
  </div>

  <div class="slide" style="justify-content: center; align-items: center; text-align: center;">
    <h2 style="font-size: 3rem; color: #f59e0b; margin-bottom: 2rem;">⚠️</h2>
    <h1 style="font-size: 3.5rem;">하늘 위의 안전!<br>지상에서 시작됩니다</h1>
    <img src="${images.con05}" style="max-width: 80%; margin-top: 3rem; border-radius: 1rem;">
  </div>

  <div class="slide">
    <h2 style="font-size: 3rem; margin-bottom: 2rem;">지상안전사고 유형</h2>
    <img src="${images.con04}" style="max-width: 90%; max-height: 70vh; object-fit: contain; margin: auto;">
  </div>

  <div class="slide">
    <h2 style="font-size: 3rem; margin-bottom: 2rem;">'공항 지상안전사고 예방' 웹사이트</h2>
    <img src="${images.batang}" style="max-width: 90%; max-height: 60vh; object-fit: contain; margin: auto;">
    <div style="display: flex; align-items: center; gap: 2rem; margin-top: 2rem; justify-content: center;">
      <div>
        <p style="font-size: 1.5rem; font-weight: 900;">지금 바로 접속하세요</p>
        <p style="font-size: 1.25rem; color: #3b82f6; font-weight: 700;">bandinuguri.github.io/safe/</p>
      </div>
      <img src="${images.qrCode}" style="width: 6rem; height: 6rem; border: 2px solid #e2e8f0; border-radius: 0.5rem;">
    </div>
  </div>

  <div class="slide title-slide">
    <div style="font-size: 5rem; margin-bottom: 2rem;">⚠️</div>
    <h1>감사합니다</h1>
    <div style="width: 8rem; height: 0.375rem; background: #3b82f6; margin: 2rem auto; border-radius: 9999px;"></div>
    <p style="font-size: 1.875rem; color: #64748b; font-weight: 500; margin-bottom: 1rem;">지상조업 안전사고예방 간담회</p>
    <div style="background: rgba(59, 130, 246, 0.1); padding: 1.5rem 3rem; border-radius: 3rem; border: 1px solid rgba(59, 130, 246, 0.2); margin-top: 2rem;">
      <p style="font-size: 1.5rem; font-weight: 700; color: #1e40af; font-style: italic;">"하늘 위 안전은 지상에서부터 시작합니다"</p>
    </div>
  </div>

  <div class="nav">
    <button onclick="prevSlide()">◀</button>
    <div class="counter" id="counter"></div>
    <button onclick="nextSlide()">▶</button>
  </div>

  <script>
    let current = 0;
    const slides = document.querySelectorAll('.slide');
    const total = slides.length;
    
    function updateCounter() {
      document.getElementById('counter').textContent = 
        String(current + 1).padStart(2, '0') + ' / ' + String(total).padStart(2, '0');
    }
    
    function showSlide(n) {
      slides.forEach((s, i) => s.classList.toggle('active', i === n));
      updateCounter();
    }
    
    function nextSlide() {
      current = (current + 1) % total;
      showSlide(current);
    }
    
    function prevSlide() {
      current = (current - 1 + total) % total;
      showSlide(current);
    }
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); nextSlide(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); prevSlide(); }
      else if (e.key === 'f' || e.key === 'F11') {
        e.preventDefault();
        if (!document.fullscreenElement) document.documentElement.requestFullscreen();
        else document.exitFullscreen();
      }
    });
    
    updateCounter();
  </script>
</body>
</html>`;

// HTML 파일 저장
const outputPath = path.join(__dirname, '../public/standalone.html');
fs.writeFileSync(outputPath, html, 'utf-8');
console.log('✅ Standalone HTML 생성 완료:', outputPath);
console.log('📦 파일 크기:', (fs.statSync(outputPath).size / 1024 / 1024).toFixed(2), 'MB');
