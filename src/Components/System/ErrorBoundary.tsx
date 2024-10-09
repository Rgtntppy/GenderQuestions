import React, { Component, ErrorInfo, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { ErrorBoundaryProps, ErrorBoundaryState } from "Components/System/systemInterface";

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }
    
    // エラーが発生した場合にエラーステートをtrueにする
    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }
    
    // エラーログを出力
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Error occurred:', error, errorInfo);
    }
    
    render() {
        if (this.state.hasError) {
            // エラーが発生した場合はトップページにリダイレクト
            return <Navigate to='/' replace />;
        }
        
        // エラーがない場合は通常の子要素をレンダリング
        return this.props.children;
    }
}

export default ErrorBoundary;