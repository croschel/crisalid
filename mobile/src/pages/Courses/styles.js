import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;
`;

export const CourseBox = styled.TouchableOpacity`
  border: 1px solid #00418C;
  background: #00418C;
  border-radius: 4px;
  padding: 10px;
  width: 95%;
  margin: 0 auto 15px auto;
`;
export const HeaderBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
export const HeaderName = styled.Text`
  font-size: 20px;
  color: #fff;
`;
export const Duration = styled.Text`
  color: ${darken(0.3, "#fff")};
`;
export const Description = styled.Text`
  color: ${darken(0.2, "#fff")};
  text-align: justify;
`;
