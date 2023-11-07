import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const RouterApp = () => {
  return (
    <>
      <ul>
        <li><Link to="/">トップ</Link></li>
        <li><Link to="/article">公開記事</Link></li>
        <li><Link to="/about">このサイトについて</Link></li>
        <hr />
        {/* ルーター利用時は実質必須。ページ全体がリフレッシュされるのを防ぐ */}
        <Outlet />
      </ul>
    </>
  );
};

export default RouterApp;