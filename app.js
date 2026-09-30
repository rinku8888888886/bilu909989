    /* Status Indicator */
    .status-bar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: transparent;
        z-index: 9999;
    }
    .status-bar.active {
        background: linear-gradient(90deg, var(--tron-orange), var(--blue-primary));
        animation: slide 2s infinite ease-in-out;
    }
    @keyframes slide {
        0% { background-position: 0 0; }
        100% { background-position: 40px 0; }
    }
</style>