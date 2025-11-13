export default function ReviewButton({ onClick }) {
  return (
    <div style={
      { background: "#2d2d2d",
          color: "#f8f8f2"}
    } onClick={onClick} className="review">
      Get Review
    </div>
  );
}
