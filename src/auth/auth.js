// 安装jwt-decode库来解析JWT
import * as jwt_decode from 'jwt-decode';

export function getToken() {
    // 将 token 或用户信息存储在 localStorage 中
    return localStorage.getItem('userToken');
}

// 解码 JWT Token 获取用户信息
export const decodeToken = (token) => {

    try {
        return jwt_decode.jwtDecode(token); // 解析 JWT Token
    } catch (e) {
        console.error('JWT 解码失败:', e);
        return null;
    }
};

// 判断 token 是否有效
export const isTokenExpired = (token) => {
    if (!token) return true;
    const decoded = decodeToken(token);
    if (!decoded || !decoded.exp) return true;
    return decoded.exp < Date.now() / 1000; // 判断 token 是否过期
};

// 判断用户是否已登陆
export function isAuthenticated() {
    const token = getToken(); // 获取 token
    return token && !isTokenExpired(token);  // 如果 token 存在且没有过期，返回 true，表示已登录
}
