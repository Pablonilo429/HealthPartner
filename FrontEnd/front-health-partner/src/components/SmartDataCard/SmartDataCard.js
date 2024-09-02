import React from 'react';
import PropTypes from 'prop-types';

const SmartDataCard = ({ iconClass, title, value, unit, onVerify }) => {
  return (
    <div className="col-md-6 mb-4">
      <div className="card smartuser-card">
        <i className={`fa-solid ${iconClass} text-center smartuser-icon`}></i>
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <div className="text-center">
            {value !== null && (
              <h6 className="mt-2 p-2">
                Último valor: {value} {unit}
              </h6>
            )}
            <button
              onClick={onVerify}
              className="btn btn-dark fw-bold smartuser-btn"
            >
              Verificar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

SmartDataCard.propTypes = {
  iconClass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.number,
  unit: PropTypes.string.isRequired,
  onVerify: PropTypes.func.isRequired,
};

// SmartDataCard.defaultProps = {
//   value: null,
// };

export default SmartDataCard;
