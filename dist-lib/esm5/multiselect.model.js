var ListItem = /** @class */ (function () {
    function ListItem(source) {
        if (typeof source === 'string' || typeof source === 'number') {
            this.id = this.text = source;
            this.isDisabled = false;
        }
        if (typeof source === 'object') {
            this.id = source.id;
            this.text = source.text;
            this.isDisabled = source.isDisabled;
        }
    }
    return ListItem;
}());
export { ListItem };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlzZWxlY3QubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tdWx0aXNlbGVjdC1kcm9wZG93bi8iLCJzb3VyY2VzIjpbIm11bHRpc2VsZWN0Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCQTtJQUtFLGtCQUFtQixNQUFXO1FBQzVCLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsRUFBRTtZQUM1RCxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1lBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDOUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUFoQkQsSUFnQkMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIElEcm9wZG93blNldHRpbmdzIHtcclxuICBzaW5nbGVTZWxlY3Rpb24/OiBib29sZWFuO1xyXG4gIGlkRmllbGQ/OiBzdHJpbmc7XHJcbiAgdGV4dEZpZWxkPzogc3RyaW5nO1xyXG4gIGRpc2FibGVkRmllbGQ/OiBzdHJpbmc7XHJcbiAgZW5hYmxlQ2hlY2tBbGw/OiBib29sZWFuO1xyXG4gIHNlbGVjdEFsbFRleHQ/OiBzdHJpbmc7XHJcbiAgdW5TZWxlY3RBbGxUZXh0Pzogc3RyaW5nO1xyXG4gIGFsbG93U2VhcmNoRmlsdGVyPzogYm9vbGVhbjtcclxuICBjbGVhclNlYXJjaEZpbHRlcj86IGJvb2xlYW47XHJcbiAgbWF4SGVpZ2h0PzogbnVtYmVyO1xyXG4gIGl0ZW1zU2hvd0xpbWl0PzogbnVtYmVyO1xyXG4gIGxpbWl0U2VsZWN0aW9uPzogbnVtYmVyO1xyXG4gIHNlYXJjaFBsYWNlaG9sZGVyVGV4dD86IHN0cmluZztcclxuICBub0RhdGFBdmFpbGFibGVQbGFjZWhvbGRlclRleHQ/OiBzdHJpbmc7XHJcbiAgY2xvc2VEcm9wRG93bk9uU2VsZWN0aW9uPzogYm9vbGVhbjtcclxuICBzaG93U2VsZWN0ZWRJdGVtc0F0VG9wPzogYm9vbGVhbjtcclxuICBkZWZhdWx0T3Blbj86IGJvb2xlYW47XHJcbiAgYWxsb3dSZW1vdGVEYXRhU2VhcmNoPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExpc3RJdGVtIHtcclxuICBpZDogU3RyaW5nIHwgbnVtYmVyO1xyXG4gIHRleHQ6IFN0cmluZyB8IG51bWJlcjtcclxuICBpc0Rpc2FibGVkPzogYm9vbGVhbjtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNvdXJjZTogYW55KSB7XHJcbiAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHNvdXJjZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgdGhpcy5pZCA9IHRoaXMudGV4dCA9IHNvdXJjZTtcclxuICAgICAgdGhpcy5pc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgdGhpcy5pZCA9IHNvdXJjZS5pZDtcclxuICAgICAgdGhpcy50ZXh0ID0gc291cmNlLnRleHQ7XHJcbiAgICAgIHRoaXMuaXNEaXNhYmxlZCA9IHNvdXJjZS5pc0Rpc2FibGVkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=