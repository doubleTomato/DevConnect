# 🌐 DevConnect
![DevConnect Banner](https://your-image-url.com/banner.png)  

**DevConnect**는 개발자들이 기술 블로그와 프로젝트를 공유할 수 있는 웹 애플리케이션입니다.  
Vite + React + TypeScript + Tailwind CSS를 기반으로 구축되었습니다.

---

## 📌 주요 기능
- 🔹 **사용자 인증** (Google OAuth)
- 📝 **마크다운 기반 블로그** (글 작성, 수정, 삭제)
- 🏗️ **프로젝트 갤러리** (이미지, 설명, GitHub 링크 포함)
- 🎨 **반응형 UI** (Tailwind CSS 적용)
- ⚡ **빠른 성능** (Vite & Lazy Loading 적용)

---

## 🛠️ 기술 스택
- **Frontend**: React, TypeScript, Vite
- **UI**: Tailwind CSS
- **State Management**: Zustand
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore (또는 Supabase)
- **Deployment**: Vercel

---

## 🚀 프로젝트 실행 방법

### 1️⃣ 필수 요구 사항
- Node.js (>= 18.0)
- npm 또는 yarn

### 2️⃣ 프로젝트 클론
```sh
git clone https://github.com/your-username/devconnect.git
cd devconnect

📂 폴더 구조
📦 devconnect
├── 📂 src
│   ├── 📂 components  # 재사용 가능한 컴포넌트
│   ├── 📂 pages       # 주요 페이지 (Home, Blog, Projects, Profile, Login)
│   ├── 📂 hooks       # 커스텀 훅
│   ├── 📂 store       # Zustand 상태 관리
│   ├── 📂 styles      # Tailwind 스타일 파일
│   ├── App.tsx       # 라우팅 및 기본 구조
│   ├── main.tsx      # React 진입점
│   ├── firebase.ts   # Firebase 설정
├── 📂 public         # 정적 파일
├── 📜 package.json   # 프로젝트 설정
└── 📜 tailwind.config.js # Tailwind 설정



🌎 배포
현재 프로젝트는 Vercel을 통해 배포 예정입니다.
🔗 라이브 데모: 미정

