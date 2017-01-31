import React from 'react';

const Home = () => {
  return (
    <div style={styles.center}>
      <h1>TEHJR</h1>
      <h3>Login</h3>
      <input placeholder="Username" type="text" />
      <input placeholder="Password" type="password" />
    </div>
  );
};

const styles = {
  center: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

module.exports = Home;
