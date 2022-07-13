import styled from "styled-components"
  
export const DashBoard = styled.div`
    height: 100vh;
    overflow: hidden;
    display: flex;
`
export const FlexContainer1 = styled.div`
    background-color: white;
    color: black;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`
export const FlexContainer2 = styled.div`
    flex: 1;
    background-color: black;
    color: white;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`
export const AsideHeader = styled.div`
    height: 80px;
    box-shadow: 0px 0px 5px grey;
    background-color: 'white';
    text-align: center;
`
export const AsideContainer = styled.div`
    overflow: auto;
    height: 100%;
`
export const MapHeader = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    overflow: hidden;
    box-shadow: 0px 0px 5px grey;
    background-color: #404040;
    z-index: 1;
    padding-left: 20px;
`
export const MapContainer = styled.div`
    height: 100%;
    position: relative;
    overflow: hidden;
`
export const FlexW100 = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`
export const MapHeaderTitle = styled.h3`
    margin-right: 20px;
`
export const MapHeaderArrow = styled.h3`
    background-color: #E8BF36;
    height: 100%;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`


