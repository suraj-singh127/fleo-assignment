import { useCallback,useState } from "react";
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges } from 'react-flow-renderer';
import './Home.scss';
import Navbar from "../../components/Navbar/Navbar";
import initialNodes from './nodes.js';
import initialEdges from './edges.js';

const Home = () =>{

    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
      );
      const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
      );
      const onConnect = useCallback(
        (connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges]
      );
    
    const zoomLevel = 0.65;
    return(
        <div className="homepage">
            <Navbar></Navbar>
            <div className="flowMapContainer">
                <div className="reactFlow">
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        defaultZoom={zoomLevel}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;