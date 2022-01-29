import PropTypes from 'prop-types';

export default function Page({ children }) {
  return (
    <div>
      <p> I am the page copoentn </p>
      {children}
    </div>
  );
}

Page.propType = {
  children: PropTypes.any,
};
