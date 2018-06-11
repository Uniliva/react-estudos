import React from "react";
import Text from "react-native";
import PropTypes from "prop-types";

const titulo = props => (
  <Text style={props.estilo}> {`${props.valor} - uai`}</Text>
);

titulo.propTypes = {
  valor: PropTypes.string.isRequired,
  estilo: PropTypes.number.isRequired
};

export default titulo;
