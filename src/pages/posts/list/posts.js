const posts = [
    {
        id: 1,
        title: "첫 번째 게시글 게시글게시글게시글게시글게시글게시글게시글게시글게시글게시글게시글게시글게시글",
        likes: 5,
        comments: 3,
        views: 10,
        date: "2024-01-08 10:30:00",
        author: "작성자1",
        author_profile: "/src/assets/images/default/profile_img.png",
    },
    {
        id: 2,
        title: "두 번째 게시글",
        likes: 3,
        comments: 1,
        views: 7,
        date: "2024-01-08 11:30:00",
        author: "작성자2",
        author_profile: "/src/assets/images/default/profile_img.png",
    }
];

// 게시글 HTML 생성 함수
function createPostElement(post) {
    // NOTE: 제목 길이 제한 26자
    const truncatedTitle = post.title.length > 26
        ? post.title.substring(0, 26) : post.title;

    return `
        <article class="post-card" data-post-id="${post.id}">
            <div class="post-content">
                <div class="post-title">
                    <h2>${truncatedTitle}</h2>
                </div>
                <div class="post-info">
                    <div class="post-stats">
                        <span class="stat-item">
                            <i class="likes"></i>
                            <span> 좋아요 ${post.likes}</span>
                            <i class="comments"></i>
                            <span> 댓글 ${post.comments}</span>
                            <i class="views"></i>
                            <span> 조회수 ${post.views}</span>
                        </span>
                    </div>
                    <span class="post-date">${post.date}</span>
                </div>
            </div>
            <div class="author-container">
                <img src="${post.author_profile}" alt="author_profile" class="author-profile">
                <h3>${post.author}</h3>
            </div>
        </article>
    `;
}

// 게시글 목록을 표시하는 함수
function displayPosts(posts) {
    const postsContainer = document.querySelector('.posts-list');
    // 최신순으로 정렬 (date 기준)
    const sortedPosts = [...posts].sort((a, b) =>
        new Date(b.date) - new Date(a.date)
    );

    // 기존 게시글들 초기화
    postsContainer.innerHTML = '';

    // 정렬된 게시글들 추가
    sortedPosts.forEach(post => {
        const postHtml = createPostElement(post);
        postsContainer.insertAdjacentHTML('beforeend', postHtml);
    });
}

// 새 게시글 추가 함수
function addNewPost(post) {
    posts.push(post);
    displayPosts(posts);
}

// 초기 화면 로드 시 게시글 표시
document.addEventListener('DOMContentLoaded', () => {
    // HTML에 posts-list div 추가
    const mainSection = document.querySelector('main');
    const postsListDiv = document.createElement('div');
    postsListDiv.className = 'posts-list';
    mainSection.appendChild(postsListDiv);

    // 게시글 표시
    displayPosts(posts);

    // 게시글 작성 버튼 클릭 이벤트 처리
    document.querySelector('.button-wrap').addEventListener('click', (e) => {
        const writeButton = document.querySelector('.write-button');
        writeButton.addEventListener('click', () => {
            window.location.href = '/src/pages/posts/create/makePost.html';
        });
    });

    // 게시글 클릭 이벤트 처리
    document.querySelector('.posts-list').addEventListener('click', (e) => {
        const postCard = e.target.closest('.post-card');
        if (postCard) {
            const postId = postCard.dataset.postId;
            // 상세 페이지로 이동
            window.location.href = `/posts/detail/${postId}`;
        }
    });
});