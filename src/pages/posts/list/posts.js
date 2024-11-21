document.addEventListener('DOMContentLoaded', function() {
    // 샘플 데이터
    // const posts = [
    //     {
    //         id: 1,
    //         title: '제목 1',
    //         content: '댓글 작성자 1',
    //         likes: 0,
    //         comments: 0,
    //         views: 0,
    //         date: '2021-01-01 00:00:00'
    //     },
    //     // 더미 데이터는 비슷한 형식으로 추가
    // ];

    // DOM 요소
    const postList = document.querySelector('.post-list');
    const postTemplate = document.getElementById('post-template');
    const writeButton = document.querySelector('.write-button');

    // 게시글 렌더링 함수
    function renderPosts() {
        postList.innerHTML = ''; // 기존 게시글 초기화

        posts.forEach(post => {
            const postElement = postTemplate.content.cloneNode(true);

            // 게시글 내용 채우기
            postElement.querySelector('.post-title').textContent = post.title;
            postElement.querySelector('.like-count').textContent = post.likes;
            postElement.querySelector('.comment-count').textContent = post.comments;
            postElement.querySelector('.view-count').textContent = post.views;
            postElement.querySelector('.post-date').textContent = formatDate(post.date);
            postElement.querySelector('.content-text').textContent = post.content;

            // 이벤트 리스너 추가
            const postCard = postElement.querySelector('.post-card');
            postCard.addEventListener('click', () => {
                handlePostClick(post.id);
            });

            postList.appendChild(postElement);
        });
    }

    // 날짜 포맷팅 함수
    function formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}`;
    }

    // 게시글 클릭 핸들러
    function handlePostClick(postId) {
        console.log(`Post clicked: ${postId}`);
        // 게시글 상세 페이지로 이동하는 로직 구현
        // window.location.href = `/post/${postId}`;
    }

    // 게시글 작성 버튼 클릭 핸들러
    writeButton.addEventListener('click', () => {
        console.log('Write button clicked');
        // 게시글 작성 페이지로 이동하는 로직 구현
        // window.location.href = '/write';
    });

    // 초기 게시글 렌더링
    renderPosts();
});