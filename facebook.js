// data structure of facebook posts
const facebookPosts = [
  {
    postId: 1,
    author: {
      userId: 1,
      name: "Ashik",
      userName: "ashik",
      profilePictre: "url/profile_picture.jpg",
    },
    content: "This is my first facebook post",
    media: [
      {
        mediaId: 1,
        type: "photo",
        url: "url/photo.jpg",
      },
      {
        mediaId: 2,
        type: "video",
        url: "url/video.mp4",
      },
      // additional media
    ],
    files: [
      {
        fileId: 1,
        name: "document.pdf",
        url: "url/document.pdf",
      },
      // additional files
    ],
    likes: [
      {
        author: {
          userId: 2,
          name: "Mamon",
          userName: "mamon",
          profilePictre: "url/profile_picture.jpg",
        },
        type: "like",
      },
      {
        author: {
          userId: 3,
          name: "Rakib",
          userName: "rakib",
          profilePictre: "url/profile_picture.jpg",
        },
        type: "love",
      },
    ],
    comments: [
      {
        commentId: 1,
        author: {
          userId: 2,
          name: "Mamon",
          userName: "mamon",
          profilePictre: "url/profile_picture.jpg",
        },
        content: "nice",
        likes: 0,
        timestamp: "2023-06-16.......", // timestamp
        replies: [
          {
            replyId: 1,
            author: {
              userId: 1,
              name: "Ashik",
              userName: "ashik",
              profilePictre: "url/profile_picture.jpg",
            },
            content: "thanks",
            likes: 0,
            timestamp: "2023-06-16.......", // timestamp
            nestedReplies: [
              {
                replyId: 1,
                author: {
                  userId: 2,
                  name: "Mamon",
                  userName: "mamon",
                  profilePictre: "url/profile_picture.jpg",
                },
                content: "welcome",
                likes: 0,
                timestamp: "2023-06-16.......", // timestamp
              },
              // additional nested replies
            ],
          },
          // additional replies
        ],
      },
      // additional comments
    ],

    shares: [
      {
        shareId: 1,
        sharer: {
          userId: 3,
          name: "Rakib",
          userName: "rakib",
          profilePictre: "url/profile_picture.jpg",
        },
        timestamp: "2023-06-16.......", // timestamp
      },
      // additional shares
    ],
    createdAt: "2023-06-16.......", // timestamp
    updatedAt: "2023-06-16.......", // timestamp
  },
  {
    postId: 2,
    author: {
      userId: 2,
      name: "Mamon",
      userName: "mamon",
      profilePictre: "url/profile_picture.jpg",
    },
    content: "This is my first facebook post",
    media: [
      {
        mediaId: 1,
        type: "photo",
        url: "url/photo.jpg",
      },
      {
        mediaId: 2,
        type: "photo",
        url: "url/photo.jpg",
      },
      // additional media
    ],
    files: [
      // additional files
    ],
    likes: [
      {
        author: {
          userId: 2,
          name: "Mamon",
          userName: "mamon",
          profilePictre: "url/profile_picture.jpg",
        },
        type: "like",
      },
      {
        author: {
          userId: 3,
          name: "Rakib",
          userName: "rakib",
          profilePictre: "url/profile_picture.jpg",
        },
        type: "love",
      },
    ],
    comments: [
      {
        commentId: 1,
        author: {
          userId: 1,
          name: "Ashik",
          userName: "ashik",
          profilePictre: "url/profile_picture.jpg",
        },
        content: "nice",
        likes: 0,
        timestamp: "2023-06-14.......", // timestamp
        replies: [
          {
            replyId: 1,
            author: {
              userId: 2,
              name: "Mamon",
              userName: "mamon",
              profilePictre: "url/profile_picture.jpg",
            },
            content: "thanks",
            likes: 0,
            timestamp: "2023-06-14.......", // timestamp
            nestedReplies: [
              // additional nested replies
            ],
          },
          // additional replies
        ],
      },
      // additional comments
    ],

    shares: [
      {
        shareId: 1,
        sharer: {
          userId: 1,
          name: "Ashik",
          userName: "ashik",
          profilePictre: "url/profile_picture.jpg",
        },
        timestamp: "2023-06-14.......", // timestamp
      },
      // additional shares
    ],
    createdAt: "2023-06-14.......", // timestamp
    updatedAt: "2023-06-14.......", // timestamp
  },
  {
    postId: 3,
    author: {
      userId: 3,
      name: "Rakib",
      userName: "rakib",
      profilePictre: "url/profile_picture.jpg",
    },
    content: "This is my first facebook post",
    media: [
      {
        mediaId: 1,
        type: "photo",
        url: "url/photo.jpg",
      },
      {
        mediaId: 2,
        type: "photo",
        url: "url/photo.jpg",
      },
      // additional media
    ],
    files: [
      // additional files
    ],
    likes: [
      {
        author: {
          userId: 2,
          name: "Mamon",
          userName: "mamon",
          profilePictre: "url/profile_picture.jpg",
        },
        type: "like",
      },
      {
        author: {
          userId: 3,
          name: "Rakib",
          userName: "rakib",
          profilePictre: "url/profile_picture.jpg",
        },
        type: "love",
      },
    ],
    comments: [
      {
        commentId: 1,
        author: {
          userId: 1,
          name: "Ashik",
          userName: "ashik",
          profilePictre: "url/profile_picture.jpg",
        },
        content: "nice",
        likes: 5,
        timestamp: "2023-06-14.......", // timestamp
        replies: [
          {
            replyId: 1,
            author: {
              userId: 3,
              name: "Rakib",
              userName: "rakib",
              profilePictre: "url/profile_picture.jpg",
            },
            content: "thanks",
            likes: 1,
            timestamp: "2023-06-14.......", // timestamp
            nestedReplies: [
              // additional nested replies
            ],
          },
          // additional replies
        ],
      },
      // additional comments
    ],

    shares: [
      {
        shareId: 1,
        sharer: {
          userId: 2,
          name: "Mamon",
          userName: "mamon",
          profilePictre: "url/profile_picture.jpg",
        },
        timestamp: "2023-06-14.......", // timestamp
      },
      // additional shares
    ],
    createdAt: "2023-06-13.......", // timestamp
    updatedAt: "2023-06-13.......", // timestamp
  },
  {
    postId: 4,
    author: {
      userId: 4,
      name: "Shakib",
      userName: "shakib",
      profilePictre: "url/profile_picture.jpg",
    },
    content: "This is my first facebook post",
    media: [
      {
        mediaId: 1,
        type: "photo",
        url: "url/photo.jpg",
      },
      {
        mediaId: 2,
        type: "photo",
        url: "url/photo.jpg",
      },
      // additional media
    ],
    files: [
      // additional files
    ],
    likes: [
      {
        author: {
          userId: 2,
          name: "Mamon",
          userName: "mamon",
          profilePictre: "url/profile_picture.jpg",
        },
        type: "like",
      },
      {
        author: {
          userId: 3,
          name: "Rakib",
          userName: "rakib",
          profilePictre: "url/profile_picture.jpg",
        },
        type: "love",
      },
    ],
    comments: [
      {
        commentId: 1,
        author: {
          userId: 2,
          name: "Mamon",
          userName: "mamon",
          profilePictre: "url/profile_picture.jpg",
        },
        content: "nice",
        likes: 0,
        timestamp: "2023-06-14.......", // timestamp
        replies: [
          {
            replyId: 1,
            author: {
              userId: 4,
              name: "Shakib",
              userName: "shakib",
              profilePictre: "url/profile_picture.jpg",
            },
            content: "thanks",
            likes: 0,
            timestamp: "2023-06-14.......", // timestamp
            nestedReplies: [
              // additional nested replies
            ],
          },
          // additional replies
        ],
      },
      // additional comments
    ],

    shares: [
      {
        shareId: 1,
        sharer: {
          userId: 3,
          name: "Rakib",
          userName: "rakib",
          profilePictre: "url/profile_picture.jpg",
        },
        timestamp: "2023-06-14.......", // timestamp
      },
      // additional shares
    ],
    createdAt: "2023-06-12.......", // timestamp
    updatedAt: "2023-06-12.......", // timestamp
  },
  {
    postId: 5,
    author: {
      userId: 5,
      name: "Rohan",
      userName: "rohan",
      profilePictre: "url/profile_picture.jpg",
    },
    content: "This is my first facebook post",
    media: [
      {
        mediaId: 1,
        type: "photo",
        url: "url/photo.jpg",
      },
      {
        mediaId: 2,
        type: "photo",
        url: "url/photo.jpg",
      },
      // additional media
    ],
    files: [
      // additional files
    ],
    likes: [
      {
        author: {
          userId: 2,
          name: "Mamon",
          userName: "mamon",
          profilePictre: "url/profile_picture.jpg",
        },
        type: "like",
      },
      {
        author: {
          userId: 3,
          name: "Rakib",
          userName: "rakib",
          profilePictre: "url/profile_picture.jpg",
        },
        type: "love",
      },
    ],
    comments: [
      {
        commentId: 1,
        author: {
          userId: 1,
          name: "Ashik",
          userName: "ashik",
          profilePictre: "url/profile_picture.jpg",
        },
        content: "nice",
        likes: 1,
        timestamp: "2023-06-14.......", // timestamp
        replies: [
          {
            replyId: 1,
            author: {
              userId: 5,
              name: "Rohan",
              userName: "rohan",
              profilePictre: "url/profile_picture.jpg",
            },
            content: "thanks",
            likes: 1,
            timestamp: "2023-06-14.......", // timestamp
            nestedReplies: [
              // additional nested replies
            ],
          },
          // additional replies
        ],
      },
      // additional comments
    ],

    shares: [
      {
        shareId: 1,
        sharer: {
          userId: 4,
          name: "Shakib",
          userName: "shakib",
          profilePictre: "url/profile_picture.jpg",
        },
        timestamp: "2023-06-14.......", // timestamp
      },
      // additional shares
    ],
    createdAt: "2023-06-11.......", // timestamp
    updatedAt: "2023-06-11.......", // timestamp
  },
];
