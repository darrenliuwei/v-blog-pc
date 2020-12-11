import $api from '@/api'

/**
 * 查询文章列表，每次10条，pageNumber代表页数
 * @param status - 文章显示与隐藏：0表示显示，1表示隐藏，默认为0
 * @param pageNumber - 页数
 */
export const articleList = (status, pageNumber) => {
  return $api.get('/article', { status, pageNumber })
}

/**
 * 获取指定ID的文章详情
 * @param id - 文章ID
 */
export const getArticle = id => {
  return $api.get('/article/' + id)
}
