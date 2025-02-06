// 게시글 데이터 상수화
const DUMMY_POST = {
    id: 1,
    title: "제목 1",
    content_img: "사진예정",
    content: `무엇을 얘기할까요? 아무말이라면, 삶은 항상 놀라운 모험이라고 생각합니다. 
        우리는 매일 새로운 경험을 하고 배우며 성장합니다. 때로는 어려움과 도전이 있지만, 
        그것들이 우리를 더 강하고 지혜롭게 만듭니다...`,
    likes: 5,
    views: 10,
    comments: 3,
    date: "2024-01-08 10:30:00",
    author: "작성자1",
    author_profile: "/src/assets/images/default/profile_img.png",
    isMyPost: true,
};

// 날짜 포맷팅 함수
const formatDate = (dateString) => {
    try {
        const date = new Date(dateString);

        // 날짜 컴포넌트 추출을 위한 헬퍼 함수
        const padNumber = (num) => String(num).padStart(2, '0');

        const year = date.getFullYear();
        const month = padNumber(date.getMonth() + 1);
        const day = padNumber(date.getDate());
        const hour = padNumber(date.getHours());
        const minutes = padNumber(date.getMinutes());
        const seconds = padNumber(date.getSeconds());

        return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
    } catch (error) {
        console.error('날짜 포맷팅 에러:', error);
        return '날짜 정보 없음';
    }
};

// HTML 템플릿 컴포넌트들
const createAuthorSection = (post) => `
    <div class="author-profile">
        <img 
            src="${post.author_profile || '/assets/images/default/profile_img.png'}" 
            alt="작성자 프로필" 
            class="author-profile-img"
        >
        <div class="author-name">${post.author}</div>
        <div class="post-time">${formatDate(post.date)}</div>
        ${post.isMyPost ? createPostButtons() : ''}
    </div>
`;

const createPostButtons = () => `
    <div class="post-button">
        <button class="edit-button">수정</button>
        <button class="delete-button">삭제</button>
    </div>
`;

const createInteractionBox = (count, type) => `
    <div class="post-interaction-box">
        <div class="post-interaction-count">${count}</div>
        <div class="post-interaction-type">${type}</div>
    </div>
`;

// 메인 HTML 생성 함수
function createPostHTML(post) {
    return `
        <article>
            <div class="post-header">
                <div>
                    <h1 class="post-title">${post.title}</h1>
                </div>
                <div class="author-info">
                    ${createAuthorSection(post)}
                </div>
            </div>
            
            <div class="post-detail">
                <div class="post-content-img">${post.content_img}</div>
                <div class="post-content">${post.content}</div>
            </div>
            
            <div class="post-interaction">
                ${createInteractionBox(post.likes, '좋아요')}
                ${createInteractionBox(post.views, '조회수')}
                ${createInteractionBox(post.comments, '댓글')}
            </div>
        </article>
    `;
}

// 초기화 함수
const initializePost = () => {
    const postContainer = document.getElementById('post-container');
    if (!postContainer) {
        console.error('게시글 컨테이너를 찾을 수 없습니다.');
        return;
    }

    postContainer.innerHTML = createPostHTML(DUMMY_POST);
};

// DOM 로드 시 초기화
document.addEventListener('DOMContentLoaded', initializePost);