import styled from 'styled-components'

export const ToolbarContainer = styled.div`
  #toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    padding: 8px;
    border-radius: 4px;

  }

  .ql-formats {
    display: flex;
    align-items: center;
  }

  .ql-size,
  .ql-header,
  .ql-color,
  .ql-background {
    margin-right: 8px;
  }

  .ql-size select,
  .ql-header select,
  .ql-color select,
  .ql-background select {
    padding: 4px 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
  }

  .ql-formats button {
    margin-right: 8px;
    border: none;
    background: none;
    cursor: pointer;
  }
`;